"""
Capa de Persistencia e Interacción con SeaTable API.

Este servicio actúa como un ORM simplificado y cliente de API para SeaTable. Provee una 
interfaz unificada para realizar consultas SQL, operaciones CRUD y gestión de vínculos 
entre tablas de forma segura y eficiente.

Objetivos clave:
1. Implementar un patrón Singleton para la gestión centralizada de conexiones.
2. Facilitar la ejecución de consultas SQL complejas sobre las bases de datos de SeaTable.
3. Automatizar la gestión de tokens de autenticación y re-conexión.
4. Proveer métodos de alto nivel para operaciones de red (Append, Update, Link).
"""
import os
import time
from datetime import date
from config import Config
from seatable_api import Base
from seatable_api.exception import AuthExpiredError

class Seatable:
    """
    Cliente centralizado para las operaciones de base de datos en SeaTable.
    
    Esta clase gestiona múltiples contextos de base de datos (Bases) y asegura 
    una comunicación fluida y autenticada con el servidor de SeaTable.
    """
    _instance = None
    _bases = {}

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super(Seatable, cls).__new__(cls)
        return cls._instance

    def __init__(self, api_token=None):
        # Evitar re-inicializaciÃ³n si el singleton ya existe
        if hasattr(self, 'initialized'):
            return
            
        self.server_url = Config.SEATABLE_SERVER_URL
        self.api_token_core_identity = Config.SEATABLE_API_TOKEN_CORE_IDENTITY
        self.api_token = self.api_token_core_identity
        self.base = None
        self.link_ids_cache = {}
        self.lookup_tables  = {}
        self.link_configs   = []
        self.initialized = True

    def base_auth(self, api_token=None):
        if api_token:
            self.api_token = api_token  # Actualiza el token si se proporciona uno nuevo

        self.base = Base(self.api_token, self.server_url)
        self.base.auth()
        return self.base
    
    def get_base(self, base_key=None):
        """
        Obtiene o inicializa una conexión (Base) a una base de datos específica.
        
        Objetivo:
        - Reutilizar conexiones existentes mediante un sistema de caché de bases.
        - Autenticar dinámicamente usando el token de API correspondiente.
        - Asegurar que el servidor de SeaTable sea accesible antes de retornar la base.
        """

        # Aseguramos un diccionario interno para almacenar conexiones
        if not hasattr(self, "_bases"):
            self._bases = {}

        # Si se pide una base especÃ­fica
        if base_key:
            if base_key not in Seatable._bases:
                print(f"ðŸ”‘ Creando conexiÃ³n persistente para base: {base_key}")

                api_token = self.api_token_core_identity
                if not api_token:
                    raise ValueError(f"âŒ No hay token configurado para la base '{base_key}'")

                base = Base(api_token, self.server_url)
                base.auth()
                Seatable._bases[base_key] = base
                print(f"âœ… ConexiÃ³n '{base_key}' establecida y guardada en pool.")

            return Seatable._bases[base_key]

            return self._bases[base_key]

        # Si se pide la base principal (como antes)
        if not self.base:
            self.base_auth()
        return self.base


    def sql_query_one(self, query, base_data=None):
        """
        Ejecuta una consulta SQL y retorna un único registro.
        
        Objetivo:
        - Simplificar la recuperación de filas únicas (ej: búsqueda por Email o ID).
        - Manejar automáticamente la extracción del primer elemento del resultado.
        - Proveer una interfaz limpia para consultas de existencia.
        """
        max_retries = 3
        wait_seconds = 20
        print(query)
        for attempt in range(1, max_retries + 1):
            try:
                print(f"â³ Ejecutando query (intento {attempt}/{max_retries})")
                base = self.get_base(base_data)
                json_data = base.query(query)
                print(f"âœ… Datos obtenidos correctamente.")
                return json_data

            except AuthExpiredError:
                print("ðŸ”‘ SesiÃ³n expirada. Reautenticando...")
                time.sleep(2)  # Espera leve antes de reintentar autenticaciÃ³n
                continue

            except Exception as e:
                if "502" in str(e):
                    print(f"âš ï¸ Error 502 (Bad Gateway). Reintentando en {wait_seconds} segundos...")
                    time.sleep(wait_seconds)
                else:
                    print(f"âŒ Error inesperado al ejecutar query: {e}")
                    break

        print("â— No se pudo obtener datos luego de varios intentos.")
        return []

    def sql_query(self, query, batch=10000, base_data=None):
        """
        Ejecuta una consulta SQL masiva y retorna una lista de registros.
        
        Objetivo:
        - Permitir la ejecución de sentencias SQL nativas de SeaTable.
        - Gestionar la paginación o el límite de registros si fuera necesario.
        - Centralizar el logging y el manejo de errores de comunicación SQL.
        """
        offset = 0
        all_data = []
        max_retries = 3
        wait_seconds = 30

        while True:
            paged_query = f"{query} LIMIT {batch} OFFSET {offset}"
            attempts = 0

            while attempts < max_retries:
                try:
                    base = self.get_base(base_data)
                    json_data = base.query(paged_query)
                    break  # Ã©xito â†’ salimos del bucle de reintentos

                except AuthExpiredError:
                    print("ðŸ”‘ Token expirado. Reautenticando...")
                    self.get_base(base_data)
                    time.sleep(2)

                except Exception as e:
                    attempts += 1
                    if "502" in str(e):
                        print(f"âš ï¸ Error 502 (Bad Gateway). Esperando {wait_seconds} segundos antes de reintentar...")
                        time.sleep(wait_seconds)
                    elif attempts < max_retries:
                        print(f"âš ï¸ Error: {e}. Reintentando en {wait_seconds} segundos...")
                        time.sleep(wait_seconds)
                    else:
                        print(f"âŒ Error persistente tras {max_retries} intentos: {e}")
                        raise

            else:
                # Si salimos del bucle sin romperlo (fallaron todos los intentos)
                print("â— No se pudo recuperar este bloque de datos. Finalizando consulta.")
                break

            if not json_data:
                break

            all_data.extend(json_data)
            
            # Si el lote es menor al solicitado, ya no hay mÃ¡s pÃ¡ginas
            if len(json_data) < batch:
                break
                
            offset += batch

        return all_data

    
    def perform_table_operation(self, table_name, row_data=None, type_batch="", row_id="",base_data=None):
        """
        Ejecuta operaciones atómicas de escritura (Creación o Actualización) en una tabla.
        
        Objetivo:
        - Unificar las operaciones 'append_row' y 'update_row' en un solo método.
        - Implementar lógica de reintento automático en caso de expiración de token.
        - Validar la integridad de los datos antes de enviarlos a SeaTable.
        """
        print(f"ðŸ“— Table to insert {table_name}")

        def run_operation(base):
            method_map = {
                "append_row": base.append_row,
                "update_row": base.update_row,
                "delete_row": base.batch_update_rows,
            }

            method = method_map.get(type_batch)
            if not method:
                raise ValueError(f"Tipo de batch '{type_batch}' no es vÃ¡lido.")
            row = ""

            if type_batch == "append_row":
                row = method(table_name, row_data, apply_default=True)
                print("ðŸŸ© Registro subido")
            elif type_batch == "update_row":
                row = method(table_name, row_id, row_data)
                print("ðŸŸ© Registro actualizado")
            elif type_batch == "delete_row":
                row = method(table_name, row_id)
                print("ðŸŸ© Registro eliminado")
            return row

        max_retries = 3

        for retry in range(1, max_retries + 1):
            try:
                print(f"Procesando {type_batch} (intento {retry}/{max_retries})")
                base = self.get_base(base_data)
                return run_operation(base)

            except (AuthExpiredError, ConnectionResetError) as e:
                print(f"{type(e).__name__}: {e}. Reintentando en 20s...")
                time.sleep(20)

            except Exception as e:
                if "502" in str(e):
                    #logger_general.error(f"âš ï¸ Error 502 (Bad Gateway): intento {retry}/{max_retries}. Esperando 30s antes de reintentar...")
                    print(f"âš ï¸ Error 502 (Bad Gateway): intento {retry}/{max_retries}. Esperando 30s antes de reintentar...")
                    time.sleep(30)
                else:
                    #logger_general.error(f"âŒ Error al ejecutar '{type_batch}': {e}: intento {retry}/{max_retries}. Esperando 30s antes de reintentar...")
                    print(f"âŒ Error al ejecutar '{type_batch}': {e}: intento {retry}/{max_retries}. Esperando 30s antes de reintentar...")
                    time.sleep(30)

        return "âœ… Finalizado"
    
    def get_column_link_id(self, table_name, column_name, base_data=None):
        base = self.get_base(base_data)

        link_id = base.get_column_link_id(table_name, column_name)
        time.sleep(1)

        return link_id
    
    def perform_link_operation(self, link_id, row_id, other_row_id, table_name, other_table_name, base_data=None):
        """
        Gestiona la creación de relaciones (vínculos) entre registros de diferentes tablas.
        
        Objetivo:
        - Ejecutar la vinculación física entre dos IDs de fila usando un Link ID específico.
        - Asegurar que la operación sea segura frente a tokens expirados.
        - Mantener la consistencia de las relaciones bidireccionales en el sistema.
        """
        print(f"ðŸ”— link_id {link_id}")
        print(f"ðŸ”— row_id {row_id}")
        print(f"ðŸ”— other_row_id {other_row_id}")
        print(f"ðŸ”— table_name {table_name}")
        print(f"ðŸ”— other_table_name {other_table_name}")
        def run_operation(base):
            link = base.add_link(
                link_id,
                table_name,
                other_table_name,
                row_id,
                other_row_id
            )
            print(f"ðŸ”— Link creado: {row_id} â†’ {other_row_id}")
            print(f"ðŸ”Ž Respuesta de add_link: {link} (tipo: {type(link)})")
            time.sleep(0.5)
            return link

        max_retries = 3
        for intento in range(max_retries):
            try:
                print(f"Procesando creaciÃ³n de link (intento {intento + 1})")
                base = self.get_base(base_data)
                link = run_operation(base)
                return link
            except (AuthExpiredError, ConnectionResetError) as e:
                print(f"{type(e).__name__}: {e}. Reintentando... en 30s")
                time.sleep(30)
            except Exception as e:
                #logger_general.error(f"âŒ Error al crear link: {e}. Reintentando... en 30s")
                print(f"âŒ Error al crear link: {e}. Reintentando... en 30s")
                time.sleep(30)

        return None
    
    def batch_query(self, table_name, rows_data, type_batch="", batch=50):
        base = self.get_base()
        offset = 0
        method_map = {
            "batch_append_rows": base.batch_append_rows,
            "big_data_insert_rows": base.big_data_insert_rows,
            "batch_update_rows": base.batch_update_rows,
            "batch_delete_rows": base.batch_delete_rows,
        }

        method = method_map.get(type_batch)
        if not method:
            raise ValueError(f"Tipo de batch '{type_batch}' no es vÃ¡lido.")

        while offset < len(rows_data):
            batch_data = rows_data[offset:offset + batch]
            retry_count = 0
            success = False

            while retry_count < 3 and not success:
                try:
                    print(f"ðŸ”„ Procesando lote desde {offset} hasta {offset + len(batch_data)} ({len(batch_data)} registros)")
                    method(table_name, batch_data)
                    print(f"ðŸŸ© Registros subidos correctamente: {len(batch_data)} filas")
                    time.sleep(5)
                    success = True  # Marcamos como exitoso para salir del bucle interno
                    offset += batch

                except (AuthExpiredError, ConnectionResetError) as err:
                    retry_count += 1
                    print(f"âš ï¸ Error de conexiÃ³n ({type(err).__name__}): intento {retry_count}/3. Reintentando en 30s...")
                    time.sleep(30)
                    base = self.get_base()
                    method = method_map.get(type_batch)

                except Exception as e:
                    if "502" in str(e) or "500" in str(e):
                        retry_count += 1
                        print(f"âš ï¸ Error 502/500 (Bad Gateway/Internal Server Error): intento {retry_count}/3. Esperando 30s antes de reintentar...")
                        time.sleep(30)
                        # No cambia offset, se reintenta
                    else:
                        print(f"âŒ Error no controlado: {e}")
                        return "âŒ Fallo inesperado"

            if not success:
                print(f"â›” FallÃ³ el lote desde {offset} hasta {offset + len(batch_data)} tras 3 intentos.")
                break  # Salimos del bucle principal si no se logrÃ³ insertar el batch

        return None


    def insert_from_excel_or_csv_to_seatable(self, file, table_name, sheet_name):
        df = self.excel_or_csv_to_dataframe(file, sheet_name)

        """ collaborators = [
        "333079364233403fb0b35dd278d24486@auth.local",
        "6fd33907093e4741a72714710434adf1@auth.local",
        "ca7503a5722141e4a8efa9b357265b3d@auth.local"
        ]

        df["Collaborators"] = [collaborators] * len(df) """


        payload = self.create_payload_insert(df)

        result = self.batch_query(table_name, rows_data=payload, type_batch="batch_append_rows")
        return result
    
    def build_reference_data(self, link_configs):
        """
        Inicializa completamente el cache de referencias.
        Llama internamente a add_reference_data, reseteando antes.
        """
        self.link_ids_cache = {}
        self.lookup_tables  = {}
        self.link_configs   = []
        self.add_reference_data(link_configs)

    def add_reference_data(self, link_configs, force_refresh=False, handle_comma_separated_ids=False):
        """
        AÃ±ade SOLO las nuevas configuraciones de enlace que aÃºn no existan.

        Args:
            link_configs: Lista de configuraciones de enlace
            force_refresh: Si es True, refresca la referencia aunque ya exista
            handle_comma_separated_ids: Si es True, maneja IDs separados por comas en la referencia
        """
        for cfg in link_configs:
            # si ya lo procesamos, saltamos (a menos que force_refresh sea True)
            if not force_refresh and any(existing["table_name"] == cfg["table_name"] for existing in self.link_configs):
                continue

            print(f"â˜‘ï¸ Haciendo referencia a la tabla: {cfg['table_name']}")

            # 1) link_id
            link_id = self.get_column_link_id(
                cfg["other_table_name"],
                cfg["link_id_name"]
            )
            self.link_ids_cache[cfg["table_name"]] = link_id

            # 2) lookup table
            query = f"SELECT `{cfg['column_name']}` AS name, _id FROM `{cfg['table_name']}`"

            self.lookup_tables[cfg["table_name"]] = self.sql_query(query)

            # 3) marcamos que ya lo procesamos (solo si no existe ya)
            if not any(existing["table_name"] == cfg["table_name"] for existing in self.link_configs):
                # Store if this config handles comma-separated IDs
                cfg_copy = cfg.copy()
                cfg_copy["handle_comma_separated_ids"] = handle_comma_separated_ids
                self.link_configs.append(cfg_copy)
        

    def upload_new_records_to_seatable_2025(self, new_data, existing_data_2025, table_name, columns_to_check_status, role="Agencias", key_columns_new=None, key_columns_existing=None, column_mapping=None, platform=""):
        """
        Identifica registros nuevos y los sube a Seatable, asegurÃ¡ndose de que las URLs no estÃ©n duplicadas.
        
        ParÃ¡metros:
        - new_data: DataFrame con los nuevos datos
        - existing_data: DataFrame con los datos existentes
        - table_name: Nombre de la tabla en Seatable
        - key_columns_new: Columnas clave en new_data para identificar registros Ãºnicos
        - key_columns_existing: Columnas clave en existing_data para identificar registros Ãºnicos
        - column_mapping: Diccionario con el mapeo de nombres de columnas {nombre_en_new_data: nombre_en_seatable_2025}
        """
        # Paso 1: Identificar los registros nuevos
        new_records = identify_records_2025(new_data, existing_data_2025, key_columns_new, key_columns_existing)
        # Paso 2: Obtener todas las URLs existentes en la tabla de Seatable 
        existing_urls = get_existing_urls_from_seatable()
        
        # Paso 3: Filtrar los nuevos registros para eliminar los que ya tienen URLs existentes
        new_records_filtered = new_records[~new_records['URL'].isin(existing_urls)]  # Excluir URLs duplicadas

        total_rows = len(new_records_filtered)

        progress_reporter.update_upload_progress(platform, 0, total_rows, f"Tabla 2025 - {total_rows} filas a procesar")

        date_columns = ["Date", "Date Excel", "Date Other"]

        for col in date_columns:
            if col in new_records_filtered.columns:
                new_records_filtered[col] = new_records_filtered[col].map(
                    lambda d: d.isoformat() if isinstance(d, date) else str(d)
                )

        new_records_filtered = new_records_filtered.astype(object)

        for col in new_records_filtered.columns:
            try:
                new_records_filtered[col] = new_records_filtered[col].where(pd.notnull(new_records_filtered[col]), None)
            except (ValueError, TypeError):
                # MÃ©todo alternativo para columnas problemÃ¡ticas
                new_records_filtered[col] = new_records_filtered[col].apply(
                    lambda x: None if pd.isna(x) else x
                )
        
        if new_records_filtered.empty:
            print("No hay nuevos registros para subir a Seatable.")
            return 0, []
        
        analysts_by_market = get_analysts_by_market()
        responsables_by_market = get_analysts_by_market(role)
        mh_collaborators = get_mh_collaborators()
        # Aplicar el mapeo de columnas si se proporciona
        if column_mapping:
            records_to_upload = []
            for _, row in new_records_filtered.iterrows():
                record = {}
                row = clean_cell(row)
                for col_original, value in row.items():
                    # Si la columna estÃ¡ en el mapeo, usar el nombre correspondiente en Seatable 2025
                    col_seatable = column_mapping.get(col_original, col_original)
                    record[col_seatable] = value

                    country = record.get("_Country_")

                    if country and country in responsables_by_market:
                        record["Responsable"] = responsables_by_market[country]
                    else:
                        record["Responsable"] = []

                    if columns_to_check_status:
                        has_empty = any(
                            record.get(col) is None or record.get(col) == "" or record.get(col) == []
                            for col in columns_to_check_status
                        )
                        record["Status"] = "Nuevo" if has_empty else "Listo para analizar"
                        

                        if record.get("Status") == "Listo para analizar":
                            if country and country in analysts_by_market:
                                record["Analista"] = analysts_by_market[country]
                            else:
                                record["Analista"] = []
                    else:
                        record["Analista"] = []

                    record["Collaborators"] = mh_collaborators

                records_to_upload.append(record)
        else:
            # Si no hay mapeo, usar los nombres originales
            records_to_upload = new_records_filtered.to_dict(orient='records')

        total_records = len(records_to_upload)
        print(f"ðŸŸ© TOTAL RECORDS: {total_records} ......")
        uploaded_count = 0

        link_ids_cache = self.link_ids_cache
        lookup_tables  = self.lookup_tables

        # ðŸ” 3. Insertar registros y realizar enlaces
        for record in records_to_upload:
            uploaded_count += 1
            progress_reporter.update_upload_progress(platform, uploaded_count, total_rows, f"Tabla 2025 - Procesando fila {uploaded_count}/{total_rows}")

            created = self.perform_table_operation(TABLE_2025, record, type_batch="append_row")
            other_row_id = created["_id"]
            
            for cfg in self.link_configs:
                table_name = cfg["table_name"]
                other_table_name = cfg["other_table_name"]
                match_value = record.get(cfg["other_column_name"])

                # Buscar el row_id de la tabla de referencia segÃºn valor
                row_id = next(
                    (item["_id"] for item in lookup_tables[table_name] if item["name"] == match_value),
                    None
                )

                if row_id:
                    link_id = link_ids_cache[table_name]
                    self.perform_link_operation(link_id, row_id, other_row_id, table_name, other_table_name)
                else:
                    print(f"âš ï¸ No se encontrÃ³ '{match_value}' en {table_name}")


 
        progress_reporter.update_upload_progress(platform, total_rows, total_rows, f"Tabla 2025 - Subida completada: {total_rows} filas")
        print(f"ðŸŸ© Proceso completado. Total de registros nuevos subidos: {total_records}")
        message = f"Filas subidas: {uploaded_count} / {total_records}"
        data_to_return = {
            "records_to_upload": records_to_upload,
            "upload_2025": message,
        }


        return data_to_return
    
    def upload_single_record_to_seatable_2025(self, record_data, table_name, columns_to_check_status=None, role=None, column_mapping=None, enable_link=False):
        """
        Sube un solo registro a Seatable con el mismo procesamiento que upload_new_records_to_seatable_2025
        pero sin identificar registros nuevos ni verificar URLs existentes.
        
        ParÃ¡metros:
        - record_data: DataFrame con una sola fila o dict con los datos del registro
        - table_name: Nombre de la tabla en Seatable
        - columns_to_check_status: Columnas para verificar si el registro estÃ¡ completo
        - role: Rol para asignar responsables
        - column_mapping: Diccionario con el mapeo de nombres de columnas
        """
        # Convertir a dict si es DataFrame
        if isinstance(record_data, pd.DataFrame):
            if len(record_data) != 1:
                raise ValueError("record_data debe contener exactamente una fila")
            record = record_data.iloc[0].to_dict()
        else:
            record = record_data.copy()
        
        # Procesar fecha si existe
        date_keys = ["Date", "Date Excel", "Date Other"]

        for key in date_keys:
            if key in record and record[key] is not None:
                if hasattr(record[key], "isoformat"):
                    record[key] = record[key].isoformat()
                else:
                    record[key] = str(record[key])
        
        record = clean_cell(record)
        
        # Obtener datos de referencia
        analysts_by_market = get_analysts_by_market()
        responsables_by_market = get_analysts_by_market(role) if role else {}
        mh_collaborators = get_mh_collaborators()
        
        # Aplicar el mapeo de columnas si se proporciona
        if column_mapping:
            mapped_record = {}
            for col_original, value in record.items():
                # Si la columna estÃ¡ en el mapeo, usar el nombre correspondiente en Seatable 2025
                col_seatable = column_mapping.get(col_original, col_original)
                mapped_record[col_seatable] = value
            record = mapped_record
        
        # Asignar responsable por paÃ­s
        country = record.get("_Country_")
        if country and country in responsables_by_market:
            record["Responsable"] = responsables_by_market[country]
        else:
            record["Responsable"] = []
        
        # Verificar status y asignar analista
        if columns_to_check_status:
            has_empty = any(
                record.get(col) is None or record.get(col) == "" or record.get(col) == []
                for col in columns_to_check_status
            )
            record["Status"] = "Nuevo" if has_empty else "Listo para analizar"
            
            if record.get("Status") == "Listo para analizar":
                if country and country in analysts_by_market:
                    record["Analista"] = analysts_by_market[country]
                else:
                    record["Analista"] = []
        else:
            record["Analista"] = []
        
        # Asignar colaboradores
        record["Collaborators"] = mh_collaborators
        
        # Insertar registro
        created = self.perform_table_operation(table_name, record, type_batch="append_row")
        
        if not created or not isinstance(created, dict) or "_id" not in created:
            raise Exception(f"Error al crear registro en Seatable: {created}")
        
        other_row_id = created["_id"]

        if enable_link == True:
            # Realizar enlaces si estÃ¡n configurados
            link_ids_cache = self.link_ids_cache
            lookup_tables = self.lookup_tables
            
            for cfg in self.link_configs:
                table_name_link = cfg["table_name"]
                other_table_name = cfg["other_table_name"]
                match_value = record.get(cfg["other_column_name"])
                
                # Buscar el row_id de la tabla de referencia segÃºn valor
                row_id = next(
                    (item["_id"] for item in lookup_tables[table_name_link] if item["name"] == match_value),
                    None
                )
                
                
                if row_id:
                    link_id = link_ids_cache[table_name_link]
                    self.perform_link_operation(link_id, row_id, other_row_id, table_name_link, other_table_name)
        
        return created
    
    def _try_enhanced_linking(self, record, cfg, lookup_tables, alternative_ids_column, successful_group_mappings=None):
        """
        Try enhanced linking with multiple TraackrIDs, ensuring all group members use the same successful ID

        Args:
            record: Record dictionary
            cfg: Link configuration
            lookup_tables: Lookup tables for references
            alternative_ids_column: Column name containing alternative IDs
            successful_group_mappings: Dictionary to track successful TraackrIDs by group

        Returns:
            tuple (row_id, successful_traackr_id) if successful, (None, None) otherwise
        """
        table_name = cfg["table_name"]
        original_traackr_id = record.get(cfg["other_column_name"], "")
        alternative_ids_str = record.get(alternative_ids_column, "")

        # Build list of IDs to try: original first, then alternatives
        ids_to_try = [original_traackr_id] if original_traackr_id else []

        if alternative_ids_str:
            alternative_ids = [id.strip() for id in alternative_ids_str.split(',') if id.strip()]
            ids_to_try.extend(alternative_ids)

        if not ids_to_try:
            print(f"âš ï¸ No hay TraackrID disponible para enhanced linking")
            return None, None

        # Create group identifier for this record (all IDs that belong to the same group)
        group_ids = set([original_traackr_id] + ([id.strip() for id in alternative_ids_str.split(',') if id.strip()] if alternative_ids_str else []))
        group_key = tuple(sorted([id for id in group_ids if id]))  # Sort for consistent key

        # Check if we already found a successful TraackrID for this group
        if successful_group_mappings and group_key in successful_group_mappings:
            successful_id = successful_group_mappings[group_key]
            lookup_table = lookup_tables.get(table_name, [])

            # Search for successful_id in lookup_table, handling both string and array formats
            row_id = None
            for item in lookup_table:
                name_value = item.get("name")

                # If name is a string, do direct comparison
                if isinstance(name_value, str) and name_value == successful_id:
                    row_id = item["_id"]
                    break
                # If name is a list/array, search within the array
                elif isinstance(name_value, list):
                    # Check if any element in the array matches successful_id
                    for element in name_value:
                        # Handle different possible array element formats
                        if isinstance(element, str) and element == successful_id:
                            row_id = item["_id"]
                            break
                        elif isinstance(element, dict) and element.get("display_value") == successful_id:
                            row_id = item["_id"]
                            break
                    if row_id:
                        break
            if row_id:
                print(f"âœ… Usando TraackrID previamente exitoso para el grupo: {successful_id}")
                return row_id, successful_id
            else:
                print(f"âš ï¸ TraackrID previamente exitoso {successful_id} ya no estÃ¡ disponible")
                # Remove from successful mappings and try again
                del successful_group_mappings[group_key]

        print(f"ðŸ” Enhanced linking: probando {len(ids_to_try)} TraackrIDs para tabla {table_name}")

        # Try each TraackrID until one works
        lookup_table = lookup_tables.get(table_name, [])

        for traackr_id in ids_to_try:
            if not traackr_id:
                continue

            # Look for this TraackrID in the lookup table
            # Handle both string and array formats for the "name" field
            row_id = None
            for item in lookup_table:
                name_value = item.get("name")

                # If name is a string, do direct comparison
                if isinstance(name_value, str) and name_value == traackr_id:
                    row_id = item["_id"]
                    break
                # If name is a list/array, search within the array
                elif isinstance(name_value, list):
                    # Check if any element in the array matches traackr_id
                    for element in name_value:
                        # Handle different possible array element formats
                        if isinstance(element, str) and element == traackr_id:
                            row_id = item["_id"]
                            break
                        elif isinstance(element, dict) and element.get("display_value") == traackr_id:
                            row_id = item["_id"]
                            break
                    if row_id:
                        break

            if row_id:
                print(f"âœ… Enhanced linking exitoso con TraackrID: {traackr_id}")
                # Store successful TraackrID for this group
                if successful_group_mappings is not None:
                    successful_group_mappings[group_key] = traackr_id
                    print(f"ðŸ“ Almacenado TraackrID exitoso {traackr_id} para el grupo {list(group_key)}")
                return row_id, traackr_id
            else:
                print(f"âŒ TraackrID {traackr_id} no encontrado en tabla {table_name}")

        print(f"âš ï¸ Enhanced linking fallÃ³: ningÃºn TraackrID funcionÃ³. Probados: {ids_to_try}")
        return None, None

    def _try_enhanced_linking_talkwalker(self, record, cfg, lookup_tables):
        """
        Try enhanced linking for TalkwalkerID - simplified version without groups

        Args:
            record: Record dictionary
            cfg: Link configuration
            lookup_tables: Lookup tables for references

        Returns:
            tuple (row_id, successful_talkwalker_id) if successful, (None, None) otherwise
        """
        table_name = cfg["table_name"]
        original_talkwalker_id = record.get(cfg["other_column_name"], "")

        # Build list of IDs to try - for Talkwalker we look for comma-separated values in the lookup table
        ids_to_try = [original_talkwalker_id] if original_talkwalker_id else []

        if not ids_to_try:
            print(f"âš ï¸ No hay TalkwalkerID disponible para enhanced linking")
            return None, None

        print(f"ðŸ” Enhanced linking Talkwalker: probando {len(ids_to_try)} TalkwalkerIDs para tabla {table_name}")

        # Try each TalkwalkerID until one works
        lookup_table = lookup_tables.get(table_name, [])

        for talkwalker_id in ids_to_try:
            if not talkwalker_id:
                continue

            # Look for this TalkwalkerID in the lookup table
            # Handle both string and array formats for the "name" field (same logic as TraackrID)
            row_id = None
            for item in lookup_table:
                name_value = item.get("name")

                # If name is a string, check if it contains the talkwalker_id (could be comma-separated)
                if isinstance(name_value, str):
                    if name_value == talkwalker_id:
                        row_id = item["_id"]
                        break
                    # Check if it's comma-separated and contains our ID
                    elif "," in name_value:
                        ids_in_field = [id.strip() for id in name_value.split(",") if id.strip()]
                        if talkwalker_id in ids_in_field:
                            row_id = item["_id"]
                            break
                # If name is a list/array, search within the array
                elif isinstance(name_value, list):
                    # Check if any element in the array matches talkwalker_id
                    for element in name_value:
                        # Handle different possible array element formats
                        if isinstance(element, str) and element == talkwalker_id:
                            row_id = item["_id"]
                            break
                        elif isinstance(element, dict) and element.get("display_value") == talkwalker_id:
                            row_id = item["_id"]
                            break
                    if row_id:
                        break

            if row_id:
                print(f"âœ… Enhanced linking exitoso con TalkwalkerID: {talkwalker_id}")
                return row_id, talkwalker_id
            else:
                print(f"âŒ TalkwalkerID {talkwalker_id} no encontrado en tabla {table_name}")

        print(f"âš ï¸ Enhanced linking fallÃ³: ningÃºn TalkwalkerID funcionÃ³. Probados: {ids_to_try}")
        return None, None

    def set_network_priority_order(self, new_priority):
        """
        Configura el orden de prioridad para las redes sociales.

        Args:
            new_priority (List[str]): Nueva lista de prioridad ordenada
                                     (ej: ["instagram", "facebook", "tiktok", "youtube"])
        """
        self.network_priority_manager.set_priority_order(new_priority)

    def get_network_priority_order(self):
        """
        Obtiene el orden actual de prioridad de las redes sociales.

        Returns:
            List[str]: Orden actual de prioridad
        """
        return self.network_priority_manager.get_priority_order()
    
    def upload_new_records_to_seatable(self, new_data, existing_data, table_name, key_columns=None, enable_link: bool = False, table_to_insert="", platform=None, custom_fn=None, alternative_ids_column=None, df_source=None):
        """
        Identifica registros nuevos y los sube a Seatable.
        """
        if platform:
            progress_reporter.add_log(platform, f"INICIANDO SUBIDA - Tabla: {table_name} - {len(new_data)} filas nuevas detectadas")
        # Identificar los registros nuevos
        new_records = identify_records(new_data, existing_data, key_columns)
        
        # Apply custom function only to new records if provided
        if callable(custom_fn):
            print(f"ðŸ”„ FunciÃ³n personalizada detectada: {custom_fn}")
            if not new_records.empty:
                print(f"ðŸ”„ Aplicando funciÃ³n personalizada a {len(new_records)} registros nuevos...")
                new_records = custom_fn(new_records)
            else:
                print("âš ï¸ No hay registros nuevos para aplicar la funciÃ³n personalizada")
        else:
            print("âš ï¸ No se proporcionÃ³ funciÃ³n personalizada o no es callable")
        
        date_columns = ["Date", "Date Excel", "Date Other"]

        for col in date_columns:
            if col in new_records.columns:
                new_records[col] = new_records[col].map(
                    lambda d: d.isoformat() if isinstance(d, date) else str(d)
                )
    
        new_records = new_records.astype(object).where(pd.notnull(new_records), None)


        if new_records.empty:
            print("No hay nuevos registros para subir a Seatable.")
            return 0, []
        
        if table_name not in ["Influencer Info", "Influencers Perfs", "Channel"]:
            # Agrupar los registros por URL
            existing_urls = get_existing_urls_from_seatable()

            new_records['Status'] = 'Nuevo'
            for i, row in new_records.iterrows():
                url = row.get('URL')
                if pd.notna(url) and url != "" and url in existing_urls:
                    new_records.loc[i, 'Status'] = 'URL Duplicada'
        
        # Convertir los registros nuevos a una lista de diccionarios
        records_to_upload = new_records.to_dict(orient='records')
        total_records = len(records_to_upload)
        print(f"ðŸŸ© TOTAL RECORDS: {total_records}")
    
        # Subir los registros en lotes
        print("â³ Haciendo subida de filas...")
        link_ids_cache = self.link_ids_cache
        lookup_tables  = self.lookup_tables

        directory = False
        if table_name == "Influencer Info" and platform == "Lefty" or table_name == "Channel" and platform == "Talkwalker" or table_name == "Channel" and platform == "Traackr":
            directory = True

        count_rows = 0
        total_rows = len(records_to_upload)

        # Dictionary to track successful TraackrIDs by group for enhanced linking
        successful_group_mappings = {}

        # Cache to avoid creating duplicate Source records for the same TraackrID
        created_source_cache = {}

        # Cache to store successful Source linking for groups
        group_source_cache = {}

        if enable_link:
            if directory:
                    progress_reporter.update_directory_progress(platform, count_rows, total_rows, "")
            for record in records_to_upload:
                count_rows += 1
                created = self.perform_table_operation(table_to_insert, record, type_batch="append_row")
                other_row_id = created["_id"]
                if directory:
                    progress_reporter.update_directory_progress(platform, count_rows, total_rows, "")

                for cfg in self.link_configs:
                    table_name = cfg["table_name"]
                    other_table_name = cfg["other_table_name"]
                    match_value = record.get(cfg["other_column_name"])

                    # Enhanced linking: try multiple TraackrIDs if alternative_ids_column is provided
                    if alternative_ids_column and alternative_ids_column in record and cfg["other_column_name"] == "TraackrID":
                        # Use enhanced linking with auto-creation capability
                        row_id, successful_traackr_id = self.auto_source_creator.try_enhanced_linking_with_auto_creation(
                            record, cfg, lookup_tables, alternative_ids_column, successful_group_mappings,
                            self._try_enhanced_linking, self.perform_table_operation, df_source, None, platform or "traackr", self, group_source_cache
                        )
                        if row_id and successful_traackr_id:
                            print(f"âœ… Enhanced linking exitoso usando TraackrID: {successful_traackr_id}")
                            # Update lookup table after successful auto-creation
                            if successful_traackr_id not in [item.get("name") for item in lookup_tables.get("Source", [])]:
                                self.auto_source_creator.update_source_lookup_table(
                                    successful_traackr_id, row_id, self.lookup_tables
                                )
                    # Enhanced linking for TalkwalkerID: with URL extraction and Channel search
                    elif cfg["other_column_name"] == "TalkwalkerID" and cfg.get("handle_comma_separated_ids", False):
                        print("ðŸ—£ï¸ Enhanced linking para Talkwalker: probando mÃºltiples TalkwalkerIDs")

                        # Try enhanced linking with auto-creation (includes URL extraction and Channel search)
                        row_id, successful_talkwalker_id = self.auto_source_creator.try_enhanced_linking_with_auto_creation(
                            record, cfg, lookup_tables, None, None,
                            self._try_enhanced_linking_talkwalker, self.perform_table_operation, df_source, created_source_cache, "talkwalker", self, None
                        )

                        if row_id and successful_talkwalker_id:
                            print(f"âœ… Enhanced linking exitoso con TalkwalkerID: {successful_talkwalker_id}")
                            # Update lookup table if needed
                            if successful_talkwalker_id not in [item.get("name") for item in lookup_tables.get("Source", [])]:
                                self.auto_source_creator.update_source_lookup_table(
                                    successful_talkwalker_id, row_id, self.lookup_tables
                                )
                    else:
                        # BÃºsqueda estÃ¡ndar
                        row_id = None
                        # Caso especial: Lefty MetaID en tabla Source (campo tipo link)
                        if (cfg["column_name"] == "Lefty MetaID" and
                            cfg["other_table_name"] == "Channel" and
                            table_name == "Source"):

                            row_id = next(
                                (item["_id"] for item in lookup_tables[table_name]
                                 if isinstance(item.get("name"), list)
                                 and item["name"]
                                 and item["name"][0].get("display_value") == match_value),
                                None
                            )

                            print(f"ðŸ” Resultado row_id encontrado: {row_id}")
                        else:
                            # BÃºsqueda normal para otros campos
                            row_id = None

                            # Check if this config handles comma-separated IDs
                            if cfg.get("handle_comma_separated_ids", False) and match_value:
                                # Handle comma-separated IDs for Traackr Lookup
                                if isinstance(match_value, str) and "," in match_value:
                                    # Split by comma and try each ID separately
                                    ids_to_try = [id.strip() for id in match_value.split(",") if id.strip()]
                                    print(f"ðŸ” Probando IDs separados por comas: {ids_to_try}")
                                    print(lookup_tables)

                                    for single_id in ids_to_try:
                                        row_id = next(
                                            (item["_id"] for item in lookup_tables[table_name] if item["name"] == single_id),
                                            None
                                        )
                                        if row_id:
                                            print(f"âœ… Match encontrado con ID: {single_id}")
                                            break
                                else:
                                    # Single ID, normal search
                                    row_id = next(
                                        (item["_id"] for item in lookup_tables[table_name] if item["name"] == match_value),
                                        None
                                    )
                            else:
                                # Standard search for non-comma-separated configs
                                row_id = next(
                                    (item["_id"] for item in lookup_tables[table_name] if item["name"] == match_value),
                                    None
                                )

                    if row_id:
                        link_id = link_ids_cache[table_name]
                        self.perform_link_operation(link_id, row_id, other_row_id, table_name, other_table_name)
                        if alternative_ids_column and cfg["other_column_name"] == "TraackrID":
                            print(f"âœ… Enhanced linking exitoso para registro")
                    else:
                        print(f"âš ï¸ No se encontrÃ³ '{match_value}' en {table_name}")
                

            if platform:
                progress_reporter.add_log(platform, f"SUBIDA COMPLETADA - Tabla: {table_name} - AÃ‘ADIDAS: {len(records_to_upload)} filas con enlaces")
        else:
            print(f"ðŸŸ© Proceso completado. Total de registros nuevos subidos: {total_records}")
            self.batch_query(table_name, rows_data=records_to_upload, type_batch="batch_append_rows")
            if platform:
                progress_reporter.add_log(platform, f"SUBIDA COMPLETADA - Tabla: {table_name} - AÃ‘ADIDAS: {len(records_to_upload)} filas (batch)")

        
        print(f"ðŸŸ© Proceso completado. Total de registros nuevos subidos: {total_records}")
        return records_to_upload

    def excel_or_csv_to_dataframe(self, file_path, sheet_name=None):
        """
        Lee un archivo CSV o Excel y lo retorna como dataframe, limpia las columnas nan y inf por None.
        """
        # Detectar la extensiÃ³n del archivo
        _, ext = os.path.splitext(file_path.lower())

        # Leer el archivo segÃºn su tipo
        if ext == '.csv':
            df = pd.read_csv(file_path, encoding='UTF-8')
        elif ext in ['.xlsx', '.xls']:
            # Leer el archivo Excel, si se pasa un sheet_name, se lee esa hoja
            df = pd.read_excel(file_path, sheet_name=sheet_name)
        else:
            raise ValueError("Formato de archivo no soportado. Usa CSV o Excel.")

        # Reemplazar NaN o Inf por None
        df = df.replace([np.nan, np.inf], None)
        df = df.applymap(lambda d: d.isoformat() if isinstance(d, date) else str(d) if pd.notnull(d) else d)

        return df

    def create_payload_insert(self, dataframe):
        """
        Lee un dataframe y genera una lista de diccionarios para inserciones:
        [{<columna>: <valor>, ...}, ...]
        """
        return dataframe.to_dict(orient='records')

    def create_payload_update(self, dataframe, unique_key):
        """
        Lee un dataframe y genera una lista de diccionarios con la estructura:
        {
            "row_id": <valor_de_unique_key>,
            "row": {<columna>: <>, ...}  # sin la columna unique_key
        }
        """
        payload_list = []
        for _, row in dataframe.iterrows():
            row_id = row[unique_key]
            row_data = {col: row[col] for col in dataframe.columns if col != unique_key}
            row_data = {k: (v if v is not None else "") for k, v in row_data.items()}

            entry = {
                "row_id": row_id,
                "row": row_data
            }
            payload_list.append(entry)

        return payload_list
    
    def delete_rows_seatable(self, new_data, existing_data, table_name, tab, key_columns, condition=None, platform=None):
        """
        Elimina de SeatTable las filas que aparecen en existing_data y no en new_data,
        salvo aquellas cuyo Contract Count tenga un valor (no vacÃ­o, no '0').
        """

        if platform:
            progress_reporter.add_log(platform, f"INICIANDO ELIMINACIÃ“N - Tabla: {table_name} - Analizando {len(existing_data)} filas existentes", level="info")

        # 1) Identificar candidatos al borrado
        to_delete = identify_records_to_delete(existing_data, new_data, key_columns)
        # Asegurar que key_columns sea lista
        keys = [key_columns] if isinstance(key_columns, str) else list(key_columns)
        
        # 2) Si hay condiciÃ³n y estamos en la pestaÃ±a "Infos", filtramos por contract count
        if condition is not None and "Infos" in tab:
            # Tomamos solo las columnas clave + Contract Count de existing_data
            cols = keys + ["Contract Count"]
            df = to_delete.merge(
                existing_data[cols],
                on=keys,
                how="left",
                suffixes=("", "_orig")
            )
            # Detectar filas con contrato (no NaN, no '', no '0', no 0)
            has_contract = (
                df["Contract Count"].notna() &
                (df["Contract Count"].astype(str).str.strip() != "") &
                (df["Contract Count"].astype(str).str.strip() != "0") &
                (df["Contract Count"] != 0)
            )
            # Nos quedamos solo con las filas que NO tienen contrato
            df_to_update = df.loc[has_contract, :]
            df_to_delete = df.loc[~has_contract, :]
        else:
            df_to_update = pd.DataFrame(columns=to_delete.columns)
            df_to_delete = to_delete

        # 3) Extraer los _id de las filas a borrar
        rows_ids = df_to_delete["_id"].tolist()

        # 4) Ejecutar el batch delete si hay algo que borrar
        if rows_ids:
            print("")
            self.batch_query(
                table_name,
                rows_data=rows_ids,
                type_batch="batch_delete_rows"
            )
            if platform:
                progress_reporter.add_log(platform, f"ELIMINACIÃ“N COMPLETADA - Tabla: {table_name} - ELIMINADAS: {len(rows_ids)} filas")
        
        # Procesar actualizaciones (Monitoring Status â†’ Inactive)
        if not df_to_update.empty:
            rows_to_update = [
                {
                    "row_id": row["_id"],
                    "row": {"Monitoring Status": "Inactive"}
                }
                for _, row in df_to_update.iterrows()
            ]

            self.batch_query(
                table_name,
                rows_data=rows_to_update,
                type_batch="batch_update_rows"
            )
            if platform:
                progress_reporter.add_log(platform, f"ACTUALIZACIÃ“N COMPLETADA - Tabla: {table_name} - {len(rows_to_update)} filas marcadas como Inactive")
    
    def update_rows_seatable(self, df, prev_data, table_name, FIELDS_TO_UPDATE, unique_id="MetaId", unique_id_prev=None, platform=None):
        unique_id_prev = unique_id_prev or unique_id

        # Filtrar solo las columnas que necesitamos actualizar
        try:
            df_filtered = df[FIELDS_TO_UPDATE]
            print(f"df_filtered shape: {df_filtered.shape}")
            print(f"Columnas en df_filtered: {df_filtered.columns.tolist()}")
        except KeyError as e:
            print(f"ERROR al filtrar columnas: {e}")
            print(f"Columnas faltantes: {set(FIELDS_TO_UPDATE) - set(df.columns)}")
            return
        
        # DEBUGGING: Verificar antes del merge
        print(f"Columnas en prev_data para merge: {prev_data[['_id', unique_id_prev]].columns.tolist()}")
        print(f"Â¿{unique_id_prev} estÃ¡ en prev_data? {unique_id_prev in prev_data.columns}")
        
        # Filtrar solo las columnas que necesitamos actualizar
        df_filtered = df[FIELDS_TO_UPDATE]

        if platform:
            progress_reporter.add_log(platform, f"INICIANDO ACTUALIZACIÃ“N - Tabla: {table_name} - {len(df)} filas a verificar")

        # AsegÃºrate de que '_id' estÃ¡ presente en 'prev_data' para poder realizar la actualizaciÃ³n
        if '_id' not in prev_data.columns:
            raise ValueError("La columna '_id' no estÃ¡ presente en prev_data.")
        
        # Realizar un 'merge' entre df y prev_data usando 'MetaId' para agregar la columna '_id' a df
        df_with_ids = pd.merge(df_filtered, prev_data[['_id', unique_id_prev]].rename(columns={unique_id_prev: unique_id}), on=unique_id, how='left')

        # Crear una lista de diccionarios para enviar a batch_update_rows
        rows_to_update = []

        # Recorremos cada fila de df_filtered
        for _, row in df_with_ids.iterrows():
            row_id = row["_id"]  # Ahora obtenemos el _id de la columna que se uniÃ³

            if pd.isna(row_id):  # Si no existe _id ()
                continue  # Saltar esta fila si no tiene _id

            # Filtrar los datos de la fila de df para solo incluir las columnas que vamos a actualizar
            row_data = {col: row[col] for col in FIELDS_TO_UPDATE if col != unique_id}

            row_data = {
                col: (None if pd.isna(row[col]) else row[col])
                for col in FIELDS_TO_UPDATE if col != unique_id
            }

            # Crear el diccionario para batch_update_rows
            row_entry = {
                "row_id": row_id,  # El ID de la fila que se va a actualizar (ahora lo obtenemos de '_id')
                "row": row_data   # Los campos que se actualizarÃ¡n
            }

            rows_to_update.append(row_entry)

        # Realizar la actualizaciÃ³n en lotes
        if rows_to_update:
            print(f"ðŸ”´ Se van a actualizar {len(rows_to_update)} filas.")
            self.batch_query(table_name, rows_data=rows_to_update, type_batch="batch_update_rows", batch=1000)
            if platform:
                progress_reporter.add_log(platform, f"ACTUALIZACIÃ“N COMPLETADA - Tabla: {table_name} - ACTUALIZADAS: {len(rows_to_update)} filas")
        else:
            print("No hay filas para actualizar.")


    def crud(self, df, prev_data, columns_to_update, tab, enable_link, key_columns, condition, table_name, table_to_insert=None, platform="", delete=True, custom_fn=None, insert_only=False, add_key=None, alternative_ids_column=None, df_source=None):
        if insert_only != True:
            if True == delete:
                self.delete_rows_seatable(
                    df,
                    prev_data,
                    table_name,
                    tab,
                    key_columns,
                    condition
                ) 
            self.update_rows_seatable(
                df,
                prev_data,
                table_name,
                columns_to_update,
                unique_id=key_columns[0],
                unique_id_prev=None,
                platform=platform
            )
        if add_key:
            key_columns.append(add_key)
        print(alternative_ids_column)
        self.upload_new_records_to_seatable(
            new_data=df,
            existing_data=prev_data,
            table_name=table_name,
            key_columns=key_columns,
            enable_link=enable_link,
            table_to_insert=table_to_insert,
            platform=platform,
            custom_fn=custom_fn,
            alternative_ids_column=alternative_ids_column,
            df_source=df_source
        )
        

# Instancia global (Singleton) para conexión persistente
seatable = Seatable()
