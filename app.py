from flask import Flask, request, jsonify
from flask_cors import CORS
from config import get_config
from src.routes import auth_bp
from src.utils.logger import logger

def create_app():
    app = Flask(__name__)
    
    # Cargar configuración basada en ENVIRONMENT
    app_config = get_config()
    app.config.from_object(app_config)
    
    # Habilitar CORS
    CORS(app, supports_credentials=True)
    
    # Registrar Blueprints
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    
    @app.route('/')
    def index():
        return {"status": "running", "environment": app.config.get('ENVIRONMENT')}, 200

    logger.info(f"Aplicación iniciando en modo: {app.config.get('ENVIRONMENT')}")
    
    @app.before_request
    def check_api_key():
        # Permitir peticiones OPTIONS (CORS preflight) sin validar API Key
        if request.method == 'OPTIONS':
            return
            
        # Lista de endpoints que no requieren X-API-KEY (llamadas desde navegador o proveedores)
        public_endpoints = [
            'index',
            'auth.callback',
            'auth.microsoft_callback'
        ]
        
        # Si el endpoint actual es público, permitir acceso
        if request.endpoint in public_endpoints:
            return
            
        # Obtener la API Key enviada por el front-end
        api_key = request.headers.get('X-API-KEY')
        expected_key = app.config.get('API_KEY')
        
        # Validar configuración
        if not expected_key:
            logger.error("API_KEY no configurado en el servidor")
            return {"success": False, "message": "Security Error: Server API_KEY not configured"}, 500

        # Validar coincidencia
        if api_key != expected_key:
            logger.warning(f"Acceso no autorizado bloqueado para: {request.path}")
            return {"success": False, "message": "Unauthorized: Invalid or missing X-API-KEY"}, 401

    @app.errorhandler(Exception)
    def handle_exception(e):
        # Log del error completo con stacktrace
        logger.error(f"Error global no manejado: {str(e)}", exc_info=True)
        
        # Si es un error HTTP de Flask, intentamos mantener el código
        if hasattr(e, 'code'):
            return {"error": "Error del servidor", "message": str(e)}, e.code
            
        # Para cualquier otro error no manejado, retornamos 500
        return {"error": "Error interno del servidor", "message": "Ha ocurrido un error inesperado"}, 500
    
    return app

app = create_app()

if __name__ == '__main__':
    # No ejecutamos comandos cmd/ps, pero dejamos el entry point listo
    # Cargamos el estado de debug desde la configuración
    debug_mode = app.config.get('DEBUG', False)
    app.run(host='0.0.0.0', port=5009, debug=debug_mode)
