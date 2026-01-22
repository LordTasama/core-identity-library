"""
Authentication and Session Route Controller.

This module defines all endpoints related to the user identity lifecycle, 
from registration and login (OAuth/Password) to session management 
and password recovery.

Key Objectives:
1. Facilitate multi-channel authentication flow (Google, Microsoft, Email).
2. Manage identity verification using confirmation codes.
3. Provide lightweight and heavy session validation mechanisms for clients.
4. Ensure global and remote logout.
"""

from flask import Blueprint, request, session, jsonify, redirect, make_response, current_app, g
import json
from src.services.login_service import (
    confirm_email_manual,
    login_with_password_and_email,
    send_password_reset_email,
    reset_password_with_token,
    get_google_oauth_url,
    get_microsoft_oauth_url,
    register_manual_user,
    process_google_callback,
    process_microsoft_callback,
    change_password_service,
    prepare_session_data,
    verify_session,
    resend_confirmation_email_logic,
    get_fallback_session,
    create_session,
    close_sessions_logic,
    logout_session,
    _get_user_context
)
from src.utils import login_required, get_current_user
from src.utils.handshake import generate_handshake_code, validate_handshake_code
from src.utils.i18n import t
from config import Config

auth_bp = Blueprint('auth', __name__)

def _make_oauth_error_response(error_code, message=None, apps=None):
    """
    Generates an HTML response that communicates an OAuth error to the opener window
    and closes the current window/popup.
    
    Objective:
    - Ensure that any error in the OAuth flow (Google/Microsoft) correctly notifies 
      the frontend and closes the popup.
    """
    auth_data_json = {
        "success": False,
        "message": message or (t(error_code) if error_code in ['user_not_found', 'oauth_failed'] else error_code),
        "error": error_code,
        "apps": apps or [],
        "code": 403
    }
    return make_response(f"""
    <html>
        <body>
            <script>
                const authData = {json.dumps(auth_data_json)};
                if (window.opener) {{
                    window.opener.postMessage({{ type: 'OAUTH_ERROR', payload: authData }}, "*");
                    window.close();
                }} else {{
                    // If there is no opener, show error on screen
                    document.body.innerHTML = "<h2>" + {json.dumps(t('access_denied'))} + "</h2><p>" + authData.message + "</p>";
                }}
            </script>
        </body>
    </html>
    """)



# ============================================================================
# OAUTH & LOGIN ROUTES
# ============================================================================

