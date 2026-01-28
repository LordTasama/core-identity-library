"""
Authentication Logic and Identity Management Engine (Core Service).

This module is the identity system's core. It centralizes all business logic
for user creation, credential validation, JWT session management,
and account recovery processes.

Key Objectives:
1. Orchestrate multi-platform registration and login flow.
2. Manage session persistence and token lifecycle.
3. Provide an abstraction layer between API routes and the database (SeaTable).
4. Implement security policies (Password Strength, Rate Limiting, initial RBAC).
"""

from flask import g, session, request
import jwt
import datetime
import time
import secrets
import string
import secrets
import bcrypt
from src.services.seatable_service import seatable
from src.utils.logger import logger
from config import Config
from src.utils.i18n import t
from flask import request
import string
from src.utils.logger import logger
from src.utils.post_email_util import send_email
import requests

# ============================================================================
# USER MANAGEMENT FUNCTIONS
# ============================================================================



import bcrypt


# Caché global para contextos de usuario (Email + AppKey)
_USER_CONTEXT_CACHE = {}  # { (email, app_key): (timestamp, data) }
_CONTEXT_TTL = 900        # 15 minutes

# Global cache for session validation
_SESSION_VALIDATION_CACHE = {} # { (email, token): (timestamp, data) }
_SESSION_TTL = 15              # 15 seconds (pseudo real-time)

import re

def validate_password_strength(password):
    """
    Evaluates if a password meets minimum security standards.
    
    Objective:
    - Ensure passwords have sufficient complexity (8+ characters, 
      uppercase, lowercase, numbers, and special characters).
    - Mitigate brute force attacks by encouraging robust passwords.
    """
    if len(password) < 8:
        return False, "Password must be at least 8 characters long"
    if not re.search(r"[A-Z]", password):
        return False, "Password must include at least one uppercase letter"
    if not re.search(r"[a-z]", password):
        return False, "Password must include at least one lowercase letter"
    if not re.search(r"\d", password):
        return False, "Password must include at least one number"
    if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        return False, "Password must include at least one special character (e.g., !@#$%)"
    
    return True, "Valid password"

def _get_user_context(email, provider=None, bypass_cache=False, initial_auth_row=None, app_key=None):
    """
    Retrieves the comprehensive user profile needed for the session.
    
    Objective:
    - Query the authentication method, identity (Profile), and account status.
    - Dynamically resolve the App Key by URL and calculate RBAC permissions for that app.
    - Implement a 15-minute cache layer to optimize recurrent requests.
    - Allows injecting 'initial_auth_row' to avoid the first redundant query.
    """
    from src.services.identity_service import identity_service
    
    # 1. Detectar App Key (O usar la inyectada si viene de un callback OAuth)
    if not app_key:
        app_key = identity_service.get_app_key_by_url()
    
    print(f"🔍 DEBUG _get_user_context - email: {email}, app_key: {app_key}, provider: {provider}")
    
    # 2. Verificar Caché (Si no se solicita bypass)
    now = time.time()
    cache_key = (email, app_key)
    if not bypass_cache and cache_key in _USER_CONTEXT_CACHE:
        timestamp, cached_data = _USER_CONTEXT_CACHE[cache_key]
        if now - timestamp < _CONTEXT_TTL:
            logger.info(f"🚀 USER CONTEXT CACHE HIT for {email} [{app_key}]")
            
            # RE-VALIDAR acceso incluso en Cache (RBAC check rápido)
            has_roles = len(cached_data.get("dataModeInfo", {}).get("roles", [])) > 0
            has_perms = len(cached_data.get("permissions", [])) > 0
            
            if not (has_roles or has_perms):
                return {
                    "success": False,
                    "message": t('no_app_permissions'),
                    "apps": cached_data.get("apps", [])
                }

            cached_data["success"] = True
            return cached_data

    logger.info(f"USER CONTEXT CACHE MISS for {email} [{app_key}] - Loading from SeaTable...")
    
    escaped_email = email.replace("'", "''")
    row_auth = initial_auth_row

    # 1. Resolver Auth Method (con IDs reales para los Links)
    if not row_auth:
        where_provider = ""
        if provider:
            where_provider = f" AND `Auth Provider` = '{provider}'"
        
        auth_rows = seatable.sql_query(
            f"SELECT `_id` FROM `Auth Methods` WHERE `Email` = '{escaped_email}'{where_provider} ORDER BY `Is Primary` DESC, `_id` DESC", 
            base_data="core_identity"
        )
        
        if not auth_rows:
            logger.warning(f"No Auth Methods found for {email} with provider {provider}")
            # Intento final sin provider por si acaso
            auth_rows = seatable.sql_query(f"SELECT `_id` FROM `Auth Methods` WHERE `Email` = '{escaped_email}'", base_data="core_identity")
            if not auth_rows:
                return None
        
        # Obtenemos la fila completa con get_row para tener objetos en Identity
        row_auth = seatable.get_row("Auth Methods", auth_rows[0].get("_id"), base_data="core_identity")

    if not row_auth:
        return None

    auth_row_id = row_auth.get("_id")
    identity_links = row_auth.get("Identity", [])
    
    # Asegurar que identity_links sea una lista de objetos, si son strings re-solicitamos
    if identity_links and isinstance(identity_links[0], str) and auth_row_id:
        logger.debug(f"Identity links are strings, re-fetching via get_row for {email}")
        row_auth = seatable.get_row("Auth Methods", auth_row_id, base_data="core_identity")
        identity_links = row_auth.get("Identity", [])

    identity_id = None
    if identity_links and isinstance(identity_links, list) and len(identity_links) > 0:
        link = identity_links[0]
        if isinstance(link, dict):
            identity_id = link.get("row_id")
        else:
            # Si es string, es el display name, necesitamos buscarlo o re-solicitarlo
            # Pero ya lo hicimos con get_row arriba. Si sigue siendo string, 
            # es porque SeaTable no devolvió el objeto (raro) o el link está roto.
            identity_id = str(link)
    
    # 0.2 Resilience: Si después de todo no hay identity_id, buscamos desesperadamente
    if not identity_id:
        logger.info(f"Identity link missing for {email}, re-fetching fresh row from DB...")
        # Volvemos a intentar con SQL pero solo como último recurso
        fresh_rows = seatable.sql_query(f"SELECT `Identity` FROM `Auth Methods` WHERE `Email` = '{escaped_email}'", base_data="core_identity")
        if fresh_rows and fresh_rows[0].get("Identity"):
            id_link = fresh_rows[0].get("Identity")[0]
            identity_id = id_link.get("row_id") if isinstance(id_link, dict) else id_link
            
    if not identity_id:
        logger.warning(f"User {email} has no linked Identity even after re-fetch.")
        return None
    
    # 0.5 Verificar Status en la tabla Identity (Indicado por el usuario)
    identity_row = seatable.sql_query_one(f"SELECT `Status` FROM `Identity` WHERE `_id` = '{identity_id}'", base_data="core_identity")
    identity_status = "Active"
    if identity_row:
        if isinstance(identity_row, list) and len(identity_row) > 0:
            identity_status = identity_row[0].get("Status", "Active")
        else:
            identity_status = identity_row.get("Status", "Active")
    
    # Identity Status Interception
    if identity_status and identity_status != "Active":
        print(f"🛑 IDENTITY BLOCKED: User {email} has status {identity_status}")
        return {
            "success": False,
            "message": t('account_status_blocked', status=identity_status.lower()),
            "apps": []
        }

    auth_method_id = row_auth.get("_id")
    auth_method_custom_id = row_auth.get("ID")
    profile_image_url = row_auth.get("Profile Image URL")

    # 2. Verificar Permisos Básicos antes de seguir (Interceptación Temprana)
    auth_data = {"permissions": [], "data_mode": "deny"}
    if app_key:
        auth_data = identity_service.get_identity_permissions(identity_id, app_key, user_email=email, bypass_cache=bypass_cache)
        
    has_roles = len(auth_data.get("data_mode_info", {}).get("roles", [])) > 0
    has_perms = len(auth_data.get("permissions", [])) > 0
    
    # 3. Bloqueo TOTAL si no tiene acceso o está bloqueado en Identity
    if not (has_roles or has_perms):
        print(f"🛑 ACCESS DENIED: User {email} unauthorized for App {app_key or 'None'}")
        
        # Keep loading allowed apps data for the frontend, but keep message clean
        temp_identity = identity_service.get_identity_with_assignments(identity_id, user_email=email, app_key="___forbidden___")
        allowed_apps = temp_identity.get("apps", [])
        
        return {
            "success": False,
            "message": t('no_app_permissions'),
            "apps": allowed_apps
        }

    # 4. Si tiene acceso, procedemos con la carga PESADA completa
    print(f"✅ ACCESS GRANTED: User {email} authorized for App {app_key}")
    identity_data = identity_service.get_identity_with_assignments(identity_id, user_email=email, app_key=app_key)
    
    if not identity_data:
        return None

    # 4.5 Cargar Sesiones Activas (Solo si tiene acceso)
    active_sessions = []
    try:
        query_sessions = f"SELECT `_id`, `IP`, `Device Name`, `Expiration Date`, `Status` FROM `Sessions` WHERE `Auth Method` = '{auth_method_custom_id}' AND `Status` = 'Active' ORDER BY `_id` DESC"
        sessions_res = seatable.sql_query(query_sessions, base_data="core_identity")
        if sessions_res and isinstance(sessions_res, list):
            active_sessions = sessions_res
    except Exception as e_sess:
        logger.error(f"Error loading sessions for {email}: {e_sess}")

    # Enriquecer con los permisos ya calculados
    identity_data["permissions"] = auth_data.get("permissions", [])
    identity_data["dataMode"] = auth_data.get("data_mode", "deny")
    identity_data["dataModeInfo"] = auth_data.get("data_mode_info", {})
    
    # NUEVO: Si dataMode es "team", usar los emails de collaborator_info
    if identity_data["dataMode"] == "team" and "collaborator_info" in identity_data:
        collab_emails = [c.get("email") for c in identity_data["collaborator_info"] if c.get("email")]
        if collab_emails:
            identity_data["dataModeInfo"]["members"] = collab_emails
            identity_data["dataModeInfo"]["managerEmail"] = email
            print(f"✅ Team mode: Updated dataModeInfo with {len(collab_emails)} collaborators from collaborator_info")
    
    identity_data["appKey"] = app_key
    
    # Get visual info of the current app (Colors)
    all_apps = identity_service._get_all_apps_cached()
    current_app_meta = next((a for a in all_apps if a.get("App Key") == app_key), {})
    identity_data["app_info"] = {
        "appKey": app_key,
        "primaryColor": current_app_meta.get("Primary Color"),
        "backgroundColor": current_app_meta.get("Background Color"),
        "appName": current_app_meta.get("App Name")
    }

    # Enrich with session metadata
    identity_data["email"] = email
    identity_data["auth_method_id"] = auth_method_id
    identity_data["auth_method_custom_id"] = auth_method_custom_id
    identity_data["profileImageURL"] = profile_image_url
    identity_data["active_sessions"] = active_sessions
    identity_data["success"] = True
    
    # Guardar en Caché antes de retornar
    _USER_CONTEXT_CACHE[cache_key] = (now, identity_data)
    
    return identity_data

