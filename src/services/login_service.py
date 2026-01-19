"""
Login Service
=============
This module contains all business logic related to user authentication and management:
- User creation and updates
- Email confirmation
- Password authentication
- Password reset functionality
"""

from src.services.seatable_service import seatable
import time
import bcrypt
import secrets
import requests
import jwt
import datetime
from src.utils.post_email_util import send_email
from config import Config
from flask import request
import string
from src.utils.logger import logger


# ============================================================================
# USER MANAGEMENT FUNCTIONS
# ============================================================================



import bcrypt


# Caché global para contextos de usuario (Email + AppKey)
_USER_CONTEXT_CACHE = {}  # { (email, app_key): (timestamp, data) }
_CONTEXT_TTL = 900        # 15 minutos

# Caché global para validación de sesiones
_SESSION_VALIDATION_CACHE = {} # { (email, token): (timestamp, data) }
_SESSION_TTL = 900             # 15 minutos

import re

def validate_password_strength(password):
    """
    Valida que la contraseña cumpla con criterios de seguridad:
    - Mínimo 8 caracteres
    - Al menos una mayúscula
    - Al menos una minúscula
    - Al menos un número
    - Al menos un carácter especial
    """
    if len(password) < 8:
        return False, "La contraseña debe tener al menos 8 caracteres"
    if not re.search(r"[A-Z]", password):
        return False, "La contraseña debe incluir al menos una letra mayúscula"
    if not re.search(r"[a-z]", password):
        return False, "La contraseña debe incluir al menos una letra minúscula"
    if not re.search(r"\d", password):
        return False, "La contraseña debe incluir al menos un número"
    if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        return False, "La contraseña debe incluir al menos un carácter especial (ej: !@#$%)"
    
    return True, "Contraseña válida"