@auth_bp.route('/login', methods=['POST'])
def login():
    """
    Initiates the authentication flow based on the specified provider.
    
    Objective:
    - For social providers (Google/Microsoft): Generates the authorization URL.
    - For Email: Attempts a session recovery by IP if credentials are missing, 
      or validates user existence to proceed to the password step.
    """
    provider = request.json.get('provider')
    temp_device = request.json.get('temp_device', False)
    token = request.json.get('token')
    email = request.json.get('email')
    password = request.json.get('password')
    
    print(f'ℹ️ Login attempt - provider: {provider}, temp_device: {temp_device}, has_token: {bool(token)}, email: {email}')

    if not provider:
        return jsonify({'success': False, 'message': t('provider_required')}), 400

    # 1. Fallback by IP+Device + Email (Only if the provider is Email and no token or password provided)
    if provider == 'Email' and not token and not password:
        fallback = get_fallback_session(email=email)
        if fallback:
            print(f"✅ Reusing existing session for {email or 'IP/Device'}")
            user_data = fallback.get('user')
            
            # Validación de permisos/roles para la App detectada o bloqueo de cuenta
            if user_data and not user_data.get("success"):
                return jsonify({
                    'success': False,
                    'message': user_data.get("message"),
                    'apps': user_data.get("apps", [])
                }), 403

            handshake = generate_handshake_code(user_data.get('email') or email)
            return jsonify({
                'success': True, 
                'redirect_url': '/home',
                'token': fallback.get('token'),
                'user': user_data,
                'handshake_code': handshake,
                'method': 'fallback'
            }), 200

    if provider == 'Google':
        if Config.MOCK_AUTH:
            from src.services.login_service import process_mock_social_login
            # Permitir email personalizado para pruebas
            result = process_mock_social_login('Google', email)
            if result.get('success'):
                user_ctx = result.get('user')
                
                if user_ctx and not user_ctx.get("success"):
                    return jsonify({
                        'success': False,
                        'message': user_ctx.get("message"),
                        'apps': user_ctx.get("apps", [])
                    }), 403

                # Create real session with corresponding expiration
                final_token = create_session(user_ctx, temp_device=temp_device)
                handshake = generate_handshake_code(user_ctx.get('email'))
                return jsonify({
                    'success': True, 
                    'redirect_url': '/',
                    'token': final_token,
                    'user': user_ctx,
                    'handshake_code': handshake
                })
            else:
                return jsonify({'success': False, 'message': result.get('error')}), 400

        from src.services.identity_service import identity_service
        app_key = identity_service.get_app_key_by_url()
        oauth_data = get_google_oauth_url(app_key=app_key)
        response = jsonify({'auth_url': oauth_data['auth_url']})
        response.set_cookie('oauth_state', oauth_data['state'], max_age=600, secure=False, httponly=True, samesite='Lax')
        return response
    elif provider == 'Email':
        email = request.json.get('email')
        password = request.json.get('password')
        
        if not email or not password:
            return jsonify({'success': False, 'message': 'Email and password are required'}), 400
            
        result = login_with_password_and_email(email, password)
        
        if result.get("status"):
            user_ctx = result.get("user")
            
            # If no user context but redirect_url exists, it's a case of unverified email or rate limit
            if not user_ctx and result.get("redirect_url"):
                return jsonify({
                    "success": True,
                    "message": result.get("message"),
                    "redirect_url": result.get("redirect_url"),
                    "wait_seconds": result.get("wait_seconds", 0)
                }), 200

            if user_ctx and not user_ctx.get("success"):
                return jsonify({
                    'success': False,
                    'message': user_ctx.get("message"),
                    'apps': user_ctx.get("apps", [])
                }), 403

            # Generate token with new expiration logic
            final_token = create_session(user_ctx, temp_device=temp_device)
            handshake = generate_handshake_code(user_ctx.get('email'))
            
            return jsonify({
                "success": True,
                "token": final_token,
                "redirect_url": "/home",
                "user": user_ctx,
                "handshake_code": handshake
            }), 200
        else:
            return jsonify({'success': False, 'message': result.get("message", "Authentication failed"), "redirect_url": result.get("redirect_url")}), 400
    
    elif provider == 'Microsoft':
        if Config.MOCK_AUTH:
            from src.services.login_service import process_mock_social_login
            result = process_mock_social_login('Microsoft', email)
            if result.get('success'):
                user_ctx = result.get('user')
                
                if user_ctx and not user_ctx.get("success"):
                    return jsonify({
                        'success': False,
                        'message': user_ctx.get("message"),
                        'apps': user_ctx.get("apps", [])
                    }), 403

                final_token = create_session(user_ctx, temp_device=temp_device)
                handshake = generate_handshake_code(user_ctx.get('email'))
                return jsonify({
                    'success': True, 
                    'redirect_url': '/',
                    'token': final_token,
                    'user': user_ctx,
                    'handshake_code': handshake
                })
            else:
                return jsonify({'success': False, 'message': result.get('error')}), 400

        from src.services.identity_service import identity_service
        app_key = identity_service.get_app_key_by_url()
        oauth_data = get_microsoft_oauth_url(app_key=app_key)
        response = jsonify({'auth_url': oauth_data['auth_url']})
        response.set_cookie('oauth_state', oauth_data['state'], max_age=600, secure=False, httponly=True, samesite='Lax')
        print(f"[MICROSOFT] Set oauth_state cookie: {oauth_data['state']}")
        return response




    
    else:
        return jsonify({'success': False, 'message': t('provider_not_supported')}), 400


@auth_bp.route('/register', methods=['POST'])
def register():
    """
    Registers a new user in the system using the 'Email' provider.
    
    Objective:
    - Create a new identity and authentication method in SeaTable.
    - Automatically send a verification code to the email.
    - Prevent duplicate registrations of existing emails.
    """
    try:
        firstName = request.json.get('firstName')
        lastName = request.json.get('lastName')
        email = request.json.get('email')
        password = request.json.get('password')
        
        # Validaciones básicas
        if not email or not password or not firstName or not lastName:
             return jsonify({'success': False, 'message': t('all_fields_required')}), 400

        userinfo = {
            'given_name': firstName,
            'family_name': lastName,
            'email': email,
            'password': password
        }
        
        # We reuse register_manual_user which is the function that encapsulates registration logic
        # (perhaps it should be renamed to register_user in the future)
        result = register_manual_user(userinfo) 
        
        if result.get('success'):
            return jsonify({
                'success': True,
                'message': result.get('message'),
                'redirect_url': result.get('redirect_url', '/esperando-confirmacion'),
                'wait_seconds': result.get('wait_seconds')
            }), 200
        else:
            return jsonify({'success': False, 'message': result.get('error', 'Error registering user')}), 400
            
    except Exception as e:
        print(f"❌ Error in register: {e}")
        return jsonify({'success': False, 'message': str(e)}), 500