def create_session(user_context, temp_device=False):
    """
    Generates and persists a new user session.
    
    Objective:
    - Create a signed JSON Web Token (JWT) for client use.
    - Register the session in SeaTable with IP, User-Agent, and expiration metadata.
    - Handle variable expiration policies (180 days vs. 30 days for temporary devices).
    """
    try:
        if not user_context:
            raise ValueError("Empty user context")

        # 1. Capture device/connection metadata
        ip_address = request.headers.get('X-Forwarded-For', request.remote_addr) or '127.0.0.1'
        if ',' in ip_address:
            ip_address = ip_address.split(',')[0].strip()
        
        # New cleanup: Remove port or extra identifiers (e.g., 123.123.123.123:5000)
        # If it has ':' and '.' it's probably IPv4:port. If it has ':' but isn't IPv6 (multiple ':'), we clean it.
        if ':' in ip_address and ('.' in ip_address or ip_address.count(':') == 1):
             ip_address = ip_address.split(':')[0].strip()
        user_agent = request.headers.get('User-Agent', 'Unknown')

        # 2. Determine expiration (180 days vs. 30 days)
        # The provider comes either in 'authProvider', 'auth_provider', or user_context['login_type']
        provider = user_context.get("authProvider") or user_context.get("auth_provider")
        auth_method_custom_id = user_context.get("auth_method_custom_id")
        
        # --- NEW LOGIC: Avoid duplicates ---
        # Before creating, check if there is an ACTIVE session for this ID + IP + UI
        escaped_ip = ip_address.replace("'", "''")
        escaped_ua = user_agent.replace("'", "''")
        auth_method_id = str(user_context.get("auth_method_id", ""))

        # We use IN to filter by the link's _id, since SeaTable SQL doesn't support aliasing or standard JOINs
        logger.debug(f"🔍 Searching for existing active session: IP='{escaped_ip}', UA='{escaped_ua}', AuthMethod='{auth_method_custom_id}'")

        check_query = f"""
            SELECT Token, _id, `Expiration Date` 
            FROM `Sessions` 
            WHERE `Auth Method` IN ('{auth_method_custom_id}') 
              AND `IP` = '{escaped_ip}' 
              AND `Device Name` = '{escaped_ua}' 
              AND `Status` = 'Active'
            ORDER BY _id DESC
        """
        existing_sess_res = seatable.sql_query(check_query, base_data="core_identity")
        if existing_sess_res and isinstance(existing_sess_res, list):
            existing_sess = existing_sess_res[0]
            logger.info(f"Reusing existing active session for {auth_method_custom_id} (ID: {auth_method_id})")
            # We add the existing expiration date to the context for the frontend
            user_context["expired_at"] = existing_sess.get("Expiration Date")
            return existing_sess.get("Token")

        days = 180
        if provider == "Email" and temp_device:
            days = 30
            logger.info(f"Temporary session detected for Email. Expiration: {days} days.")
        else:
            logger.info(f"Standard session. Expiration: {days} days. (Provider: {provider})")

        expiration_time = datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(days=days)
        expiration_iso = expiration_time.strftime("%Y-%m-%d %H:%M:%S")

        # 2.1. Add expired_at field to context (for the frontend to receive it)
        user_context["expired_at"] = expiration_iso
        
        # The payload will be MINIMALIST. We don't store permissions or apps here for security and size reasons.
        # Heavy data is retrieved from the server's cache on each verify_session.
        payload = {
            "email": user_context.get("email"),
            "identity_id": user_context.get("_id"),
            "auth_method_id": user_context.get("auth_method_id"),
            "auth_method_custom_id": auth_method_custom_id,
            "ip": ip_address,
            "ua": user_agent,
            "exp": int(expiration_time.timestamp()),
            "persistent": not temp_device,
            "user_id": user_context.get("_id")
        }

        # 3. Codificar JWT
        token = jwt.encode(payload, Config.SECRET_KEY, algorithm="HS256")
        
        # 4. Prepare data for Sessions table
        
        session_data = {
            "Token": token,
            "Status": "Active",
            "IP": ip_address,
            "Device Name": user_agent,
            "Expiration Date": expiration_iso
            # The link is created explicitly below with perform_link_operation
        }
        
        # 3. Insertar sesión
        created_session = seatable.perform_table_operation(
            table_name="Sessions",
            row_data=session_data,
            type_batch="append_row",
            base_data="core_identity"
        )
        
        if not created_session:
            raise Exception("Error inserting row in Sessions")
            
        session_row_id = created_session.get("_id")
        
        # 4. Create Relationships (Links)
        # Link with Auth Methods
        auth_link_id = seatable.get_column_link_id("Sessions", "Auth Method", base_data="core_identity")
        
        seatable.perform_link_operation(
            link_id=auth_link_id,
            row_id=session_row_id,
            other_row_id=user_context.get("auth_method_id"),
            table_name="Sessions",
            other_table_name="Auth Methods",
            base_data="core_identity"
        )

        logger.info(f"Session successfully created for {user_context.get('email')}")
        return token
        
    except Exception as e:
        logger.error(f"Error creating session for {user_context.get('email', 'unknown')}: {e}", exc_info=True)
        return None

def insert_user_in_database(userinfo, auth_provider, app_key=None):
    """
    Synchronizes and persists user information in the SeaTable database.
    
    Objective:
    - Ensure the 'Auth Methods' record exists and is linked to 'Identity'.
    - Update profile metadata (Name, Photo) if it has changed in the provider.
    - Handle password hashing for manual registrations.
    - Coordinate cascading creation: Identity -> Auth Methods -> Roles -> Links.
    """


    PORTAL_USERS_TABLE = "Auth Methods"
    IDENTITY_TABLE = "Identity"
    IDENTITY_LINK_COL = "Identity"  # Link column in Portal Users pointing to Identity


    # ==================================================
    # 0) Search user by email
    # ==================================================
    email = userinfo.get('email')
    if not email:
        raise ValueError("'email' field is required in userinfo")

    escaped_email = email.replace("'", "''")
    query = f"SELECT * FROM `Auth Methods` WHERE `Email` = '{escaped_email}'"
    existing_users = seatable.sql_query_one(query, base_data="core_identity")

    # ==================================================
    # 1) Prepare data separated by table
    # ==================================================
    # Fields that belong EXCLUSIVELY to the Identity table
    
    # Field names coming in userinfo
    first_name_raw = userinfo.get('given_name') or userinfo.get('first_name')
    last_name_raw = userinfo.get('family_name') or userinfo.get('last_name')
    profile_pic = userinfo.get('picture') or userinfo.get('profile_image_url')

    # Data for Identity (Only what we actually receive)
    data_identity = {'Status': 'Active'}
    if first_name_raw: data_identity['First Name'] = first_name_raw
    if last_name_raw: data_identity['Last Name'] = last_name_raw
    if profile_pic: data_identity['Profile Image URL'] = profile_pic

    # Mandatory field validation for manual registration is done 
    # in the upper layer (register_manual_user).


    # Data for Auth Methods (No Identity fields)
    password = userinfo.get('password')
    password_hash_str = None
    if auth_provider == "Email" and password:
        password_bytes = password.encode('utf-8')
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password_bytes, salt)
        password_hash_str = hashed_password.decode()

    data_auth = {
        'Email': email,
        'Auth Provider': auth_provider,
        'Verified': auth_provider != "Email",
        'Is Primary': True
    }
    if password_hash_str:
        data_auth['Password'] = password_hash_str

    # ==================================================
    # 2) CREATION / UPDATE FLOW
    # ==================================================
    if not existing_users:
        print(f"👤 New user. Following flow: Identity -> Auth Method")

        # SOLO para usuarios nuevos: Si no vienen nombres y es Social, aplicamos fallbacks
        if auth_provider != "Email":
            if 'First Name' not in data_identity: 
                data_identity['First Name'] = email.split('@')[0]
            if 'Last Name' not in data_identity: 
                data_identity['Last Name'] = "User"
        else:
            # For Email, we already validated above, but we ensure here again
            if 'First Name' not in data_identity or 'Last Name' not in data_identity:
                raise ValueError(f"Cannot create user {email}: names missing.")

        # 2.1) Crear Identity
        identity_created = seatable.perform_table_operation(
            table_name=IDENTITY_TABLE,
            row_data=data_identity,
            type_batch="append_row",
            base_data="core_identity"
        )
        if not identity_created:
            raise Exception(f"Could not create Identity for {email}")
        
        identity_row_id = identity_created.get('_id')

        # 2.2) Create Auth Method (linked to Identity)
        data_auth[IDENTITY_LINK_COL] = [identity_row_id]
        auth_created = seatable.perform_table_operation(
            table_name=PORTAL_USERS_TABLE,
            row_data=data_auth,
            type_batch="append_row",
            base_data="core_identity"
        )
        if not auth_created:
            raise Exception(f"Could not create Auth Method for {email}")
        
        auth_row_id = auth_created.get('_id')

        # 2.3) Assign Default Role to Identity
        _assign_default_role_to_identity(identity_row_id, app_key=app_key)


        # 2.4) Reverse Link: Identity -> Auth Methods
        _link_identity_to_auth(identity_row_id, auth_row_id)

        # 2.5) Fetch FRESH row before returning to ensure links are present and returned as objects (not strings)
        fresh_user = seatable.get_row(PORTAL_USERS_TABLE, auth_row_id, base_data="core_identity")
        return fresh_user if fresh_user else auth_created

    else:
        # ==================================================
        # 3) USER EXISTS -> UPDATE / ENSURE IDENTITY
        # ==================================================
        existing_user = existing_users[0]
        auth_row_id = existing_user.get('_id')
        
        # Get Identity link
        identity_links = existing_user.get(IDENTITY_LINK_COL, [])
        
        # Resilience: If identity link is a string (from SQL), re-fetch via get_row to get REAL _id
        if identity_links and isinstance(identity_links[0], str):
            logger.debug(f"Identity link is string for {email} in insert_user, re-fetching via get_row...")
            refetched_auth = seatable.get_row(PORTAL_USERS_TABLE, auth_row_id, base_data="core_identity")
            if refetched_auth:
                existing_user = refetched_auth
                identity_links = existing_user.get(IDENTITY_LINK_COL, [])

        identity_row_id = None
        if identity_links:
            identity_row_id = identity_links[0].get('row_id') if isinstance(identity_links[0], dict) else identity_links[0]

        # 3.1) If it has NO Identity, create it now
        if not identity_row_id:
            print(f"ℹ️ Existing user without Identity. Creating one now...")
            identity_created = seatable.perform_table_operation(
                table_name=IDENTITY_TABLE,
                row_data=data_identity,
                type_batch="append_row",
                base_data="core_identity"
            )
            identity_row_id = identity_created.get('_id')
            
            # Vincular Auth Method -> Identity
            seatable.perform_table_operation(
                table_name=PORTAL_USERS_TABLE,
                row_id=auth_row_id,
                row_data={IDENTITY_LINK_COL: [identity_row_id]},
                type_batch="update_row",
                base_data="core_identity"
            )
            
            # Assign Role
            _assign_default_role_to_identity(identity_row_id, app_key=app_key)



            
            # Reverse link
            _link_identity_to_auth(identity_row_id, auth_row_id)
        else:
            # 3.2) If it ALREADY has Identity, update only if we receive new data from the provider
            # We create a data set for update that does NOT include Status (since it already exists)
            # and only if we have something to update
            update_identity_data = {k: v for k, v in data_identity.items() if k != 'Status'}
            
            if update_identity_data:
                print(f"📇 Updating Identity {identity_row_id} with fresh data from provider...")
                seatable.perform_table_operation(
                    table_name=IDENTITY_TABLE,
                    row_id=identity_row_id,
                    row_data=update_identity_data,
                    type_batch="update_row",
                    base_data="core_identity"
                )

        # 3.3) Update Auth Method if there are changes (e.g., password)
        # We only update if it's not a social login (to avoid overwriting Verified=False)
        if auth_provider == "Email":
             seatable.perform_table_operation(
                table_name=PORTAL_USERS_TABLE,
                row_id=auth_row_id,
                row_data=data_auth,
                type_batch="update_row",
                base_data="core_identity"
            )

        # Return FRESH row to ensure identity links are not stale and are returned as objects (not strings)
        fresh_user = seatable.get_row(PORTAL_USERS_TABLE, auth_row_id, base_data="core_identity")
        return fresh_user if fresh_user else existing_user

def _assign_default_role_to_identity(identity_row_id, app_key=None):
    """
    Automatically assigns the most restrictive role available for the current App.
    
    Objective:
    - Implement the principle of least privilege during registration.
    - Identify 'own' or 'assigned' type roles specific to the detected application.
    - Perform the link in the 'Assignments' table to grant immediate access.
    """
    from src.services.identity_service import identity_service
    try:
        # 1. Obtain app_key dynamically based on URL if not provided
        if not app_key:
            app_key = identity_service.get_app_key_by_url()



        if not app_key:
            logger.warning("Could not determine app_key for role auto-assignment. Aborting.")
            return

        # 2. Get all roles to filter locally (avoid column name issues)
        roles = seatable.sql_query("SELECT * FROM `Roles`", base_data="core_identity")
        
        # 3. Classify App roles by their Data Mode
        # Preferred priority: own (least access) > assigned
        app_roles_by_mode = {"own": [], "assigned": []}
        
        for r in roles:
            # Verificar si el rol pertenece a la App detectada
            role_apps = r.get("App Key", [])
            is_match = False
            
            if isinstance(role_apps, list):
                for ra in role_apps:
                    val = ra.get("display_value") if isinstance(ra, dict) else str(ra)
                    if val == app_key:
                        is_match = True
                        break
            elif app_key == str(role_apps):
                is_match = True
            
            if not is_match:
                continue

            # Extract mode using IdentityService core logic
            mode = identity_service._extract_data_mode(r.get("Data"))
            
            # We only care about 'own' and 'assigned' for auto-assignment
            if mode in app_roles_by_mode:
                app_roles_by_mode[mode].append(r)

        # 4. Select the winning role (the most restricted available one)
        winner_role = None
        if app_roles_by_mode["own"]:
            winner_role = app_roles_by_mode["own"][0]
        elif app_roles_by_mode["assigned"]:
            winner_role = app_roles_by_mode["assigned"][0]

        if not winner_role:
            logger.info(f"ℹ️ No suitable role (own/assigned) found for App {app_key}. No automatic role will be assigned.")
            return

        role_id_key = winner_role.get("Role ID")
        logger.info(f"🎯 Role selected for auto-assignment: {role_id_key} (Mode: {identity_service._extract_data_mode(winner_role.get('Data'))})")

        # 5. Search in the Assignments table for the global row for that role in that App
        query_assig = f"SELECT `_id` FROM `Assignments` WHERE `Role` = '{role_id_key}' AND `App Key` LIKE '%{app_key}%'"
        assignment_rows = seatable.sql_query(query_assig, base_data="core_identity")
        
        if not assignment_rows:
            logger.warning(f"⚠️ Role {role_id_key} identified but no record exists in 'Assignments' for this App.")
            return
            
        assignment_row_id = assignment_rows[0].get('_id')
        
        # 6. Establish the link between Identity and Assignment
        link_assig_id = seatable.get_column_link_id("Identity", "Assignments", base_data="core_identity")
        seatable.perform_link_operation(
            link_id=link_assig_id,
            row_id=identity_row_id,
            other_row_id=assignment_row_id,
            table_name="Identity",
            other_table_name="Assignments",
            base_data="core_identity"
        )

        logger.info(f"✅ Identity {identity_row_id} successfully linked to role {role_id_key} of App {app_key}.")
        
    except Exception as e:
        logger.error(f"❌ Error in role auto-assignment: {e}")
        import traceback
        traceback.print_exc()

