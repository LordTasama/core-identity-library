import time
from itsdangerous import URLSafeTimedSerializer
from config import Config

def generate_handshake_code(email):
    """
    Genera un token firmado (stateless) de corta duración.
    Incluye el email y el timestamp actual para validación posterior.
    """
    s = URLSafeTimedSerializer(Config.SECRET_KEY)
    # Usamos un salt específico para no mezclar con otros tokens
    return s.dumps(email, salt='handshake-auth')

def validate_handshake_code(code, max_age=60):
    """
    Valida la firma y la edad del código.
    Retorna (True, email) si es válido, (False, None) si expiró o es inválido.
    """
    s = URLSafeTimedSerializer(Config.SECRET_KEY)
    try:
        email = s.loads(code, salt='handshake-auth', max_age=max_age)
        return True, email
    except Exception as e:
        print(f"Handshake validation error: {str(e)}")
        return False, None
