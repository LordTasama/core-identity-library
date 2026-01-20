"""
Gestión de Configuración y Variables de Entorno.

Este módulo centraliza todas las variables de entorno y constantes de configuración del sistema
Core Identity, permitiendo una transición fluida entre entornos de desarrollo, staging y producción.

Objetivos clave:
1. Carga centralizada de secretos y credenciales (OAuth, SeaTable, JWT).
2. Definición de URLs base para proveedores y callbacks.
3. Control selectivo de características mediante flags (Caching, Mock Auth).
"""
import os
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

class Config:
    """Base configuration."""
    SECRET_KEY = os.getenv('SESSION_SECRET', 'dev-secret-key')
    ENVIRONMENT = os.getenv('ENVIRONMENT', 'DEVELOPMENT')
    API_KEY = os.getenv('API_KEY')  # Token para autorización X-API-KEY
    
    # SeaTable configuration
    SEATABLE_SERVER_URL = os.getenv("SERVER_URL_SEATABLE")
    SEATABLE_API_TOKEN_CORE_IDENTITY = os.getenv("API_TOKEN_SEATABLE_CORE_IDENTITY")
    
    # Session configuration
    PERMANENT_SESSION_LIFETIME = 86400  # 24 hours
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = 'Lax'
    
    # Google OAuth configuration
    GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
    GOOGLE_CLIENT_SECRET = os.getenv('GOOGLE_CLIENT_SECRET')
    
    # Microsoft OAuth configuration
    MICROSOFT_CLIENT_ID = os.getenv("MICROSOFT_CLIENT_ID")
    MICROSOFT_CLIENT_SECRET = os.getenv("MICROSOFT_CLIENT_SECRET")
    
    # API / Vendor configuration
    URL_REDIRECT_CALLBACK = os.getenv('URL_REDIRECT_CALLBACK', 'http://localhost:5173')
    
    # Auth configuration
    MOCK_AUTH = os.getenv('MOCK_AUTH', 'False').lower() == 'true'
    CACHED_APPS = os.getenv('CACHED_APPS', 'True').lower() == 'true'

    # SMTP configuration (Used for emails)
    SMTP_HOST = os.getenv('SMTP_HOST')
    SMTP_PORT = os.getenv('SMTP_PORT')
    SMTP_SECURITY = os.getenv('SMTP_SECURITY')
    SMTP_USER = os.getenv('SMTP_USER')
    SMTP_PASS = os.getenv('SMTP_PASS')
    MAIL_FROM = os.getenv('MAIL_FROM')
    MAIL_FROM_NAME = os.getenv('MAIL_FROM_NAME')

    # Email Sending Method
    EMAIL_METHOD = os.getenv('EMAIL_METHOD', 'smtp').lower() # 'smtp' or 'microsoft_graph'
    
    # Microsoft Graph Email Configuration
    MAIL_MICROSOFT_TENANT_ID = os.getenv('MAIL_MICROSOFT_TENANT_ID')
    MAIL_MICROSOFT_CLIENT_ID = os.getenv('MAIL_MICROSOFT_CLIENT_ID')
    MAIL_MICROSOFT_CLIENT_SECRET = os.getenv('MAIL_MICROSOFT_CLIENT_SECRET')

class DevelopmentConfig(Config):
    """Development configuration."""
    DEBUG = True
    SESSION_COOKIE_SECURE = False

class ProductionConfig(Config):
    """Production configuration."""
    DEBUG = False
    SESSION_COOKIE_SECURE = True

# Helper dictionary to load config
config_by_name = {
    'DEVELOPMENT': DevelopmentConfig,
    'PRODUCTION': ProductionConfig
}

def get_config():
    """Returns the correct config class based on ENVIRONMENT."""
    env = os.getenv('ENVIRONMENT', 'DEVELOPMENT').upper()
    return config_by_name.get(env, DevelopmentConfig)