def _link_identity_to_auth(identity_row_id, auth_row_id):
    """
    Establishes the reverse link in the database between Identity and Auth Methods.
    
    Objective:
    - Ensure the relationship is bidirectional in SeaTable to facilitate queries.
    - Maintain referential integrity between the user profile and their access method.
    """
    try:
        # Wait a bit for SeaTable to propagate rows

        link_id = seatable.get_column_link_id("Identity", "Auth Method", base_data="core_identity")
        seatable.perform_link_operation(link_id, identity_row_id, auth_row_id, "Identity", "Auth Methods", base_data="core_identity")
        print("✅ Identity -> Auth Method reverse link completed.")
    except Exception as e:
        print(f"⚠️ Error in reverse link: {e}")


def process_mock_social_login(provider, email=None, app_key=None):
    """
    Simulates a successful authentication flow for controlled development purposes.
    
    Objective:
    - Facilitate local testing without dependency on external APIs (Google/Microsoft).
    - Generate a complete and functional user context on demand.
    - Allow bypassing real credential validation when MOCK_AUTH is True.
    """
    from flask import session
    
    target_email = email or 'tasamaperez2005@gmail.com'
    print(f"🛠️ SIMULATING SOCIAL LOGIN ({provider}) for: {target_email}")
    
    # Check if the user already exists to avoid overwriting their real names with mock ones
    escaped_email = target_email.replace("'", "''")
    existing_auth = seatable.sql_query_one(f"SELECT * FROM `Auth Methods` WHERE `Email` = '{escaped_email}'", base_data="core_identity")
    
    # We create a userinfo format compatible with what insert_user_in_database expects
    mock_userinfo = {
        'email': target_email,
        'picture': 'https://placehold.co/600x400',
        'verified_email': True
    }

    if not existing_auth:
        # Only if new, we assign mock names
        mock_userinfo['given_name'] = 'Anderson'
        mock_userinfo['family_name'] = 'Tasama'
    
    # We try to insert/update the user.
    user = insert_user_in_database(mock_userinfo, provider)
    
    if not user:
        return {'success': False, 'error': 'Error creating/retrieving mock user'}
        
    if isinstance(user, list):
        user = user[0]
        


    print(f"🔍 Searching for Auth Methods to link session...")
    
    # 1. Obtain context (Bypass cache for login and force provider)
    user_context = _get_user_context(mock_userinfo['email'], provider=provider, bypass_cache=True, app_key=app_key)
    
    if not user_context:
        print("❌ Error obtaining context for mock user")
        return {'success': False, 'error': 'Error obtaining user context'}
        
    return {'success': True, 'user': user_context}





# Function to calculate the display name for the Vendors table
def calculate_display_name(vendor, banking):
    """
    Calculates the display name for business entities.
    
    Objective:
    - Follow QuickBooks display rules for vendors and banking.
    - Handle priority between personal names and business names.
    - Facilitate clear visual identification in dashboards and reports.
    """

    # Nombre completo de vendor
    first = (vendor.get('First Name') or '').strip()
    last = (vendor.get('Last Name') or '').strip()
    vendor_full_name = f"{first} {last}".strip()

    # Nombre de la empresa
    company = (vendor.get('Company') or '').strip()

    # Nombre de la cuenta bancaria
    account_name = (banking.get('Account Name') or '').strip() if banking else ''

    print("--------------------------------")
    print("vendor_full_name:", vendor_full_name)
    print("company:", company)
    print("account_name:", account_name)

    # --------------------------------------
    # CASE 1: NO COMPANY → individual
    # --------------------------------------
    # Case: vendor is an individual (has no company)
    if not company:
        # If account belongs to the same person → display = vendor_full_name
        if account_name.lower() == vendor_full_name.lower():
            return vendor_full_name

        # If account belongs to a third party → display = vendor_full_name / account_name
        if account_name:
            return f"{vendor_full_name} / {account_name}"

        # If no account_name for some reason
        return vendor_full_name


    # --------------------------------------
    # CASE 2: COMPANY exists
    # --------------------------------------
    # Scenario 4: company = bank account
    if account_name.lower() == company.lower():
        return company

    # Scenarios 2 and 3: company and account are different
    if account_name:
        return f"{company} / {account_name}"

    # If no account name → use only the company
    return company




# Function to send manual account confirmation email
def send_manual_confirmation_email(email, auth_row_id=None):
    """
    Manages the physical dispatch of the confirmation code to the user.
    
    Objective:
    - Generate a secure 6-character alphanumeric code.
    - Persist the token and timestamp in the SeaTable database.
    - Construct and send an email with professional HTML formatting.
    """
    try:
        # Token generation: 32-character secure token
        token = secrets.token_urlsafe(32)

        # Save token to database and update last email sent timestamp (local time without microseconds)
        now = datetime.datetime.now().replace(microsecond=0)
        current_time_iso = now.strftime("%Y-%m-%d %H:%M:%S")
        seatable.perform_table_operation(
            "Auth Methods", 
            row_data={
                "Token": token,
                "Last Email Sent": current_time_iso
            }, 
            type_batch="update_row", 
            row_id=auth_row_id, 
            base_data="core_identity"
        )

        # Preparar datos del correo
        subject = "[Prism Group] Your Account Verification"
        
        # Determine the frontend URL (from Config or fallback)
        frontend_url = getattr(Config, 'FRONTEND_URL', 'http://localhost:5173').rstrip('/')
        verification_link = f"{frontend_url}/verify-email?token={token}"

        # HTML Body
        body_html = f"""\
        <html>
        <body style="font-family: Arial, Helvetica, sans-serif; background-color: #f4f8fb; padding: 40px; color: #333;">
            <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            
            <h2 style="color: #0072ff; text-align: center; margin-bottom: 20px;">
                Verify your account
            </h2>

            <p>Hello,</p>

            <p>
                To complete your registration in <strong>Core Identity</strong>, please click the button below to verify your email address:
            </p>
            
            <div style="text-align: center; margin: 40px 0;">
                <a href="{verification_link}" style="background-color: #0072ff; color: #ffffff; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                    Verify Email Address
                </a>
            </div>

            <p style="font-size: 14px; color: #777;">
                If the button above doesn't work, you can also copy and paste the following link into your browser:
            </p>
            <p style="font-size: 12px; color: #0072ff; word-break: break-all;">
                {verification_link}
            </p>
            
            <p style="font-size: 14px; color: #777; margin-top: 30px;">
                This link will expire in 24 hours. If you didn't create an account, you can ignore this email.
            </p>
            <p style="font-size: 14px; color: #777;">
                This code will allow you to verify your email address. If you didn't create an account, you can ignore this email.
            </p>



            </div>
        </body>
        </html>
"""

        # Enviar correo usando la función genérica
        return send_email(email, subject, body_html)

    except Exception as e:
        print(f"❌ Could not send confirmation email: {e}")
        import traceback
        traceback.print_exc()
        return False

def resend_confirmation_email_logic(email, user_id=None):
    """
    Orchestrates the resending of verification codes with protection policies.
    
    Objective:
    - Implement a 5-minute rate limit between requests to prevent abuse.
    - Ensure the user actually requires verification before proceeding.
    - Handle fresh data fetching to guarantee process integrity.
    """
    try:
        email = (email or "").lower().strip()
        escaped_email = email.replace("'", "''")
        
        # 1. Get user data (always fresh query)
        if user_id:
            query = f"SELECT * FROM `Auth Methods` WHERE `_id` = '{user_id}'"
        else:
            # If no ID, we search by email and Email provider, prioritizing NOT verified and most recent based on last sent
            query = f"SELECT * FROM `Auth Methods` WHERE `Email` = '{escaped_email}' AND `Auth Provider` = 'Email' AND `Verified` = false ORDER BY `Last Email Sent` DESC"
            
        user_rows = seatable.sql_query_one(query, base_data="core_identity")
        
        # If not found as unverified, we check if it already exists as verified
        if not user_rows:
            query_verified = f"SELECT * FROM `Auth Methods` WHERE `Email` = '{escaped_email}' AND `Auth Provider` = 'Email' AND `Verified` = true ORDER BY `Last Email Sent` DESC"
            verified_rows = seatable.sql_query_one(query_verified, base_data="core_identity")
            if verified_rows:
                return False, "This email is already verified.", 0
            return False, "User not found.", 0

        user_data = user_rows[0]
        user_id_final = user_data.get("_id")
        
        # 2. Check Rate Limit
        last_sent_str = user_data.get('Last Email Sent')
        if last_sent_str:
            try:
                last_sent_dt = datetime.datetime.strptime(last_sent_str, "%Y-%m-%d %H:%M:%S")
                now = datetime.datetime.now().replace(microsecond=0)
                diff = now - last_sent_dt
                
                print(f"DEBUG RATE LIMIT: Email={email}, Diff={diff.total_seconds()}s")
                
                if diff.total_seconds() < 300:
                    wait_seconds = int(300 - diff.total_seconds())
                    msg = f"Please wait {wait_seconds // 60}m {wait_seconds % 60}s before requesting another confirmation email."
                    return False, msg, wait_seconds
            except Exception as e:
                print(f"⚠️ Error checking rate limit: {e}")

        # 3. Send Email
        print(f"DEBUG: Attempting to send email to {email}")
        if send_manual_confirmation_email(email, auth_row_id=user_id_final):
            return True, "Confirmation email sent.", 0
        else:
            return False, "Failed to send confirmation email.", 0
            
    except Exception as e:
        print(f"❌ Error in resend_confirmation_email_logic: {e}")
        import traceback
        traceback.print_exc()
        return False, f"Internal error: {str(e)}", 0


def confirm_email_manual(token):
    """
    Validates and processes account confirmation via token.
    
    Objective:
    - Verify the existence, match, and validity (24h) of the received token.
    - Activate the authentication method and user identity in SeaTable.
    - Clear the used token to prevent reuse.
    """
    try:
        print("📩 Starting confirm_email_manual() with token:", token)
        escaped_token = (token or "").replace("'", "''").strip()
        
        # 🔹 Search for token in the table
        rows = seatable.sql_query(f"SELECT * FROM `Auth Methods` WHERE Token = '{escaped_token}'", base_data="core_identity")
        if not rows:
            print("❌ Token not found")
            return False

        user_data = rows[0]
        row_id = user_data.get("_id")
        
        # 🔹 Verify Expiration (24 hours for email confirmation)
        last_sent_str = user_data.get('Last Email Sent')
        if last_sent_str:
            try:
                last_sent_dt = datetime.datetime.strptime(last_sent_str, "%Y-%m-%d %H:%M:%S")
                now = datetime.datetime.now()
                diff = now - last_sent_dt
                if diff.total_seconds() > 86400:  # 24 hours
                    print(f"❌ Token expired ({(diff.total_seconds()/3600):.1f} hours elapsed)")
                    return False
            except Exception as e:
                print(f"⚠️ Error checking expiration: {e}")

        # 🔹 Mark as confirmed and delete token
        print("✏️ Updating record in SeaTable...")
        seatable.perform_table_operation("Auth Methods", row_data={"Verified": True, "Token": None}, type_batch="update_row", row_id=row_id, base_data="core_identity")
        print("✅ Record successfully updated")    
        return True
    except Exception as e:
        print(f"❌ Error confirming email: {e}")
        return False


# ============================================================================
# AUTHENTICATION FUNCTIONS
# ============================================================================

