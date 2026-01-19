def normalize_email(email):
    """Normalize email by trimming and converting to lowercase."""
    if not email or not isinstance(email, str):
        return ""
    return email.strip().lower()

def calculate_team_hierarchy(manager_email, all_collaborators, max_depth=10):
    """
    Calculates the complete tree of collaborators reporting to a manager.
    
    Args:
        manager_email (str): The email of the manager to start from.
        all_collaborators (list): List of dicts with 'Email address' and 'Manager Email'.
        max_depth (int): Maximum recursion depth to prevent infinite loops.
        
    Returns:
        dict: { "managerEmail": str, "members": list }
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
