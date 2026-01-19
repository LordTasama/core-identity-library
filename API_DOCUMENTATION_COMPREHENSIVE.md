# Manual Técnico y de Operaciones: Core Identity API

## 1. Introducción Integral
La **Core Identity API** es la solución centralizada de Prism Group para la gestión del ciclo de vida de identidades digitales. Este sistema no solo autentica usuarios, sino que orquesta la autorización compleja basada en el contexto de la aplicación, el rol del usuario y la jerarquía organizacional.

### 1.1. Misión del Sistema
Proporcionar una capa de seguridad uniforme que permita a cualquier aplicación del grupo (Vendor Portal, Customer App, Internos) delegar la responsabilidad de "quién es el usuario" y "qué puede hacer" a un núcleo robusto y auditable.

### 1.2. Visión Arquitectónica
El sistema se basa en un desacoplamiento total entre la identidad física (Persona) y el método de acceso (Credencial). Esto permite que un mismo usuario acceda mediante su correo corporativo de Microsoft, su cuenta personal de Google o una contraseña tradicional, manteniendo siempre el mismo perfil y permisos históricos.

---

## 2. Infraestructura y Despliegue

### 2.1. Entorno de Producción
*   **Servidor de Aplicaciones:** `prismgrp-scripts2`
*   **IP Interna:** Gestionada por la red de Prism Group.
*   **Sistema Operativo:** Optimizado para la ejecución de Python 3.9.10+.
*   **Gestión de Procesos:** La API corre bajo una instancia de Flask protegida por un middleware de seguridad y, opcionalmente, un servidor WSGI como Waitress o Gunicorn.

### 2.2. Conectividad y Puertos
*   **Puerto Local:** 5000 (por defecto).
*   **Salida HTTPS (Puerto 443):** Necesaria para comunicarse con las APIs de SeaTable, Google OAuth y Microsoft Graph.
*   **Salida SMTP (Puerto 587/465):** Necesaria para el envío de notificaciones y OTPs.

---

## 3. Estructura de Archivos y Responsabilidades
Un desglose exhaustivo de los componentes del software:

| Archivo / Carpeta | Responsabilidad Técnica |
| :--- | :--- |
| `app.py` | Configuración de Flask, inicialización de extensiones (CORS), y registro del middleware global de seguridad. |
| `src/routes/login_route.py` | Definición de los contratos de la API (Endpoints). Maneja el parsing de JSON y códigos de retorno HTTP. |
| `src/services/login_service.py` | Orquestación de flujos de registro, login, reset de password y creación de registros persistentes en SeaTable. |
| `src/services/identity_service.py` | Motor de cálculo de RBAC. Lee assignments, roles y permisos para generar el "Action Key List". |
| `src/services/seatable_service.py` | Gestión de la conexión persistente con SeaTable. Implementa reintentos y caching de base. |
| `src/utils/team_util.py` | Algoritmo de recursión para determinar la jerarquía de "Team Members" basada en el campo Manager. |
| `src/utils/url_util.py` | Utilidad de normalización de URLs para detectar la App Key mediante el header Host. |
| `config.py` | Wrapper de seguridad que valida que todas las variables de entorno necesarias estén presentes. |

---

## 4. Variables de Entorno (.env) - Referencia de Ingeniería

| Variable | Tipo | Descripción Exhaustiva |
| :--- | :--- | :--- |
| `API_KEY` | String | Llave maestra de paso. Debes enviarla en el header `X-API-KEY`. Sin esto, el servidor devuelve 401. |
| `SESSION_SECRET` | Secret | Semilla para el algoritmo de hashing de los JWT. Debe ser una cadena aleatoria larga. |
| `SERVER_URL_SEATABLE` | URL | Endpoint base de SeaTable. Generalmente `https://cloud.seatable.io`. |
| `API_TOKEN_SEATABLE_CORE_IDENTITY` | Token | Token de base con acceso a la base "Core Identity". |
| `GOOGLE_CLIENT_ID` | OAuth ID | Identificador de cliente para el flujo de Google Identity. |
| `GOOGLE_CLIENT_SECRET` | Secret | Secreto de Google para el intercambio de tokens. |
| `MICROSOFT_CLIENT_ID` | App ID | El Application (client) ID de Azure AD. |
| `MICROSOFT_CLIENT_SECRET` | Secret | El valor secreto generado en "Certificates & secrets" de Azure. |
| `SMTP_HOST` | Host | Servidor de correo (ej: `smtp-mail.outlook.com`). |
| `SMTP_USER` | Email | Cuenta desde la cual se enviarán los OTPs de registro. |
| `SMTP_PASS` | Password | Contraseña de la cuenta de correo. |
| `MAIL_FROM` | String | Etiqueta del remitente (ej: `Prism Auth <system@prism.com>`). |