def login_with_password_and_email(email, password, login_type="manual"):
    """
    Executes credential validation for login.
    
    Objective:
    - Authenticate user by comparing password hash (bcrypt).
    - Manage bypass for simulated social logins in development.
    - Intercept unverified users to force verification email resend.
    - Return comprehensive user context and authentication record upon success.
    """
    try:
        # Validate email field
        if not email:
            return {"status": False, "message": "Email is required", "user": None}
        
        # Normalize email to lowercase
        email = email.lower().strip()
        # Escape single quotes in email to avoid SQL injection issues
        escaped_email = email.replace("'", "''")
        
        # Temporary bypass for Google/Microsoft (Test/Dev)
        # If simulated social login, we only verify it exists in Auth Methods
        # The user requested: "if I send... type: 'google' or 'microsoft' let me through immediately"
        # We assume email must exist.
        
        is_bypass = login_type and login_type.lower() in ["google", "microsoft"]
        
        if is_bypass:
            print(f"⚠️ LOGIN BYPASS: Type '{login_type}' detected for {email}")
            # We search for user regardless of verified for test
            # For basic security, we require it to exist.
            user = seatable.sql_query_one(f"SELECT * FROM `Auth Methods` WHERE Email = '{escaped_email}'", base_data="core_identity")
        else:
            # Standard manual login
            if not password:
                 return {"status": False, "message": "Password is required", "user": None}
                 
            # IMPORTANT: Filter by 'Email' provider and sort by Last Email Sent
            user = seatable.sql_query_one(f"SELECT * FROM `Auth Methods` WHERE Email = '{escaped_email}' AND `Auth Provider` = 'Email' ORDER BY `Last Email Sent` DESC", base_data="core_identity")

        # Verify that the user was found
        if not user or not isinstance(user, list) or len(user) == 0:
            print(f"❌ User not found: {email}")
            return {"status": False, "message": "Email not found.", "user": None}
        
        user_data = user[0]
        
        # If not bypass, verify if the user is confirmed
        if not is_bypass:
            is_verified = user_data.get('Verified', False)
            
            if not is_verified:
                print(f"⚠️ Unverified user: {email}. Verifying password before resending...")
                
                # Verify password before resending email
                hashed_password = user_data.get('Password')
                
                if not hashed_password:
                    print("❌ Password not found for user")
                    return {"status": False, "message": t('password_not_set'), "user": None}
                
                if not isinstance(hashed_password, str):
                    hashed_password = str(hashed_password)
                
                password_bytes = password.encode('utf-8')
                if not bcrypt.checkpw(password_bytes, hashed_password.encode('utf-8')):
                     print("❌ Incorrect password for unverified user")
                     return {"status": False, "message": t('incorrect_password'), "user": None}
                
                # Correct password, use resend logic
                # SAME CALL AS THE "RESEND" BUTTON: only with email so it does its own fresh query
                success, message, wait_time = resend_confirmation_email_logic(email)
                
                print(f"DEBUG LOGIN: Fresh call to resend logic result: success={success}, wait_time={wait_time}")
                
                return {
                    "status": True,
                    "message": message,
                    "redirect_url": "/esperando-confirmacion",
                    "wait_seconds": int(wait_time),
                    "user": None
                }
        
        # If the user is verified, continue with password validation
        if not is_bypass:
            # Normal password logic for verified users
            hashed_password = user_data.get('Password')
            
            if not hashed_password:
                print("❌ Password not found for user")
                return {"status": False, "message": t('password_not_set'), "user": None}
            
            if not isinstance(hashed_password, str):
                hashed_password = str(hashed_password)
            
            password_bytes = password.encode('utf-8')
            if not bcrypt.checkpw(password_bytes, hashed_password.encode('utf-8')):
                 print("❌ Incorrect password")
                 return {"status": False, "message": t('incorrect_password'), "user": None}
            
            print("✅ Correct password")
        else:
            print(f"✅ SUCCESSFUL BYPASS for {email}")

        # --- LOGIN SUCCESS ---
        # 1. Obtain user context (In login, always real-time and specifying provider)
        user_context = _get_user_context(email, provider="Email", bypass_cache=True)
        if not user_context:
             return {"status": False, "message": "Error retrieving user context", "user": None}

        return {
            "status": True, 
            "message": "Login successful", 
            "user": user_context, 
            "auth_row": user_data
        }

    except Exception as e:
        print(f"❌ Error logging in: {e}")
        import traceback
        traceback.print_exc()
        return {"status": False, "message": str(e), "user": None}


# ============================================================================
# PASSWORD MANAGEMENT FUNCTIONS
# ============================================================================

def send_password_reset_email(email):
    """
    Starts the password recovery flow by sending a code to the email.
    
    Objective:
    - Validate user existence and eligibility for password reset.
    - Generate a security code (token) and register the attempt in SeaTable.
    - Apply a 5-minute rate limit for recovery email dispatches.
    - Ensure communication is secure and the token has limited validity (15m).
    """
    try:
        email = email.lower().strip()
        # Search for user by email and Email provider, sorting by Last Email Sent
        escaped_email = email.replace("'", "''")
        user = seatable.sql_query_one(f"SELECT * FROM `Auth Methods` WHERE Email = '{escaped_email}' AND `Auth Provider` = 'Email' ORDER BY `Last Email Sent` DESC", base_data="core_identity")
        
        # Verify that the user exists and is confirmed
        if not user or not isinstance(user, list) or len(user) == 0:
            # For security, do not reveal if the email exists or not
            print(f"⚠️ Password reset attempt for non-existent or unconfirmed email: {email}")
            return {"status": True, "message": t('password_reset_sent')}
        
        user_data = user[0]
        user_id = user_data.get('_id')
        
        if not user_id:
            print("❌ User ID not found")
            return {"status": False, "message": t('error_processing_request')}
        
        # Verify that the user has an Auth Provider that allows password reset (Email Only)
        auth_provider = user_data.get('Auth Provider', 'Email')
        if auth_provider and auth_provider.lower() != 'email':
            print(f"⚠️ Password reset attempt for OAuth user: {email} ({auth_provider})")
            return {"status": True, "message": t('password_reset_sent')}
        
        # Check Rate Limit for password reset (5 minutes)
        last_sent_str = user_data.get('Last Email Sent')
        if last_sent_str:
            try:
                last_sent_dt = datetime.datetime.strptime(last_sent_str, "%Y-%m-%d %H:%M:%S")
                now = datetime.datetime.now()
                diff = now - last_sent_dt
                if diff.total_seconds() < 300:
                    wait_seconds = int(300 - diff.total_seconds())
                    print(f"⚠️ Rate limit active for reset-password of {email}. {wait_seconds} seconds remaining.")
                    return {
                        "status": True,
                        "message": t('wait_before_requesting', wait_seconds=f"{wait_seconds // 60}m {wait_seconds % 60}s"),
                        "wait_seconds": wait_seconds
                    }
            except Exception as e:
                print(f"⚠️ Error checking rate limit on reset: {e}")
        
        # Token generation: 32-character secure token for password reset
        reset_token = secrets.token_urlsafe(32)

        # Save token to the database and update Last Email Sent
        current_time_iso = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        seatable.perform_table_operation(
            "Auth Methods", 
            row_data={
                "Token": reset_token,
                "Last Email Sent": current_time_iso
            }, 
            type_batch="update_row", 
            row_id=user_id,
            base_data="core_identity"
        )
        
        # Preparar datos del correo
        subject = "Reset Your Password - Core Identity"
        
        # Determine the frontend URL
        frontend_url = getattr(Config, 'FRONTEND_URL', 'http://localhost:5173').rstrip('/')
        reset_link = f"{frontend_url}/reset-password?token={reset_token}"

        body_html = f"""\
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f8fb; padding: 40px; color: #333;">
            <div style="max-width: 600px; margin: auto; background-color: white; border-radius: 10px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <h2 style="color: #0072ff; text-align: center;">Reset Your Password</h2>
              <p>Hello,</p>
              <p>We received a request to reset your password for your <strong>Core Identity</strong> account.</p>
              <p>Please click the button below to set a new password:</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="{reset_link}" style="background-color: #0072ff; color: #ffffff; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                    Reset Password
                </a>
              </div>

              <p style="font-size: 14px; color: #777;">
                If the button above doesn't work, you can copy and paste the following link into your browser:
              </p>
              <p style="font-size: 12px; color: #0072ff; word-break: break-all;">
                {reset_link}
              </p>

              <p style="font-size: 0.9rem; color: #777; text-align: center; margin-top: 30px;">
                This link is valid for 15 minutes. If you didn't request a password reset, you can safely ignore this email.
              </p>
              <p style="font-size: 0.9rem; color: #777; text-align: center;">
                This code is valid for 15 minutes. If you didn't request a password reset, you can safely ignore this email.
              </p>
            </div>
          </body>
        </html>
        """
        
        # Send email using generic function
        email_sent = send_email(email, subject, body_html)
        
        if email_sent:
            print(f"✅ Password reset email sent to: {email}")
            return {
                "status": True, 
                "message": t('password_reset_sent'),
                "wait_seconds": 0
            }
        else:
            return {"status": False, "message": "Error sending reset email"}
        
    except Exception as e:
        print(f"❌ Error sending password reset email: {e}")
        import traceback
        traceback.print_exc()
        return {"status": False, "message": "Error sending reset email"}