def _get_user_context(email, provider=None, bypass_cache=False):
    """
    Función interna para obtener el contexto completo del usuario necesario para la sesión.
    Retorna: { 'auth_method_id', 'identity_id', 'user_info', 'roles', 'assignments' }
    """
    from src.services.identity_service import identity_service
    
    # 1. Detectar App Key primero para usarlo en la llave del caché
    app_key = identity_service.get_app_key_by_url()
    
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
                allowed_apps = cached_data.get("apps", [])
                allowed_apps_names = [a.get("appName") for a in allowed_apps if a.get("appName")]
                return {
                    "success": False,
                    "message": f"No tienes permisos para acceder a esta aplicación. Apps autorizadas: {', '.join(allowed_apps_names) if allowed_apps_names else 'ninguna'}",
                    "apps": allowed_apps
                }

            cached_data["success"] = True
            return cached_data

    logger.info(f"USER CONTEXT CACHE MISS para {email} [{app_key}] - Cargando de SeaTable...")
    
    escaped_email = email.replace("'", "''")
    # 0. Obtener Auth Method e Identity ID
    where_provider = ""
    if provider:
        where_provider = f" AND `Auth Provider` = '{provider}'"
    
    auth_rows = seatable.sql_query(
        f"SELECT `Identity`, `Email`, `ID`, `_id`, `Profile Image URL` FROM `Auth Methods` WHERE `Email` = '{escaped_email}'{where_provider} ORDER BY `Is Primary` DESC, `_id` DESC", 
        base_data="core_identity"
    )
    
    if not auth_rows:
        return None

    row_auth = auth_rows[0]
    identity_links = row_auth.get("Identity", [])
    if not identity_links:
        logger.warning(f"Usuario {email} no tiene Identity vinculado.")
        return None
        
    identity_id = identity_links[0].get("row_id")
    
    # 0.5 Verificar Status en la tabla Identity (Indicado por el usuario)
    identity_row = seatable.sql_query_one(f"SELECT `Status` FROM `Identity` WHERE `_id` = '{identity_id}'", base_data="core_identity")
    identity_status = "Active"
    if identity_row:
        if isinstance(identity_row, list) and len(identity_row) > 0:
            identity_status = identity_row[0].get("Status", "Active")
        else:
            identity_status = identity_row.get("Status", "Active")
    
    # Interceptación por Estatus de la Identidad
    if identity_status and identity_status != "Active":
        print(f"🛑 IDENTITY BLOCKED: User {email} has status {identity_status}")
        return {
            "success": False,
            "message": f"Tu cuenta está {identity_status.lower()}. Por favor contacta a soporte.",
            "apps": []
        }

    auth_method_id = row_auth.get("_id")
    auth_method_custom_id = row_auth.get("ID")
    profile_image_url = row_auth.get("Profile Image URL")

    # 1. Detectar App Key (Usando el nuevo X-REQUEST-URL si existe)
    from src.services.identity_service import identity_service
    app_key = identity_service.get_app_key_by_url()

    # 2. Verificar Permisos Básicos antes de seguir (Interceptación Temprana)
    auth_data = {"permissions": [], "data_mode": "deny"}
    if app_key:
        auth_data = identity_service.get_identity_permissions(identity_id, app_key, user_email=email)
        
    has_roles = len(auth_data.get("data_mode_info", {}).get("roles", [])) > 0
    has_perms = len(auth_data.get("permissions", [])) > 0
    
    # 3. Bloqueo TOTAL si no tiene acceso o está bloqueado en Identity
    if not (has_roles or has_perms):
        print(f"🛑 ACCESS DENIED: User {email} unauthorized for App {app_key or 'None'}")
        
        # Cargar solo las apps autorizadas para informar al usuario
        temp_identity = identity_service.get_identity_with_assignments(identity_id, user_email=email, app_key="___forbidden___")
        allowed_apps = temp_identity.get("apps", [])
        allowed_apps_names = [a.get("appName") for a in allowed_apps if a.get("appName")]
        
        return {
            "success": False,
            "message": f"No tienes permisos para acceder a esta aplicación. Apps autorizadas: {', '.join(allowed_apps_names) if allowed_apps_names else 'ninguna'}",
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
        logger.error(f"Error cargando sesiones para {email}: {e_sess}")

    # Enriquecer con los permisos ya calculados
    identity_data["permissions"] = auth_data.get("permissions", [])
    identity_data["dataMode"] = auth_data.get("data_mode", "deny")
    identity_data["dataModeInfo"] = auth_data.get("data_mode_info", {})
    identity_data["appKey"] = app_key
    
    # Obtener info visual de la app actual (Colores)
    all_apps = identity_service._get_all_apps_cached()
    current_app_meta = next((a for a in all_apps if a.get("App Key") == app_key), {})
    identity_data["app_info"] = {
        "primaryColor": current_app_meta.get("Primary Color"),
        "backgroundColor": current_app_meta.get("Background Color"),
        "appName": current_app_meta.get("App Name")
    }

    # Enriquecer con metadatos de sesión
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
    Genera un JWT y persiste la sesión en la tabla `Sessions`.
    Expliración: 180 días por defecto. 30 días si provider=Email y temp_device=True.
    """
    try:
        if not user_context:
            raise ValueError("Contexto de usuario vacío")

        # 1. Capturar metadata del dispositivo/conexión
        ip_address = request.headers.get('X-Forwarded-For', request.remote_addr)
        if ip_address and ',' in ip_address:
            ip_address = ip_address.split(',')[0].strip()
            
        user_agent = request.headers.get('User-Agent', 'Unknown')

        # 2. Determinar expiración (180 días vs 30 días)
        # El provider viene o en 'authProvider' o en 'auth_provider' o en user_context['login_type']
        provider = user_context.get("authProvider") or user_context.get("auth_provider")
        auth_method_custom_id = user_context.get("auth_method_custom_id")
        
        # --- NUEVA LÓGICA: Evitar duplicados ---
        # Antes de crear, buscamos si ya hay una sesión ACTIVA para este ID + IP + UI
        escaped_ip = ip_address.replace("'", "''")
        escaped_ua = user_agent.replace("'", "''")
        auth_method_id = str(user_context.get("auth_method_id", ""))

        # Usamos IN para filtrar por el _id del link, ya que SeaTable SQL no soporta alias ni JOINs estándar
        logger.debug(f"🔍 Buscando sesión activa existente: IP='{escaped_ip}', UA='{escaped_ua}', AuthMethod='{auth_method_custom_id}'")

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
            logger.info(f"Reutilizando sesión activa existente para {auth_method_custom_id} (ID: {auth_method_id})")
            # Agregamos la fecha de expiración existente al contexto para el frontend
            user_context["expired_at"] = existing_sess.get("Expiration Date")
            return existing_sess.get("Token")

        days = 180
        if provider == "Email" and temp_device:
            days = 30
            logger.info(f"Sesión temporal detectada para Email. Expiración: {days} días.")
        else:
            logger.info(f"Sesión estándar. Expiración: {days} días. (Provider: {provider})")

        expiration_time = datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(days=days)
        expiration_iso = expiration_time.strftime("%Y-%m-%d %H:%M:%S")

        # 2.1. Agregar campo expired_at al contexto (para que el frontend lo reciba)
        user_context["expired_at"] = expiration_iso
        
        # El payload será MINIMALISTA. No guardamos permisos ni apps aquí por seguridad y tamaño.
        # Los datos pesados se recuperan del Cache del servidor en cada verify_session.
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
        
        # 4. Preparar datos para tabla Sessions
        
        session_data = {
            "Token": token,
            "Status": "Active",
            "IP": ip_address,
            "Device Name": user_agent,
            "Expiration Date": expiration_iso
            # El link se crea explícitamente abajo con perform_link_operation
        }
        
        # 3. Insertar sesión
        created_session = seatable.perform_table_operation(
            table_name="Sessions",
            row_data=session_data,
            type_batch="append_row",
            base_data="core_identity"
        )
        
        if not created_session:
            raise Exception("Error al insertar fila en Sessions")
            
        session_row_id = created_session.get("_id")
        
        # 4. Crear Relaciones (Links)
        # Link con Auth Methods
        auth_link_id = seatable.get_column_link_id("Sessions", "Auth Method", base_data="core_identity")
        
        seatable.perform_link_operation(
            link_id=auth_link_id,
            row_id=session_row_id,
            other_row_id=user_context.get("auth_method_id"),
            table_name="Sessions",
            other_table_name="Auth Methods",
            base_data="core_identity"
        )

        logger.info(f"Sesión creada exitosamente para {user_context.get('email')}")
        return token
        
    except Exception as e:
        logger.error(f"Error creando sesión para {user_context.get('email', 'unknown')}: {e}", exc_info=True)
        return None

def insert_user_in_database(userinfo,auth_provider):
    """
    Verifica si existe un usuario con el email en la tabla Portal Users de Seatable.
    Si no existe, lo crea. Si existe, compara y actualiza los campos que hayan cambiado.

    ⚠️ Cambio importante:
    - First Name y Last Name ya no se actualizan en Portal Users, sino en la tabla Identity,
      usando la relación (columna link) Identity ID.
    """


    PORTAL_USERS_TABLE = "Auth Methods"
    IDENTITY_TABLE = "Identity"
    IDENTITY_LINK_COL = "Identity"  # columna link en Portal Users que apunta a Identity


    # ==================================================
    # 0) Buscar usuario por email
    # ==================================================
    email = userinfo.get('email')
    if not email:
        raise ValueError("El campo 'email' es requerido en userinfo")

    escaped_email = email.replace("'", "''")
    query = f"SELECT * FROM `Auth Methods` WHERE `Email` = '{escaped_email}'"
    existing_users = seatable.sql_query_one(query, base_data="core_identity")

    # ==================================================
    # 1) Preparar datos separados por tabla
    # ==================================================
    # Campos que pertenecen EXCLUSIVAMENTE a la tabla Identity
    
    # Nombres de campos que vienen en userinfo
    first_name_raw = userinfo.get('given_name') or userinfo.get('first_name')
    last_name_raw = userinfo.get('family_name') or userinfo.get('last_name')
    profile_pic = userinfo.get('picture') or userinfo.get('profile_image_url')

    # Datos para Identity (Solo lo que recibimos realmente)
    data_identity = {'Status': 'Active'}
    if first_name_raw: data_identity['First Name'] = first_name_raw
    if last_name_raw: data_identity['Last Name'] = last_name_raw
    if profile_pic: data_identity['Profile Image URL'] = profile_pic

    # La validación de campos obligatorios para registro manual se hace 
    # en la capa superior (register_manual_user).


    # Datos para Auth Methods (Sin campos de Identity)
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
    # 2) FLUJO DE CREACIÓN / ACTUALIZACIÓN
    # ==================================================
    if not existing_users:
        print(f"👤 Usuario nuevo. Siguiendo flujo: Identity -> Auth Method")

        # SOLO para usuarios nuevos: Si no vienen nombres y es Social, aplicamos fallbacks
        if auth_provider != "Email":
            if 'First Name' not in data_identity: 
                data_identity['First Name'] = email.split('@')[0]
            if 'Last Name' not in data_identity: 
                data_identity['Last Name'] = "User"
        else:
            # Para Email ya validamos arriba, pero nos aseguramos aquí de nuevo
            if 'First Name' not in data_identity or 'Last Name' not in data_identity:
                raise ValueError(f"No se puede crear el usuario {email}: faltan nombres.")

        # 2.1) Crear Identity
        identity_created = seatable.perform_table_operation(
            table_name=IDENTITY_TABLE,
            row_data=data_identity,
            type_batch="append_row",
            base_data="core_identity"
        )
        if not identity_created:
            raise Exception(f"No se pudo crear Identity para {email}")
        
        identity_row_id = identity_created.get('_id')

        # 2.2) Crear Auth Method (vinculado a Identity)
        data_auth[IDENTITY_LINK_COL] = [identity_row_id]
        auth_created = seatable.perform_table_operation(
            table_name=PORTAL_USERS_TABLE,
            row_data=data_auth,
            type_batch="append_row",
            base_data="core_identity"
        )
        if not auth_created:
            raise Exception(f"No se pudo crear Auth Method para {email}")
        
        auth_row_id = auth_created.get('_id')

        # 2.3) Asignar Rol por defecto al Identity
        _assign_default_role_to_identity(identity_row_id)

        # 2.4) Vínculo inverso: Identity -> Auth Methods
        _link_identity_to_auth(identity_row_id, auth_row_id)

        return auth_created

    else:
        # ==================================================
        # 3) USUARIO EXISTE -> ACTUALIZAR / ASEGURAR IDENTITY
        # ==================================================
        existing_user = existing_users[0]
        auth_row_id = existing_user.get('_id')
        
        # Obtener link a Identity
        identity_links = existing_user.get(IDENTITY_LINK_COL, [])
        identity_row_id = None
        if identity_links:
            identity_row_id = identity_links[0].get('row_id') if isinstance(identity_links[0], dict) else identity_links[0]

        # 3.1) Si NO tiene Identity, crearlo ahora
        if not identity_row_id:
            print(f"ℹ️ Usuario existente sin Identity. Creando uno ahora...")
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
            
            # Asignar Rol
            _assign_default_role_to_identity(identity_row_id)
            
            # Link inverso
            _link_identity_to_auth(identity_row_id, auth_row_id)
        else:
            # 3.2) Si YA tiene Identity, actualizar solo si recibimos datos nuevos del provider
            # Creamos un set de datos para update que NO incluya Status (ya que ya existe)
            # y solo si tenemos algo que actualizar
            update_identity_data = {k: v for k, v in data_identity.items() if k != 'Status'}
            
            if update_identity_data:
                print(f"📇 Actualizando Identity {identity_row_id} con datos frescos del provider...")
                seatable.perform_table_operation(
                    table_name=IDENTITY_TABLE,
                    row_id=identity_row_id,
                    row_data=update_identity_data,
                    type_batch="update_row",
                    base_data="core_identity"
                )

        # 3.3) Actualizar Auth Method si hay cambios (ej. password)
        # Solo actualizamos si no es login social (para evitar sobreescribir Verified=False)
        if auth_provider == "Email":
             seatable.perform_table_operation(
                table_name=PORTAL_USERS_TABLE,
                row_id=auth_row_id,
                row_data=data_auth,
                type_batch="update_row",
                base_data="core_identity"
            )

        # Retornar usuario actualizado
        return seatable.sql_query_one(f"SELECT * FROM `{PORTAL_USERS_TABLE}` WHERE `_id` = '{auth_row_id}'", base_data="core_identity")[0]

def _assign_default_role_to_identity(identity_row_id):
    """
    Asigna dinámicamente el rol con menor privilegio de acceso a datos para la App actual.
    Orden de prioridad (restringido): own > assigned.
    Ignora: all, team (no se asigna nada automáticamente si solo existen estos).
    """
    from src.services.identity_service import identity_service
    try:
        # 1. Obtener app_key dinámicamente según la URL
        app_key = identity_service.get_app_key_by_url()
        if not app_key:
            logger.warning("No se pudo determinar app_key para auto-asignación de rol. Abortando.")
            return

        # 2. Obtener todos los roles para filtrar localmente (evitar problemas de nombres de columnas)
        roles = seatable.sql_query("SELECT * FROM `Roles`", base_data="core_identity")
        
        # 3. Clasificar roles de la App por su Data Mode
        # Prioridad buscada: own (menos acceso) > assigned
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

            # Extraer modo usando la lógica central de IdentityService
            mode = identity_service._extract_data_mode(r.get("Data"))
            
            # Solo nos interesan 'own' y 'assigned' para auto-asignación
            if mode in app_roles_by_mode:
                app_roles_by_mode[mode].append(r)

        # 4. Seleccionar el rol ganador (el más restringido disponible)
        winner_role = None
        if app_roles_by_mode["own"]:
            winner_role = app_roles_by_mode["own"][0]
        elif app_roles_by_mode["assigned"]:
            winner_role = app_roles_by_mode["assigned"][0]

        if not winner_role:
            logger.info(f"ℹ️ No se encontró un rol adecuado (own/assigned) para la App {app_key}. No se asignará rol automático.")
            return

        role_id_key = winner_role.get("Role ID")
        logger.info(f"🎯 Rol seleccionado para auto-asignación: {role_id_key} (Modo: {identity_service._extract_data_mode(winner_role.get('Data'))})")

        # 5. Buscar en la tabla Assignments la fila global para ese rol en esa App
        query_assig = f"SELECT `_id` FROM `Assignments` WHERE `Role` = '{role_id_key}' AND `App Key` LIKE '%{app_key}%'"
        assignment_rows = seatable.sql_query(query_assig, base_data="core_identity")
        
        if not assignment_rows:
            logger.warning(f"⚠️ Se identificó el rol {role_id_key} pero no existe un registro en 'Assignments' para esta App.")
            return
            
        assignment_row_id = assignment_rows[0].get('_id')
        
        # 6. Realizar el vínculo entre Identity y el Assignment
        link_assig_id = seatable.get_column_link_id("Identity", "Assignments", base_data="core_identity")
        seatable.perform_link_operation(
            link_id=link_assig_id,
            row_id=identity_row_id,
            other_row_id=assignment_row_id,
            table_name="Identity",
            other_table_name="Assignments",
            base_data="core_identity"
        )

        logger.info(f"✅ Identity {identity_row_id} vinculada exitosamente al rol {role_id_key} de la App {app_key}.")
        
    except Exception as e:
        logger.error(f"❌ Error en auto-asignación de rol: {e}")
        import traceback
        traceback.print_exc()

def _link_identity_to_auth(identity_row_id, auth_row_id):
    """Auxiliar para vínculo inverso Identity -> Auth Methods."""
    try:
        # Esperar un poco para que SeaTable propague las filas

        link_id = seatable.get_column_link_id("Identity", "Auth Method", base_data="core_identity")
        seatable.perform_link_operation(link_id, identity_row_id, auth_row_id, "Identity", "Auth Methods", base_data="core_identity")
        print("✅ Vínculo inverso Identity -> Auth Method completado.")
    except Exception as e:
        print(f"⚠️ Error en vínculo inverso: {e}")


def process_mock_social_login(provider, email=None):
    """
    Simula un inicio de sesión social exitoso con datos de prueba (MOCK).
    Ideal para desarrollo cuando no se puede configurar la consola de Google/Microsoft.
    Permite probar con cualquier correo si se especifica.
    """
    from flask import session
    
    target_email = email or 'tasamaperez2005@gmail.com'
    print(f"🛠️ SIMULANDO LOGIN SOCIAL ({provider}) para: {target_email}")
    
    # Verificar si el usuario ya existe para no sobreescribir sus nombres reales con los del mock
    escaped_email = target_email.replace("'", "''")
    existing_auth = seatable.sql_query_one(f"SELECT * FROM `Auth Methods` WHERE `Email` = '{escaped_email}'", base_data="core_identity")
    
    # Creamos un formato de userinfo compatible con lo que espera insert_user_in_database
    mock_userinfo = {
        'email': target_email,
        'picture': 'https://placehold.co/600x400',
        'verified_email': True
    }

    if not existing_auth:
        # Solo si es nuevo asignamos los nombres del mockup
        mock_userinfo['given_name'] = 'Anderson'
        mock_userinfo['family_name'] = 'Tasama'
    
    # Intentamos insertar/actualizar el usuario. 
    user = insert_user_in_database(mock_userinfo, provider)
    
    if not user:
        return {'success': False, 'error': 'Error al crear/obtener usuario mock'}
        
    if isinstance(user, list):
        user = user[0]
        


    print(f"🔍 Buscando Auth Methods para vincular sesión...")
    
    # 1. Obtener contexto (Bypass caché para login y forzar provider)
    user_context = _get_user_context(mock_userinfo['email'], provider=provider, bypass_cache=True)
    
    if not user_context:
        print("❌ Error al obtener contexto para usuario mock")
        return {'success': False, 'error': 'Error obteniendo contexto de usuario'}
        
    return {'success': True, 'user': user_context}





# funcion para calcular el display name de la tabla Vendors
def calculate_display_name(vendor, banking):
    """
    Calcula el Display Name siguiendo las reglas de QuickBooks.
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
    # CASO 1: NO HAY COMPANY → persona física
    # --------------------------------------
    # Caso: vendor es persona física (no tiene company)
    if not company:
        # Si cuenta es de la misma persona → display = vendor_full_name
        if account_name.lower() == vendor_full_name.lower():
            return vendor_full_name

        # Si cuenta es de un tercero → display = vendor_full_name / account_name
        if account_name:
            return f"{vendor_full_name} / {account_name}"

        # Si no hay account_name por alguna razón
        return vendor_full_name


    # --------------------------------------
    # CASO 2: SÍ hay COMPANY
    # --------------------------------------
    # Escenario 4: empresa = cuenta bancaria
    if account_name.lower() == company.lower():
        return company

    # Escenarios 2 y 3: empresa y cuenta son diferentes
    if account_name:
        return f"{company} / {account_name}"

    # Si no hay nombre de cuenta → usar solo la empresa
    return company




# Funcion para enviar el correo de confirmacion de la cuenta manual
def enviar_email_confirm_manual(email, user_id):
    """
    Genera token, guarda en la base de datos y envía el correo de confirmación.
    """
    try:
        # Generar código de 6 caracteres alfanumérico
        token = "".join(secrets.choice(string.ascii_uppercase + string.digits) for _ in range(6))

        # Guardar token en la base de datos y actualizar el timestamp del último envío (local time sin microsegundos)
        now = datetime.datetime.now().replace(microsecond=0)
        current_time_iso = now.strftime("%Y-%m-%d %H:%M:%S")
        seatable.perform_table_operation(
            "Auth Methods", 
            row_data={
                "Token": token,
                "Last Email Sent": current_time_iso
            }, 
            type_batch="update_row", 
            row_id=user_id, 
            base_data="core_identity"
        )

        # Preparar datos del correo

        subject = "[Prism Group] Your Account Verification Code"
        
        # Cuerpo HTML
        body_html = f"""\
        <html>
        <body style="font-family: Arial, Helvetica, sans-serif; background-color: #f4f8fb; padding: 40px; color: #333;">
            <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            
            <h2 style="color: #0072ff; text-align: center; margin-bottom: 20px;">
                Verify your account
            </h2>

            <p>Hello,</p>

            <p>
                To complete your registration in <strong>Core Identity</strong>, please use the following verification code:
            </p>
            <div style="text-align: center; margin: 40px 0; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border: 2px dashed #0072ff;">
                <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #0072ff;">{token}</span>
            </div>
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
        print(f"❌ No se pudo enviar el correo de confirmación: {e}")
        import traceback
        traceback.print_exc()
        return False

def resend_confirmation_email_logic(email, user_id=None):
    """
    Lógica compartida para reenviar el email de confirmación con rate limit de 5 min.
    Retorna: (success, message, wait_time)
    """
    try:
        email = (email or "").lower().strip()
        escaped_email = email.replace("'", "''")
        
        # 1. Obtener los datos del usuario (siempre consulta fresca)
        if user_id:
            query = f"SELECT * FROM `Auth Methods` WHERE `_id` = '{user_id}'"
        else:
            # Si no hay ID, buscamos por email y provider Email, priorizando NO verificado y el más reciente basado en el último envío
            query = f"SELECT * FROM `Auth Methods` WHERE `Email` = '{escaped_email}' AND `Auth Provider` = 'Email' AND `Verified` = false ORDER BY `Last Email Sent` DESC"
            
        user_rows = seatable.sql_query_one(query, base_data="core_identity")
        
        # Si no se encuentra como no-verificado, verificamos si ya existe como verificado
        if not user_rows:
            query_verified = f"SELECT * FROM `Auth Methods` WHERE `Email` = '{escaped_email}' AND `Auth Provider` = 'Email' AND `Verified` = true ORDER BY `Last Email Sent` DESC"
            verified_rows = seatable.sql_query_one(query_verified, base_data="core_identity")
            if verified_rows:
                return False, "This email is already verified.", 0
            return False, "User not found.", 0

        user_data = user_rows[0]
        user_id_final = user_data.get("_id")
        
        # 2. Verificar Rate Limit
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
                print(f"⚠️ Error verificando rate limit: {e}")

        # 3. Enviar Correo
        print(f"DEBUG: Intentando enviar email a {email}")
        if enviar_email_confirm_manual(email, user_id_final):
            return True, "Confirmation email sent.", 0
        else:
            return False, "Failed to send confirmation email.", 0
            
    except Exception as e:
        print(f"❌ Error en resend_confirmation_email_logic: {e}")
        import traceback
        traceback.print_exc()
        return False, f"Internal error: {str(e)}", 0


def confirm_email_manual(token):
    """Verifica el token recibido y confirma el correo del usuario."""
    try:
        print("📩 Iniciando confirm_email_manual() con token:", token)
        escaped_token = (token or "").replace("'", "''").strip()
        
        # 🔹 Buscar el token en la tabla
        rows = seatable.sql_query(f"SELECT * FROM `Auth Methods` WHERE Token = '{escaped_token}'", base_data="core_identity")
        if not rows:
            print("❌ Token no encontrado")
            return False

        user_data = rows[0]
        row_id = user_data.get("_id")
        
        # 🔹 Verificar Expiración (24 horas para confirmación de email)
        last_sent_str = user_data.get('Last Email Sent')
        if last_sent_str:
            try:
                last_sent_dt = datetime.datetime.strptime(last_sent_str, "%Y-%m-%d %H:%M:%S")
                now = datetime.datetime.now()
                diff = now - last_sent_dt
                if diff.total_seconds() > 86400:  # 24 horas
                    print(f"❌ Token expirado ({(diff.total_seconds()/3600):.1f} horas transcurridas)")
                    return False
            except Exception as e:
                print(f"⚠️ Error verificando expiración: {e}")

        # 🔹 Marcar como confirmado y borrar token
        print("✏️ Actualizando registro en SeaTable...")
        seatable.perform_table_operation("Auth Methods", row_data={"Verified": True, "Token": None}, type_batch="update_row", row_id=row_id, base_data="core_identity")
        print("✅ Registro actualizado correctamente")    
        return True
    except Exception as e:
        print(f"❌ Error al confirmar el correo: {e}")
        return False


# ============================================================================
# AUTHENTICATION FUNCTIONS
# ============================================================================

def login_with_password_and_email(email, password, login_type="manual"):
    try:
        # Validar campo email
        if not email:
            return {"status": False, "message": "Email is required", "user": None}
        
        # Normalizar email a minúsculas
        email = email.lower().strip()
        # Escapar comillas simples en el email para evitar problemas en la consulta SQL
        escaped_email = email.replace("'", "''")
        
        # Bypass temporal para Google/Microsoft (Test/Dev)
        # Si es login social simulado, solo verificamos que exista en Auth Methods (sin importar Verified por ahora para facilitar tests, o sí?)
        # El usuario pidió: "si yo envio... type: "google" o "microsoft" inmediatamente me dejes pasar"
        # Asumiremos que el email debe existir.
        
        is_bypass = login_type and login_type.lower() in ["google", "microsoft"]
        
        if is_bypass:
            print(f"⚠️ LOGIN BYPASS: Tipo '{login_type}' detectado para {email}")
            # Buscamos usuario sin importar verified para test, o mantenemos verified=True?
            # Por seguridad básica, exigimos que exista.
            user = seatable.sql_query_one(f"SELECT * FROM `Auth Methods` WHERE Email = '{escaped_email}'", base_data="core_identity")
        else:
            # Login manual estándar
            if not password:
                 return {"status": False, "message": "Password is required", "user": None}
                 
            # IMPORTANTE: Filtrar por provider 'Email' y ordenar por Last Email Sent
            user = seatable.sql_query_one(f"SELECT * FROM `Auth Methods` WHERE Email = '{escaped_email}' AND `Auth Provider` = 'Email' ORDER BY `Last Email Sent` DESC", base_data="core_identity")

        # Verificar que se encontró el usuario
        if not user or not isinstance(user, list) or len(user) == 0:
            print(f"❌ Usuario no encontrado: {email}")
            return {"status": False, "message": "Email not found.", "user": None}
        
        user_data = user[0]
        
        # Si no es bypass, verificar si el usuario está confirmado
        if not is_bypass:
            is_verified = user_data.get('Verified', False)
            
            if not is_verified:
                print(f"⚠️ Usuario no verificado: {email}. Verificando contraseña antes de reenviar...")
                
                # Verificar contraseña antes de reenviar email
                hashed_password = user_data.get('Password')
                
                if not hashed_password:
                    print("❌ No se encontró la contraseña en el usuario")
                    return {"status": False, "message": "Password not set for this user", "user": None}
                
                if not isinstance(hashed_password, str):
                    hashed_password = str(hashed_password)
                
                password_bytes = password.encode('utf-8')
                if not bcrypt.checkpw(password_bytes, hashed_password.encode('utf-8')):
                     print("❌ Contraseña incorrecta para usuario no verificado")
                     return {"status": False, "message": "Incorrect password", "user": None}
                
                # Contraseña correcta, usar lógica de reenvío
                # LLAMAMOS IGUAL QUE EL BOTÓN "RESEND": solo con el email para que haga su propia consulta fresca
                success, message, wait_time = resend_confirmation_email_logic(email)
                
                print(f"DEBUG LOGIN: Fresh call to resend logic result: success={success}, wait_time={wait_time}")
                
                return {
                    "status": True,
                    "message": message,
                    "redirect_url": "/esperando-confirmacion",
                    "wait_seconds": int(wait_time),
                    "user": None
                }
        
        # Si el usuario está verificado, continuar con validación de contraseña
        if not is_bypass:
            # Lógica normal de password para usuarios verificados
            hashed_password = user_data.get('Password')
            
            if not hashed_password:
                print("❌ No se encontró la contraseña en el usuario")
                return {"status": False, "message": "Password not set for this user", "user": None}
            
            if not isinstance(hashed_password, str):
                hashed_password = str(hashed_password)
            
            password_bytes = password.encode('utf-8')
            if not bcrypt.checkpw(password_bytes, hashed_password.encode('utf-8')):
                 print("❌ Contraseña incorrecta")
                 return {"status": False, "message": "Incorrect Password", "user": None}
            
            print("✅ Contraseña correcta")
        else:
            print(f"✅ BYPASS EXITOSO para {email}")

        # --- ÉXITO LOGIN ---
        # 1. Obtener contexto del usuario (En login siempre tiempo real y especificando provider)
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
        print(f"❌ Error al iniciar sesión: {e}")
        import traceback
        traceback.print_exc()
        return {"status": False, "message": str(e), "user": None}


# ============================================================================
# PASSWORD MANAGEMENT FUNCTIONS
# ============================================================================

def enviar_email_reset_password(email):
    """
    Genera un token de reset de contraseña, lo guarda en la base de datos y envía el correo.
    
    Args:
        email (str): Email del usuario que solicita el reset
    
    Returns:
        dict: {"status": bool, "message": str}
    """
    try:
        email = email.lower().strip()
        # Buscar usuario por email y provider Email, ordenando por Last Email Sent
        escaped_email = email.replace("'", "''")
        user = seatable.sql_query_one(f"SELECT * FROM `Auth Methods` WHERE Email = '{escaped_email}' AND `Auth Provider` = 'Email' ORDER BY `Last Email Sent` DESC", base_data="core_identity")
        
        # Verificar que el usuario exista y esté confirmado
        if not user or not isinstance(user, list) or len(user) == 0:
            # Por seguridad, no revelar si el email existe o no
            print(f"⚠️ Intento de reset de contraseña para email no encontrado o no confirmado: {email}")
            return {"status": True, "message": "If the email exists, a password reset link has been sent."}
        
        user_data = user[0]
        user_id = user_data.get('_id')
        
        if not user_id:
            print("❌ No se encontró el ID del usuario")
            return {"status": False, "message": "Error processing request"}
        
        # Verificar que el usuario tenga un Auth Provider que permita reset de contraseña (Solo Email)
        auth_provider = user_data.get('Auth Provider', 'Email')
        if auth_provider and auth_provider.lower() != 'email':
            print(f"⚠️ Intento de reset de contraseña para usuario OAuth: {email} ({auth_provider})")
            return {"status": True, "message": "If the email exists, a password reset link has been sent."}
        
        # Verificar Rate Limit para reset de contraseña (5 minutos)
        last_sent_str = user_data.get('Last Email Sent')
        if last_sent_str:
            try:
                last_sent_dt = datetime.datetime.strptime(last_sent_str, "%Y-%m-%d %H:%M:%S")
                now = datetime.datetime.now()
                diff = now - last_sent_dt
                if diff.total_seconds() < 300:
                    wait_seconds = int(300 - diff.total_seconds())
                    print(f"⚠️ Rate limit activo para reset-password de {email}. Faltan {wait_seconds} segundos.")
                    return {
                        "status": True,
                        "message": f"Please wait {wait_seconds // 60}m {wait_seconds % 60}s before requesting another link.",
                        "wait_seconds": wait_seconds
                    }
            except Exception as e:
                print(f"⚠️ Error verificando rate limit en reset: {e}")
        
        # Generar código de 6 caracteres alfanumérico para el reset
        reset_token = "".join(secrets.choice(string.ascii_uppercase + string.digits) for _ in range(6))

        # Guardar token en la base de datos y actualizar Last Email Sent
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
        subject = "Your Password Reset Code - Core Identity"
        body_html = f"""\
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f8fb; padding: 40px; color: #333;">
            <div style="max-width: 600px; margin: auto; background-color: white; border-radius: 10px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <h2 style="color: #0072ff; text-align: center;">Reset Your Password</h2>
              <p>Hello,</p>
              <p>We received a request to reset your password for your <strong>Core Identity</strong> account.</p>
              <p>Use the following code to reset your password:</p>
              <div style="text-align: center; margin: 30px 0; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border: 2px dashed #0072ff;">
                <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #0072ff;">{reset_token}</span>
              </div>
              <p style="font-size: 0.9rem; color: #777; text-align: center;">
                This code is valid for 15 minutes. If you didn't request a password reset, you can safely ignore this email.
              </p>
            </div>
          </body>
        </html>
        """
        
        # Enviar correo usando la función genérica
        email_sent = send_email(email, subject, body_html)
        
        if email_sent:
            print(f"✅ Correo de reset de contraseña enviado a: {email}")
            return {
                "status": True, 
                "message": "If the email exists, a password reset link has been sent.",
                "wait_seconds": 0
            }
        else:
            return {"status": False, "message": "Error sending reset email"}
        
    except Exception as e:
        print(f"❌ Error al enviar correo de reset de contraseña: {e}")
        import traceback
        traceback.print_exc()
        return {"status": False, "message": "Error sending reset email"}


def reset_password_with_token(token, new_password):
    try:
        # 0. Validar fortaleza de la contraseña
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
            return {"status": False, "message": "Invalid or expired reset code"}

        # Verificar Expiración (15 minutos) basada en Last Email Sent
        last_sent_str = user_data.get('Last Email Sent')
        if last_sent_str:
            try:
                last_sent_dt = datetime.datetime.strptime(last_sent_str, "%Y-%m-%d %H:%M:%S")
                # Comparar con hora local para consistencia
                now = datetime.datetime.now()
                diff = now - last_sent_dt
                if diff.total_seconds() > 900:  # 15 minutos
                    return {"status": False, "message": "The reset code has expired"}
            except Exception as e:
                print(f"⚠️ Error verificando expiración de token: {e}")
        else:
            # Si no hay fecha de envío, algo está mal
            return {"status": False, "message": "Invalid reset code status"}

       

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

        # 🔹 Obtener sesiones activas para informar al usuario
        active_sessions = []
        try:
            # Usar el ID personalizado (literal) tal como pidió el usuario
            custom_auth_id = user_data.get("ID")
            # Buscamos sesiones activas vinculadas a este Auth Method
            query_sessions = f"SELECT _id, IP, `Device Name`, `Expiration Date` FROM `Sessions` WHERE `Auth Method` = '{custom_auth_id}' AND `Status` = 'Active' ORDER BY `Expiration Date` DESC"
            sessions_res = seatable.sql_query(query_sessions, base_data="core_identity")
            if sessions_res and isinstance(sessions_res, list):
                active_sessions = sessions_res
        except Exception as e:
            print(f"⚠️ Error recuperando sesiones activas: {e}")

        return {
            "status": True, 
            "message": "Password has been reset successfully",
            "active_sessions": active_sessions
        }

    except Exception:
        import traceback
        traceback.print_exc()
        return {"status": False, "message": "Internal server error"}

# ============================================================================
# OAUTH FUNCTIONS
# ============================================================================

def get_google_oauth_url():
    """
    Genera la URL de autenticación de Google OAuth y el state.
    
    Returns:
        dict: {'auth_url': str, 'state': str}
    """
    state = secrets.token_urlsafe(32)
    print(f"Generated OAuth state: {state}")
    
    # Para OAuth usamos el dominio configurado en el .env porque debe coincidir con la whitelist de Google
    domain = Config.URL_API_VENDOR.rstrip('/')
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


def get_microsoft_oauth_url():
    """
    Genera la URL de autenticación de Microsoft OAuth y el state.
    
    Returns:
        dict: {'auth_url': str, 'state': str}
    """
    state = secrets.token_urlsafe(32)
    print(f"[MICROSOFT] Generated OAuth state: {state}")
    
    # Para OAuth usamos el dominio configurado en el .env porque debe coincidir con la whitelist de Microsoft
    domain = Config.URL_API_VENDOR.rstrip('/')
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
    Registra un nuevo usuario. Soporta tanto flujo manual (Email) como OAuth.
    
    Args:
        userinfo: Diccionario con firstName/given_name, lastName/family_name, email, password, country
        
    Returns:
        dict: {'success': bool, 'user': dict, 'error': str}
    """
    try:
        email = userinfo.get('email')
        password = userinfo.get('password')
        first_name = userinfo.get('given_name') or userinfo.get('firstName')
        last_name = userinfo.get('family_name') or userinfo.get('lastName')

        # 1. VALIDACIONES CRÍTICAS
        if not email:
            return {'success': False, 'error': 'El correo electrónico es obligatorio'}
        
        # Si es un registro manual (Email), validamos campos obligatorios
        if not password:
            return {'success': False, 'error': 'La contraseña es obligatoria para el registro por email'}
        
        # Validar fortaleza de la contraseña
        is_strong, msg = validate_password_strength(password)
        if not is_strong:
            return {'success': False, 'error': msg}
        
        if not first_name or not last_name:
            return {'success': False, 'error': 'El nombre y apellido son obligatorios'}

        # Normalizamos nombres para insert_user_in_database
        userinfo['given_name'] = first_name
        userinfo['family_name'] = last_name
    
        
        # Verificar si el correo ya está registrado
        # Escapamos comillas por seguridad
        escaped_email = email.replace("'", "''")
        
        user_rows = seatable.sql_query_one(
            f"SELECT * FROM `Auth Methods` WHERE Email = '{escaped_email}'"
        , base_data="core_identity")
        
        if user_rows:
            existing_user = user_rows[0]
            # Si existe, verificamos el estado
            is_verified = existing_user.get('Verified')
            provider = existing_user.get('Auth Provider')
            
            # Si ya está verificado, o es de otro provider (Google/MS), bloqueamos
            if is_verified:
                print(f"👤 Este Correo ya esta Registrado y Verificado ({provider})")
                return {'success': False, 'error': 'Este Correo ya esta Registrado'}
            
            # Si EXISTE pero NO está verificado y es Email provider, permitimos "sobreescribir/reenviar"
            if provider == 'Email':
                print(f"ℹ️ Usuario existe pero NO está verificado. Reintentando registro/reenvío.")
                # Verificar Rate Limit antes de reenviar en registro
                # PASAMOS EL _id para precisión
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
                        'message': message, 
                        'wait_seconds': wait_time,
                        'redirect_url': '/esperando-confirmacion'
                    }
            else:
                # Caso raro: No verificado pero provider distinto? Bloqueamos por si acaso
                return {'success': False, 'error': f'Este Correo ya esta registrado con {provider}'}
        
        print(f"👤 Procediendo con registro/actualización de usuario")
        
        user = insert_user_in_database(userinfo, "Email")
        print('user:', user)
        
        if isinstance(user, list) and len(user) > 0:
            user = user[0]
        
        # Al ser usuario nuevo, enviamos directamente (enviar_email_confirm_manual ya pone el Last Email Sent)
        if enviar_email_confirm_manual(email, user['_id']):
            return {
                'success': True, 
                'user': user, 
                'redirect_url': '/esperando-confirmacion',
                'message': 'Confirmation email sent.',
                'wait_seconds': 0
            }
        else:
            return {'success': False, 'error': 'Error al enviar el correo de confirmación'}
            
    except Exception as e:
        print(f"❌ Error en register_manual_user: {e}")
        import traceback
        traceback.print_exc()
        return {'success': False, 'error': str(e)}


