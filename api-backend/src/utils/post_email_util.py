"""
Email Utility Module
====================
This module provides a generic email sending function that can be used
throughout the application for sending emails.
"""

import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from config import Config
import requests

def _send_email_microsoft_graph(receiver_email, subject, body_html, from_email=None):
    """
    Envía un correo utilizando la API de Microsoft Graph.
    Requiere permisos de aplicación Mail.Send.
    """
    try:
        tenant_id = Config.MAIL_MICROSOFT_TENANT_ID
        client_id = Config.MAIL_MICROSOFT_CLIENT_ID
        client_secret = Config.MAIL_MICROSOFT_CLIENT_SECRET
        sender_email = from_email or Config.MAIL_FROM or Config.SMTP_USER

        if not all([tenant_id, client_id, client_secret, sender_email]):
            raise ValueError("Faltan variables MAIL_MICROSOFT_* o remitente en Config")

        # 1. Obtener Access Token de Azure AD
        token_url = f"https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token"
        token_data = {
            "grant_type": "client_credentials",
            "client_id": client_id,
            "client_secret": client_secret,
            "scope": "https://graph.microsoft.com/.default"
        }
        
        token_res = requests.post(token_url, data=token_data)
        token_res.raise_for_status()
        token = token_res.json().get("access_token")

        # 2. Enviar el correo
        send_url = f"https://graph.microsoft.com/v1.0/users/{sender_email}/sendMail"
        
        # Corrección: Asegurar que si es None use el fallback
        from_name = getattr(Config, "MAIL_FROM_NAME", None) or "Core Identity"
        
        print(f"📧 Enviando via Microsoft Graph como: '{from_name}' <{sender_email}>")

        email_content = {
            "message": {
                "subject": subject,
                "from": {
                    "emailAddress": {
                        "name": from_name,
                        "address": sender_email
                    }
                },
                "body": {
                    "contentType": "HTML",
                    "content": body_html
                },
                "toRecipients": [
                    {
                        "emailAddress": {
                            "address": receiver_email
                        }
                    }
                ]
            },
            "saveToSentItems": "true"
        }

        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }

        res = requests.post(send_url, json=email_content, headers=headers)
        res.raise_for_status()

        print(f"✅ Correo enviado correctamente (Microsoft Graph) a {receiver_email}")
        return True

    except Exception as e:
        print(f"❌ Error enviando correo via Microsoft Graph: {e}")
        if hasattr(e, 'response') and e.response is not None:
             print(f"Response: {e.response.text}")
        return False

def send_email(receiver_email, subject, body_html, from_email=None):
    # Determinar método de envío
    method = getattr(Config, "EMAIL_METHOD", "smtp")
    
    if method == "microsoft_graph":
        return _send_email_microsoft_graph(receiver_email, subject, body_html, from_email)
    
    # Fallback o Default a SMTP
    try:
        # --- Datos SMTP ---
        smtp_host = getattr(Config, "SMTP_HOST", None)
        smtp_port = int(getattr(Config, "SMTP_PORT", 587))
        smtp_security = getattr(Config, "SMTP_SECURITY", "starttls").lower()

        smtp_user = getattr(Config, "SMTP_USER", None)  # login real
        smtp_pass = getattr(Config, "SMTP_PASS", None)

        # --- From (alias) ---
        mail_from = from_email or getattr(Config, "MAIL_FROM", smtp_user)
        from_name = getattr(Config, "MAIL_FROM_NAME", "Vendor Portal")

        if not smtp_host or not smtp_user or not smtp_pass:
            raise ValueError("Faltan variables SMTP_HOST / SMTP_USER / SMTP_PASS en Config")

        print(f"📧 Enviando correo a: {receiver_email}")
        print(f"📋 Asunto: {subject}")
        print(f"🔐 SMTP: {smtp_host}:{smtp_port} ({smtp_security}) | login={smtp_user} | from={mail_from}")

        # --- Crear mensaje ---
        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"] = f"{from_name} <{mail_from}>"
        msg["To"] = receiver_email

        msg.attach(MIMEText(body_html, "html", "utf-8"))

        context = ssl.create_default_context()

        # --- Conexión SMTP ---
        if smtp_security == "ssl":
            with smtplib.SMTP_SSL(smtp_host, smtp_port, context=context) as server:
                server.login(smtp_user, smtp_pass)
                # Envelope-from = mail_from (importante para alias)
                server.sendmail(mail_from, [receiver_email], msg.as_string())

        else:
            with smtplib.SMTP(smtp_host, smtp_port) as server:
                server.ehlo()
                server.starttls(context=context)
                server.ehlo()
                server.login(smtp_user, smtp_pass)
                server.sendmail(mail_from, [receiver_email], msg.as_string())

        print(f"✅ Correo enviado correctamente a {receiver_email}")
        return True

    except Exception as e:
        print(f"❌ No se pudo enviar el correo: {e}")
        import traceback
        traceback.print_exc()
        return False

