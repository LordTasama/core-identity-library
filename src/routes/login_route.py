"""
Controlador de Rutas de Autenticación y Sesión.

Este módulo define todos los puntos de entrada (endpoints) relacionados con el ciclo de vida 
de la identidad del usuario, desde el registro y login (OAuth/Password) hasta la gestión 
de sesiones y recuperación de contraseñas.

Objetivos clave:
1. Facilitar el flujo de autenticación multicanal (Google, Microsoft, Email).
2. Gestionar la verificación de identidad mediante códigos de confirmación.
3. Proveer mecanismos de validación de sesión ligeros y pesados para los clientes.
4. Asegurar el cierre de sesión global y remoto.
"""

from flask import Blueprint, request, session, jsonify, redirect, make_response, current_app, g
from src.services.login_service import (
    confirm_email_manual,
    login_with_password_and_email,
    enviar_email_reset_password,
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
from config import Config

auth_bp = Blueprint('auth', __name__)


# ============================================================================
# OAUTH & LOGIN ROUTES
# ============================================================================

@auth_bp.route('/login', methods=['POST'])
def login():
    """
    Inicia el flujo de autenticación basado en el proveedor especificado.
    
    Objetivo:
    - Para proveedores sociales (Google/Microsoft): Genera la URL de autorización.
    - Para Email: Intenta una recuperación de sesión por IP si no hay credenciales, 
      o valida la existencia del usuario para proceder al paso de contraseña.
    """
    provider = request.json.get('provider')
    temp_device = request.json.get('temp_device', False)
    token = request.json.get('token')
    email = request.json.get('email')
    password = request.json.get('password')
    
    print(f'ℹ️ Login attempt - provider: {provider}, temp_device: {temp_device}, has_token: {bool(token)}, email: {email}')

    if not provider:
        return jsonify({'success': False, 'message': 'Provider is required'}), 400

    # 1. Fallback por IP+Device + Email (Solo si el provider es Email y no hay token y no hay password)
    if provider == 'Email' and not token and not password:
        fallback = get_fallback_session(email=email)
        if fallback:
            print(f"✅ Reutilizando sesión existente para {email or 'IP/Device'}")
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

                # Creamos la sesión real con la expiración correspondiente
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

        oauth_data = get_google_oauth_url()
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
            
            # Si no hay contexto de usuario pero hay redirect_url, es un caso de email no verificado o rate limit
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

            # Generar token con la nueva lógica de expiración
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

        oauth_data = get_microsoft_oauth_url()
        response = jsonify({'auth_url': oauth_data['auth_url']})
        response.set_cookie('oauth_state', oauth_data['state'], max_age=600, secure=False, httponly=True, samesite='Lax')
        print(f"[MICROSOFT] Set oauth_state cookie: {oauth_data['state']}")
        return response
    
    else:
        return jsonify({'success': False, 'message': 'Provider not supported in login endpoint'}), 400


@auth_bp.route('/register', methods=['POST'])
def register():
    """
    Registra un nuevo usuario en el sistema usando el proveedor 'Email'.
    
    Objetivo:
    - Crear una nueva identidad y método de autenticación en SeaTable.
    - Enviar automáticamente un código de verificación al correo electrónico.
    - Prevenir registros duplicados de correos ya existentes.
    """
    try:
        firstName = request.json.get('firstName')
        lastName = request.json.get('lastName')
        email = request.json.get('email')
        password = request.json.get('password')
        
        # Validaciones básicas
        if not email or not password or not firstName or not lastName:
             return jsonify({'success': False, 'message': 'Todos los campos son obligatorios'}), 400

        userinfo = {
            'given_name': firstName,
            'family_name': lastName,
            'email': email,
            'password': password
        }
        
        # Reutilizamos register_manual_user que es la función que encapsula la logica de registro 
        # (quizas convendria renombrarla a register_user en el futuro)
        result = register_manual_user(userinfo) 
        
        if result.get('success'):
            return jsonify({
                'success': True,
                'message': result.get('message'),
                'redirect_url': result.get('redirect_url', '/esperando-confirmacion'),
                'wait_seconds': result.get('wait_seconds')
            }), 200
        else:
            return jsonify({'success': False, 'message': result.get('error', 'Error al registrar usuario')}), 400
            
    except Exception as e:
        print(f"❌ Error en register: {e}")
        return jsonify({'success': False, 'message': str(e)}), 500


# ============================================================================
# EMAIL CONFIRMATION ROUTES
# ============================================================================

@auth_bp.route('/resend-confirmation', methods=['POST'])
def resend_confirmation():
    """
    Solicita el reenvío del código de verificación de correo electrónico.
    
    Objetivo:
    - Generar un nuevo token de confirmación para el usuario especificado.
    - Notificar al usuario mediante un nuevo correo electrónico.
    - Validar que el usuario realmente necesite confirmación antes de enviar.
    """
    try:
        email = request.json.get('email')
        if not email:
            return jsonify({'success': False, 'message': 'Email is required'}), 400
            
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
        print(f"❌ Error en resend_confirmation: {e}")
        return jsonify({'success': False, 'message': str(e)}), 500


@auth_bp.route('/verify-email', methods=['POST'])
def verify_email():
    """
    Verifica el correo electrónico de un usuario utilizando un código de 6 dígitos.
    
    Objetivo:
    - Validar el token de confirmación enviado por el usuario.
    - Marcar el método de autenticación como verificado en la base de datos.
    - Permitir que el usuario progrese al estado 'Active' después de la validación.
    """
    try:
        # Soporte Bearer o JSON
        auth_header = request.headers.get('Authorization', '')
        token = request.json.get('token') if request.is_json else None
        
        if auth_header.startswith('Bearer '):
            token = auth_header.split(' ')[1]

        if not token:
            return jsonify({'success': False, 'message': 'Token is required (Bearer Token)'}), 400
            
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
        print(f"❌ Error en verify_email: {e}")
        return jsonify({'success': False, 'message': str(e)}), 500


# ============================================================================
# PASSWORD AUTHENTICATION ROUTES
# ============================================================================

@auth_bp.route('/login_with_password_and_email', methods=['POST'])
def login_with_password_and_email_route():
    """
    Ruta para la autenticación tradicional mediante correo y contraseña.
    
    Objetivo:
    - Validar las credenciales contra el servicio de login.
    - Manejar redirecciones para usuarios no verificados o bloqueos temporales.
    - Generar el contexto del usuario y establecer la sesión en el servidor.
    - Retornar el token JWT y el handshake_code para el cliente.
    """
    try:
        email = request.json.get('email')
        password = request.json.get('password')
        
        if not email or not password:
            return jsonify({
                "success": False,
                "message": "Email and password are required"
            }), 400
        
        result = login_with_password_and_email(email, password)
        if not result or not isinstance(result, dict):
            return jsonify({
                "success": False,
                "message": "Invalid response from authentication service"
            }), 500
        
        if result.get("status"):
            user_ctx = result.get("user")
            
            # Caso: Usuario no verificado o rate limit (no hay user_ctx pero sí redirect_url)
            if not user_ctx and result.get("redirect_url"):
                return jsonify({
                    "success": True,
                    "message": result.get("message"),
                    "redirect_url": result.get("redirect_url"),
                    "wait_seconds": result.get("wait_seconds", 0)
                }), 200

            # Validación de permisos/roles para la App detectada
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
                    "message": "Authentication succeeded but user data is missing"
                }), 500

            # Usar prepare_session_data para unificar la lógica de sesión
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
        print(f"❌ Error en login_with_password_and_email_route: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({
            "success": False,
            "message": "An error occurred during login"
        }), 500