def process_google_callback(code, state, expected_state):
    """
    Procesa el callback de Google OAuth.
    
    Args:
        code: Código de autorización
        state: State recibido
        expected_state: State esperado de la cookie
        
    Returns:
        dict: {'success': bool, 'user': dict, 'error': str}
    """
    try:
        if state != expected_state:
            print(f"State mismatch: received {state}, expected {expected_state}")
            return {'success': False, 'error': 'state_mismatch'}
        
        # Exchange code for token
        domain = Config.URL_API_VENDOR.rstrip('/')
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
        user = insert_user_in_database(userinfo, "Google")
        
        # Sincronizar con Identity
        if isinstance(user, list):
            user = user[0]
            
        auth_methods = seatable.sql_query(f"SELECT * FROM `Auth Methods` WHERE `Email` = '{userinfo['email']}' AND `Auth Provider` = 'Google'", base_data="core_identity")
        
        if auth_methods:
            row_auth = auth_methods[0]
            identity_links = row_auth.get("Identity", [])
            if identity_links:
                row_identity_id = identity_links[0].get("row_id")
                
                from flask import session
                session.permanent = True
                session['user_id'] = user.get('_id')
                session['row_auth_methods'] = row_auth.get('_id')
                session['row_identity'] = row_identity_id
                session['vendor_email'] = userinfo['email']
                
                return {'success': True, 'user': _get_user_context(userinfo['email'], provider="Google", bypass_cache=True)}
        
        return {'success': True, 'user': _get_user_context(userinfo['email'], provider="Google", bypass_cache=True)}
        
    except Exception as e:
        print(f"OAuth callback error: {e}")
        import traceback
        traceback.print_exc()
        return {'success': False, 'error': 'oauth_failed'}


