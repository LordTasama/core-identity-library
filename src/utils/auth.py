"""
Authentication and Email Utilities
==================================
This module contains authentication helpers and email notification functions.
"""

from flask import session
from src.services.seatable_service import Seatable

def login_required(f):
    """
    Decorator to require authentication via JWT Token.
    Checks for token in:
    1. Authorization Header (Bearer <token>)
    2. Request JSON body
    3. Request arguments (query params)
    """
    from functools import wraps
    from flask import request, jsonify, g
    from src.services.login_service import verify_session

    @wraps(f)
    def decorated_function(*args, **kwargs):
        # 0. Permitir peticiones OPTIONS (CORS preflight) sin validar nada
        # Retornamos 200 directamente para evitar que se ejecute la lógica de la ruta
        if request.method == 'OPTIONS':
            return '', 200

        # 1. Obtener Token (Prioridad: Authorization Header)
        auth_header = request.headers.get('Authorization', '')
        token = None
        if auth_header.startswith('Bearer '):
            token = auth_header.split(' ')[1]
        
        if not token:
            token = request.args.get('token')
            if not token and request.is_json:
                token = request.json.get('token')

        if not token:
            return jsonify({
                'success': False, 
                'message': 'Authentication token is required (Bearer Token)'
            }), 401

        # 2. Obtener Email (Opcional, se puede extraer del token si falta)
        email = request.headers.get('X-User-Email') or request.args.get('email')
        if not email and request.is_json:
            email = request.json.get('email')

        # 2. Verificar sesión (El email es opcional si el token es válido)
        v_res = verify_session(email, token)
        if not v_res.get("success"):
            return jsonify(v_res), 401

        # 3. Guardar en g para uso en la ruta
        # Si verify_session extrajo el email del token, lo usamos
        final_email = email or v_res.get("email")
        g.current_user = v_res.get("user")
        g.current_token = token
        g.current_email = final_email

        return f(*args, **kwargs)
    
    return decorated_function

def get_current_user():
    """
    Get the currently logged in user from session using Seatable.
    Includes atomic permissions and data mode from Core Identity.
    Optimized: Uses flask 'g' to cache user data during the same request.
    """
    from flask import g
    
    # Si ya lo cargamos en esta misma petición, retornarlo
    if 'current_user' in g:
        return g.current_user

    if 'user_id' in session:
        from src.services.seatable_service import seatable
        from src.services import identity_service
        
        # Consolidamos Auth Methods e Identity en un solo JOIN
        row_auth_id = session.get('row_auth_methods')
        query = f"""
            SELECT * 
            FROM `Auth Methods`, `Identity`
            WHERE `Auth Methods`.`Identity` = `Identity`.`_id` 
            AND `Auth Methods`.`_id` = '{row_auth_id}'
        """
        combined_data = seatable.sql_query_one(query, base_data="core_identity")
        
        if not combined_data:
            g.current_user = None
            return None

        # SeaTable JOIN devuelve campos con prefijos si hay colisión, 
        # pero aquí los necesitamos separados como antes para mantener compatibilidad.
        # Nota: sql_query suele aplanar si no hay colisión, o devolver objetos anidados.
        # Para evitar problemas, filtramos o asignamos manualmente.
        user_row = combined_data[0]
        
        # Obtener app_key basado en la URL actual (con lru_cache)
        app_key = identity_service.get_app_key_by_url()
        
        # Check de permisos (con TTL cache y status real-time interno)
        identity_row_id = user_row.get("Identity", [{}])[0].get("row_id") if isinstance(user_row.get("Identity"), list) else user_row.get("Identity")
        if not identity_row_id:
             identity_row_id = session.get('row_identity') # Fallback

        auth_data = identity_service.get_identity_permissions(identity_row_id, app_key, identity_row=user_row, user_email=user_row.get('Email'))
        
        res = {
            "users": user_row, # La fila combinada suele contener ambos si no hay colisión de nombres
            "authmethods": user_row,
            "permissions": auth_data.get("permissions", []),
            "data_mode": auth_data.get("data_mode", "own"),
            "data_mode_info": auth_data.get("data_mode_info", {}),
            "app_key": app_key
        }
        
        g.current_user = res
        return res

    g.current_user = None
    return None