# ============================================================================
# EMAIL CONFIRMATION ROUTES
# ============================================================================

@auth_bp.route('/resend-confirmation', methods=['POST'])
def resend_confirmation():
    """
    Requests the resending of the email verification code.
    
    Objective:
    - Generate a new confirmation token for the specified user.
    - Notify the user via a new email.
    - Validate that the user truly needs confirmation before sending.
    """
    try:
        email = request.json.get('email')
        if not email:
            return jsonify({'success': False, 'message': t('email_required')}), 400
            
        success, message, wait_time = resend_confirmation_email_logic(email)
        
        if success:
            return jsonify({
                'success': True,
                'message': message,
                'redirect_url': '/esperando-confirmacion',
                'wait_seconds': 0
            }), 200
        else:
            # Si wait_time > 0, es un rate limit, retornamos success: True según pedido
            if wait_time > 0:
                return jsonify({
                    'success': True,
                    'message': message,
                    'redirect_url': '/esperando-confirmacion',
                    'wait_seconds': wait_time
                }), 200
            else:
                return jsonify({
                    'success': False,
                    'message': message
                }), 400
            
    except Exception as e:
        print(f"❌ Error in resend_confirmation: {e}")
        return jsonify({'success': False, 'message': str(e)}), 500


@auth_bp.route('/verify-email', methods=['POST'])
def verify_email():
    """
    Verifies a user's email using a 6-digit code.
    
    Objective:
    - Validate the confirmation token sent by the user.
    - Mark the authentication method as verified in the database.
    - Allow the user to progress to the 'Active' state after validation.
    """
    try:
        # Bearer or JSON support
        auth_header = request.headers.get('Authorization', '')
        token = request.json.get('token') if request.is_json else None
        
        if auth_header.startswith('Bearer '):
            token = auth_header.split(' ')[1]

        if not token:
            return jsonify({'success': False, 'message': t('invalid_token', error='required')}), 400
            
        if confirm_email_manual(token):
            return jsonify({
                'success': True,
                'message': 'Email verified successfully. You can now log in.'
            }), 200
        else:
            return jsonify({
                'success': False,
                'message': 'Invalid or expired verification code'
            }), 400
            
    except Exception as e:
        print(f"❌ Error in verify_email: {e}")
        return jsonify({'success': False, 'message': str(e)}), 500


# ============================================================================
# PASSWORD AUTHENTICATION ROUTES
# ============================================================================

@auth_bp.route('/login_with_password_and_email', methods=['POST'])
def login_with_password_and_email_route():
    """
    Route for traditional authentication via email and password.
    
    Objective:
    - Validate credentials against the login service.
    - Handle redirections for unverified users or temporary blocks.
    - Generate the user context and establish the session on the server.
    - Return the JWT token and the handshake_code for the client.
    """
    try:
        email = request.json.get('email')
        password = request.json.get('password')
        
        if not email or not password:
            return jsonify({
                "success": False,
                "message": t('all_fields_required')
            }), 400
        
        result = login_with_password_and_email(email, password)
        if not result or not isinstance(result, dict):
            return jsonify({
                "success": False,
                "message": t('invalid_response_auth')
            }), 500
        
        if result.get("status"):
            user_ctx = result.get("user")
            
            # Case: Unverified user or rate limit (no user_ctx but redirect_url present)
            if not user_ctx and result.get("redirect_url"):
                return jsonify({
                    "success": True,
                    "message": result.get("message"),
                    "redirect_url": result.get("redirect_url"),
                    "wait_seconds": result.get("wait_seconds", 0)
                }), 200

            # Role/Permission validation for detected App
            if user_ctx and not user_ctx.get("success"):
                return jsonify({
                    'success': False,
                    'message': user_ctx.get("message"),
                    'apps': user_ctx.get("apps", [])
                }), 403

            auth_row = result.get("auth_row")
            if not auth_row:
                 return jsonify({
                    "success": False,
                    "message": t('auth_data_missing')
                }), 500

            # Use prepare_session_data to unify session logic
            session_data = prepare_session_data(auth_row)
            session.update(session_data)
            session.permanent = True

            print('session:', dict(session))
            
            response = make_response(jsonify({
                "success": True,
                "redirect_url": "/home",
                "token": result.get("token"),
                "user": result.get("user"),
                "handshake_code": generate_handshake_code(email)
            }))
            response.set_cookie('oauth_state', '', expires=0)
            
            return response, 200
            
        else:
            error_message = result.get("message", "Authentication failed")
            return jsonify({
                "success": False,
                "message": error_message,
                "redirect_url": result.get("redirect_url"),
                "wait_seconds": result.get("wait_seconds")
            }), 400
            
    except Exception as e:
        print(f"❌ Error in login_with_password_and_email_route: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({
            "success": False,
            "message": t('error_processing_request')
        }), 500