# ============================================================================
# OAUTH CALLBACK ROUTES
# ============================================================================

@auth_bp.route('/callback')
def callback():
    """
    Maneja el retorno (callback) del flujo OAuth de Google.
    
    Objetivo:
    - Intercambiar el código de autorización por un token de acceso de Google.
    - Procesar la información del usuario y sincronizarla con SeaTable.
    - Resolver el inicio de sesión mediante comunicación postMessage (si es popup) 
      o redirección estándar.
    - Limpiar las cookies de estado de OAuth.
    """
    try:
        code = request.args.get('code')
        state = request.args.get('state')
        error = request.args.get('error')
        
        print(f"Callback received - code: {code[:20] if code else 'None'}..., state: {state}, error: {error}")
        print(f"Available cookies: {list(request.cookies.keys())}")
        
        if error:
            return redirect(f'/?error={error}')
        
        if not code:
            return redirect('/?error=no_code')
        
        expected_state = request.cookies.get('oauth_state')
        print(f"Expected state from cookie: {expected_state}")
        print(f"Received state from Google: {state}")
        
        result = process_google_callback(code, state, expected_state)
        
        if not result.get('success'):
            error = result.get('error', 'oauth_failed')
            return redirect(f'/?error={error}')
        
        user = result.get('user')
        if not user:
            return redirect('/?error=user_not_found')



        print(f"Aca user: {user}")
        user_ctx = user # result.get('user') ya es el contexto limpio
        
        if user_ctx and not user_ctx.get("success"):
            auth_data_json = {
                "success": False,
                "message": user_ctx.get("message"),
                "apps": user_ctx.get("apps", []),
                "code": 403
            }
            response_redirect = make_response(f"""
            <html>
                <body>
                    <script>
                        const authData = {auth_data_json};
                        if (window.opener) {{
                            window.opener.postMessage({{ type: 'OAUTH_ERROR', payload: auth_data }}, window.location.origin);
                            window.close();
                        }} else {{
                            // Si no hay opener, mostramos el error en pantalla o redirigimos
                            document.body.innerHTML = "<h2>Acceso Denegado</h2><p>" + authData.message + "</p>";
                        }}
                    </script>
                </body>
            </html>
            """)
            response_redirect.set_cookie('oauth_state', '', expires=0)
            return response_redirect

        # Generar Token JWT real
        final_token = create_session(user_ctx, temp_device=False)
        
        # Limpiar state
        response_redirect = make_response(f"""
        <html>
            <body>
                <script>
                    const authData = {{
                        success: true,
                        message: "Authentication successful",
                        token: "{final_token}",
                        user: {user_ctx},
                        handshake_code: "{generate_handshake_code(user_ctx.get('email'))}",
                        redirect_url: "/home"
                    }};
                    
                    if (window.opener) {{
                        // Si se abrió en un popup, enviamos los datos al padre y cerramos
                        window.opener.postMessage({{ type: 'OAUTH_SUCCESS', payload: authData }}, window.location.origin);
                        window.close();
                    }} else {{
                        // Si fue redirección normal, vamos a /home
                        window.location.href = "/home";
                    }}
                </script>
                <p>Authentication successful. Redirecting...</p>
            </body>
        </html>
        """)
        response_redirect.set_cookie('oauth_state', '', expires=0)
        return response_redirect
        
    except Exception as e:
        print(f"OAuth callback error: {e}")
        import traceback
        traceback.print_exc()
        return redirect('/?error=oauth_failed')


