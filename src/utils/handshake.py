"""
Utilidad de Handshake para Transferencia de Sesiones (SSO).

Este módulo gestiona la generación y validación de códigos de intercambio firmados 
criptográficamente para permitir el salto de sesión entre diferentes aplicaciones 
del ecosistema Core Identity sin re-autenticación.

Objetivos clave:
1. Generar tokens JWT firmados de corta duración (5 min) con el contexto completo del usuario.
2. Validar la integridad y caducidad de los códigos de intercambio.
3. Asegurar una transferencia segura de la identidad entre dominios autorizados.
"""
import jwt
import datetime
from config import Config

def generate_handshake_code(user_data, expires_in=600):
    """
    Genera un token JWT firmado que contiene el contexto completo del usuario.
    
    Objetivo:
    - Crear un token temporal que encapsula la identidad y permisos del usuario.
    - Firmar el token con la SECRET_KEY para garantizar su autenticidad.
    """
    if not user_data:
        return None
        
    payload = {
        "user": user_data,
        "iat": datetime.datetime.utcnow(),
        "exp": datetime.datetime.utcnow() + datetime.timedelta(seconds=expires_in),
        "type": "handshake"
    }
    
    # Nos aseguramos de codificar como string para el JSON
    token = jwt.encode(payload, Config.CI_HANDSHAKE_SECRET_KEY, algorithm="HS256")
    return token

def validate_handshake_code(code):
    """
    Valida la autenticidad y vigencia de un código de handshake JWT.
    
    Objetivo:
    - Decodificar el JWT y verificar la firma con la SECRET_KEY.
    - Comprobar que el token no haya expirado.
    - Extraer el contexto del usuario contenido en el payload.
    """
    try:
        payload = jwt.decode(code, Config.CI_HANDSHAKE_SECRET_KEY, algorithms=["HS256"])
        
        if payload.get("type") != "handshake":
            return False, "Invalid token type"
            
        return True, payload.get("user")
    except jwt.ExpiredSignatureError:
        print("Handshake validation error: Token expired")
        return False, "Token expired"
    except jwt.InvalidTokenError as e:
        print(f"Handshake validation error: {str(e)}")
        return False, str(e)
    except Exception as e:
        print(f"Handshake validation error: {str(e)}")
        return False, str(e)