# ============================================================================
# OAUTH CALLBACK ROUTES
# ============================================================================

@auth_bp.route('/callback')
def callback():
    """
    Handles the return (callback) of the Google OAuth flow.
    
    Objective:
    - Exchange the authorization code for a Google access token.
    - Process user information and synchronize it with SeaTable.
    - Resolve the login via postMessage communication (if popup) or standard redirection.
    - Clear OAuth state cookies.
    """
    try:
        code = request.args.get('code')
        state = request.args.get('state')
        error = request.args.get('error')
        
        print(f"Callback received - code: {code[:20] if code else 'None'}..., state: {state}, error: {error}")
        print(f"Available cookies: {list(request.cookies.keys())}")
        
        if error:
            return _make_oauth_error_response(error)
        
        if not code:
            return _make_oauth_error_response('no_code')
        
        expected_state = request.cookies.get('oauth_state')
        print(f"Expected state from cookie: {expected_state}")
        print(f"Received state from Google: {state}")
        
        result = process_google_callback(code, state, expected_state)
        
        if not result.get('success') or not result.get('user'):
            error_code = result.get('error', 'oauth_failed')
            if not result.get('user'): error_code = 'user_not_found'
            return _make_oauth_error_response(error_code)

        user = result.get('user')



        print(f"Here user: {user}")
        user_ctx = user # result.get('user') is already the cleaned context
        
        if user_ctx and not user_ctx.get("success"):
            response_redirect = _make_oauth_error_response(
                error_code="access_denied",
                message=user_ctx.get("message"),
                apps=user_ctx.get("apps", [])
            )
            response_redirect.set_cookie('oauth_state', '', expires=0)
            return response_redirect

        # Generar Token JWT real
        final_token = create_session(user_ctx, temp_device=False)
        
        # Clear state
        response_redirect = make_response(f"""
        <html>
            <body>
                <script>
                    const authData = {{
                        success: true,
                        message: "Authentication successful",
                        token: "{final_token}",
                        user: {json.dumps(user_ctx)},
                        handshake_code: "{generate_handshake_code(user_ctx.get('email'))}",
                        redirect_url: "/home"
                    }};
                    
                    if (window.opener) {{
                        // If opened in a popup, send data to parent and close
                        window.opener.postMessage({{ type: 'OAUTH_SUCCESS', payload: authData }}, "*");
                        window.close();
                    }} else {{
                        // If normal redirection, go to /home
                        window.location.href = "/home";
                    }}
                </script>
                <p>{t('auth_successful')}. {t('redirecting')}</p>
            </body>
        </html>
        """)
        response_redirect.set_cookie('oauth_state', '', expires=0)
        return response_redirect
        
    except Exception as e:
        print(f"OAuth callback error: {e}")
        import traceback
        traceback.print_exc()
        return _make_oauth_error_response('oauth_failed')