@auth_bp.route('/microsoft/callback')
def microsoft_callback():
    """
    Maneja el retorno (callback) del flujo OAuth de Microsoft.
    
    Objetivo:
    - Validar el estado y procesar el código de autorización de Microsoft.
    - Identificar al usuario y actualizar su perfil en la base de datos de identidad.
    - Gestionar el cierre del popup de autenticación y la entrega del token JWT al frontend.
    """
    try:
        code = request.args.get('code')
        state = request.args.get('state')
        error = request.args.get('error')

        print(f"[MICROSOFT CALLBACK] code: {code}, state: {state}, error: {error}")

        if error:
            return redirect(f'/?error={error}')

        if not code:
            return redirect('/?error=no_code')

        expected_state = request.cookies.get('oauth_state')
        print(f"[MICROSOFT] Expected state: {expected_state}, Received: {state}")

        result = process_microsoft_callback(code, state, expected_state)
        
        if not result.get('success'):
            error = result.get('error', 'oauth_failed')
            return redirect(f'/?error={error}')
        
        user = result.get('user')
        if not user:
            return redirect('/?error=user_not_found')

        user_ctx = user 
        
        if user_ctx and not user_ctx.get("success"):
            auth_data_json = {
                "success": False,
                "message": user_ctx.get("message"),
                "apps": user_ctx.get("apps", []),
                "code": 403
            }
            response_redirect = make_response(f"""
            <html>
                <body>
                    <script>
                        const authData = {auth_data_json};
                        if (window.opener) {{
                            window.opener.postMessage({{ type: 'OAUTH_ERROR', payload: auth_data }}, window.location.origin);
                            window.close();
                        }} else {{
                            document.body.innerHTML = "<h2>Acceso Denegado</h2><p>" + authData.message + "</p>";
                        }}
                    </script>
                </body>
            </html>
            """)
            response_redirect.set_cookie('oauth_state', '', expires=0)
            return response_redirect

        # Generar Token JWT real
        final_token = create_session(user_ctx, temp_device=False)
        
        # Respuesta HTML para manejar Popups o Redirección
        response_redirect = make_response(f"""
        <html>
            <body>
                <script>
                    const authData = {{
                        success: true,
                        message: "Authentication successful",
                        token: "{final_token}",
                        user: {user_ctx},
                        handshake_code: "{generate_handshake_code(user_ctx.get('email'))}",
                        redirect_url: "/home"
                    }};
                    
                    if (window.opener) {{
                        // Comunicar con la ventana padre y cerrar el popup
                        window.opener.postMessage({{ type: 'OAUTH_SUCCESS', payload: authData }}, window.location.origin);
                        window.close();
                    }} else {{
                        // Redirección estándar si no hay ventana padre
                        window.location.href = "/home";
                    }}
                </script>
                <p>Microsoft Authentication successful. Redirecting...</p>
            </body>
        </html>
        """)
        response_redirect.set_cookie('oauth_state', '', expires=0)
        return response_redirect

    except Exception as e:
        print(f"[MICROSOFT CALLBACK ERROR] {e}")
        import traceback
        traceback.print_exc()
        return redirect('/?error=oauth_failed')


