"""
Servicio de Identidad y Gestión de Permisos (RBAC Service).

Este módulo gestiona la resolución de aplicaciones basadas en URLs, la recuperación de
metadatos de apps y, fundamentalmente, el cálculo de permisos y modos de acceso (Data Modes)
para los usuarios en cada aplicación del ecosistema.

Objetivos clave:
1. Identificar la aplicación de destino basándose en la URL de la petición.
2. Calcular la matriz de permisos atómicos (RBAC) para una identidad específica.
3. Gestionar la caché de permisos para optimizar el rendimiento de la autorización.
4. Resolver la jerarquía de equipos y herencia de permisos.
"""
from src.services.seatable_service import seatable
from flask import request, current_app
import time
import json
from functools import lru_cache
from src.utils.team_util import calculate_team_hierarchy, normalize_email
from src.utils.url_util import find_best_app_match
from src.utils.logger import logger

class IdentityService:
    """
    Servicio centralizado para la gestión de identidades y autorización.
    
    Esta clase implementa la lógica necesaria para transformar los registros de SeaTable 
    en un contexto de seguridad utilizable por las aplicaciones clientes.
    """
    def __init__(self):
        """
        Inicializa el servicio de identidad con conexión a SeaTable y configuración de caché.
        """
        self.seatable = seatable
        # Cache para permisos: { (identity_id, app_key): (timestamp, data) }
        self._permissions_cache = {}
        self._cache_ttl = 900       # 15 minutos (permisos/roles)
        self._apps_cache_ttl = 86400 # 24 horas (metadatos de aplicaciones)
        self._apps_cache = None
        self._apps_cache_time = 0

    def _get_all_apps_cached(self):
        """
        Recupera la lista de todas las aplicaciones registradas, con soporte para caché persistente.
        
        Objetivo:
        - Minimizar las llamadas a la base de datos para obtener metadatos estáticos de aplicaciones.
        - Refrescar automáticamente la lista cada 24 horas para reflejar nuevas apps registradas.
        """
        from config import Config
        now = time.time()
        
        # Si el caché está habilitado, verificamos TTL
        if Config.CACHED_APPS:
            if self._apps_cache and (now - self._apps_cache_time < self._apps_cache_ttl):
                return self._apps_cache
            logger.info("REFRESHING Applications metadata cache (TTL 24h)...")
        else:
            logger.debug("Bypassing Apps cache per CACHED_APPS=False configuration")

        apps = self.seatable.sql_query("SELECT * FROM `Applications`", base_data="core_identity")
        
        if Config.CACHED_APPS:
            self._apps_cache = apps
            self._apps_cache_time = now
            
        return apps

    @lru_cache(maxsize=32)
    def get_app_key_by_url(self, current_url=None):
        """
        Busca en la tabla Applications la aplicación que coincida con la URL proporcionada.
        Usa match por prefijo y busca el más específico (más largo).
        """
        if not current_url:
            source = "backend_host"
            
            # 1. Prioridad Máxima: Encabezado X-REQUEST-URL (Enviado por el Frontend)
            x_request_url = request.headers.get('X-REQUEST-URL')
            if x_request_url:
                current_url = x_request_url.rstrip('/')
                source = "x_request_url_header"
            
            # 2. Intentar obtener URL del cuerpo de la petición o parámetros (POST/GET)
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
            
            # 3. Intentar encabezados estándar Referer u Origin
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
                    # 4. Fallback al host del backend
                    current_url = request.host_url.rstrip('/')
                    source = "backend_host"
            
            logger.info(f"🔍 APPLICATION DETECTION - Source: {source}, URL: {current_url}")
        
        # Usar el caché de aplicaciones en lugar de consultar cada vez
        apps = self._get_all_apps_cached()
        
        app_key = find_best_app_match(current_url, apps)
        
        if app_key:
            logger.info(f"✅ APP DETECTED: {app_key}")
            return app_key
        
        # Fallback histórico para desarrollo local (solicitado por el usuario)
        if current_url and ("localhost" in current_url or "127.0.0.1" in current_url):
            override_url = "https://eprcrm.prismgrp.com"
            logger.warning(f"⚠️ Localhost Match Failure (URL: {current_url}): Defaulting to {override_url} for dev")
            return self.get_app_key_by_url(override_url)

        logger.error(f"❌ No se encontró una aplicación para la URL: {current_url}")
        return None

    def get_identity_permissions(self, identity_id, app_key, identity_row=None, user_email=None, bypass_cache=False):
        """
        Calcula la matriz final de permisos y el modo de datos para un usuario y app.
        
        Objetivo:
        - Determinar si el usuario tiene acceso a la aplicación solicitada.
        - Consolidar todos los permisos provenientes de diferentes roles y asignaciones.
        - Identificar el nivel de acceso a datos (own, team, assigned, all).
        - Verificar en tiempo real el estado de la cuenta (Status) para bloquear accesos.
        """
        if not app_key:
            return {"permissions": [], "data_mode": "deny"}

        now = time.time()
        cache_key = (identity_id, app_key)
        
        # 1. VERIFICACIÓN DE STATUS (TIEMPO REAL)
        if not identity_row:
            identity_row = self.seatable.sql_query_one(
                f"SELECT * FROM `Identity` WHERE `_id` = '{identity_id}'", 
                base_data="core_identity"
            )
        
        if not identity_row:
            print(f"DEBUG: Identity not found for ID: {identity_id}")
            return {"permissions": [], "data_mode": "deny"}
            
        # Si es una lista (de sql_query_one), tomar el primer elemento
        if isinstance(identity_row, list) and len(identity_row) > 0:
            identity_row = identity_row[0]
            
        print(f"DEBUG: Identity Row Keys: {list(identity_row.keys())}")
        identity_display_id = identity_row.get("Identity ID")
        print(f"DEBUG: Identity ID (display): {identity_display_id}")

        if identity_row.get("Status") != "Active":
            print(f"ERROR: Identidad {identity_id} inactiva.")
            return {"permissions": [], "data_mode": "deny"}

        # 2. CACHÉ TTL (Si no se solicita bypass)
        if not bypass_cache and cache_key in self._permissions_cache:
            timestamp, data = self._permissions_cache[cache_key]
            if now - timestamp < self._cache_ttl:
                return data

        print(f"CALCULATING permissions (SQL) for Identity: {identity_id} en App: {app_key}")
                
        # 3. Roles a través de Assignments (Usando links de la fila de Identity para evitar JOINS ambiguos)
        assignment_links = identity_row.get("Assignments", [])
        raw_assignments = []
        if assignment_links:
            # Extraer row_ids
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
                    # Filtramos por App Key (Lookup en Assignments)
                    query_assig += f" AND `App Key` LIKE '%{app_key}%'"
                
                print(f"DEBUG: Querying assignments by IDs: {query_assig}")
                raw_assignments = self.seatable.sql_query(query_assig, base_data="core_identity")
        
        print(f"DEBUG: Assignments found for permissions: {len(raw_assignments)}")
        
        data_modes = set()
        data_mode_sources = {}  # {mode: [{"Role ID": "...", "Role Name": "...", "source": "assignment|role"}]}
        active_role_ids = set() 
        role_row_ids_to_fetch = set() # Fila IDs (links)
        role_strings_to_fetch = set() # Role IDs (texto)
        
        # A) Procesar Assignments (Ya vienen filtrados por app_key en la query superior)
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

        # B) Procesar Identity.Roles (Lista de strings)
        direct_role_list = identity_row.get("Roles", [])
        if isinstance(direct_role_list, list):
            for r_str in direct_role_list:
                if r_str: role_strings_to_fetch.add(r_str)

        # D) Validar TODOS los roles contra la App Key en una sola consulta
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
                            # Rastrear qué rol contribuye con este modo
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

        # 5. Obtener permisos desde la tabla Permissions (Lista Plana Única)
        # Filtramos permisos que tengan vinculados nuestros Role IDs
        perms_data = self.seatable.sql_query(
            "SELECT `Permission ID`, `Action Key`, `Roles` FROM `Permissions` WHERE `Status` = 'Active'",
            base_data="core_identity"
        )
        
        permissions_list = []
        seen_perm_ids = set()

        for p in perms_data:
            p_roles = p.get("Roles", []) # Lista de links hacia Roles (usa display_value que es el Role ID)
            # Verificar si este permiso pertenece a alguno de los roles activos del usuario
            has_role = any(pr.get("display_value") in active_role_ids for pr in p_roles)
            
            if has_role:
                pid = p.get("Permission ID")
                if pid and pid not in seen_perm_ids:
                    seen_perm_ids.add(pid)
                    permissions_list.append({
                        "Permission ID": pid,
                        "Action Key": p.get("Action Key")
                    })

        # 6. Definir el modo de datos
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

        # --- NUEVO: Si el modo es TEAM, calcular jerarquía ---
        # OPTIMIZACIÓN: Solo calculamos jerarquía si la app es EPR CRM (https://eprcrm.prismgrp.com)
        app_url = request.host_url.rstrip('/')
        is_crm_app = "eprcrm.prismgrp.com" in app_url
        
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
        
        # Guardar en caché
        self._permissions_cache[cache_key] = (now, result)
        return result

    def get_identity_with_assignments(self, identity_id, user_email=None, app_key=None):
        """
        Carga una identidad completa expandiendo sus asignaciones y roles asociados.
        
        Objetivo:
        - Recuperar el árbol completo de permisos, equipos y asignaciones desde SeaTable.
        - Normalizar los datos crudos de la base de datos en estructuras de Python.
        - Servir como base para el cálculo final de permisos atómicos.
        """
        print(f"LOADING Identity expanded: {identity_id}" + (f" for app: {app_key}" if app_key else ""))

        
        # 1. Fetch Identity Basic Info
        identity = self.seatable.sql_query_one(
            f"SELECT * FROM `Identity` WHERE `_id` = '{identity_id}'", 
            base_data="core_identity"
        )
        
        if not identity:
            return None
        if isinstance(identity, list) and len(identity) > 0:
            identity = identity[0]
            
        # --- NUEVO: Fetch Collaborator Info ---
        collaborator_links = identity.get("Collaborator ID") or []
        collaborator_info = []
        if collaborator_links:
            collab_row_ids = [c.get("row_id") for c in collaborator_links if isinstance(c, dict) and c.get("row_id")]
            if collab_row_ids:
                ids_str = "', '".join(collab_row_ids)
                collab_details = self.seatable.sql_query(
                    f"SELECT `_id`, `Seatable User`, `Email address` FROM `Collaborators` WHERE `_id` IN ('{ids_str}')",
                    base_data="core_identity"
                )
                for detail in collab_details:
                    collaborator_info.append({
                        "row_id": detail.get("_id"),
                        "email": detail.get("Email address"),
                        "seatable_user": detail.get("Seatable User")
                    })
        
        identity["collaborator_info"] = collaborator_info
        identity.pop("Collaborator ID", None) # Limpiar el campo original link
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

        # Variable para recolectar App Keys únicas (para el campo 'apps' del contexto)
        unique_app_keys = set()

        # 2. Fetch all Assignments for this Identity
        assignment_links = identity.get("Assignments", [])
        
        if not assignment_links:
            identity["Assignments"] = []
            identity["apps"] = []
            return identity
        
        # Extraer los row_ids de los assignments
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
        
        # Construir query para obtener los assignments
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
        
        # IMPORTANTE: Ya no filtramos en el SQL por app_key para poder obtener todas las apps del usuario
        # en el campo 'apps', pero lo filtraremos localmente para los Assignments retornados.
        assignments = self.seatable.sql_query(query_assig, base_data="core_identity")


        # 3. Process and Normalize Assignments
        expanded_assignments = []
        
        # NUEVO: Primero recolectamos LAS APPS de todos los assignments (Sin filtrar)
        for assig in assignments:
            a_key = assig.get("App Key")
            if a_key:
                if isinstance(a_key, list):
                    for k in a_key: unique_app_keys.add(k)
                else:
                    unique_app_keys.add(a_key)

        # Ahora filtramos la lista para el procesamiento si se especificó un app_key
        if app_key:
            # Hacemos un match parcial para emular el LIKE '%app_key%'
            assignments = [
                a for a in assignments 
                if a.get("App Key") and app_key in str(a.get("App Key"))
            ]

        # Primero, recolectamos todos los role row_ids para los assignments filtrados
        all_role_row_ids = set()
        for assig in assignments:
            role_link = assig.get("Role", [])
            if isinstance(role_link, list):
                for r in role_link:
                    if isinstance(r, dict):
                        rid = r.get("row_id")
                        if rid:
                            all_role_row_ids.add(rid)
        
        # Obtener los nombres de todos los roles en una sola query
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
            # a) Unwrap Lookups/Links for display (solo Data, ya no App Key)
            val = assig.get("Data")
            if isinstance(val, list) and len(val) > 0:
                assig["Data"] = val[0]
            
            # b) Clean up Role: convertir a objetos con Role ID y Role Name
            role_link = assig.get("Role", [])
            enriched_roles = []
            if isinstance(role_link, list):
                for r in role_link:
                    if isinstance(r, dict):
                        rid = r.get("row_id")
                        if rid and rid in role_names_map:
                            # Crear objeto con Role ID y Role Name
                            role_info = role_names_map[rid]
                            role_obj = {
                                "Role ID": role_info.get("Role ID"),
                                "Role Name": role_info.get("Role Name")
                            }
                            enriched_roles.append(role_obj)
                        else:
                            # Fallback: usar display_value como Role ID
                            fallback_value = r.get("display_value") or str(r)
                            role_obj = {
                                "Role ID": fallback_value,
                                "Role Name": None
                            }
                            enriched_roles.append(role_obj)
                    else:
                        # Si es string directo
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
            
            # OPTIMIZACIÓN: Solo calculamos jerarquía si la app es EPR CRM
            app_url = request.host_url.rstrip('/')
            is_crm_app = "eprcrm.prismgrp.com" in app_url
            
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
            assig.pop("App Key", None)  # Eliminar App Key ya que todos están filtrados por la misma app
            
            expanded_assignments.append(assig)

        identity["Assignments"] = expanded_assignments
        
        # --- NUEVO: Enriquecer con metadatos de Aplicaciones (Sin hacer nueva query a Assignments) ---
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
        Analiza la configuración cruda de un rol para extraer su nivel de acceso a datos.
        
        Objetivo:
        - Mapear las configuraciones de SeaTable a los tokens internos: 'all', 'own', 'team', 'assigned'.
        - Proveer una lógica consistente para la interpretación de privilegios.
        """
        if not raw_data: return None
        
        # Si es una lista (común en SeaTable for link/lookup/multi-select)
        if isinstance(raw_data, list):
            if not raw_data: return None
            # Si el primer elemento es un string, devolvemos el string (ej. ['own'])
            # Si hay varios, devolvemos la lista para que el llamante decida
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