@auth_bp.route('/microsoft/callback')
def microsoft_callback():
    """
    Handles the return (callback) of the Microsoft OAuth flow.
    
    Objective:
    - Validate state and process the Microsoft authorization code.
    - Identify the user and update their profile in the identity database.
    - Manage authentication popup closure and JWT token delivery to the frontend.
    """
    try:
        code = request.args.get('code')
        state = request.args.get('state')
        error = request.args.get('error')

        print(f"[MICROSOFT CALLBACK] code: {code}, state: {state}, error: {error}")

        if error:
            return _make_oauth_error_response(error)

        if not code:
            return _make_oauth_error_response('no_code')
        
        expected_state = request.cookies.get('oauth_state')
        print(f"[MICROSOFT] Expected state: {expected_state}, Received: {state}")

        result = process_microsoft_callback(code, state, expected_state)
        
        if not result.get('success') or not result.get('user'):
            error_code = result.get('error', 'oauth_failed')
            if not result.get('user'): error_code = 'user_not_found'
            return _make_oauth_error_response(error_code)

        user = result.get('user')

        user_ctx = user 
        
        if user_ctx and not user_ctx.get("success"):
            response_redirect = _make_oauth_error_response(
                error_code="access_denied",
                message=user_ctx.get("message"),
                apps=user_ctx.get("apps", [])
            )
            response_redirect.set_cookie('oauth_state', '', expires=0)
            return response_redirect

        # Generate real JWT Token
        final_token = create_session(user_ctx, temp_device=False)
        
        # HTML response to handle Popups or Redirection
        response_redirect = make_response(f"""
        <html>
            <body>
                <script>
                    const authData = {{
                        success: true,
                        message: "Authentication successful",
                        token: "{final_token}",
                        user: {json.dumps(user_ctx)},
                        handshake_code: "{generate_handshake_code(user_ctx.get('email'))}",
                        redirect_url: "/home"
                    }};
                    
                    if (window.opener) {{
                        // Communicate with parent window and close popup
                        window.opener.postMessage({{ type: 'OAUTH_SUCCESS', payload: authData }}, "*");
                        window.close();
                    }} else {{
                        // Standard redirection if no parent window
                        window.location.href = "/home";
                    }}
                </script>
                <p>{t('auth_successful')}. {t('redirecting')}</p>
            </body>
        </html>
        """)
        response_redirect.set_cookie('oauth_state', '', expires=0)
        return response_redirect

    except Exception as e:
        print(f"[MICROSOFT CALLBACK ERROR] {e}")
        import traceback
        traceback.print_exc()
        return _make_oauth_error_response('oauth_failed')


# ============================================================================
# SESSION MANAGEMENT ROUTES
# ============================================================================

@auth_bp.route('/logout', methods=['POST'])
def logout():
    """
    Closes the user's active session.
    
    Objective:
    - Invalidate session token in SeaTable using logout_session function.
    - Clear all session data in the Flask server.
    - Delete the session cookie from the browser to ensure total closure.
    """
    # 1. Invalidate session in database (SeaTable)
    # Soporte Bearer Header
    auth_header = request.headers.get('Authorization', '')
    token = request.json.get('token') if request.is_json else None
    
    if auth_header.startswith('Bearer '):
        token = auth_header.split(' ')[1]
    
    # Fallback to g if it already passed through middleware (although we removed login_required here)
    if not token:
        token = g.get('current_token')
    
    if token:
        logout_session(token)

    # 2. Clear Flask session and cookies
    session.clear()
    response = make_response(jsonify({'success': True, 'message': t('logged_out_success')}))
    session_cookie_name = current_app.config.get('SESSION_COOKIE_NAME', 'session')
    response.set_cookie(session_cookie_name, '', expires=0, httponly=True, samesite='Lax', path='/')
    return response


# ============================================================================
# DIAGNOSTIC ROUTES
# ============================================================================

@auth_bp.route('/debug/user/<email>')
def debug_user(email):
    """
    Diagnostic route to verify user identity, roles, assignments, and permissions.
    
    Objective:
    - Facilitate technical debugging by showing the raw user state in the system.
    - Validate App Key resolution and permission calculation for the current URL.
    - Provide visibility into team hierarchy and linked roles.
    """
    from src.services.login_service import get_debug_user_info
    try:
        # We pass current base URL for diagnosis to detect correct App Key
        current_url = request.host_url.rstrip('/')
        data = get_debug_user_info(email, current_url=current_url)
        return jsonify({"success": True, "data": data}), 200
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


