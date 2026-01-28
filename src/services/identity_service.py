"""
Identity Service and Permission Management (RBAC Service).

This module manages application resolution based on URLs, app metadata retrieval,
and primarily the calculation of permissions and data access modes (Data Modes)
for users in each application of the ecosystem.

Key Objectives:
1. Identify target applications based on the request URL.
2. Calculate the atomic permission matrix (RBAC) for a specific identity.
3. Manage permission cache to optimize authorization performance.
4. Resolve team hierarchy and permission inheritance.
"""
from src.services.seatable_service import seatable
from flask import request, current_app
import time
import json
from functools import lru_cache
from src.utils.team_util import calculate_team_hierarchy, normalize_email
from src.utils.url_util import find_best_app_match
from src.utils.logger import logger
from src.utils.i18n import t

class IdentityService:
    """
    Centralized service for identity management and authorization.
    
    This class implements the logic necessary to transform SeaTable records 
    into a security context usable by client applications.
    """
    def __init__(self):
        """
        Initializes the identity service with SeaTable connection and cache configuration.
        """
        self.seatable = seatable
        # Cache for permissions: { (identity_id, app_key): (timestamp, data) }
        self._permissions_cache = {}
        self._cache_ttl = 3600       # 15 minutes (permissions/roles)
        self._apps_cache_ttl = 86400 # 24 hours (application metadata)
        self._apps_cache = None
        self._apps_cache_time = 0

    def _get_all_apps_cached(self):
        """
        Retrieves the list of all registered applications, with persistent cache support.
        
        Objective:
        - Minimize database calls to retrieve static application metadata.
        - Automatically refresh the list every 24 hours to reflect new registered apps.
        """
        from config import Config
        now = time.time()
        
        # If cache is enabled, we verify TTL
        if Config.CACHED_APPS:
            if self._apps_cache and (now - self._apps_cache_time < self._apps_cache_ttl):
                return self._apps_cache
            logger.info("REFRESHING Applications metadata cache (TTL 24h)...")
        else:
            logger.debug("Bypassing Apps cache per CACHED_APPS=False configuration")

        apps = self.seatable.sql_query("SELECT * FROM `Applications`", base_data="core_identity")
        
        if apps is None:
            apps = []

        if Config.CACHED_APPS:
            self._apps_cache = apps
            self._apps_cache_time = now
            
        return apps

    @lru_cache(maxsize=32)
    def get_app_key_by_url(self, current_url=None):
        """
        Searches the Applications table for the application that matches the provided URL.
        Uses prefix match and looks for the most specific one (longest).
        """
        if not current_url:
            source = "backend_host"
            
            # 1. Maximum Priority: X-REQUEST-URL header (Sent by the Frontend)
            x_request_url = request.headers.get('X-REQUEST-URL')
            if x_request_url:
                current_url = x_request_url.rstrip('/')
                source = "x_request_url_header"
            
            # 2. Attempt to get URL from the request body or parameters (POST/GET)
            if not current_url:
                try:
                    if request.is_json:
                        current_url = request.json.get('current_url') or request.json.get('url')
                        if current_url: source = "request_body"
                    if not current_url:
                        current_url = request.args.get('current_url') or request.args.get('url')
                        if current_url: source = "request_args"
                except Exception:
                    pass
            
            # 3. Attempt standard Referer or Origin headers
            if not current_url:
                referer = request.headers.get('Referer')
                origin = request.headers.get('Origin')
                
                if referer:
                    current_url = referer.rstrip('/')
                    source = "referer_header"
                elif origin:
                    current_url = origin.rstrip('/')
                    source = "origin_header"
                else:
                    # 4. Fallback to backend host
                    current_url = request.host_url.rstrip('/')
                    source = "backend_host"
            
            logger.info(f"🔍 APPLICATION DETECTION - Source: {source}, URL: {current_url}")
        
        # Use application cache instead of querying every time
        apps = self._get_all_apps_cached()
        
        app_key = find_best_app_match(current_url, apps)
        
        if app_key:
            logger.info(f"✅ APP DETECTED: {app_key}")
            return app_key
        
        # Historical fallback for local development (requested by the user)
        if current_url and ("localhost" in current_url or "127.0.0.1" in current_url or "ngrok" in current_url):
            override_url = "https://insights.prismgrp.com"
            logger.warning(f"⚠️ Localhost Match Failure (URL: {current_url}): Defaulting to {override_url} for dev")
            return self.get_app_key_by_url(override_url)

        logger.error(f"❌ {t('app_not_found', url=current_url)}")
        return None

    def get_identity_permissions(self, identity_id, app_key, identity_row=None, user_email=None, bypass_cache=False):
        """
        Calculates the final permission matrix and data mode for a user and app.
        
        Objective:
        - Determine if the user has access to the requested application.
        - Consolidate all permissions from different roles and assignments.
        - Identify data access level (own, team, assigned, all).
        - Verify account status (Status) in real-time to block access.
        """
        if not app_key:
            return {"permissions": [], "data_mode": "deny"}

        now = time.time()
        cache_key = (identity_id, app_key)
        
        # 1. STATUS VERIFICATION (REAL-TIME)
        if not identity_row:
            identity_row = self.seatable.sql_query_one(
                f"SELECT * FROM `Identity` WHERE `_id` = '{identity_id}'", 
                base_data="core_identity"
            )
        
        if not identity_row:
            logger.debug(f"Identity not found for ID: {identity_id}")
            return {"permissions": [], "data_mode": "deny"}
            
        # If it's a list (from sql_query_one), take the first element
        if isinstance(identity_row, list) and len(identity_row) > 0:
            identity_row = identity_row[0]
            
        logger.debug(f"Identity Row Keys: {list(identity_row.keys())}")
        identity_display_id = identity_row.get("Identity ID")
        logger.debug(f"Identity ID (display): {identity_display_id}")

        if identity_row.get("Status") != "Active":
            logger.error(f"ERROR: {t('identity_inactive', id=identity_id)}")
            return {"permissions": [], "data_mode": "deny"}

        # 2. CACHE TTL (If bypass not requested)
        if not bypass_cache and cache_key in self._permissions_cache:
            timestamp, data = self._permissions_cache[cache_key]
            if now - timestamp < self._cache_ttl:
                return data

        logger.debug(f"CALCULATING permissions (SQL) for Identity: {identity_id} in App: {app_key}")
                
        # 3. Roles through Assignments (Using links from Identity row to avoid ambiguous JOINS)
        assignment_links = identity_row.get("Assignments", [])
        raw_assignments = []
        if assignment_links:
            # Extract row_ids
            assig_ids = []
            for al in assignment_links:
                if isinstance(al, dict):
                    aid = al.get("row_id")
                    if aid: assig_ids.append(aid)
                elif isinstance(al, str):
                    assig_ids.append(al)
            
            if assig_ids:
                ids_str = "', '".join(assig_ids)
                query_assig = f"SELECT `Data` AS `AssigData`, `Role`, `_id` AS `assig_row_id` FROM `Assignments` WHERE `_id` IN ('{ids_str}') AND `Status` = 'Active'"
                
                if app_key:
                    # Filter by App Key (Lookup in Assignments)
                    query_assig += f" AND `App Key` LIKE '%{app_key}%'"
                
                logger.debug(f"Querying assignments by IDs: {query_assig}")
                raw_assignments = self.seatable.sql_query(query_assig, base_data="core_identity")
        
        logger.debug(f"Assignments found for permissions: {len(raw_assignments)}")
        
        data_modes = set()
        data_mode_sources = {}  # {mode: [{"Role ID": "...", "Role Name": "...", "source": "assignment|role"}]}
        active_role_ids = set() 
        role_row_ids_to_fetch = set() # Row IDs (links)
        role_strings_to_fetch = set() # Role IDs (text)
        
        # A) Process Assignments (Already filtered by app_key in top query)
        for assig in raw_assignments:
            raw_assig_data = assig.get("AssigData")
            mode = self._extract_data_mode(raw_assig_data)
            if mode:
                if isinstance(mode, list):
                    for m in mode: data_modes.add(m)
                else:
                    data_modes.add(mode)
            
            roles_link = assig.get("Role", [])
            for rl in roles_link:
                rid = rl.get("row_id")
                if rid: role_row_ids_to_fetch.add(rid)

        # B) Process Identity.Roles (List of strings)
        direct_role_list = identity_row.get("Roles", [])
        if isinstance(direct_role_list, list):
            for r_str in direct_role_list:
                if r_str: role_strings_to_fetch.add(r_str)

        # D) Validate ALL roles against App Key in a single query
        where_clauses = []
        if role_row_ids_to_fetch:
            ids_str = "', '".join(role_row_ids_to_fetch)
            where_clauses.append(f"`_id` IN ('{ids_str}')")
        if role_strings_to_fetch:
            strs_str = "', '".join(role_strings_to_fetch)
            where_clauses.append(f"`Role ID` IN ('{strs_str}')")

        if where_clauses:
            combined_where = " OR ".join(where_clauses)
            roles_data = self.seatable.sql_query(
                f"SELECT `_id`, `Role ID`, `Role Name`, `Data`, `App Key` FROM `Roles` WHERE ({combined_where})",
                base_data="core_identity"
            )
            for role in roles_data:
                role_app = role.get("App Key")
                is_match = False
                if isinstance(role_app, list):
                    is_match = app_key in role_app
                else:
                    is_match = app_key in str(role_app)

                if is_match:
                    r_id_string = role.get("Role ID")
                    r_name = role.get("Role Name")
                    if r_id_string: active_role_ids.add(r_id_string)
                    
                    mode = self._extract_data_mode(role.get("Data"))
                    if mode:
                        modes_to_add = [mode] if not isinstance(mode, list) else mode
                        for m in modes_to_add:
                            data_modes.add(m)
                            # Trace which role contributes this mode
                            if m not in data_mode_sources:
                                data_mode_sources[m] = []
                            data_mode_sources[m].append({
                                "Role ID": r_id_string,
                                "Role Name": r_name
                            })

        if not active_role_ids:
            res = {"permissions": [], "data_mode": "deny"}
            self._permissions_cache[cache_key] = (now, res)
            return res

        # 5. Get permissions from Permission table (Single Flat List)
        # Filter permissions linked to our Role IDs
        perms_data = self.seatable.sql_query(
            "SELECT `Permission ID`, `Action Key`, `Roles` FROM `Permissions` WHERE `Status` = 'Active'",
            base_data="core_identity"
        )
        
        permissions_list = []
        seen_perm_ids = set()

        for p in perms_data:
            p_roles = p.get("Roles", []) # List of links towards Roles (uses display_value which is Role ID)
            # Check if this permission belongs to any of the user's active roles
            has_role = any(pr.get("display_value") in active_role_ids for pr in p_roles)
            
            if has_role:
                pid = p.get("Permission ID")
                if pid and pid not in seen_perm_ids:
                    seen_perm_ids.add(pid)
                    permissions_list.append({
                        "Permission ID": pid,
                        "Action Key": p.get("Action Key")
                    })

        # 6. Define data mode
        priority = {"all": 4, "team": 3, "assigned": 2, "own": 1, "deny": 0}
        final_data_mode = "own"
        max_priority = 0
        
        for mode in data_modes:
            if mode in priority and priority[mode] > max_priority:
                max_priority = priority[mode]
                final_data_mode = mode

        result = {
            "permissions": permissions_list,
            "data_mode": final_data_mode,
            "data_mode_info": {
                "mode": final_data_mode,
                "roles": data_mode_sources.get(final_data_mode, [])
            }
        }

        # --- NEW: If mode is TEAM, calculate hierarchy ---
        # OPTIMIZATION: Only calculate hierarchy if the app is EPR CRM (https://eprcrm.prismgrp.com)
        app_url = request.host_url.rstrip('/')
        is_crm_app = "eprcrm.prismgrp.com" in app_url or "localhost" in app_url or "127.0.0.1" in app_url

        logger.debug(f"[get_identity_permissions] final_data_mode: {final_data_mode}, user_email: {user_email}, is_crm: {is_crm_app}")
        if final_data_mode == "team" and user_email and is_crm_app:
            logger.info(f"CALCULATING team hierarchy for permissions: {user_email}")
            all_collabs = self.seatable.sql_query(
                "SELECT `Email address`, `Manager Email` FROM `Collaborators` WHERE `Email address` IS NOT NULL", 
                base_data="core_identity"
            )
            logger.debug(f"Found {len(all_collabs)} collaborators total")
            hierarchy = calculate_team_hierarchy(user_email, all_collabs)
            result["data_mode_info"]["members"] = hierarchy.get("members", [])
            result["data_mode_info"]["managerEmail"] = hierarchy.get("managerEmail")
            logger.debug(f"Hierarchy calculated: {len(result['data_mode_info']['members'])} members found")
        
        # Save to cache
        self._permissions_cache[cache_key] = (now, result)
        return result

    def get_identity_with_assignments(self, identity_id, user_email=None, app_key=None):
        """
        Loads a complete identity expanding its assignments and associated roles.
        
        Objective:
        - Retrieve the full tree of permissions, teams, and assignments from SeaTable.
        - Normalize raw database data into Python structures.
        - Serve as a basis for the final atomic permission calculation.
        """
        logger.debug(f"LOADING Identity expanded: {identity_id}" + (f" for app: {app_key}" if app_key else ""))

        
        # 1. Fetch Identity Basic Info
        identity = self.seatable.sql_query_one(
            f"SELECT * FROM `Identity` WHERE `_id` = '{identity_id}'", 
            base_data="core_identity"
        )
        
        if not identity:
            return None
        if isinstance(identity, list) and len(identity) > 0:
            identity = identity[0]
            
            
        # Use identity email if user_email not provided
        if not user_email:
            # Try to find primary email for this identity in Auth Methods
            query_email = f"SELECT `Email` FROM `Auth Methods` WHERE `Identity` LIKE '%{identity_id}%' AND `Is Primary` = True"
            auth_rows = self.seatable.sql_query(query_email, base_data="core_identity")
            if auth_rows and len(auth_rows) > 0:
                user_email = auth_rows[0].get("Email")
            else:
                # Fallback: any email for this identity
                query_email_any = f"SELECT `Email` FROM `Auth Methods` WHERE `Identity` LIKE '%{identity_id}%'"
                auth_rows_any = self.seatable.sql_query(query_email_any, base_data="core_identity")
                if auth_rows_any and len(auth_rows_any) > 0:
                    user_email = auth_rows_any[0].get("Email")
        
        # --- Fetch Collaborator Info usando la función centralizada ---
        from src.services.login_service import get_collaborator_info_from_identity
        collaborator_info = get_collaborator_info_from_identity(identity_id, user_email=user_email)
        
        identity["collaborator_info"] = collaborator_info
        identity.pop("Collaborator ID", None) # Clear original link field

        # Variable to collect unique App Keys (for the 'apps' field of the context)
        unique_app_keys = set()

        # 2. Fetch all Assignments for this Identity
        assignment_links = identity.get("Assignments", [])
        
        if not assignment_links:
            identity["Assignments"] = []
            identity["apps"] = []
            return identity
        
        # Extract row_ids from assignments
        assignment_ids = []
        for link in assignment_links:
            if isinstance(link, dict):
                aid = link.get("row_id") or link.get("_id")
                if aid:
                    assignment_ids.append(aid)
        
        if not assignment_ids:
            identity["Assignments"] = []
            identity["apps"] = []
            return identity
        
        # Build query to get assignments
        ids_str = "', '".join(assignment_ids)
        query_assig = f"""
            SELECT 
                `_id`, 
                `Data`, 
                `Role`, 
                `Status`, 
                `Customers`, 
                `Markets`, 
                `App Key`
            FROM `Assignments`
            WHERE `_id` IN ('{ids_str}')
        """
        
        # IMPORTANT: We no longer filter in the SQL by app_key to obtain all user apps
        # in the 'apps' field, but we will filter it locally for the returned Assignments.
        assignments = self.seatable.sql_query(query_assig, base_data="core_identity")


        # 3. Process and Normalize Assignments
        expanded_assignments = []
        
        # NEW: First we collect APPS of all assignments (Without filter)
        for assig in assignments:
            a_key = assig.get("App Key")
            if a_key:
                if isinstance(a_key, list):
                    for k in a_key: unique_app_keys.add(k)
                else:
                    unique_app_keys.add(a_key)

        # Now we filter the list for processing if an app_key was specified
        if app_key:
            # We perform a partial match to emulate LIKE '%app_key%'
            assignments = [
                a for a in assignments 
                if a.get("App Key") and app_key in str(a.get("App Key"))
            ]

        # First, collect all role row_ids for the filtered assignments
        all_role_row_ids = set()
        for assig in assignments:
            role_link = assig.get("Role", [])
            if isinstance(role_link, list):
                for r in role_link:
                    if isinstance(r, dict):
                        rid = r.get("row_id")
                        if rid:
                            all_role_row_ids.add(rid)
        
        # Get the names of all roles in a single query
        role_names_map = {}  # {row_id: {"Role ID": "...", "Role Name": "..."}}
        if all_role_row_ids:
            ids_str = "', '".join(all_role_row_ids)
            roles_data = self.seatable.sql_query(
                f"SELECT `_id`, `Role ID`, `Role Name` FROM `Roles` WHERE `_id` IN ('{ids_str}')",
                base_data="core_identity"
            )
            for role in roles_data:
                role_names_map[role.get("_id")] = {
                    "Role ID": role.get("Role ID"),
                    "Role Name": role.get("Role Name")
                }
        
        for assig in assignments:
            # a) Unwrap Lookups/Links for display (Data only, no longer App Key)
            val = assig.get("Data")
            if isinstance(val, list) and len(val) > 0:
                assig["Data"] = val[0]
            
            # b) Clean up Role: convert to objects with Role ID and Role Name
            role_link = assig.get("Role", [])
            enriched_roles = []
            if isinstance(role_link, list):
                for r in role_link:
                    if isinstance(r, dict):
                        rid = r.get("row_id")
                        if rid and rid in role_names_map:
                            # Create object with Role ID and Role Name
                            role_info = role_names_map[rid]
                            role_obj = {
                                "Role ID": role_info.get("Role ID"),
                                "Role Name": role_info.get("Role Name")
                            }
                            enriched_roles.append(role_obj)
                        else:
                            # Fallback: use display_value as Role ID
                            fallback_value = r.get("display_value") or str(r)
                            role_obj = {
                                "Role ID": fallback_value,
                                "Role Name": None
                            }
                            enriched_roles.append(role_obj)
                    else:
                        # If direct string
                        role_obj = {
                            "Role ID": str(r),
                            "Role Name": None
                        }
                        enriched_roles.append(role_obj)
            
            assig["Role"] = enriched_roles

            # c) Normalize Data as object (Generic handling)
            raw_data = assig.get("Data")
            normalized_data = {}
            
            if isinstance(raw_data, str) and raw_data.strip():
                try:
                    normalized_data = json.loads(raw_data)
                except json.JSONDecodeError:
                    # If it's a simple access mode, use it as a key for cleaner output
                    if raw_data in ["all", "team", "assigned", "own", "deny"]:
                        normalized_data = {raw_data: {}}
                    else:
                        normalized_data = {"value": raw_data}
            elif isinstance(raw_data, dict):
                normalized_data = raw_data
            elif raw_data is None:
                normalized_data = {}
            else:
                normalized_data = {"value": raw_data}
            
            # b) Specific case: Data type "assigned"
            if normalized_data.get("type") == "assigned" or "assigned" in normalized_data:
                # Ensure assigned structure: { Customers: [], Markets: [] }
                if "assigned" not in normalized_data or not isinstance(normalized_data["assigned"], dict):
                    normalized_data["assigned"] = {"Customers": [], "Markets": []}
                
                # Cleanup redundant type key
                normalized_data.pop("type", None)
                
                # Hydrate from relations (keeping only display values, removing row_ids)
                customers_rel = assig.get("Customers", [])
                markets_rel = assig.get("Markets", [])
                
                if customers_rel:
                    normalized_data["assigned"]["Customers"] = [
                        c.get("display_value") if isinstance(c, dict) else str(c)
                        for c in customers_rel
                    ]
                
                if markets_rel:
                    normalized_data["assigned"]["Markets"] = [
                        m.get("display_value") if isinstance(m, dict) else str(m)
                        for m in markets_rel
                    ]

            # c) Specific case: Data type "team"
            # We check for 'team' in Data object or 'Team' in role/type
            is_team = False
            if isinstance(normalized_data, dict):
                is_team = normalized_data.get("type") == "team" or "team" in normalized_data
            elif isinstance(normalized_data, str):
                is_team = normalized_data.lower() == "team"
            
            # OPTIMIZATION: Only calculate hierarchy if the app is EPR CRM
            app_url = request.host_url.rstrip('/')
            is_crm_app = "eprcrm.prismgrp.com" in app_url or "localhost" in app_url or "127.0.0.1" in app_url
            
            logger.debug(f"[get_identity_with_assignments] is_team: {is_team}, user_email: {user_email}, is_crm: {is_crm_app}")
            if is_team and user_email and is_crm_app:
                # Calculate team hierarchy
                logger.info(f"CALCULATING team hierarchy for: {user_email}")
                # We fetch all collaborators to build the tree
                all_collabs = self.seatable.sql_query(
                    "SELECT `Email address`, `Manager Email` FROM `Collaborators` WHERE `Email address` IS NOT NULL", 
                    base_data="core_identity"
                )
                hierarchy = calculate_team_hierarchy(user_email, all_collabs)
                
                # Merge into Data and cleanup redundant type key
                normalized_data["team"] = hierarchy
                normalized_data.pop("type", None)

            # Attach normalized data back and cleanup internal fields
            assig["Data"] = normalized_data
            # Remove internal SeaTable IDs and raw link data for cleaner output
            assig.pop("_id", None)
            assig.pop("Customers", None)
            assig.pop("Markets", None)
            assig.pop("App Key", None)  # Remove App Key since all are filtered by the same app
            
            expanded_assignments.append(assig)

        identity["Assignments"] = expanded_assignments
        
        # --- NEW: Enrich with Application metadata (Without making new query to Assignments) ---
        if unique_app_keys:
            all_apps = self._get_all_apps_cached()
            allowed_apps_metadata = []
            for app in all_apps:
                if app.get("App Key") in unique_app_keys:
                    allowed_apps_metadata.append({
                        "appKey": app.get("App Key"),
                        "appName": app.get("App Name"),
                        "publicUrl": app.get("Public URL")
                    })
            identity["apps"] = allowed_apps_metadata
        else:
            identity["apps"] = []
            
        return identity

    def _extract_data_mode(self, raw_data):
        """
        Analyzes the raw configuration of a role to extract its data access level.
        
        Objective:
        - Map SeaTable configurations to internal tokens: 'all', 'own', 'team', 'assigned'.
        - Provide consistent logic for privilege interpretation.
        """
        if not raw_data: return None
        
        # If it's a list (common in SeaTable for link/lookup/multi-select)
        if isinstance(raw_data, list):
            if not raw_data: return None
            # If the first element is a string, we return the string (e.g. ['own'])
            # If there are several, we return the list so the caller can decide
            if len(raw_data) == 1:
                return self._extract_data_mode(raw_data[0])
            return [self._extract_data_mode(item) for item in raw_data]

        if isinstance(raw_data, str) and raw_data.strip():
            try:
                parsed = json.loads(raw_data)
                return self._extract_data_mode(parsed)
            except json.JSONDecodeError:
                return raw_data
        elif isinstance(raw_data, dict):
            # Infer mode from known keys
            for mode in ["all", "team", "assigned", "own", "deny"]:
                if mode in raw_data:
                    return mode
            return raw_data.get("type") or raw_data.get("value")
        return raw_data

identity_service = IdentityService()