# ============================================================================
# SESSION MANAGEMENT ROUTES
# ============================================================================

@auth_bp.route('/logout', methods=['POST'])
def logout():
    """
    Cierra la sesión activa del usuario.
    
    Objetivo:
    - Invalidar el token de sesión en SeaTable mediante la función logout_session.
    - Limpiar todos los datos de sesión en el servidor Flask.
    - Borrar la cookie de sesión del navegador para asegurar un cierre total.
    """
    # 1. Invalida la sesión en la base de datos (SeaTable)
    # Soporte Bearer Header
    auth_header = request.headers.get('Authorization', '')
    token = request.json.get('token') if request.is_json else None
    
    if auth_header.startswith('Bearer '):
        token = auth_header.split(' ')[1]
    
    # Fallback a g si ya pasó por un middleware (aunque aquí quitamos login_required)
    if not token:
        token = g.get('current_token')
    
    if token:
        logout_session(token)

    # 2. Limpia la sesión de Flask y cookies
    session.clear()
    response = make_response(jsonify({'success': True, 'message': 'Logged out successfully'}))
    session_cookie_name = current_app.config.get('SESSION_COOKIE_NAME', 'session')
    response.set_cookie(session_cookie_name, '', expires=0, httponly=True, samesite='Lax', path='/')
    return response


# ============================================================================
# DIAGNOSTIC ROUTES
# ============================================================================

@auth_bp.route('/debug/user/<email>')
def debug_user(email):
    """
    Diagnostic route to check user identity, roles, assignments and permissions.
    """
    from src.services.login_service import get_debug_user_info
    try:
        # Pasamos la URL base actual para que el diagnóstico detecte la App Key correcta
        current_url = request.host_url.rstrip('/')
        data = get_debug_user_info(email, current_url=current_url)
        return jsonify({"success": True, "data": data}), 200
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