def process_microsoft_callback(code, state, expected_state):
    """
    Procesa el callback de Microsoft OAuth.
    
    Args:
        code: Código de autorización
        state: State recibido
        expected_state: State esperado de la cookie
        
    Returns:
        dict: {'success': bool, 'user': dict, 'error': str}
    """
    try:
        if state != expected_state:
            return {'success': False, 'error': 'state_mismatch'}
        
        # Exchange code for token
        token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token"
        
        domain = Config.URL_API_VENDOR.rstrip('/')
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
        
        # Obtener datos del usuario desde Graph
        graph_user_url = "https://graph.microsoft.com/v1.0/me"
        headers = {"Authorization": f"Bearer {access_token}"}
        graph_res = requests.get(graph_user_url, headers=headers)
        userinfo = graph_res.json()
        print(f"Voy a imprimir lo que me suelta Microsoft {userinfo}")
        
        # Normalizar campos
        final_userinfo = {
            "email": userinfo.get("mail") or userinfo.get("userPrincipalName"),
            "given_name": userinfo.get("givenName"),
            "family_name": userinfo.get("surname"),
        }
        
        # Insertar usuario
        user = insert_user_in_database(final_userinfo, "Microsoft")
        
        # Normalizar user
        if isinstance(user, list):
            if len(user) > 0:
                u = user[0]
            else:
                return {'success': False, 'error': 'user list empty'}
        else:
            u = user
        
        return {'success': True, 'user': _get_user_context(final_userinfo['email'], provider="Microsoft", bypass_cache=True)}
        
    except Exception as e:
        print(f"[MICROSOFT CALLBACK ERROR] {e}")
        import traceback
        traceback.print_exc()
        return {'success': False, 'error': 'oauth_failed'}