# def send_email(receiver_email, subject, body_html, from_email=None):
#     """
#     Función genérica para enviar correos electrónicos.
    
#     Args:
#         receiver_email (str): Email del destinatario
#         subject (str): Asunto del correo
#         body_html (str): Cuerpo del correo en formato HTML (ya armado)
#         from_email (str, optional): Email remitente personalizado. 
#                                    Si no se especifica, usa Config.CORREO
    
#     Returns:
#         bool: True si el correo se envió correctamente, False en caso contrario
#     """
#     try:
#         print(f"📧 Enviando correo a: {receiver_email}")
#         print(f"📋 Asunto: {subject}")
        
#         # Datos del correo
#         sender_email = Config.CORREO
#         password_app = Config.PASSWORD_AUNT
#         display_from = from_email if from_email else sender_email

#         # --- Crear mensaje MIME ---
#         msg = MIMEMultipart("alternative")
#         msg["Subject"] = subject
#         msg["From"] = display_from
#         msg["To"] = receiver_email

#         # Adjuntar el cuerpo HTML
#         msg.attach(MIMEText(body_html, "html", "utf-8"))

#         # --- Enviar correo ---
#         context = ssl.create_default_context()
#         with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
#             server.login(sender_email, password_app)
#             server.send_message(msg)

#         print(f"✅ Correo enviado correctamente a {receiver_email}")
#         return True

#     except Exception as e:
#         print(f"❌ No se pudo enviar el correo: {e}")
#         import traceback
#         traceback.print_exc()
#         return False





# PENDIENTE POR PROBAR ================================
# def send_email(receiver_email, subject, body_html, from_email=None):
#     """
#     Función genérica para enviar correos electrónicos.
    
#     Args:
#         receiver_email (str): Email del destinatario
#         subject (str): Asunto del correo
#         body_html (str): Cuerpo del correo en formato HTML (ya armado)
#         from_email (str, optional): Email remitente personalizado. 
#                                    Si no se especifica, usa Config.CORREO
    
#     Returns:
#         bool: True si el correo se envió correctamente, False en caso contrario
#     """
#     try:
#         print(f"📧 Enviando correo a: {receiver_email}")
#         print(f"📋 Asunto: {subject}")
        
#         # Datos del correo
#         sender_email = Config.CORREO
#         password_app = Config.PASSWORD_AUNT
#         display_from = from_email if from_email else sender_email
#         print(password_app)
#         print(sender_email)
#         # --- Crear mensaje MIME ---
#         msg = MIMEMultipart("alternative")
#         msg["Subject"] = subject
#         msg["From"] = display_from
#         msg["To"] = receiver_email

#         # Adjuntar el cuerpo HTML
#         msg.attach(MIMEText(body_html, "html", "utf-8"))

#         # --- Enviar correo ---
#         server = smtplib.SMTP("mail.prismgrp.net", 2687)
#         server.starttls()
#         server.login(sender_email, password_app)
#         server.sendmail(display_from, receiver_email, msg.as_string())
#         server.quit()

#         print(f"✅ Correo enviado correctamente a {receiver_email}")
#         return True

#     except Exception as e:
#         print(f"❌ No se pudo enviar el correo: {e}")
#         import traceback
#         traceback.print_exc()
#         return False