# ============================================================================
# USER INFO ROUTES
# ============================================================================
@auth_bp.route('/verify-session', methods=['POST'])
@login_required
def verify_session_route():
    """
    Validates if a session is valid in a light and fast way.
    
    Objective:
    - Verify existence and status (Active/Expired) of the provided token.
    - Perform a quick permission check for the current application.
    - Return a handshake_code if session is valid to allow hopping between apps.
    """
    # Data already arrives validated and clean in 'g' thanks to the @login_required decorator
    email = g.current_email
    token = g.current_token
        
    result = verify_session(email, token)
    
    if result.get("success"):
        # Extra verification: Does it have permissions in this specific App?
        # verify_session is lightweight, but if we want to intercept permissions here we must load context
        user_ctx = _get_user_context(email)
        if user_ctx and not user_ctx.get("success"):
            return jsonify({
                "success": False,
                "message": user_ctx.get("message"),
                "apps": user_ctx.get("apps", [])
            }), 403

        result["handshake_code"] = generate_handshake_code(email)
        return jsonify(result), 200
    else:
        return jsonify(result), 401

@auth_bp.route('/user')
@auth_bp.route('/me', methods=['GET', 'POST'])
@auth_bp.route('/user-context', methods=['GET', 'POST', 'OPTIONS'])
@login_required
def get_user_context_route():
    """
    Retrieves complete and detailed context of the authenticated user.
    
    Objective:
    - Obtain extended profile information, roles, permissions, and authorized applications.
    - This endpoint is "heavy" since it loads the full RBAC structure.
    - Relies on the @login_required decorator for prior token validation.
    """
    try:
        email = g.current_email
        # Here we do bring the heavy context
        user_data = _get_user_context(email)
        
        if not user_data:
            return jsonify({'success': False, 'message': t('user_context_not_found')}), 404

        # Permission/role validation or account block
        if user_data and not user_data.get("success"):
            return jsonify({
                'success': False,
                'message': user_data.get("message"),
                'apps': user_data.get("apps", [])
            }), 403

        return jsonify({
            'success': True,
            'message': t('user_context_retrieved'),
            'user': user_data,
            'token': g.current_token,
            'handshake_code': generate_handshake_code(email)
        })
    except Exception as e:
        print(f"❌ Error in get_user_context_route: {e}")
        return jsonify({'success': False, 'message': str(e)}), 500

@auth_bp.route('/validate-handshake', methods=['POST'])
def validate_handshake_route():
    """
    Validates a handshake code to transfer sessions.
    
    Objective:
    - Convert a temporary handshake_code into a valid user session.
    - Facilitate Single Sign-On (SSO) between different applications in the ecosystem.
    - Validate permissions in real-time for the target application.
    """
    try:
        
        code = request.json.get('code')
        if not code:
            return jsonify({'success': False, 'message': t('code_required')}), 400
            
        is_valid, email = validate_handshake_code(code)
        
        if is_valid:
            user_data = _get_user_context(email)
            
            # Validación de permisos/roles para la App detectada
            if user_data and not user_data.get("success"):
                return jsonify({
                    'success': False,
                    'valid': True,
                    'message': user_data.get("message"),
                    'apps': user_data.get("apps", [])
                }), 403

            return jsonify({
                'success': True,
                'valid': True,
                'email': email,
                'user': user_data
            }), 200
        else:
            return jsonify({
                'success': False,
                'valid': False,
                'message': 'Invalid or expired code'
            }), 401
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


@auth_bp.route('/colors-app', methods=['GET', 'POST'])
def get_app_colors_route():
    """
    Retrieves the visual identity (colors and name) of an application based on its URL.
    
    Objective:
    - Allow the frontend to customize itself before the user logs in.
    - Does not require user authentication, only a valid X-API-KEY.
    - Uses metadata cache to optimize response.
    """
    try:
        from src.services.identity_service import identity_service
        app_key = identity_service.get_app_key_by_url()
        
        if not app_key:
            return jsonify({
                "success": False,
                "appKey": None,
                "primaryColor": None,
                "backgroundColor": None,
                "message": "Application not detected for this URL"
            }), 200 # Retornamos 200 con nulls para no romper el frontend
            
        all_apps = identity_service._get_all_apps_cached()
        app_meta = next((a for a in all_apps if a.get("App Key") == app_key), {})
        
        return jsonify({
            "success": True,
            "appKey": app_key,
            "appName": app_meta.get("App Name"),
            "primaryColor": app_meta.get("Primary Color"),
            "backgroundColor": app_meta.get("Background Color")
        }), 200
    except Exception as e:
        from src.utils.logger import logger
        logger.error(f"Error en colors-app: {e}")
        return jsonify({"success": False, "message": str(e)}), 500



# ============================================================================
# PASSWORD MANAGEMENT ROUTES
# ============================================================================