def prepare_session_data(user):
    # Optimizamos: Si el objeto 'user' ya trae la identidad (link),
    # intentamos usar esos datos para evitar llamadas SQL repetitivas.
    
    identity_links = user.get('Identity', [])
    if not identity_links:
        # Fallback: No podemos preparar sesión completa sin identidad vinculada
        return {
            'user_id': user.get('_id'),
            'row_auth_methods': user.get('_id'),
            'id_auth_methods': user.get('ID'),
            'vendor_email': user.get('Email')
        }

    identity_row_id = identity_links[0].get('row_id')
    identity_display = identity_links[0].get('display_value')

    # Roles (Ya no se obtienen de Identity.Role, se manejarán vía Assignments y Permisos)
    roles_list = []

    # Collaborator Info
    collaborator_info = get_collaborator_info_from_identity(identity_row_id)
    
    # Primary Email
    email_primary = get_email_primary_from_auth(identity_display)

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
        # Validar fortaleza de la contraseña
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
        
        # Verificar que el usuario tenga un Auth Provider que permita cambio de contraseña
        # Solo permitimos cambio de contraseña a usuarios del proveedor 'Email'
        auth_provider = user_record.get('Auth Provider', '')
        if auth_provider and auth_provider.lower() != 'email':
            return {
                'success': False,
                'message': f'Password change is not available for {auth_provider} users. Please change your password through your provider.'
            }
        
        stored_password = user_record.get('Password')
        if not stored_password:
            return {'success': False, 'message': 'No password found for this user. Please contact support.'}
        
        # Verificar que la contraseña actual sea correcta
        password_bytes = current_password.encode('utf-8')
        if not bcrypt.checkpw(password_bytes, stored_password.encode('utf-8')):
            return {'success': False, 'message': 'Current password is incorrect'}
        
        # Verificar que la nueva contraseña sea diferente a la actual
        if bcrypt.checkpw(new_password.encode('utf-8'), stored_password.encode('utf-8')):
            return {'success': False, 'message': 'New password must be different from current password'}
        
        # Hashear la nueva contraseña
        new_password_bytes = new_password.encode('utf-8')
        salt = bcrypt.gensalt()
        hashed_new_password = bcrypt.hashpw(new_password_bytes, salt)
        
        # Actualizar la contraseña en Seatable
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
            print(f"✅ Contraseña actualizada exitosamente para el usuario: {user_email}")
            return {'success': True, 'message': 'Password changed successfully'}
        else:
            print(f"❌ Error al actualizar la contraseña para el usuario: {user_email}")
            return {'success': False, 'message': 'Failed to update password'}
            
    except Exception as e:
        print(f"❌ Error al cambiar la contraseña: {e}")
        import traceback
        traceback.print_exc()
        return {'success': False, 'message': f'An error occurred while changing password: {str(e)}'}