---

## 5. Diccionario de Datos: El Modelo SeaTable
Core Identity requiere una estructura de 7 tablas interconectadas. A continuación se detallan las columnas críticas que la API lee y escribe.

### 5.1. Tabla: `Identity` (Core Central)
Representa a la persona física en el sistema.
- **`Identity ID` (Text):** Identificador slug (ej: `tasama`). **Mandatorio**.
- **`First Name` (Text):** Nombre legal.
- **`Last Name` (Text):** Apellidos.
- **`Status` (Select):** `Active`, `Inactive`, `Pending`. La API valida esto en cada petición.
- **`Assignments` (Link):** Vínculo a la tabla de accesos por App.
- **`Collaborator ID` (Link):** Vínculo a la tabla `Collaborators`.
- **`Created At` (Date):** Fecha automática de registro.

### 5.2. Tabla: `Auth Methods` (Llaves de Acceso)
Almacena las credenciales y el estado de verificación.
- **`Email` (Text):** Identificador único. Usado para buscar al usuario.
- **`Password` (Text):** Hash bcrypt ($2b$12...). Solo para logins manuales.
- **`Auth Provider` (Select):** `Email`, `Google`, `Microsoft`.
- **`Verified` (Checkbox):** Indica si el usuario confirmó su correo.
- **`Identity` (Link):** Vínculo **crítico** a la tabla Identity. Sin esto el usuario no tiene perfil.
- **`Token` (Text):** Almacena el código temporal de 6 dígitos.
- **`Last Email Sent` (Date):** Usado para el rate-limit de 5 minutos.

### 5.3. Tabla: `Assignments` (Permisos por App)
Define qué rol tiene el usuario en cada aplicación particular.
- **`App Key` (Text):** Nombres como `vendor_portal`, `customer_service`, etc.
- **`Role` (Link):** Apunta a la tabla `Roles`.
- **`Identity` (Link):** Vínculo a la persona.
- **`Data` (JSON/LongText):** Configuración de visibilidad (ej: `{"type": "team"}`).
- **`Status` (Select):** `Active` o `Inactive`.

### 5.4. Tabla: `Roles`
- **`Role ID` (Text):** Identificador técnico (ej: `vendor_portal.admin`).
- **`Role Name` (Text):** Nombre legible.
- **`App Key` (Multi-select):** Aplicaciones donde este rol es válido.

### 5.5. Tabla: `Permissions`
- **`Action Key` (Text):** El permiso atómico. Ej: `invoice.download`.
- **`Roles` (Link):** Lista de roles que tienen este permiso.

---

## 6. Lógica de Autorización (RBAC) - El Corazón de la API

### 6.1. Identificación Dinámica de Aplicación
La API no requiere que el Front-End diga quién es. La API lo deduce:
1.  **Detección de URL:** El código lee el header `Origin` o `Host`.
2.  **Matching en SeaTable:** Se compara contra la columna `Public URL` de la tabla `Applications`.
3.  **App Key Resultante:** Si una URL coincide con `https://portal.prismgrp.com`, la API asigna internamente la `app_key = "vendor_portal"`.

### 6.2. Modos de Datos (Data Modes)
Define qué registros puede ver el usuario dentro de su aplicación.
1.  **`all`**: Acceso administrativo total a la base de datos de la App.
2.  **`team`**: Acceso a sus datos y a los de su equipo descendente (calculado vía managers en `Collaborators`).
3.  **`assigned`**: Acceso solo a entidades específicas (ej: Mercados específicos) definidos en el JSON de `Assignments`.
4.  **`own`**: Acceso restringido a registros creados por su propio Identity ID.

---

## 7. Referencia Detallada de Endpoints REST

### 7.1. Autenticación y Registro

#### `POST /api/auth/register`
**Uso:** Creación de nuevas cuentas manuales.
- **Payload:**
```json
{
  "firstName": "String",
  "lastName": "String",
  "email": "user@email.com",
  "password": "Password123"
}
```
- **Lógica:** Crea registros en `Identity` y `Auth Methods`. El `Status` de Identity se pone en `Pending` hasta la verificación.

#### `POST /api/auth/verify-email`
**Uso:** Verificación de cuenta mediante OTP.
- **Payload:** `{ "token": "6-DIGIT-CODE" }`
- **Resultado:** Si el código es correcto, `Verified = True` y `Status = Active`.

---

### 7.2. Usuario y Autorización

