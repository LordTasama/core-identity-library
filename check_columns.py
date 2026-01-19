from src.services.seatable_service import seatable
import json

try:
    print("--- Applications ---")
    apps = seatable.sql_query("SELECT * FROM Applications LIMIT 1", base_data="core_identity")
    if apps:
        print(json.dumps(list(apps[0].keys()), indent=2))
    else:
        print("No rows found in Applications")

    print("\n--- Auth Methods ---")
    auth = seatable.sql_query("SELECT * FROM \"Auth Methods\" LIMIT 1", base_data="core_identity")
    if auth:
        print(json.dumps(list(auth[0].keys()), indent=2))
    else:
        print("No rows found in Auth Methods")
except Exception as e:
    print(f"Error: {e}")