def get_roles_from_identity(identity_row_id):
    """
    Obtiene los roles de una identity.
    
    Args:
        identity_row_id: _id de la fila en Identity
    """

    roles = seatable.sql_query_one(
        f"SELECT `Vendor ID` FROM `Identity` WHERE `_id` = '{identity_row_id}'"
    , base_data="core_identity")
    return roles



def get_collaborator_info_from_identity(identity_row_id):
    """
    Obtiene la información extendida de los colaboradores vinculados a una identity,
    incluyendo el campo 'Seatable User'.
    """
    row = seatable.sql_query_one(
        f"SELECT `Collaborator ID` FROM `Identity` WHERE `_id` = '{identity_row_id}'",
        base_data="core_identity"
    )

    if not row:
        print(f"⚠️ No se encontró Identity con _id={identity_row_id}")
        return []

    if isinstance(row, list):
        row = row[0] if row else None

    links = (row or {}).get("Collaborator ID") or []
    if not isinstance(links, list) or len(links) == 0:
        return []

    row_ids = [x.get("row_id") for x in links if isinstance(x, dict) and x.get("row_id")]
    if not row_ids:
        return []

    # Consultar la tabla Collaborators para obtener detalles adicionales
    ids_str = "', '".join(row_ids)
    collab_details = seatable.sql_query(
        f"SELECT `_id`, `Seatable User`, `Email address` FROM `Collaborators` WHERE `_id` IN ('{ids_str}')",
        base_data="core_identity"
    )

    result = []
    for detail in collab_details:
        result.append({
            "row_id": detail.get("_id"),
            "email": detail.get("Email address"),
            "seatable_user": detail.get("Seatable User")
        })

    return result