#### `GET /api/auth/me`
**Uso:** El Front-End lo llama al cargar para saber quién es el usuario y qué botones mostrar.
- **Headers:** `Authorization: Bearer <JWT>`, `X-API-KEY: <llave>`
- **Response Extendido:**
```json
{
  "user": {
    "firstName": "Anderson",
    "lastName": "Tasama",
    "permissions": ["permiso.1", "permiso.2"],
    "dataMode": "team",
    "dataModeInfo": {
       "mode": "team",
       "managerEmail": "boss@prism.com",
       "members": ["emp1@prism.com", "emp2@prism.com"]
    },
    "appKey": "vendor_portal"
  }
}
```

---

### 7.3. Gestión de Sesiones

#### `POST /api/auth/logout_sessions`
**Uso:** Cerrar sesiones en otros dispositivos.
- **Payload:** `{ "email": "...", "token": "...", "all_sessions": true }`

---

### 10.3. `POST /api/auth/verify-session`
**Propósito:** Validar y renovar el token del usuario sin requerir re-login.
- **Request:** `{ "email": "...", "token": "..." }`
- **Lógica:**
  1. Decodifica el JWT.
  2. Verifica que el email coincida con el payload.
  3. Si faltan < 24h para expirar, genera un **Nuevo Token** con otros 180 días.
- **Response:** `{ "success": true, "user": {...}, "token": "...", "handshake_code": "...", "renewed": true }`

### 10.4. `POST /api/auth/validate-handshake`
**Propósito:** Validación ultra-rápida de identidad para APIs secundarias (Handshake).
- **Request:** `{ "code": "..." }`
- **Seguridad:** Requiere `X-API-KEY` de aplicación autorizada.
- **Lógica:**
  1. Verifica la firma digital del código.
  2. Valida que no hayan pasado más de 60 segundos desde su creación.
- **Response:** `{ "success": true, "valid": true, "email": "...", "user": {...} }`

### 10.5. `POST /api/auth/reset-password`
**Propósito:** Finalizar el flujo de recuperación de contraseña.
- **Payload:**
```json
{
  "token": "A7B8C9",
  "newPassword": "...",
  "confirmPassword": "..."
}
```
- **Seguridad:** El token OTP se borra de SeaTable inmediatamente después de un éxito para evitar re-uso.

### 10.6. `POST /api/auth/change-password`
**Propósito:** Cambio voluntario de contraseña (requiere estar logueado).
- **Headers:** `Authorization: Bearer <JWT>`
- **Payload:** `{ "currentPassword": "...", "newPassword": "..." }`
- **Restricción:** No disponible para usuarios de Google/Microsoft (deben cambiarlo en sus respectivos proveedores).

---

## 11. Guía de Configuración de Proveedores OAuth

### 11.1. Configuración en Microsoft Azure Entra ID
Para que el login de Microsoft funcione, se requiere:
1.  **Redirect URI:** Debe ser exactamente `https://[DOMINIO]/api/auth/microsoft/callback`.
2.  **Scopes Requeridos:** `User.Read` (permiso básico de perfil).
3.  **Client Secret:** Debe estar vigente. Si expira, la API devolverá errores 500 en el flujo de callback.

### 11.2. Configuración en Google Cloud Console
1.  **Credenciales:** Crear un OAuth 2.0 Client ID para Web Application.
2.  **Redirect URI:** `https://[DOMINIO]/api/auth/callback`.
3.  **Scopes:** `.../auth/userinfo.email` y `.../auth/userinfo.profile`.

---

## 12. Soporte Técnico y Troubleshooting (Nivel 3)

### 12.1. Problemas comunes en el despliegue
- **Error: "Row does not exist":** Generalmente ocurre si se intenta vincular una Identity a un Auth Method antes de que SeaTable termine de procesar la inserción. El código actual implementa reintentos y esperas de 100ms para mitigar esto.
- **Error de CORS:** Si el Front-End recibe bloqueos de CORS, verificar que la variable `ENVIRONMENT` en `.env` esté en `DEVELOPMENT` si se trabaja en localhost, o que el dominio esté permitido en `app.py`.
- **JWT Vencido:** Los tokens duran 180 días. Si un usuario reporta que su sesión se cierra sola, verificar la columna `Expiration Date` en la tabla `Sessions`.

### 12.2. Cómo añadir un nuevo permiso de negocio
1.  Identificar la acción (ej: `billing.review`).
2.  Registrar el literal en la columna `Action Key` de la tabla `Permissions` en SeaTable.
3.  Vincular el permiso a los roles deseados (ej: `vendor_portal.admin`).
4.  Reiniciar la App o esperar 10 min (caché TTL) para que el Front-End lo reciba en `/me`.

---

## 13. Conclusión y Mantenimiento
Este sistema está diseñado para ser "Set and Forget". Una vez configuradas las tablas bases en SeaTable, la administración de usuarios se realiza 100% desde la plataforma de datos sin intervención del equipo de desarrollo de backend.
