"""
URL Processing and Matching Utilities.

This module provides functions for URL normalization and automatic 
identification of applications based on URL prefixes, enabling 
dynamic App context detection.

Key Objectives:
1. Standardize URLs by removing protocols, subdomains (www), and trailing slashes.
2. Implement a 'best match' engine (longest prefix match wins).
3. Facilitate App-specific configuration resolution based on the request origin.
"""
import re

def normalize_url(url):
    """
    Standardizes a URL to facilitate consistent comparisons.
    
    Objective:
    - Remove noise (http, https, www, slashes) that might affect matching.
    - Convert to lowercase for case-insensitive comparisons.
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
    Identifies the application that best matches the input URL.
    
    Objective:
    - Compare the request URL against the public URLs of registered Apps.
    - Apply the 'most specific match wins' rule (longest prefix).
    - Resolve the App Key needed to apply the corresponding RBAC.
    """
    normalized_input = normalize_url(input_url)
    if not normalized_input:
        return None
    
    print(f"🔍 DEBUG find_best_app_match - Input URL: '{input_url}' -> Normalized: '{normalized_input}'")
        
    best_match = None
    max_length = -1
    
    for app in applications:
        public_url = app.get("Public URL")
        if not public_url:
            continue
            
        normalized_public = normalize_url(public_url)
        if not normalized_public:
            continue
        
        print(f"  🔸 Comparing with App '{app.get('App Key')}': '{public_url}' -> Normalized: '{normalized_public}'")
            
        # Check if normalized_input starts with normalized_public
        # Or if normalized_input is equal to normalized_public
        # Example: input "abc.com/app" starts with "abc.com"
        if normalized_input == normalized_public or normalized_input.startswith(normalized_public + "/"):
            print(f"    ✅ MATCH! Length: {len(normalized_public)}")
            if len(normalized_public) > max_length:
                max_length = len(normalized_public)
                best_match = app.get("App Key")
                print(f"    🏆 New best match: {best_match}")
        else:
            print(f"    ❌ No match")

    print(f"🎯 Final result: {best_match}")
    return best_match