# Funcion con el Identity traer el Correo que le pertenece a ese Identity y que sea el "Is Primary"
def get_email_primary_from_auth(identity_id):


    row = seatable.sql_query_one(
        f"SELECT `Email` FROM `Auth Methods` WHERE `Identity` = '{identity_id}' and `Is Primary` = True",
        base_data="core_identity"
    )

    # sql_query_one a veces retorna dict y a veces lista; normalizamos
    if not row:
        print(f"⚠️ No se encontró Identity con id={identity_id}")
        return []

    if isinstance(row, list):
        row = row[0] if row else None

    row_email =row.get("Email")
    return row_email


def get_debug_user_info(email, current_url=None):
    """
    Función de diagnóstico refinada que recolecta información completa de Core Identity
    usando la nueva lógica de Assignments y filtrado por App Key.
    """
    from src.services.identity_service import identity_service
    
    debug_data = {
        "identity": None,
        "app_key": None,
        "permissions": [],
        "assignments": [],
        "roles": []
    }
    
    # 1. Buscar en Auth Methods para obtener la Identity vinculada
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

    # 2. Obtener App Key según la URL (si se proporciona)
    app_key = identity_service.get_app_key_by_url(current_url)
    debug_data["app_key"] = app_key

    # 3. Cargar Identity con Assignments Expandidos
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
    # 4. Obtener Permisos filtrados por App Key (incluye Action Key)
    # Si no hay app_key, los permisos no se pueden filtrar por app, pero los mostramos vacíos con aviso
    if app_key:
        auth_info = identity_service.get_identity_permissions(identity_id, app_key, identity_row=identity_expanded, user_email=user_email)
        debug_data["permissions"] = auth_info.get("permissions", [])
        debug_data["data_mode"] = auth_info.get("data_mode")
        debug_data["data_mode_info"] = auth_info.get("data_mode_info")
    else:
        debug_data["permissions_note"] = "No se detectó App Key para la URL, los permisos no se filtraron."

    return debug_data

# ============================================================================
# SESSION VERIFICATION AND FALLBACK LOGIC
# ============================================================================

def verify_session(email=None, token=None):
    # Soporte para Bearer puro: Si no viene email, intentamos sacarlo del token
    if not email and token:
        try:
            # Decodificación ligera solo para sacar el email antes de la validación completa
            decoded_temp = jwt.decode(token, Config.SECRET_KEY, algorithms=["HS256"], options={"verify_exp": False})
            email = decoded_temp.get("email")
            if not email:
                return {"success": False, "message": "Token malformado: no contiene email"}
        except Exception:
            return {"success": False, "message": "Token inválido o corrupto"}
    """
    Centro de validación de sesión (Lightweight).
    - Usa caché de 15 minutos para evitar redundancia.
    - 1 Query a Sessions: Valida existencia, status del token y status de Identidad (vía Link).
    """
    try:
        if not email or not token:
            return {"success": False, "message": "Email y Token son requeridos"}

        # 0. Verificar Caché de Sesión
        now = time.time()
        cache_key = (email, token)
        if cache_key in _SESSION_VALIDATION_CACHE:
            ts, cached_res = _SESSION_VALIDATION_CACHE[cache_key]
            if now - ts < _SESSION_TTL:
                # print(f"🚀 SESSION CACHE HIT para {email}")
                return cached_res

        # 1. Buscar token en Sessions (Paso de seguridad real-time pero con 1 consulta menos)
        # Traemos 'Auth Method' para poder verificar el status real de la cuenta después
        query = f"SELECT `_id`, `Status`, `Token`, `Auth Method` FROM `Sessions` WHERE `Token` = '{token}'"
        session_rows = seatable.sql_query(query, base_data="core_identity")
        
        if not session_rows:
            return {"success": False, "message": "Sesión no encontrada en el servidor"}

        sess = session_rows[0]
        if sess.get("Status") == "Expired":
            return {"success": False, "message": "Session has expired", "expired": True}
        
        # 2. Validar JWT y extraer Identity ID
        try:
            decoded = jwt.decode(token, Config.SECRET_KEY, algorithms=["HS256"])
            if decoded.get("email") != email:
                return {"success": False, "message": "El token no pertenece a este usuario"}
            
            identity_id = decoded.get("identity_id") or decoded.get("user_id")
        except jwt.ExpiredSignatureError:
            # Marcar como Expired en DB
            seatable.perform_table_operation(
                table_name="Sessions",
                row_id=sess["_id"],
                row_data={"Status": "Expired"},
                type_batch="update_row",
                base_data="core_identity"
            )
            return {"success": False, "message": "Session has expired", "expired": True}
        except Exception as e:
            return {"success": False, "message": f"Token inválido: {str(e)}"}

        # 3. Verificar Status REAL del usuario (Fresco de Auth Methods)
        # Auth Method link display value in Sessions is usually the ID literal
        auth_method_custom_id = sess.get("Auth Method")
        if isinstance(auth_method_custom_id, list) and len(auth_method_custom_id) > 0:
            auth_method_custom_id = auth_method_custom_id[0].get("display_value")
        
        user_status = "Active"
        if auth_method_custom_id:
             # El usuario indica que el Status está en la tabla Identity.
             # Primero necesitamos el link a Identity desde Auth Methods
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
            return {"success": False, "message": f"Tu cuenta está {user_status.lower()}.", "blocked": True}

        # 4. Guardar en Caché antes de retornar
        result_success = {"success": True, "identity_id": identity_id, "email": email}
        _SESSION_VALIDATION_CACHE[cache_key] = (now, result_success)
        return result_success

    except Exception as e:
        logger.error(f"Error en verify_session para {email}: {e}", exc_info=True)
        return {"success": False, "message": str(e)}