@auth_bp.route('/forgot-password', methods=['POST'])
def forgot_password():
    """
    Initializes the password recovery process.
    
    Objective:
    - Validate existence of the email.
    - Generate and send a recovery link with a secure token.
    - Manage rate limiting to prevent spam recovery emails.
    """
    try:
        email = request.json.get('email')
        
        if not email:
            return jsonify({
                'success': False,
                'message': t('email_required')
            }), 400
        
        result = send_password_reset_email(email)
        
        if result.get("status"):
            return jsonify({
                'success': True,
                'message': result.get("message", t('password_reset_sent')),
                'wait_seconds': result.get("wait_seconds")
            }), 200
        else:
            return jsonify({
                'success': False,
                'message': result.get("message", t('error_processing_request')),
                'wait_seconds': result.get("wait_seconds")
            }), 500
            
    except Exception as e:
        print(f"❌ Error in forgot_password: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({
            'success': False,
            'message': t('error_processing_request')
        }), 500


@auth_bp.route('/reset-password', methods=['POST'])
def reset_password():
    """
    Sets a new password using a recovery token.
    
    Objective:
    - Validate maturity and authenticity of the reset token.
    - Update the password in the SeaTable database.
    - Return information about active sessions to be reviewed by the user.
    """
    try:
        token = request.json.get('token')
        new_password = request.json.get('newPassword')
        confirm_password = request.json.get('confirmPassword')
        
        if not token or not new_password or not confirm_password:
            return jsonify({
                'success': False,
                'message': 'Token, new password, and confirmation are required'
            }), 400

        if new_password != confirm_password:
            return jsonify({
                'success': False,
                'message': 'Passwords do not match'
            }), 400
        
        result = reset_password_with_token(token, new_password)
        
        if result.get("status"):
            return jsonify({
                'success': True,
                'message': result.get("message", "Password has been reset successfully"),
                'active_sessions': result.get("active_sessions", [])
            }), 200
        else:
            return jsonify({
                'success': False,
                'message': result.get("message", "Failed to reset password")
            }), 400
            
    except Exception as e:
        print(f"❌ Error en reset_password: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({
            'success': False,
            'message': 'An error occurred while resetting password'
        }), 500


@auth_bp.route('/change-password', methods=['POST'])
@login_required
def change_password():
    """
    Changes the authenticated user's password.
    
    Objective:
    - Validate current password to ensure identity.
    - Update to the new credential in the user record.
    - Requires the user to be fully authenticated (@login_required).
    """
    try:
        current_password = request.json.get('old_password')
        new_password = request.json.get('new_password')
        
        if not current_password or not new_password:
            return jsonify({
                'success': False,
                'message': 'Current password and new password are required'
            }), 400
        
        # Obtenemos datos del objeto 'g' (cargado por @login_required)
        user_email = g.current_email
        
        # El service ahora es robusto y carga el registro por sí mismo si user es None
        result = change_password_service(user_email, current_password, new_password, user=None)
        
        if result.get('success'):
            return jsonify({
                'success': True,
                'message': result.get('message', 'Password changed successfully')
            }), 200
        else:
            return jsonify({
                'success': False,
                'message': result.get('message', 'Failed to change password')
            }), 400
            
    except Exception as e:
        print(f"❌ Error al cambiar la contraseña: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({
            'success': False,
            'message': f'An error occurred while changing password: {str(e)}'
        }), 500

@auth_bp.route('/logout_sessions', methods=['POST'])
@login_required
def logout_sessions_route():
    """
    Closes sessions remotely for the authenticated user.
    
    Objective:
    - Allow selective or bulk invalidation of active sessions.
    - Useful after a password change or suspicious activity detection.
    - Ensures the user maintains control over concurrent access.
    """
    try:
        data = request.json
        email = g.current_email
        token = g.current_token
        all_sessions = data.get('all_sessions', False)
        session_ids = data.get('session_ids', [])

        success, message, count = close_sessions_logic(
            email=email,
            token=token,
            all_sessions=all_sessions,
            session_ids=session_ids
        )

        if success:
            return jsonify({
                "success": True,
                "message": message,
                "closed_count": count
            }), 200
        else:
            return jsonify({
                "success": False,
                "message": message
            }), 401
            
    except Exception as e:
        print(f"❌ Error en logout_sessions_route: {e}")
        return jsonify({
            "success": False,
            "message": "Internal server error"
        }), 500
