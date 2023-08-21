import os

from dotenv import load_dotenv


def convert_env_to_dict():
    load_dotenv()

    credentials_json = {
        "type": os.environ["TYPE"],
        "project_id": os.environ["PROJECT_ID"],
        "private_key_id": os.environ["PRIVATE_KEY_ID"],
        "private_key": os.environ["PRIVATE_KEY"],
        "client_email": os.environ["CLIENT_EMAIL"],
        "client_id": os.environ["CLIENT_ID"],
        "auth_uri": os.environ["AUTH_URI"],
        "token_uri": os.environ["TOKEN_URI"],
        "auth_provider_x509_cert_url": os.environ["AUTH_PROVIDER_X509_CERT_URL"],
        "client_x509_cert_url": os.environ["CLIENT_X509_CERT_URL"],
        "universe_domain": os.environ["UNIVERSE_DOMAIN"],
    }

    return credentials_json