def get_fallback_session(email=None):
    """
    Lógica exclusiva para el flujo de LOGIN.
    Busca una sesión activa basada en IP + Device Name + (opcional) Auth Method.
    Valida el token encontrado y lo renueva si es necesario.
    Retorna: { "token": str, "user": dict } o None.
    """
    try:
        # Capturamos IP y UA escapando comillas para evitar errores SQL
        ip_address = request.headers.get('X-Forwarded-For', request.remote_addr)
        if ip_address and ',' in ip_address:
            ip_address = ip_address.split(',')[0].strip()
        
        user_agent = request.headers.get('User-Agent', 'Unknown')
        
        escaped_ip = ip_address.replace("'", "''") if ip_address else ""
        escaped_ua = user_agent.replace("'", "''") if user_agent else "Unknown"

        print(f"🔍 Buscando fallback de sesión para IP: {escaped_ip}, UA: {escaped_ua}, Email: {email}")
        
        # Si hay email, obtener su _id interno primero
        auth_method_id = None
        if email:
            escaped_email = email.replace("'", "''")
            auth_rows = seatable.sql_query(f"SELECT `_id` FROM `Auth Methods` WHERE `Email` = '{escaped_email}'", base_data="core_identity")
            if auth_rows:
                auth_method_id = auth_rows[0].get("_id")
            else:
                return None

        # Construir query con IN para el link, que es la forma correcta en SeaTable para filtrar por row_id interno
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
            print("ℹ️ No se encontró sesión activa previa para este dispositivo/IP.")
            return None

        sess = session_rows[0]
        token = sess.get("Token")

        # Validar el token encontrado usando la lógica central de JWT
        try:
            # Decodificamos solo para obtener el email si no lo tenemos (sin validar exp aquí)
            decoded = jwt.decode(token, options={"verify_signature": False, "verify_exp": False})
            s_email = decoded.get("email")
            
            if email and s_email != email:
                print(f"⚠️ El token encontrado pertenece a {s_email}, pero se buscaba para {email}")
                return None

            # Llamamos a verify_session para que use la misma lógica de validación
            res = verify_session(s_email, token)
            if res.get("success"):
                logger.info(f"Fallback exitoso: Sesión recuperada para {s_email}")
                
                # RECARGA: verify_session ya no devuelve 'user' por optimización (es lightweight)
                # Lo cargamos aquí explícitamente para el flujo de login/fallback
                user_ctx = _get_user_context(s_email)
                
                return {
                    "token": res.get("token"),
                    "user": user_ctx
                }
            
        except Exception as e:
            logger.warning(f"Token de fallback inválido o error: {e}")
            return None

        return None

    except Exception as e:
        logger.error(f"Error en get_fallback_session: {e}", exc_info=True)
        return None

def _clean_user_context_for_frontend(ctx):
    """Limpia el contexto para no enviar IDs internos pesados si no es necesario"""
    if not ctx: return None
    return ctx

def logout_session(token):
    """
    Marca una sesión específica como Expired en la base de datos.
    """
    try:
        if not token: return False
        
        # Buscar el ID de la fila para el update
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
            print(f"✅ Sesión invalidada en DB: {token[:15]}...")
            return True
        return False
    except Exception as e:
        print(f"❌ Error en logout_session: {e}")
        return False

def close_sessions_logic(email, token=None, all_sessions=False, session_ids=None):
    """
    Cierra sesiones de un usuario de forma segura.
    Retorna: (success, message, closed_count)
    """
    try:
        # 1. Validar el token de seguridad
        verify_res = verify_session(email, token)
        
        # Si no es exitoso, solo permitimos continuar si el error es "Session has expired"
        # porque el objetivo es justamente cerrar sesiones (incluyendo esta si fuera el caso)
        if not verify_res.get("success"):
            if verify_res.get("expired"):
                print(f"ℹ️ Procediendo con logout aunque la sesión actual ya expiró para {email}")
            else:
                return False, f"Unauthorized: {verify_res.get('message', 'Invalid token')}", 0

        # 2. Obtener el Auth Method ID asociado al email
        escaped_email = email.lower().strip().replace("'", "''")
        auth_row = seatable.sql_query_one(
            f"SELECT _id, ID FROM `Auth Methods` WHERE Email = '{escaped_email}' AND `Auth Provider` = 'Email' ORDER BY `Last Email Sent` DESC",
            base_data="core_identity"
        )
        if isinstance(auth_row, list):
            auth_row = auth_row[0] if auth_row else None

        if not auth_row:
            return False, "User not found", 0
            
        auth_method_custom_id = auth_row.get("ID")

        # 3. Determinar qué sesiones cerrar
        ids_to_expire = []
        if all_sessions:
            query = f"SELECT _id FROM `Sessions` WHERE `Auth Method` = '{auth_method_custom_id}' AND `Status` = 'Active'"
            sessions_res = seatable.sql_query(query, base_data="core_identity")
            if sessions_res:
                ids_to_expire = [s.get("_id") for s in sessions_res]
        elif session_ids:
            # Sanitizar IDs
            clean_ids = [str(sid).replace("'", "''") for sid in session_ids]
            ids_str = "', '".join(clean_ids)
            query = f"SELECT _id FROM `Sessions` WHERE `_id` IN ('{ids_str}') AND `Auth Method` = '{auth_method_custom_id}' AND `Status` = 'Active'"
            sessions_res = seatable.sql_query(query, base_data="core_identity")
            if sessions_res:
                ids_to_expire = [s.get("_id") for s in sessions_res]
        else:
            return False, "No sessions or 'all_sessions' flag provided", 0

        if not ids_to_expire:
            return True, "No active sessions found to close", 0

        # 4. Marcar como Expired
        for row_id in ids_to_expire:
            seatable.perform_table_operation(
                "Sessions",
                row_data={"Status": "Expired"},
                type_batch="update_row",
                row_id=row_id,
                base_data="core_identity"
            )

        return True, f"Successfully closed {len(ids_to_expire)} sessions", len(ids_to_expire)

    except Exception as e:
        print(f"❌ Error en close_sessions_logic: {e}")
        return False, str(e), 0
