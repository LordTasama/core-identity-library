"""
Utilidades de Gestión de Equipos y Jerarquías.

Este módulo contiene la lógica para normalizar identificadores de usuario y calcular
la estructura de subordinación (reporting lines) dentro de la organización.

Objetivos clave:
1. Normalizar correos electrónicos para asegurar consistencia en las búsquedas.
2. Calcular el árbol completo de colaboradores (DFS) para la herencia de permisos de equipo.
3. Prevenir ciclos infinitos en la jerarquía mediante límites de profundidad.
"""
def normalize_email(email):
    """
    Estandariza un correo electrónico para su procesamiento consistente.
    
    Objetivo:
    - Asegurar que las comparaciones de email sean insensibles a mayúsculas y espacios.
    - Proveer una base confiable para las búsquedas en SeaTable.
    """
    if not email or not isinstance(email, str):
        return ""
    return email.strip().lower()

def calculate_team_hierarchy(manager_email, all_collaborators, max_depth=10):
    """
    Calcula recursivamente el árbol completo de colaboradores que reportan a un manager.
    
    Objetivo:
    - Identificar todos los miembros de un equipo basándose en la relación Manager-Colaborador.
    - Utilizar una búsqueda en profundidad (DFS) para recorrer toda la jerarquía de mando.
    - Servir de insumo para el cálculo de permisos basados en 'Team Access'.
    """
    normalized_manager = normalize_email(manager_email)
    if not normalized_manager:
        return {"managerEmail": "", "members": []}

    # Build adjacency list for faster lookup
    # key: manager_email, value: list of report_emails
    adj = {}
    for collab in all_collaborators:
        email = normalize_email(collab.get("Email address"))
        manager = normalize_email(collab.get("Manager Email"))
        
        if not email or not manager:
            continue
            
        if manager not in adj:
            adj[manager] = []
        
        # Avoid adding the same report twice to the same manager
        if email not in adj[manager]:
            adj[manager].append(email)

    members = set()
    visited = set()

    def dfs(current_email, depth):
        if depth >= max_depth:
            return
        
        if current_email in visited:
            return  # Cycle protection
            
        visited.add(current_email)
        
        reports = adj.get(current_email, [])
        for report in reports:
            if report not in members:
                members.add(report)
                dfs(report, depth + 1)

    # Start DFS from the manager
    dfs(normalized_manager, 0)

    # Note: If there are cycles elsewhere in the data but not reachable from 
    # the manager, they won't affect this. 
    # If there's a cycle involving the manager or their reports, 
    # 'visited' and 'max_depth' protect us.

    return {
        "managerEmail": normalized_manager,
        "members": sorted(list(members))
    }