# ============================================================================
# USER INFO ROUTES
# ============================================================================
@login_required
@auth_bp.route('/verify-session', methods=['POST'])
def verify_session_route():
    """
    Valida si una sesión es vigente de forma ligera y rápida.
    
    Objetivo:
    - Verificar la existencia y el estado (Active/Expired) del token proporcionado.
    - Realizar una comprobación rápida de permisos para la aplicación actual.
    - Retornar un handshake_code si la sesión es válida para permitir saltos entre apps.
    """
    data = request.json or {}
    email = data.get("email") or request.headers.get('X-User-Email')
    token = data.get("token")
    
    if not token:
        return jsonify({"success": False, "message": "Authentication token is required (Bearer Token)"}), 400
        
    result = verify_session(email, token)
    
    if result.get("success"):
        # Verificación extra: ¿Tiene permisos en esta App específica?
        # verify_session es ligero, pero si queremos interceptar permisos aquí debemos cargar el contexto
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
    Recupera el contexto completo y detallado del usuario autenticado.
    
    Objetivo:
    - Obtener información extendida del perfil, roles, permisos y aplicaciones autorizadas.
    - Este endpoint es "pesado" ya que carga la estructura RBAC completa.
    - Se apoya en el decorador @login_required para la validación previa del token.
    """
    try:
        email = g.current_email
        # Aquí sí traemos el contexto pesado
        user_data = _get_user_context(email)
        
        if not user_data:
            return jsonify({'success': False, 'message': 'User context not found'}), 404

        # Validación de permisos/roles o bloqueo de cuenta
        if user_data and not user_data.get("success"):
            return jsonify({
                'success': False,
                'message': user_data.get("message"),
                'apps': user_data.get("apps", [])
            }), 403

        return jsonify({
            'success': True,
            'message': 'User context retrieved',
            'user': user_data,
            'token': g.current_token,
            'handshake_code': generate_handshake_code(email)
        })
    except Exception as e:
        print(f"❌ Error en get_user_context_route: {e}")
        return jsonify({'success': False, 'message': str(e)}), 500

@auth_bp.route('/validate-handshake', methods=['POST'])
def validate_handshake_route():
    """
    Valida un código de intercambio (handshake) para transferir sesiones.
    
    Objetivo:
    - Convertir un handshake_code temporal en una sesión válida para el usuario.
    - Facilitar el Single Sign-On (SSO) entre diferentes aplicaciones del ecosistema.
    - Validar permisos en tiempo real para la aplicación de destino.
    """
    try:
        
        code = request.json.get('code')
        if not code:
            return jsonify({'success': False, 'message': 'Code is required'}), 400
            
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
    Obtiene la identidad visual (colores y nombre) de una aplicación basada en su URL.
    
    Objetivo:
    - Permitir que el frontend se personalice antes de que el usuario inicie sesión.
    - No requiere autenticación de usuario, solo una X-API-KEY válida.
    - Utiliza caché de metadatos para optimizar la respuesta.
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
    Inicia el proceso de recuperación de contraseña olvidada.
    
    Objetivo:
    - Validar la existencia del correo electrónico.
    - Generar y enviar un enlace de recuperación con un token seguro.
    - Gestionar el rate limiting para evitar spam de correos de recuperación.
    """
    try:
        email = request.json.get('email')
        
        if not email:
            return jsonify({
                'success': False,
                'message': 'Email is required'
            }), 400
        
        result = enviar_email_reset_password(email)
        
        if result.get("status"):
            return jsonify({
                'success': True,
                'message': result.get("message", "If the email exists, a password reset link has been sent."),
                'wait_seconds': result.get("wait_seconds")
            }), 200
        else:
            return jsonify({
                'success': False,
                'message': result.get("message", "Error sending reset email"),
                'wait_seconds': result.get("wait_seconds")
            }), 500
            
    except Exception as e:
        print(f"❌ Error en forgot_password: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({
            'success': False,
            'message': 'An error occurred while processing your request'
        }), 500


@auth_bp.route('/reset-password', methods=['POST'])
def reset_password():
    """
    Establece una nueva contraseña utilizando un token de recuperación.
    
    Objetivo:
    - Validar la vigencia y autenticidad del token de reset.
    - Actualizar la contraseña en la base de datos de SeaTable.
    - Retornar información sobre sesiones activas que deban ser revisadas por el usuario.
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
    Cambia la contraseña del usuario autenticado.
    
    Objetivo:
    - Validar la contraseña actual para asegurar la identidad.
    - Actualizar a la nueva credencial en el registro del usuario.
    - Requiere que el usuario esté plenamente autenticado (@login_required).
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
    Cierra sesiones de forma remota para el usuario autenticado.
    
    Objetivo:
    - Permitir la invalidación selectiva o masiva de sesiones activas.
    - Útil después de un cambio de contraseña o detección de actividad sospechosa.
    - Asegura que el usuario conserve el control sobre sus accesos concurrentes.
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
