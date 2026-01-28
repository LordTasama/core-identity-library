"""
Utilidad de Handshake para Transferencia de Sesiones (SSO).

Este módulo gestiona la generación y validación de códigos de intercambio firmados 
criptográficamente para permitir el salto de sesión entre diferentes aplicaciones 
del ecosistema Core Identity sin re-autenticación.

Objetivos clave:
1. Generar tokens stateless de corta duración (60s) asociados a un email.
2. Validar la integridad y caducidad de los códigos de intercambio.
3. Asegurar una transferencia segura de la identidad entre dominios autorizados.
"""
import time
from itsdangerous import URLSafeTimedSerializer
from config import Config

def generate_handshake_code(email):
    """
    Genera un código de intercambio firmado para un usuario específico.
    
    Objetivo:
    - Crear un token temporal que encapsula la identidad (email) del usuario.
    - Firmar el token con la SECRET_KEY para garantizar su autenticidad.
    """
    s = URLSafeTimedSerializer(Config.SECRET_KEY)
    # Usamos un salt específico para no mezclar con otros tokens
    return s.dumps(email, salt='handshake-auth')

def validate_handshake_code(code, max_age=300): # 5 minutes
    """
    Valida la autenticidad y vigencia de un código de handshake.
    
    Objetivo:
    - Deserializar el código y verificar que no haya sido alterado.
    - Comprobar que el código no supere la edad máxima permitida (default 300s).
    - Extraer el email del usuario para proceder con la creación de la nueva sesión.
    """
    s = URLSafeTimedSerializer(Config.SECRET_KEY)
    try:
        email = s.loads(code, salt='handshake-auth', max_age=max_age)
        return True, email
    except Exception as e:
        print(f"Handshake validation error: {str(e)}")
        return False, None
