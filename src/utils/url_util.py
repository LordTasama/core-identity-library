"""
Utilidades de Procesamiento y Matching de URLs.

Este módulo provee funciones para la normalización de URLs y la identificación 
automática de aplicaciones basadas en prefijos de URL, permitiendo la detección 
dinámica del contexto de la App.

Objetivos clave:
1. Estandarizar URLs eliminando protocolos, subdominios (www) y slashes finales.
2. Implementar un motor de matching de 'mejor coincidencia' (prefix match longest wins).
3. Facilitar la resolución de configuraciones App-specific basadas en el origen de la petición.
"""
import re

def normalize_url(url):
    """
    Estandariza una URL para facilitar comparaciones consistentes.
    
    Objetivo:
    - Eliminar ruido (http, https, www, slashes) que pueda afectar el matching.
    - Convertir a minúsculas para comparaciones insensibles a mayúsculas.
    """
    if not url:
        return ""
    
    url = url.strip().lower()
    
    # Remove protocol
    url = re.sub(r'^https?://', '', url)
    
    # Remove www.
    url = re.sub(r'^www\.', '', url)
    
    # Remove trailing slash
    url = url.rstrip('/')
    
    return url

def find_best_app_match(input_url, applications):
    """
    Identifica la aplicación que mejor coincide con la URL de entrada.
    
    Objetivo:
    - Comparar la URL de la petición contra las URLs públicas de las Apps registradas.
    - Aplicar la regla de 'la coincidencia más específica gana' (prefijo más largo).
    - Resolver el App Key necesario para aplicar el RBAC correspondiente.
    """
    normalized_input = normalize_url(input_url)
    if not normalized_input:
        return None
        
    best_match = None
    max_length = -1
    
    for app in applications:
        public_url = app.get("Public URL")
        if not public_url:
            continue
            
        normalized_public = normalize_url(public_url)
        if not normalized_public:
            continue
            
        # Check if normalized_input starts with normalized_public
        # Or if normalized_input is equal to normalized_public
        # Example: input "abc.com/app" starts with "abc.com"
        if normalized_input == normalized_public or normalized_input.startswith(normalized_public + "/"):
            if len(normalized_public) > max_length:
                max_length = len(normalized_public)
                best_match = app.get("App Key")
        elif normalized_input == normalized_public: # redundant but safe
             if len(normalized_public) > max_length:
                max_length = len(normalized_public)
                best_match = app.get("App Key")

    return best_match
