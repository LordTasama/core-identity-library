"""
Authentication and Security Utilities.

This module provides route protection mechanisms (decorators) and helpers
to efficiently retrieve the authenticated user's context during the
HTTP request lifecycle.

Key Objectives:
1. Implement @login_required decorator for centralized JWT validation.
2. Facilitate current user retrieval ('g.current_user') with RBAC permissions.
3. Abstract context retrieval complexity for identities and access methods.
"""

from flask import session, g
from src.services.seatable_service import Seatable
from src.utils.i18n import t

def login_required(f):
    """
    Decorator to require mandatory authentication via JWT Token.
    
    Objective:
    - Intercept requests to validate the presence of a Bearer token.
    - Communicate with the session service to verify token validity.
    - Populate global 'g' object with user data for use in routes.
    - Automatically handle 401 responses for unauthorized requests.
    """
    from functools import wraps
    from flask import request, jsonify, g
    from src.services.login_service import verify_session

    @wraps(f)
    def decorated_function(*args, **kwargs):
        # 0. Allow OPTIONS (CORS preflight) without validation
        # We return 200 directly to avoid executing route logic
        if request.method == 'OPTIONS':
            return '', 200

        # 1. Get Token (Priority: Authorization Header)
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
                'message': t('auth_token_required')
            }), 401

        # 2. Get Email (Optional, can be extracted from token if missing)
        email = request.headers.get('X-User-Email') or request.args.get('email')
        if not email and request.is_json:
            email = request.json.get('email')

        # 3. Verify session (Email is optional if token is valid)
        v_res = verify_session(email, token)
        if not v_res.get("success"):
            return jsonify(v_res), 401

        # 4. Save in g for route use
        # If verify_session extracted email from token, use it
        final_email = email or v_res.get("email")
        g.current_user = v_res.get("user")
        g.current_token = token
        g.current_email = final_email

        return f(*args, **kwargs)
    
    return decorated_function

def get_current_user():
    """
    Retrieves complete authenticated user information for the current session.
    
    Objective:
    - Bridge between Flask session and detailed IdentityService context.
    - Load permissions and atomic data modes for the active application.
    - Implement per-request internal cache to avoid redundant DB queries.
    """
    from flask import g
    
    # If already loaded in this request, return it
    if 'current_user' in g:
        return g.current_user

    if 'user_id' in session:
        from src.services.seatable_service import seatable
        from src.services import identity_service
        
        # Consolidate Auth Methods and Identity in a single JOIN
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

        # SeaTable JOIN returns fields with prefixes if collision occurs, 
        # but we need them separated as before to maintain compatibility.
        # Note: sql_query usually flattens if no collision, or returns nested objects.
        # To avoid issues, we filter or assign manually.
        user_row = combined_data[0]
        
        # Get app_key based on current URL (with lru_cache)
        app_key = identity_service.get_app_key_by_url()
        
        # Permission check (with TTL cache and real-time internal status)
        identity_row_id = user_row.get("Identity", [{}])[0].get("row_id") if isinstance(user_row.get("Identity"), list) else user_row.get("Identity")
        if not identity_row_id:
             identity_row_id = session.get('row_identity') # Fallback

        auth_data = identity_service.get_identity_permissions(identity_row_id, app_key, identity_row=user_row, user_email=user_row.get('Email'))
        
        res = {
            "users": user_row, # The combined row usually contains both if no name collision
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






