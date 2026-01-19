import re

def normalize_url(url):
    """
    Normalizes a URL by:
    - Trimming whitespace
    - Converting to lowercase
    - Removing protocol (http://, https://)
    - Removing 'www.'
    - Removing trailing slash
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
    Finds the best matching application for a given URL.
    The match is based on the prefix. If multiple matches, the longest one wins.
    
    Args:
        input_url (str): The raw URL to match.
        applications (list): List of dicts with 'Public URL' and 'App Key'.
        
    Returns:
        str or None: The App Key of the best match.
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