def reset_password_with_token(token, new_password):
    """
    Completes the password change using the security token.
    
    Objective:
    - Validate the strength of the new password and the reset token's validity.
    - Update the password hash in SeaTable and void the used token.
    - Identify active linked sessions so the frontend can report them.
    """
    try:
        # 0. Validate password strength
        is_strong, msg = validate_password_strength(new_password)
        if not is_strong:
            return {"status": False, "message": msg}

    
        escaped_token = (token or "").replace("'", "''").strip()
        if not escaped_token:
            return {"status": False, "message": "Invalid or expired reset token"}

        user_data = seatable.sql_query_one(
            f"""
            SELECT *
            FROM `Auth Methods`
            WHERE `Token` = '{escaped_token}'
              AND `Verified` = True
            """,
            base_data="core_identity"
        )
       

        if isinstance(user_data, list):
            user_data = user_data[0] if user_data else None

        if not user_data or not isinstance(user_data, dict):
            return {"status": False, "message": t('invalid_reset_code')}

        # Verify Expiration (15 minutes) based on Last Email Sent
        last_sent_str = user_data.get('Last Email Sent')
        if last_sent_str:
            try:
                last_sent_dt = datetime.datetime.strptime(last_sent_str, "%Y-%m-%d %H:%M:%S")
                # Compare with local time for consistency
                now = datetime.datetime.now()
                diff = now - last_sent_dt
                if diff.total_seconds() > 900:  # 15 minutos
                    return {"status": False, "message": "The reset code has expired"}
            except Exception as e:
                print(f"⚠️ Error checking token expiration: {e}")
        else:
            # If no sent date, something is wrong
            return {"status": False, "message": t('invalid_reset_status')}

       

        user_id = user_data.get("_id")
        if not user_id:
            return {"status": False, "message": "Invalid user"}

        hashed_password = bcrypt.hashpw(new_password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

        update_result = seatable.perform_table_operation(
            table_name="Auth Methods",
            row_data={
                "Password": hashed_password,
                "Token": None
            },
            type_batch="update_row",
            row_id=user_id,
            base_data="core_identity"
        )

        if not update_result:
            return {"status": False, "message": "Failed to reset password"}

        # 🔹 Obtain active sessions to inform the user
        active_sessions = []
        try:
            # Use the custom ID (literal) as requested by the user
            custom_auth_id = user_data.get("ID")
            # Search for active sessions linked to this Auth Method
            query_sessions = f"SELECT _id, IP, `Device Name`, `Expiration Date` FROM `Sessions` WHERE `Auth Method` = '{custom_auth_id}' AND `Status` = 'Active' ORDER BY `Expiration Date` DESC"
            sessions_res = seatable.sql_query(query_sessions, base_data="core_identity")
            if sessions_res and isinstance(sessions_res, list):
                active_sessions = sessions_res
        except Exception as e:
            print(f"⚠️ Error retrieving active sessions: {e}")

        return {
            "status": True, 
            "message": "Password has been reset successfully",
            "active_sessions": active_sessions
        }

    except Exception:
        import traceback
        traceback.print_exc()
        return {"status": False, "message": "Internal server error"}


def process_welcome_email_flow(table_name, subject_template, body_html_template):
    """
    Triggers a batch process to send welcome emails to vendors.
    
    Objective:
    - Query Vendors with 'Send Welcome Email' == True (Limit 50).
    - Resolve Application Name and Public URL.
    - Check if Identity and Auth Methods already exist.
    - Create/Update records in batch for efficiency.
    - Render and send personalized emails with secure 32-char tokens.
    - Track the sent timestamp in the Vendors table.
    """
    try:
        # 1. Query Vendors to process
        # Use sql_query with batch=50 to avoid double LIMIT conflict
        vendor_query = "SELECT * FROM `Vendors` WHERE `Send Welcome Email` = true"
        vendors = seatable.sql_query(vendor_query, batch=50, base_data="core_identity")
        
        print(f"🔍 Found {len(vendors) if vendors else 0} vendors with 'Send Welcome Email' = true")
        
        if not vendors:
            return {"success": True, "message": "No vendors to process.", "processed_count": 0}

        # Pre-fetch Link IDs to avoid repeated API calls
        link_id_v_id = seatable.get_column_link_id("Identity", "Vendor ID", base_data="core_identity")
        link_id_auth_id = seatable.get_column_link_id("Auth Methods", "Identity", base_data="core_identity")
        link_id_id_auth = seatable.get_column_link_id("Identity", "Auth Method", base_data="core_identity")

        # 2. Resolve App Name and Public URL info
        # We'll use this for rendering the emails later
        all_apps = seatable.sql_query("SELECT * FROM `Applications`", base_data="core_identity")
        apps_map = {app.get("App Name"): app.get("Public URL") for app in all_apps if app.get("App Name")}
        
        # 3. Process each vendor (existence checks and classification)
        emails = [v.get("Email") for v in vendors if v.get("Email")]
        if not emails:
            return {"success": False, "message": "No valid emails found in vendors."}
            
        emails_str = "', '".join([e.replace("'", "''") for e in emails])
        
        # Check existing Auth Methods
        existing_auths = seatable.sql_query(
            f"SELECT * FROM `Auth Methods` WHERE `Email` IN ('{emails_str}') AND `Auth Provider` = 'Email'", 
            base_data="core_identity"
        )
        auth_map = {row.get("Email"): row for row in existing_auths}
        
        # Link Identities from Auth Methods
        id_row_ids = []
        for auth in existing_auths:
            links = auth.get("Identity", [])
            for l in links:
                if isinstance(l, dict):
                    id_row_ids.append(l.get("row_id"))
                elif isinstance(l, str):
                    id_row_ids.append(l)

        # Check existing Identities by _id (found through auth) OR by Vendor ID
        id_map = {}
        if id_row_ids:
            ids_str_clause = "', '".join(id_row_ids)
            identities_by_id = seatable.sql_query(
                f"SELECT * FROM `Identity` WHERE `_id` IN ('{ids_str_clause}')",
                base_data="core_identity"
            )
            # We need to map them back to email through the auth_map
            for identity in identities_by_id:
                # Find which Auth Method links to this identity
                for email, auth in auth_map.items():
                    links = auth.get("Identity", [])
                    if any((isinstance(l, dict) and l.get("row_id") == identity.get("_id")) or l == identity.get("_id") for l in links):
                        id_map[email] = identity
                        break

        # If processing Vendors (as indicated by the request table_name), 
        # also check by Vendor ID for identities that might not have Auth Methods yet.
        # Note: vendors always from 'Vendors' table, but table_name tells us the context.
        if table_name == "Vendors":
            vendor_ids = [v.get("ID") for v in vendors if v.get("ID")]
            if vendor_ids:
                vids_str = "', '".join([str(vid) for vid in vendor_ids])
                identities_by_vid = seatable.sql_query(
                    f"SELECT * FROM `Identity` WHERE `Vendor ID` IN ('{vids_str}')",
                    base_data="core_identity"
                )
                for identity in identities_by_vid:
                    v_id = str(identity.get("Vendor ID"))
                    # Find which vendor has this ID and map its email
                    for v in vendors:
                        if str(v.get("ID")) == v_id:
                            email = v.get("Email")
                            if email not in id_map: # Don't overwrite if already found through auth
                                id_map[email] = identity
                            break

        # Prepare batch data
        batch_vendor_cleanup = []
        batch_id_append = []
        # We'll use a map for updates to avoid duplicate row_id in batch
        id_updates_map = {} 
        batch_auth_append = []
        batch_auth_update = []
        
        # Index to keep track of vendors
        processed_vendors = []
        
        now_iso = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        for vendor in vendors:
            email = vendor.get("Email")
            if not email: continue
            
            v_id = vendor.get("_id") # Use internal row_id for linking
            v_business_id = vendor.get("ID") # Keep business ID if needed for logic
            v_first_name = vendor.get("First Name") or vendor.get("FirstName") or ""
            v_last_name = vendor.get("Last Name") or vendor.get("LastName") or ""
            
            # For template rendering, if first name is empty, use 'there'
            v_display_name = v_first_name if v_first_name else "there"
            
            # Resolve Dynamic Application Name
            # Priority: 
            # 1. Welcome Application column in the vendor record (Check first)
            # 2. Vendor Portal (if trigger table is 'Vendors')
            # 3. Core Identity (global fallback)
            app_name = None
            
            welcome_app_links = vendor.get("Welcome Application", [])
            if welcome_app_links and isinstance(welcome_app_links, list) and len(welcome_app_links) > 0:
                app_name = welcome_app_links[0].get("display_value")
            
            # If still empty and trigger is Vendors, use Vendor Portal
            if not app_name and table_name == "Vendors":
                app_name = "Vendor Portal"
            
            # Final fallback
            if not app_name:
                app_name = "Core Identity"
            
            # Resolve URL strictly from Applications table
            public_url = apps_map.get(app_name)
            if not public_url:
                print(f"⚠️ Warning: No Public URL found for application '{app_name}' in SeaTable.")
                public_url = "" # Empty if not found
            
            # Generate long secure token
            token = secrets.token_urlsafe(32)
            
            id_row = id_map.get(email)
            auth_row = auth_map.get(email)
            
            vendor_processed_data = {
                "vendor_row_id": vendor.get("_id"),
                "email": email,
                "first_name": v_display_name,
                "token": token,
                "app_name": app_name,
                "public_url": public_url
            }
            
            # Case Analysis (Matches Mermaid Diagram)
            if not id_row and not auth_row:
                # Case A: Create Both
                id_data = {
                    "Email": email, 
                    "Status": "Active",
                    "First Name": v_first_name,
                    "Last Name": v_last_name
                }
                batch_id_append.append(id_data)
                
                # Auth payload (link moved to add_link phase)
                batch_auth_append.append({
                    "Email": email, 
                    "Auth Provider": "Email", 
                    "Verified": True, 
                    "Token": token,
                    "First Name": v_first_name,
                    "Last Name": v_last_name,
                    "Last Email Sent": now_iso
                })
                vendor_processed_data["action"] = "create_both"
            
            elif id_row and not auth_row:
                # Case B: Create Auth + Link
                id_row_id = id_row.get("_id")
                auth_data = {
                    "Email": email, 
                    "Auth Provider": "Email", 
                    "Verified": True, 
                    "Token": token,
                    "First Name": v_first_name,
                    "Last Name": v_last_name,
                    "Last Email Sent": now_iso
                }
                batch_auth_append.append(auth_data)
                
                # Prepare Identity update (Names only)
                id_upd = {}
                if not id_row.get("First Name") and v_first_name:
                    id_upd["First Name"] = v_first_name
                if not id_row.get("Last Name") and v_last_name:
                    id_upd["Last Name"] = v_last_name
                
                if id_upd:
                    id_updates_map[id_row_id] = id_upd

                vendor_processed_data["identity_row_id"] = id_row_id
                vendor_processed_data["action"] = "create_auth"
            
            elif not id_row and auth_row:
                # Case C: Create Identity + Link back
                auth_row_id = auth_row.get("_id")
                id_data = {
                    "Email": email, 
                    "Status": "Active",
                    "First Name": v_first_name,
                    "Last Name": v_last_name
                }
                batch_id_append.append(id_data)
                
                # Auth update
                batch_auth_update.append({
                    "row_id": auth_row_id, 
                    "row": {
                        "Token": token, 
                        "Verified": True, 
                        "Last Email Sent": now_iso,
                        "First Name": v_first_name,
                        "Last Name": v_last_name
                    }
                })
                vendor_processed_data["auth_row_id"] = auth_row_id
                vendor_processed_data["action"] = "create_identity"
                
            else:
                # Case D: Both exist, ensure names
                id_row_id = id_row.get("_id")
                auth_row_id = auth_row.get("_id")
                
                auth_upd_data = {
                    "Token": token, 
                    "Verified": True, 
                    "Last Email Sent": now_iso,
                    "First Name": v_first_name,
                    "Last Name": v_last_name
                }
                batch_auth_update.append({"row_id": auth_row_id, "row": auth_upd_data})
                
                id_upd = id_updates_map.get(id_row_id, {})
                if not id_row.get("First Name") and v_first_name:
                    id_upd["First Name"] = v_first_name
                if not id_row.get("Last Name") and v_last_name:
                    id_upd["Last Name"] = v_last_name
                
                if id_upd:
                    id_updates_map[id_row_id] = id_upd
                
                vendor_processed_data["identity_row_id"] = id_row_id
                vendor_processed_data["auth_row_id"] = auth_row_id
                vendor_processed_data["action"] = "update_existing"

            processed_vendors.append(vendor_processed_data)

        # 4. Execute Batch Operations
        # Step 4.1: Batch Create Identities
        if batch_id_append:
            logger.info(f"📤 Appending {len(batch_id_append)} Identities: {batch_id_append}")
            res_id_append = seatable.perform_table_operation("Identity", row_data=batch_id_append, type_batch="batch_append_rows", base_data="core_identity")
            if res_id_append and isinstance(res_id_append, dict) and "row_ids" in res_id_append:
                row_ids = res_id_append["row_ids"]
                # Map created row_ids back to vendors
                for idx, row in enumerate(row_ids):
                    new_rid = row.get("_id")
                    v_email = batch_id_append[idx].get("Email")
                    logger.debug(f"📍 Mapped new Identity ID {new_rid} to email {v_email}")
                    for pv in processed_vendors:
                        if pv.get("email") == v_email:
                            pv["identity_row_id"] = new_rid
                            break
        
        if batch_auth_append:
            logger.info(f"📤 Appending {len(batch_auth_append)} Auth Methods: {batch_auth_append}")
            res_auth_append = seatable.perform_table_operation("Auth Methods", row_data=batch_auth_append, type_batch="batch_append_rows", base_data="core_identity")
            # Map created row_ids back
            if isinstance(res_auth_append, dict) and "row_ids" in res_auth_append:
                row_ids = res_auth_append["row_ids"]
                for idx, row in enumerate(row_ids):
                    a_rid = row.get("_id")
                    a_email = batch_auth_append[idx].get("Email")
                    logger.debug(f"📍 Mapped new Auth ID {a_rid} to email {a_email}")
                    for pv in processed_vendors:
                        if pv.get("email") == a_email:
                            pv["auth_row_id"] = a_rid
                            break
            
        if batch_auth_update:
            logger.info(f"📤 Updating {len(batch_auth_update)} Auth Methods: {batch_auth_update}")
            seatable.perform_table_operation("Auth Methods", row_data=batch_auth_update, type_batch="batch_update_rows", base_data="core_identity")
            
        # Finalize Identity updates from map
        batch_id_update = [{"row_id": k, "row": v} for k, v in id_updates_map.items()]
        if batch_id_update:
            logger.info(f"📤 Updating {len(batch_id_update)} Identities: {batch_id_update}")
            seatable.perform_table_operation("Identity", row_data=batch_id_update, type_batch="batch_update_rows", base_data="core_identity")

        # Step 4.3: Bidirectional Linking via add_link
        logger.info("🔗 Starting post-batch linking phase...")
        for pv in processed_vendors:
            brid_i = pv.get("identity_row_id")
            brid_a = pv.get("auth_row_id")
            brid_v = pv.get("vendor_row_id")
            email = pv.get("email")
            
            logger.info(f"Processing links for {email}: Identity={brid_i}, Auth={brid_a}, Vendor={brid_v}")
            print(f"------------------------Processing links for {email}: Identity={brid_i}, Auth={brid_a}, Vendor={brid_v}, table_name={table_name}")
            # 1. Link Identity <-> Vendor
            if brid_i and brid_v and table_name == "Vendors":
                logger.info(f"Linking Identity {brid_i} to Vendor {brid_v}...")
                seatable.perform_link_operation(link_id_v_id, brid_i, brid_v, "Identity", "Vendors", base_data="core_identity")
            
            # 2. Link Identity <-> Auth Method (Bidirectional)
            # Both columns must be linked if they are NOT the same relationship
            if brid_i and brid_a:
                logger.info(f"Linking Identity {brid_i} to Auth Method {brid_a}...")
                seatable.perform_link_operation(link_id_id_auth, brid_i, brid_a, "Identity", "Auth Methods", base_data="core_identity")
                
                logger.info(f"Linking Auth Method {brid_a} back to Identity {brid_i}...")
                seatable.perform_link_operation(link_id_auth_id, brid_a, brid_i, "Auth Methods", "Identity", base_data="core_identity")

        # 5. Send Emails and Update Vendors
        sent_count = 0
        batch_vendor_cleanup = []
        
        notifications_email = getattr(Config, 'MAIL_FROM', 'notifications@prismgrp.com')
        
        for pv in processed_vendors:
            try:
                # Template Rendering
                rendered_subject = subject_template.replace("{{Application}}", pv["app_name"])
                rendered_subject = rendered_subject.replace("{{FirstName}}", pv["first_name"])
                
                rendered_body = body_html_template.replace("{{Application}}", pv["app_name"])
                rendered_body = rendered_body.replace("{{FirstName}}", pv["first_name"])
                rendered_body = rendered_body.replace("{{Email}}", pv["email"])
                rendered_body = rendered_body.replace("{{Token}}", pv["token"])
                rendered_body = rendered_body.replace("{{Public URL}}", pv["public_url"])
                rendered_body = rendered_body.replace("{{Notifications Email}}", notifications_email)
                
                # Send Email
                email_success = send_email(pv["email"], rendered_subject, rendered_body)
                
                if email_success:
                    logger.info(f"✅ Welcome email sent successfully to {pv['email']}")
                    sent_count += 1
                    # Prepare for vendor update
                    cleanup_data = {
                        "row_id": pv["vendor_row_id"],
                        "row": {
                            "Send Welcome Email": False,
                            "Welcome Email Sent": now_iso
                        }
                    }
                    batch_vendor_cleanup.append(cleanup_data)
                else:
                    logger.warning(f"❌ Failed to send welcome email to {pv['email']}. Record will NOT be updated in Vendors.")
                    
            except Exception as e:
                logger.error(f"❌ Error sending welcome email to {pv['email']}: {e}")
                import traceback
                logger.error(traceback.format_exc())

        # 6. Bulk update Vendors table
        if batch_vendor_cleanup:
            logger.info(f"🧹 Clearing 'Send Welcome Email' flag for {len(batch_vendor_cleanup)} vendors: {batch_vendor_cleanup}")
            # We always update the 'Vendors' table as confirmed by the user
            res_cleanup = seatable.perform_table_operation("Vendors", row_data=batch_vendor_cleanup, type_batch="batch_update_rows", base_data="core_identity")
            logger.info(f"✅ Cleanup result: {res_cleanup}")
        else:
            logger.warning("⚠️ No vendors were marked for cleanup (maybe emails failed to send?)")

        return {
            "success": True, 
            "message": f"Welcome email process completed. Sent {sent_count} emails.", 
            "processed_count": len(vendors),
            "sent_count": sent_count
        }

    except Exception as e:
        print(f"❌ Error in process_welcome_email_flow: {e}")
        import traceback
        traceback.print_exc()
        return {"success": False, "message": str(e)}

# ============================================================================
# OAUTH FUNCTIONS
# ============================================================================

def get_google_oauth_url(app_key=None):
    """
    Constructs the authorization URL for Google login.
    """
    random_state = secrets.token_urlsafe(32)
    state = f"{random_state}"
    if app_key:
        state = f"{random_state}___{app_key}"
    
    print(f"Generated OAuth state: {state}")
    
    # For OAuth, we use the domain configured in .env because it must match Google's whitelist
    domain = Config.URL_REDIRECT_CALLBACK.rstrip('/')
    redirect_uri = f'{domain}/api/auth/callback'
    print(f"DEBUG: Google Redirect URI: {redirect_uri}")
    
    google_client_id = Config.GOOGLE_CLIENT_ID
    
    auth_url = (
        f"https://accounts.google.com/o/oauth2/v2/auth?"
        f"client_id={google_client_id}&"
        f"redirect_uri={redirect_uri}&"
        f"scope=openid email profile&"
        f"response_type=code&"
        f"state={state}&"
        f"access_type=offline"
    )
    
    return {'auth_url': auth_url, 'state': state}


def get_microsoft_oauth_url(app_key=None):
    """
    Constructs the authorization URL for Microsoft login.
    Manage session state using a unique random token.
    """
    random_state = secrets.token_urlsafe(32)
    state = f"{random_state}"
    if app_key:
        state = f"{random_state}___{app_key}"
    
    print(f"Generated Microsoft OAuth state: {state}")
    
    # For OAuth, we use the domain configured in .env because it must match Microsoft's whitelist
    domain = Config.URL_REDIRECT_CALLBACK.rstrip('/')
    redirect_uri = f'{domain}/api/auth/microsoft/callback'
    print(f"DEBUG: Microsoft Redirect URI: {redirect_uri}")
    
    microsoft_client_id = Config.MICROSOFT_CLIENT_ID
    
    auth_url = (
        "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?"
        f"client_id={microsoft_client_id}&"
        f"response_type=code&"
        f"redirect_uri={redirect_uri}&"
        "scope=openid email profile User.Read&"
        f"state={state}&"
        "response_mode=query"
    )
    
    return {'auth_url': auth_url, 'state': state}


def register_manual_user(userinfo):
    """
    Orchestrates the registration of a new user via the email provider.
    
    Objective:
    - Validate mandatory fields and credential strength before persistence.
    - Detect existing users to prevent duplication or suggest activation resend.
    - Initiate physical creation in the database and trigger the first confirmation email.
    - Return the appropriate redirection point according to the registration status.
    """
    try:
        email = userinfo.get('email')
        password = userinfo.get('password')
        first_name = userinfo.get('given_name') or userinfo.get('firstName')
        last_name = userinfo.get('family_name') or userinfo.get('lastName')

        # 1. CRITICAL VALIDATIONS
        if not email:
            return {'success': False, 'error': t('email_required')}
        
        # If it's a manual registration (Email), we validate mandatory fields
        if not password:
            return {'success': False, 'error': t('password_required_email_reg')}
        
        # Validate password strength
        is_strong, msg = validate_password_strength(password)
        if not is_strong:
            return {'success': False, 'error': msg} # Assuming validate_password_strength returns translated or simple msg
        
        if not first_name or not last_name:
            return {'success': False, 'error': t('first_last_name_required')}

        # Normalize names for insert_user_in_database
        userinfo['given_name'] = first_name
        userinfo['family_name'] = last_name
    
        
        # Check if email is already registered
        # Escape quotes for security
        escaped_email = email.replace("'", "''")
        
        user_rows = seatable.sql_query_one(
            f"SELECT * FROM `Auth Methods` WHERE Email = '{escaped_email}'"
        , base_data="core_identity")
        
        if user_rows:
            existing_user = user_rows[0]
            # If exists, check status
            is_verified = existing_user.get('Verified')
            provider = existing_user.get('Auth Provider')
            
            # If already verified or from another provider (Google/MS), block
            if is_verified:
                print(f"👤 This email is already Registered and Verified ({provider})")
                return {'success': False, 'error': t('email_already_registered')}
            
            # If EXISTS but NOT verified and is Email provider, allow "overwrite/resend"
            if provider == 'Email':
                print(f"ℹ️ User exists but is NOT verified. Retrying registration/resend.")
                # Check Rate Limit before resending in registration
                # Pass _id for precision
                success, message, wait_time = resend_confirmation_email_logic(email, user_id=existing_user.get("_id"))
                if success:
                    return {
                        'success': True, 
                        'user': existing_user, 
                        'redirect_url': '/esperando-confirmacion', 
                        'message': message,
                        'wait_seconds': 0
                    }
                else:
                    return {
                        'success': True, 
                        'message': t('wait_before_requesting', wait_seconds=f"{wait_time // 60}m {wait_time % 60}s"),
                        'redirect_url': '/esperando-confirmacion',
                        'wait_seconds': wait_time
                    }
            else:
                # Rare case: Not verified but different provider? Block just in case
                return {'success': False, 'error': t('email_registered_with', provider=provider)}
        
        print(f"👤 Proceeding with user registration/update")
        
        user = insert_user_in_database(userinfo, "Email")
        print('user:', user)
        
        if isinstance(user, list) and len(user) > 0:
            user = user[0]
        
        # Since it's a new user, send directly (enviar_email_confirm_manual already sets Last Email Sent)
        if send_manual_confirmation_email(email, user['_id']):
            return {
                'success': True, 
                'user': user, 
                'redirect_url': '/esperando-confirmacion',
                'message': t('confirmation_email_sent'),
                'wait_seconds': 0
            }
        else:
            return {'success': False, 'error': t('error_sending_confirmation')}
            
    except Exception as e:
        print(f"❌ Error in register_manual_user: {e}")
        import traceback
        traceback.print_exc()
        return {'success': False, 'error': str(e)}


def process_google_callback(code, state, expected_state):
    """
    Processes the Google return after successful user authorization.
    """
    try:
        # Extract app_key from state if present
        app_key = None
        if state and "___" in state:
            state_parts = state.split("___")
            state = state_parts[0]
            if len(state_parts) > 1:
                app_key = state_parts[1]

        # Extract app_key from expected_state if it was stored with it
        if expected_state and "___" in expected_state:
            expected_state = expected_state.split("___")[0]

        if state != expected_state:
            print(f"State mismatch: received {state}, expected {expected_state}")
            return {'success': False, 'error': 'state_mismatch'}

        
        # Exchange code for token
        domain = Config.URL_REDIRECT_CALLBACK.rstrip('/')
        redirect_uri = f'{domain}/api/auth/callback'
        
        token_url = 'https://oauth2.googleapis.com/token'
        token_data = {
            'client_id': Config.GOOGLE_CLIENT_ID,
            'client_secret': Config.GOOGLE_CLIENT_SECRET,
            'code': code,
            'grant_type': 'authorization_code',
            'redirect_uri': redirect_uri
        }
        
        token_response = requests.post(token_url, data=token_data)
        token_json = token_response.json()
        
        if 'error' in token_json:
            print(f"Token exchange error: {token_json}")
            return {'success': False, 'error': 'token_exchange_failed'}
        
        access_token = token_json.get('access_token')
        
        # Get user info from Google
        userinfo_url = 'https://www.googleapis.com/oauth2/v2/userinfo'
        headers = {'Authorization': f'Bearer {access_token}'}
        userinfo_response = requests.get(userinfo_url, headers=headers)
        userinfo = userinfo_response.json()
        
        if 'error' in userinfo:
            print(f"Userinfo error: {userinfo}")
            return {'success': False, 'error': 'userinfo_failed'}
        
        # Create or update user
        auth_row = insert_user_in_database(userinfo, "Google", app_key=app_key)
        
        if auth_row:
            # Asegurar que auth_row sea un dict
            if isinstance(auth_row, list):
                auth_row = auth_row[0]
            
            # Obtener ID de identidad de forma resiliente para la sesión
            row_identity_id = None
            identity_links = auth_row.get("Identity", [])
            if identity_links:
                link = identity_links[0]
                if isinstance(link, dict):
                    row_identity_id = link.get("row_id")
                else:
                    # Es un string, intentamos resolverlo vía get_row si tenemos el ID
                    auth_id = auth_row.get("_id")
                    if auth_id:
                        fresh_auth = seatable.get_row("Auth Methods", auth_id, base_data="core_identity")
                        if fresh_auth and fresh_auth.get("Identity"):
                            row_identity_id = fresh_auth.get("Identity")[0].get("row_id")

            from flask import session
            session.permanent = True
            session['user_id'] = auth_row.get('_id')
            session['row_auth_methods'] = auth_row.get('_id')
            session['row_identity'] = row_identity_id
            session['vendor_email'] = userinfo['email']
            
            # El contexto final se encarga de todo lo pesado
            u_final = _get_user_context(userinfo['email'], provider="Google", bypass_cache=True, initial_auth_row=auth_row, app_key=app_key)
            return {'success': True, 'user': u_final}
        
        return {'success': False, 'error': 'user_not_found'}
        
    except Exception as e:
        print(f"OAuth callback error: {e}")
        import traceback
        traceback.print_exc()
        return {'success': False, 'error': 'oauth_failed'}


def process_microsoft_callback(code, state, expected_state):
    """
    Processes the Microsoft return after user authorization.
    """
    try:
        # Extract app_key from state if present
        app_key = None
        if state and "___" in state:
            state_parts = state.split("___")
            state = state_parts[0]
            if len(state_parts) > 1:
                app_key = state_parts[1]

        # Extract app_key from expected_state if it was stored with it
        if expected_state and "___" in expected_state:
            expected_state = expected_state.split("___")[0]

        if state != expected_state:
            return {'success': False, 'error': 'state_mismatch'}
        
        # Exchange code for token
        token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token"
        
        domain = Config.URL_REDIRECT_CALLBACK.rstrip('/')
        redirect_uri = f'{domain}/api/auth/microsoft/callback'
        
        token_data = {
            "client_id": Config.MICROSOFT_CLIENT_ID,
            "client_secret": Config.MICROSOFT_CLIENT_SECRET,
            "code": code,
            "grant_type": "authorization_code",
            "redirect_uri": redirect_uri,
        }
        
        token_response = requests.post(token_url, data=token_data)
        token_json = token_response.json()
        
        if "error" in token_json:
            return {'success': False, 'error': 'token_exchange_failed'}
        
        access_token = token_json.get("access_token")
        
        # Get user data from Graph
        graph_user_url = "https://graph.microsoft.com/v1.0/me"
        headers = {"Authorization": f"Bearer {access_token}"}
        graph_res = requests.get(graph_user_url, headers=headers)
        userinfo = graph_res.json()
        print(f"Voy a imprimir lo que me suelta Microsoft {userinfo}")
        
        # Normalize fields
        final_userinfo = {
            "email": userinfo.get("mail") or userinfo.get("userPrincipalName"),
            "given_name": userinfo.get("givenName"),
            "family_name": userinfo.get("surname"),
        }
        
        # Insert user
        auth_row = insert_user_in_database(final_userinfo, "Microsoft", app_key=app_key)

        
        if auth_row:
            if isinstance(auth_row, list):
                auth_row = auth_row[0]

            # Obtener ID de identidad de forma resiliente para la sesión
            row_identity_id = None
            identity_links = auth_row.get("Identity", []) # Assuming IDENTITY_LINK_COL is "Identity"
            if identity_links:
                link = identity_links[0]
                if isinstance(link, dict):
                    row_identity_id = link.get("row_id")
                else:
                    auth_id = auth_row.get("_id")
                    if auth_id:
                        fresh_auth = seatable.get_row("Auth Methods", auth_id, base_data="core_identity") # Assuming PORTAL_USERS_TABLE is "Auth Methods"
                        if fresh_auth and fresh_auth.get("Identity"): # Assuming IDENTITY_LINK_COL is "Identity"
                            row_identity_id = fresh_auth.get("Identity")[0].get("row_id")

            from flask import session
            session.permanent = True
            session['user_id'] = auth_row.get('_id')
            session['row_auth_methods'] = auth_row.get('_id')
            session['row_identity'] = row_identity_id
            session['vendor_email'] = final_userinfo['email']

            # Obtain context injecting the previous result to save a query
            u_final = _get_user_context(final_userinfo['email'], provider="Microsoft", bypass_cache=True, initial_auth_row=auth_row, app_key=app_key)
            return {'success': True, 'user': u_final}
            
        return {'success': False, 'error': 'user_not_found'}
        
    except Exception as e:
        print(f"[MICROSOFT CALLBACK ERROR] {e}")
        import traceback
        traceback.print_exc()
        return {'success': False, 'error': 'oauth_failed'}

def prepare_session_data(user):
    """
    Prepares the session data dictionary to be stored in Flask Session.
    
    Objective:
    - Centralize the data structure stored in the session cookie.
    - Resolve critical links (Identity, Collaborator) to have them available in each request.
    - Ensure 'vendor_email' is always the user's primary email.
    """
    # We optimize: If the 'user' object already brings the identity (link),
    # we try to use that data to avoid repetitive SQL calls.
    
    identity_links = user.get('Identity', [])
    if not identity_links:
        # Fallback: We cannot prepare a complete session without a linked identity
        return {
            'user_id': user.get('_id'),
            'row_auth_methods': user.get('_id'),
            'id_auth_methods': user.get('ID'),
            'vendor_email': user.get('Email')
        }

    # Identificar Identity row_id y display value
    identity_row_id = None
    identity_display = None
    
    if identity_links:
        link = identity_links[0]
        if isinstance(link, dict):
            identity_row_id = link.get('row_id')
            identity_display = link.get('display_value')
        else:
            # Si es un string (display value), intentamos usarlo como display
            # Nota: sin el row_id real, algunas liquidaciones posteriores podrían fallar,
            # pero al menos no crashea aquí.
            identity_display = link
            identity_row_id = link # Fallback arriesgado
            
            # Si tenemos el ID de Auth Method, intentamos un re-fetch para obtener el row_id real
            auth_row_id = user.get('_id')
            if auth_row_id:
                base = seatable.get_base("core_identity")
                fresh_user = base.get_row("Auth Methods", auth_row_id)
                if fresh_user and fresh_user.get("Identity"):
                    fresh_link = fresh_user.get("Identity")[0]
                    if isinstance(fresh_link, dict):
                        identity_row_id = fresh_link.get("row_id")
                        identity_display = fresh_link.get("display_value")

    # Roles (No longer obtained from Identity.Role, handled via Assignments and Permissions)
    roles_list = []


    # Primary Email (obtener primero para pasarlo a get_collaborator_info_from_identity)
    email_primary = get_email_primary_from_auth(identity_display)
    
    # Collaborator Info (ahora recibe el email del usuario)
    collaborator_info = get_collaborator_info_from_identity(identity_row_id, user_email=email_primary or user.get('Email'))

    session_data = {
        'user_id': user.get('_id'),
        'row_auth_methods': user.get('_id'),
        'row_identity': identity_row_id,
        'id_identity': identity_display,
        'id_auth_methods': user.get('ID'),
        'roles': roles_list,
        'vendors_array': [], # Placeholder para futuro uso
        'collaborator_info': collaborator_info,
        'vendor_email': email_primary or user.get('Email')
    }

    return session_data


def change_password_service(user_email, current_password, new_password, user):
    """
    Service in charge of secure password updates.
    
    Objective:
    - Validate current password is correct before allowing the change.
    - Ensure the new password meets strength requirements.
    - Atomically update the hash in SeaTable.
    """
    """
    Cambia la contraseña del usuario autenticado.
    
    Args:
        user_email: Email del usuario
        current_password: Contraseña actual
        new_password: Nueva contraseña
        user: Datos del usuario desde get_current_user()
        
    Returns:
        dict: {'success': bool, 'message': str}
    """
    try:
        # Validate password strength
        is_strong, msg = validate_password_strength(new_password)
        if not is_strong:
            return {'success': False, 'message': msg}
        
        escaped_email = user_email.replace("'", "''")
        user_data = seatable.sql_query_one(
            f"SELECT * FROM `Auth Methods` WHERE Email = '{escaped_email}' AND `Verified` = True", base_data="core_identity"
        )
        
        if not user_data or len(user_data) == 0:
            return {'success': False, 'message': 'User not found or email not confirmed'}

        user_record = user_data[0]
        
        # Verify that the user has an Auth Provider that allows password change
        # We only allow password changes for users of the 'Email' provider
        auth_provider = user_record.get('Auth Provider', '')
        if auth_provider and auth_provider.lower() != 'email':
            return {
                'success': False,
                'message': f'Password change is not available for {auth_provider} users. Please change your password through your provider.'
            }
        
        stored_password = user_record.get('Password')
        if not stored_password:
            return {'success': False, 'message': 'No password found for this user. Please contact support.'}
        
        # Verify that the current password is correct
        password_bytes = current_password.encode('utf-8')
        if not bcrypt.checkpw(password_bytes, stored_password.encode('utf-8')):
            return {'success': False, 'message': 'Current password is incorrect'}
        
        # Verify that the new password is different from the current one
        if bcrypt.checkpw(new_password.encode('utf-8'), stored_password.encode('utf-8')):
            return {'success': False, 'message': 'New password must be different from current password'}
        
        # Hash the new password
        new_password_bytes = new_password.encode('utf-8')
        salt = bcrypt.gensalt()
        hashed_new_password = bcrypt.hashpw(new_password_bytes, salt)
        
        # Update password in Seatable
        user_id = user_data[0].get('_id')
        if not user_id:
            return {'success': False, 'message': 'User ID not found'}
        
        update_result = seatable.perform_table_operation(
            table_name="Auth Methods",
            row_data={"Password": hashed_new_password.decode()},
            type_batch="update_row",
            row_id=user_id,
            base_data="core_identity"
        )
        
        if update_result:
            print(f"✅ Password successfully updated for user: {user_email}")
            return {'success': True, 'message': t('password_changed_success')}
        else:
            print(f"❌ Error updating password for user: {user_email}")
            return {'success': False, 'message': t('password_update_failed')}
            
    except Exception as e:
        print(f"❌ Error changing password: {e}")
        import traceback
        traceback.print_exc()
        return {'success': False, 'message': f'An error occurred while changing password: {str(e)}'}


def get_roles_from_identity(identity_row_id):
    """
    Retrieves the roles associated with an identity.
    
    Objective:
    - Get the 'Vendor ID' field that functions as a reference to user roles.
    - Serve as a basis for permission resolution in the session flow.
    """

    roles = seatable.sql_query_one(
        f"SELECT `Vendor ID` FROM `Identity` WHERE `_id` = '{identity_row_id}'"
    , base_data="core_identity")
    return roles



def get_collaborator_info_from_identity(identity_row_id, user_email=None):
    """
    Obtains detailed information on collaborators linked to an identity.
    
    Objective:
    - Resolve the relationship between an Identity and its records in the Collaborators table.
    - Extract the 'Seatable User' and email for use in business logic and UI.
    - NUEVO: También incluir personas que tienen al usuario como su manager (Manager Emails).
    - Normalize the response to facilitate its consumption in the user's context.
    
    Args:
        identity_row_id: ID de la identidad
        user_email: Email del usuario (opcional, se usa para buscar Manager Emails)
    """
    
    row = seatable.sql_query_one(
        f"SELECT `Collaborator ID` FROM `Identity` WHERE `_id` = '{identity_row_id}'",
        base_data="core_identity"
    )

    if not row:
        print(f"⚠️ Identity not found with _id={identity_row_id}")
        return []

    if isinstance(row, list):
        row = row[0] if row else None

    result = []
    
    # Procesar colaboradores directos (si existen)
    links = (row or {}).get("Collaborator ID") or []
    if isinstance(links, list) and len(links) > 0:
        row_ids = [x.get("row_id") for x in links if isinstance(x, dict) and x.get("row_id")]
        
        if row_ids:
            # Query the Collaborators table for additional details
            ids_str = "', '".join(row_ids)
            collab_details = seatable.sql_query(
                f"SELECT `_id`, `Seatable User`, `Email address` FROM `Collaborators` WHERE `_id` IN ('{ids_str}')",
                base_data="core_identity"
            )

            for detail in collab_details:
                email = detail.get("Email address")
                result.append({
                    "row_id": detail.get("_id"),
                    "email": email,
                    "seatable_user": detail.get("Seatable User")
                })
                # Si no se pasó user_email como parámetro, intentar obtenerlo de los colaboradores
                if email and not user_email:
                    user_email = email

    # NUEVO: Buscar Manager Emails (personas que tienen al usuario como manager)
    # Usando calculate_team_hierarchy para obtener TODA la jerarquía recursiva
    print("----------------------------------------------------------------")
    print(f"🔍 Buscando jerarquía completa para: {user_email}")
    if user_email:
        # Obtener todos los colaboradores para calcular la jerarquía
        all_collabs = seatable.sql_query(
            "SELECT `Email address`, `Manager Email` FROM `Collaborators` WHERE `Email address` IS NOT NULL",
            base_data="core_identity"
        )
        
        # Calcular la jerarquía completa (recursiva)
        from src.utils.team_util import calculate_team_hierarchy
        hierarchy = calculate_team_hierarchy(user_email, all_collabs)
        
        team_members = hierarchy.get("members", [])
        print(f"✅ Jerarquía calculada: {len(team_members)} miembro(s) en total")
        
        if team_members:
            # Obtener los detalles de todos los miembros del equipo
            # Crear una consulta para buscar por emails
            emails_str = "', '".join(team_members)
            team_details = seatable.sql_query(
                f"SELECT `_id`, `Email address`, `Seatable User` FROM `Collaborators` WHERE `Email address` IN ('{emails_str}')",
                base_data="core_identity"
            )
            
            # Agregar al resultado (evitando duplicados)
            for person in team_details:
                person_id = person.get("_id")
                if not any(r["row_id"] == person_id for r in result):
                    result.append({
                        "row_id": person_id,
                        "email": person.get("Email address"),
                        "seatable_user": person.get("Seatable User")
                    })
                    print(f"   ➕ Agregado: {person.get('Email address')}")

    return result


def get_email_primary_from_auth(identity_id):
    """
    Identifies the email marked as primary for a specific identity.
    
    Objective:
    - Ensure communications and session identification use the main email.
    - Manage the 'Is Primary' logic in the Auth Methods table.
    """


    row = seatable.sql_query_one(
        f"SELECT `Email` FROM `Auth Methods` WHERE `Identity` = '{identity_id}' and `Is Primary` = True",
        base_data="core_identity"
    )

    # sql_query_one sometimes returns a dict and sometimes a list; normalize
    if not row:
        print(f"⚠️ Identity not found with id={identity_id}")
        return []

    if isinstance(row, list):
        row = row[0] if row else None

    row_email =row.get("Email")
    return row_email


def get_debug_user_info(email, current_url=None):
    """
    Collects comprehensive Core Identity information for technical diagnostic purposes.
    
    Objective:
    - Map the complete relationship between Identity, Auth Methods, and Assignments.
    - Show which App Key is being detected and what permissions result from that app.
    - Visualize the account status and creation metadata for debugging.
    """
    from src.services.identity_service import identity_service
    
    debug_data = {
        "identity": None,
        "app_key": None,
        "permissions": [],
        "assignments": [],
        "roles": []
    }
    
    # 1. Search in Auth Methods to get the linked Identity
    escaped_email = email.replace("'", "''")
    auth_rows = seatable.sql_query(
        f"SELECT `Identity`, `Email`, `ID` FROM `Auth Methods` WHERE `Email` = '{escaped_email}'", 
        base_data="core_identity"
    )
    
    if not auth_rows:
        return debug_data

    identity_links = auth_rows[0].get("Identity", [])
    if not identity_links:
        return debug_data
        
    identity_id = identity_links[0].get("row_id")
    user_email = auth_rows[0].get("Email")

    # 2. Obtain App Key according to the URL (if provided)
    app_key = identity_service.get_app_key_by_url(current_url)
    debug_data["app_key"] = app_key

    # 3. Load Identity with Expanded Assignments
    identity_expanded = identity_service.get_identity_with_assignments(identity_id, user_email=user_email, app_key=app_key)
    if not identity_expanded:
        return debug_data
        
    debug_data["identity"] = {
        "First Name": identity_expanded.get("First Name"),
        "Last Name": identity_expanded.get("Last Name"),
        "Status": identity_expanded.get("Status"),
        "Created Date": identity_expanded.get("Created Date"),
        "Identity ID": identity_expanded.get("Identity ID") or identity_expanded.get("Identity")
    }
    debug_data["assignments"] = identity_expanded.get("Assignments", [])
    debug_data["roles"] = identity_expanded.get("Role", [])
    debug_data["auth_method_id"] = auth_rows[0].get("ID")
    # 4. Obtain Permissions filtered by App Key (includes Action Key)
    # If there is no app_key, permissions cannot be filtered by app, but we show them empty with a notice
    if app_key:
        auth_info = identity_service.get_identity_permissions(identity_id, app_key, identity_row=identity_expanded, user_email=user_email)
        debug_data["permissions"] = auth_info.get("permissions", [])
        debug_data["data_mode"] = auth_info.get("data_mode")
        debug_data["data_mode_info"] = auth_info.get("data_mode_info")
    else:
        debug_data["permissions_note"] = "App Key not detected for the URL, permissions were not filtered."

    return debug_data

# ============================================================================
# SESSION VERIFICATION AND FALLBACK LOGIC
# ============================================================================

def verify_session(email=None, token=None):
    """
    Session validity validation engine.
    
    Objective:
    - Check the existence and 'Active' status of a session in SeaTable.
    - Use a validation cache to minimize impact on the database.
    - Return detailed session status and basic user metadata.
    """
    # Pure Bearer support: If no email is provided, we try to extract it from the token
    if not email and token:
        try:
            # Lightweight decoding only to extract the email before full validation
            decoded_temp = jwt.decode(token, Config.SECRET_KEY, algorithms=["HS256"], options={"verify_exp": False})
            email = decoded_temp.get("email")
            if not email:
                return {"success": False, "message": t('token_not_belong_user')} # Or more appropriate key
        except Exception:
            return {"success": False, "message": t('invalid_token', error='corrupt')}
    """
    Session validation center (Lightweight).
    - Uses 15-minute cache to avoid redundancy.
    - 1 Query to Sessions: Validates existence, token status, and Identity status (via Link).
    """
    try:
        if not email or not token:
            return {"success": False, "message": t('all_fields_required')}

        # 0. Check Session Cache
        now = time.time()
        cache_key = (email, token)
        if cache_key in _SESSION_VALIDATION_CACHE:
            ts, cached_res = _SESSION_VALIDATION_CACHE[cache_key]
            if now - ts < _SESSION_TTL:
                # print(f"🚀 SESSION CACHE HIT for {email}")
                return cached_res

        # 1. Search for token in Sessions (Real-time security step but with 1 less query)
        # We bring 'Auth Method' to be able to verify the real status of the account later
        query = f"SELECT `_id`, `Status`, `Token`, `Auth Method` FROM `Sessions` WHERE `Token` = '{token}'"
        session_rows = seatable.sql_query(query, base_data="core_identity")
        
        if not session_rows:
            return {"success": False, "message": t('session_not_found')}

        sess = session_rows[0]
        if sess.get("Status") == "Expired":
            return {"success": False, "message": t('session_expired'), "expired": True}
        
        # 2. Validate JWT and extract Identity ID
        try:
            decoded = jwt.decode(token, Config.SECRET_KEY, algorithms=["HS256"])
            if decoded.get("email") != email:
                return {"success": False, "message": t('token_not_belong_user')}
            
            identity_id = decoded.get("identity_id") or decoded.get("user_id")
        except jwt.ExpiredSignatureError:
            # Mark as Expired in DB
            seatable.perform_table_operation(
                table_name="Sessions",
                row_id=sess["_id"],
                row_data={"Status": "Expired"},
                type_batch="update_row",
                base_data="core_identity"
            )
            return {"success": False, "message": t('session_expired'), "expired": True}
        except Exception as e:
            return {"success": False, "message": t('invalid_token', error=str(e))}

        # 3. Verify REAL status of the user (Fresh from Auth Methods)
        # Auth Method link display value in Sessions is usually the ID literal
        auth_method_custom_id = sess.get("Auth Method")
        if isinstance(auth_method_custom_id, list) and len(auth_method_custom_id) > 0:
            auth_method_custom_id = auth_method_custom_id[0].get("display_value")
        
        user_status = "Active"
        if auth_method_custom_id:
             # The user indicates that the Status is in the Identity table.
             # First we need the link to Identity from Auth Methods
             auth_info = seatable.sql_query_one(f"SELECT `Identity` FROM `Auth Methods` WHERE `ID` = '{auth_method_custom_id}'", base_data="core_identity")
             if auth_info:
                 if isinstance(auth_info, list) and len(auth_info) > 0:
                     auth_info = auth_info[0]
                 
                 identity_link = auth_info.get("Identity", [])
                 if identity_link:
                     identity_row_id = identity_link[0].get("row_id")
                     identity_row = seatable.sql_query_one(f"SELECT `Status` FROM `Identity` WHERE `_id` = '{identity_row_id}'", base_data="core_identity")
                     if identity_row:
                         if isinstance(identity_row, list) and len(identity_row) > 0:
                             user_status = identity_row[0].get("Status", "Active")
                         else:
                             user_status = identity_row.get("Status", "Active")
        
        if user_status and user_status != "Active":
            logger.warning(f"🚫 SESSION REJECTED: User {email} is {user_status}")
            return {"success": False, "message": t('account_blocked', status=user_status.lower()), "blocked": True}

        # 4. Save to Cache before returning
        result_success = {"success": True, "identity_id": identity_id, "email": email}
        _SESSION_VALIDATION_CACHE[cache_key] = (now, result_success)
        return result_success

    except Exception as e:
        logger.error(f"Error in verify_session for {email}: {e}", exc_info=True)
        return {"status": False, "message": str(e)}

def get_fallback_session(email=None):
    """
    Exclusive logic for the LOGIN flow.
    Searches for an active session based on IP + Device Name + (optional) Auth Method.
    Validates the found token and renews it if necessary.
    Returns: { "token": str, "user": dict } or None.
    """
    try:
        # Capture IP and UA escaping quotes to avoid SQL errors
        ip_address = request.headers.get('X-Forwarded-For', request.remote_addr) or '127.0.0.1'
        if ',' in ip_address:
            ip_address = ip_address.split(',')[0].strip()
            
        # New cleanup: Remove port or extra identifiers (e.g., 123.123.123.123:5000)
        if ':' in ip_address and ('.' in ip_address or ip_address.count(':') == 1):
             ip_address = ip_address.split(':')[0].strip()
        user_agent = request.headers.get('User-Agent', 'Unknown')
        
        escaped_ip = ip_address.replace("'", "''") if ip_address else ""
        escaped_ua = user_agent.replace("'", "''") if user_agent else "Unknown"

        print(f"🔍 Searching for session fallback for IP: {escaped_ip}, UA: {escaped_ua}, Email: {email}")
        
        # If email exists, get its internal _id first
        auth_method_id = None
        if email:
            escaped_email = email.replace("'", "''")
            auth_rows = seatable.sql_query(f"SELECT `_id` FROM `Auth Methods` WHERE `Email` = '{escaped_email}'", base_data="core_identity")
            if auth_rows:
                auth_method_id = auth_rows[0].get("_id")
            else:
                return None

        # Construct query with IN for the link, which is the correct way in SeaTable to filter by internal row_id
        if auth_method_id:
            query = f"""
                SELECT `Token`, `_id`, `Status` 
                FROM `Sessions` 
                WHERE `Auth Method` IN ('{auth_method_id}')
                  AND `IP` = '{escaped_ip}'
                  AND `Device Name` = '{escaped_ua}'
                  AND `Status` = 'Active'
                ORDER BY _id DESC
            """
        else:
            query = f"SELECT `Token`, `_id`, `Status` FROM `Sessions` WHERE `IP` = '{escaped_ip}' AND `Device Name` = '{escaped_ua}' AND `Status` = 'Active' ORDER BY `_id` DESC"

        session_rows = seatable.sql_query(query, base_data="core_identity")

        if not session_rows:
            print("ℹ️ No previous active session found for this device/IP.")
            return None

        sess = session_rows[0]
        token = sess.get("Token")

        # Validate found token using central JWT logic
        try:
            # Decode only to get the email if we don't have it (without validating exp here)
            decoded = jwt.decode(token, options={"verify_signature": False, "verify_exp": False})
            s_email = decoded.get("email")
            
            if email and s_email != email:
                print(f"⚠️ Found token belongs to {s_email}, but was searching for {email}")
                return None

            # Call verify_session to use the same validation logic
            res = verify_session(s_email, token)
            if res.get("success"):
                logger.info(f"Successful fallback: Session recovered for {s_email}")
                
                # RELOAD: verify_session no longer returns 'user' for optimization (it's lightweight)
                # We load it explicitly here for the login/fallback flow
                user_ctx = _get_user_context(s_email)
                
                return {
                    "token": res.get("token"),
                    "user": user_ctx
                }
            
        except Exception as e:
            logger.warning(f"Invalid fallback token or error: {e}")
            return None

        return None

    except Exception as e:
        logger.error(f"Error in get_fallback_session: {e}", exc_info=True)
        return None

def _clean_user_context_for_frontend(ctx):
    """Cleans context to avoid sending heavy internal IDs if not necessary"""
    if not ctx: return None
    return ctx

def logout_session(token):
    """
    Administratively invalidates a specific session.
    
    Objective:
    - Change session status to 'Expired' in the database.
    - Ensure the JWT token is no longer accepted in future requests.
    """
    """
    Marks a specific session as Expired in the database.
    """
    try:
        if not token: return False
        
        # Search for row ID for update
        query = f"SELECT `_id` FROM `Sessions` WHERE `Token` = '{token}'"
        res = seatable.sql_query(query, base_data="core_identity")
        if res:
            row_id = res[0].get("_id")
            seatable.perform_table_operation(
                "Sessions",
                row_data={"Status": "Expired"},
                type_batch="update_row",
                row_id=row_id,
                base_data="core_identity"
            )
            print(f"✅ Session invalidated in DB: {token[:15]}...")
            return True
        return False
    except Exception as e:
        print(f"❌ Error in logout_session: {e}")
        return False

def close_sessions_logic(email, token=None, all_sessions=False, session_ids=None):
    """
    Programmatic logic for massive or selective session closure.
    
    Objective:
    - Provide a unified interface for remote session closure.
    - Allow the user to close all their sessions except the current one, or select specific IDs.
    - Guarantee that only sessions truly belonging to the requesting user are closed.
    """
    """
    Safely closes a user's sessions.
    Returns: (success, message, closed_count)
    """
    try:
        # 1. Validate security token
        verify_res = verify_session(email, token)
        
        # If not successful, only allow continuing if the error is "Session has expired"
        # because the goal is precisely to close sessions (including this one if that were the case)
        if not verify_res.get("success"):
            if verify_res.get("expired"):
                print(f"ℹ️ Proceeding with logout even though the current session already expired for {email}")
            else:
                return False, t('unauthorized', message=verify_res.get('message', 'Invalid token')), 0

        # 2. Obtain Auth Method ID associated with the email
        escaped_email = email.lower().strip().replace("'", "''")
        auth_row = seatable.sql_query_one(
            f"SELECT _id, ID FROM `Auth Methods` WHERE Email = '{escaped_email}' AND `Auth Provider` = 'Email' ORDER BY `Last Email Sent` DESC",
            base_data="core_identity"
        )
        if isinstance(auth_row, list):
            auth_row = auth_row[0] if auth_row else None

        if not auth_row:
            return False, t('user_not_found'), 0
            
        auth_method_custom_id = auth_row.get("ID")

        # 3. Determine which sessions to close
        ids_to_expire = []
        if all_sessions:
            query = f"SELECT _id FROM `Sessions` WHERE `Auth Method` = '{auth_method_custom_id}' AND `Status` = 'Active'"
            sessions_res = seatable.sql_query(query, base_data="core_identity")
            if sessions_res:
                ids_to_expire = [s.get("_id") for s in sessions_res]
        elif session_ids:
            # Sanitize IDs
            clean_ids = [str(sid).replace("'", "''") for sid in session_ids]
            ids_str = "', '".join(clean_ids)
            query = f"SELECT _id FROM `Sessions` WHERE `_id` IN ('{ids_str}') AND `Auth Method` = '{auth_method_custom_id}' AND `Status` = 'Active'"
            sessions_res = seatable.sql_query(query, base_data="core_identity")
            if sessions_res:
                ids_to_expire = [s.get("_id") for s in sessions_res]
        else:
            return False, "No sessions or 'all_sessions' flag provided", 0

        if not ids_to_expire:
            return True, t('no_active_sessions_found'), 0

        # 4. Mark as Expired
        for row_id in ids_to_expire:
            seatable.perform_table_operation(
                "Sessions",
                row_data={"Status": "Expired"},
                type_batch="update_row",
                row_id=row_id,
                base_data="core_identity"
            )

        return True, t('sessions_closed_success', count=len(ids_to_expire)), len(ids_to_expire)

    except Exception as e:
        print(f"❌ Error in close_sessions_logic: {e}")
        return False, str(e), 0
