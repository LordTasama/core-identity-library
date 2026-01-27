# Core Identity Library
## Guía Completa de Implementación y Referencia Técnica

Esta documentación proporciona una visión detallada de la **Core Identity Library**, una solución robusta, premium y altamente personalizable para la gestión de identidades, autenticación y navegación en ecosistemas de aplicaciones React.

---

# 1. Seguridad y Autorización
La librería implementa una capa de seguridad obligatoria para garantizar que solo las peticiones autorizadas puedan interactuar con los servicios de identidad.

## 1.1 El Token de Acceso (apiToken)
A diferencia de otras librerías, **Core Identity** no busca automáticamente en archivos `.env`. Esto le da al desarrollador el control total sobre la seguridad. 

Usted debe pasar su token de autorización a través del prop `apiToken` en cada componente principal.

### Ejemplo de uso del Token:
```jsx
<Login 
  apiBaseUrl="https://base-url.com" 
  apiToken="tu_token_aqui" 
/>
```

## 1.2 Validación de Seguridad
Si el prop `apiToken` no se proporciona o está vacío, los componentes:
1.  Muestran un componente de error visual (`AuthError`) bloqueando la interfaz.
2.  Lanza una advertencia en la consola del desarrollador.
3.  Deshabilitan todas las peticiones salientes al backend.

---

# 2. Instalación y Requisitos
Para un funcionamiento óptimo, la librería requiere que el proyecto anfitrión cumpla con ciertos requisitos técnicos y dependencias.

## 2.1 Dependencias Requeridas
Asegúrese de instalar las siguientes librerías en su proyecto para soportar la lógica de red e iconos:

```bash
npm install lucide-react react-icons @tanstack/react-query
```

## 2.2 Configuración de Estilos (Tailwind CSS)
La librería utiliza **Tailwind CSS v3** para su sistema de diseño.

### A. Aislamiento de Estilos (Prefijo `cil-`)
Para garantizar que la librería sea "Safe-to-Use" en cualquier proyecto (incluso aquellos que no usan Tailwind o usan una versión distinta), todos los estilos internos están aislados mediante el prefijo **`cil-`** (Core Identity Library).

*   **Sin Conflictos**: Las clases de la librería (ej: `cil-flex`, `cil-bg-white`) nunca entrarán en conflicto con las clases de su aplicación principal (ej: `flex`, `bg-white`).
*   **Encapsulamiento**: No necesita modificar la configuración de Tailwind de su proyecto para que la librería se vea bien; basta con importar el archivo CSS compilado.

### B. Herencia de Tipografía
La librería **no impone una fuente específica**. Heredará automáticamente la tipografía definida en el `body` o contenedor de la aplicación host. Esto garantiza que los componentes se integren visualmente de forma nativa con cualquier diseño previo.

---

# 3. Componentes de Autenticación
Lógica y vistas centradas en el ciclo de vida del usuario.

## 3.1 Login, SignUp y Recuperación
- **`Login`**: Maneja acceso con email/password y botones sociales.
- **`SignUp`**: Registro de nuevos usuarios con validación de contraseña.
- **`ForgotPassword` / `ResetPassword`**: Flujo completo de recuperación mediante envío de tokens por email.
- **`ChangePassword`**: Formulario seguro para usuarios autenticados que desean actualizar su contraseña.
- **`WaitingConfirmation`**: Vista de espera para casos donde se requiere aprobación manual o verificación de email.

---

## 4. Componentes de Navegación y Perfil
Diseñados para ofrecer una experiencia premium de "Ecosistema de Apps" y gestión de perfil.

### 4.1 AppGrid (Selector de Aplicaciones)
Inspirado en los selectores de aplicaciones de Google/Microsoft, permite al usuario saltar entre diferentes herramientas autorizadas.
- **Diseño**: Efecto Glassmorphism (fondo translúcido con desenfoque).
- **Funcionalidad**: Genera iconos coloridos automáticamente basados en el nombre de la app, abre las URLs en pestañas nuevas y permite personalizar etiquetas.

### 4.2 UserMenu (Menú de Perfil)
Un menú desplegable elegante para la barra de navegación.
- **Header dinámico**: Muestra el nombre completo del usuario y su email.
- **Acciones**: Incluye "Cambiar Contraseña" y "Cerrar Sesión" por defecto.
- **Extensibilidad**: Permite inyectar elementos adicionales (items) con iconos y callbacks personalizados.

### 4.3 UserProfile (Ficha de Usuario)
Una vista detallada y premium con la información del usuario.
- **Soporte Multimedia**: Renderiza automáticamente la imagen de perfil (`profileImageURL`) o un avatar dinámico con colores corporativos.
- **Secciones**: Información personal, Roles asignados (con insignias) y Permisos granulares detallados por aplicación.
- **Gestión de Seguridad**: Permite al usuario ver sus sesiones activas, detectar accesos sospechosos y cerrar sesiones de forma remota (individualmente o de forma masiva).
- **Integración**: Incluye acceso directo al cambio de contraseña.

---

# 5. Especificaciones de Props (API)

### Componentes de Navegación

#### UserMenu
| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `user` | Object | Objeto con datos del usuario (`fullName`, `email`, etc). |
| `primaryColor` | String | Color del borde del avatar e iniciales. |
| `onLogout` | Function | Callback ejecutado al cerrar sesión. |
| `onChangePassword` | Function | Callback para navegar a la vista de cambio de password. |
| `onProfileClick` | Function | Callback para navegar a la vista de perfil. |
| `extraItems` | Array | Lista de `{ icon, label, onClick }` para añadir opciones al menú. |

#### AppGrid
| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `apps` | Array | Lista de aplicaciones autorizadas para el usuario. |
| `customLabels` | Object | Mapeo para renombrar apps (ej: `{"erp_system": "Mi ERP"}`). |
| `primaryColor` | String | Color del icono del grid (cuando no es blanco). |
| `onAppClick` | Function | Callback opcional cuando se hace clic en una app. |

#### Header
| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `logo` | ReactNode/String | Logo de la aplicación (URL o componente). |
| `user` | Object | Datos del usuario para el `UserMenu`. |
| `apps` | Array | Lista de aplicaciones para el `AppGrid`. |
| `navItems`| Array | Elementos de navegación central `{ label, onClick, active }`. |
| `onSettings`| Function | Muestra un icono de configuración integrado al lado del menú de usuario. |
| `onTheme` | Function | Callback para alternar entre temas claro/oscuro. |
| `primaryColor`| String | Color de fondo de la barra y acentos. |
| `extraItems` | Array | Componentes adicionales a renderizar a la derecha. |

---

# 6. Requisitos del Backend (API)
La librería espera que el servidor responda bajo una estructura REST estándar y soporte el header `X-API-KEY`.

### Endpoints Cruciales:
- `POST /login`: Retorna JWT y data del usuario.
- `POST /register`: Crea identidad y solicita verificación.
- `POST /verify-session`: Endpoint ligero de validación rápida.
- `POST /user-context`: Retorna el contexto completo (roles, aplicaciones permitidas).
- `POST /logout_sessions`: Invalida los tokens en el servidor.

---

# 7. Estética y Experiencia (UX/UI)
La librería se enfoca en una estética **Premium** y consistente:
1.  **Consistencia Visual**: Todos los iconos de acción principal en el header tienen un tamaño estandarizado de `w-6 h-6`.
2.  **Glassmorphism**: Uso equilibrado de desenfoques y fondos limpios en menús flotantes con bordes refinados.
3.  **Micro-animaciones**: Transiciones suaves y efectos de hover sutiles que responden al color primario.
4.  **Branding Dinámico**: Soporte para carga inicial de colores corporativos con estados de carga ("Skeleton" style) y timeouts de seguridad.

---

> **Tip Pro**: Para una integración perfecta, envuelva su aplicación en un `QueryClientProvider` de React Query, ya que los hooks internos de la librería dependen de este estado global para el manejo eficiente de datos.

---

# 8. Personalización Avanzada (Opcional)
Si desea que su aplicación host utilice exactamente los mismos colores configurados en la librería para otros elementos de su interfaz, puede sincronizarlos en su configuración de Tailwind.

### Sincronización de Colores con Tailwind
Esto le permite usar clases como `bg-auth-primary` o `text-auth-primary` en cualquier lugar de su proyecto, manteniendo la coherencia visual con los componentes de Core Identity.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        auth: {
          primary: 'var(--auth-primary-color)',
          bg: 'var(--auth-bg-color)',
        }
      }
    }
  }
}
```

---

# 9. Nota sobre Tailwind CSS v4
Aunque Tailwind v4 introduce cambios significativos como la directiva `@source` para escanear `node_modules`, esta librería está optimizada para **v3**. 

Si su proyecto usa Tailwind v4, la recomendación sigue siendo la misma: **Importe el `style.css` compilado**. Esto garantiza el máximo rendimiento y evita que su proceso de build tenga que procesar de nuevo todos los estilos de la librería, aprovechando el aislamiento del prefijo `cil-`.

---

# 9. Tutorial de Configuración de Base de Datos (SeaTable)
Para que el ecosistema de Core Identity funcione correctamente, debe seguir este paso a paso para configurar su base de datos en SeaTable.

## Paso 1: Crear las Tablas Obligatorias
Cree las siguientes tablas en su Base para habilitar todas las funcionalidades:
`Identity`, `Auth Methods`, `Applications`, `Permissions`, `Roles`, `Assignments`, `Collaborators`, `Sessions`, `Customers` y `Markets`.

## Paso 2: Configurar la Tabla "Identity"
Esta tabla representa el núcleo del perfil del usuario. Cree las siguientes columnas:

| Columna | Tipo de Dato | Configuración Paso a Paso |
| :--- | :--- | :--- |
| **Identity ID** | Automático (ID) | Déjelo con el nombre predeterminado. |
| **First Name** | Texto | Ingrese el nombre/s. |
| **Last Name** | Texto | Ingrese el apellido/s. |
| **Full Name** | Fórmula | Use la fórmula: `{First Name} & " " & {Last Name}`. |
| **Status** | Single Select | Cree 3 opciones: `Active`, `Blocked`, `Duplicated`. |
| **Auth Method** | Enlace (Link) | Vincule a `Auth Methods`. En la configuración, elija `Email` como campo de visualización (Display). |
| **Collaborator ID** | Enlace (Link) | Vincule a `Collaborators`. Elija `ID` como campo de visualización (Display). |
| **Assignments** | Enlace (Link) | Vincule a `Assignments`. Elija `Assignment ID` como campo de visualización (Display). |
| **Roles** | Lookup | Apunte a la columna `Assignments` y que muestre el campo `Role Name`. |
| **Created Date** | Automático (Creado) | Fecha de registro automático. |

## Paso 3: Configurar la Tabla "Auth Methods"
Aquí se gestionan las credenciales y el tipo de acceso.

| Columna | Tipo de Dato | Configuración Paso a Paso |
| :--- | :--- | :--- |
| **ID** | Automático (ID) | Identificador del método. |
| **Identity** | Enlace (Link) | Vincule a `Identity`. Elija `Identity ID` como display. |
| **Email** | Texto | Correo electrónico principal. |
| **Auth Provider** | Single Select | Cree 3 opciones: `Microsoft`, `Google`, `Email`. |
| **Password** | Texto | Almacena el hash de la contraseña (solo para `Email`). |
| **Profile Image URL**| URL | Enlace a la foto del perfil. |
| **Token** | Texto | Para procesos de verificación o reset. |
| **Verified** | Checkbox | Márquelo si el correo fue confirmado. |
| **Last Email Sent** | Fecha | Configure precisión de "Minutos". |

## Paso 4: Configurar la Tabla "Applications"
Defina el catálogo de apps que componen su ecosistema.

| Columna | Tipo de Dato | Configuración Paso a Paso |
| :--- | :--- | :--- |
| **App Name** | Texto | Nombre público de la aplicación. |
| **Public URL** | URL | Dirección web de la app. |
| **App Key** | Texto | ID técnico único (ej: `admin_panel`). |
| **Primary Color** | Texto | Color hexadecimal de marca (ej: `#2563eb`). |
| **Background Color** | Texto | Color de fondo de marca (ej: `#f8fafc`). |

## Paso 5: Configurar la Tabla "Permissions"
Aquí definimos el acceso granular por cada recurso y acción.

| Columna | Tipo de Dato | Configuración Paso a Paso |
| :--- | :--- | :--- |
| **App Key** | Texto/Link | El identificador de la aplicación asociada. |
| **Resource Key** | Single Select | Defina los recursos (ej: `Users`, `Orders`, `Settings`). |
| **Action Key** | Single Select | Defina las acciones (ej: `Create`, `Read`, `Update`, `Delete`). |
| **Permission ID** | Fórmula | Use la fórmula: `{App Key} & "." & {Resource Key} & "." & {Action Key}`. |
| **Status** | Single Select | Cree 2 opciones: `Active`, `Inactive`. |

## Paso 6: Configurar la Tabla "Roles"
Agrupa los permisos y define el nivel de acceso a los datos.

| Columna | Tipo de Dato | Configuración Paso a Paso |
| :--- | :--- | :--- |
| **Application** | Enlace (Link) | Vincule a `Applications`. Elija `App Name` como display. |
| **Role Name** | Texto | Nombre del rol (ej: `Administrator`, `Vendor`). |
| **Role ID** | Fórmula | Use la fórmula: `LOWER({App Key} & "." & {Role Name})`. |
| **App Key** | Lookup | Apunte a `Application` y traiga el campo `App Key`. |
| **Permissions** | Enlace (Link) | Vincule a la tabla `Permissions`. |
| **Assignments** | Enlace (Link) | Vincule a `Assignments`. Elija `Assignment ID` como display. |
| **Data** | Single Select | Opciones: `all`, `team`, `own`. |

## Paso 7: Configurar la Tabla "Assignments"
Vincula a los usuarios con sus roles, aplicaciones y alcances específicos.

| Columna | Tipo de Dato | Configuración Paso a Paso |
| :--- | :--- | :--- |
| **Assignment ID** | Automático (ID) | Identificador único de la asignación. |
| **Identity** | Enlace (Link) | Vincule a `Identity`. Elija `Identity ID` como display. |
| **Role** | Enlace (Link) | Vincule a `Roles`. |
| **App Key** | Lookup | Apunte a `Role` y traiga el campo `App Key`. |
| **Data** | Lookup | Apunte a `Role` y traiga el campo `Data`. |
| **Customers** | Enlace (Link) | Vincule a la tabla `Customers`. |
| **Markets** | Enlace (Link) | Vincule a la tabla `Markets`. |
| **Status** | Single Select | Cree 2 opciones: `Active`, `Inactive`. |

## Paso 8: Configurar la Tabla "Collaborators"
Registro de personal interno y jerarquía básica.

| Columna | Tipo de Dato | Configuración Paso a Paso |
| :--- | :--- | :--- |
| **ID** | Automático (ID) | Identificador único del colaborador. |
| **Email Address** | Email | Correo electrónico principal del colaborador. |
| **Manager Email** | Email | Correo electrónico del superior inmediato. |

## Paso 9: Configurar la Tabla "Sessions"
Control de seguridad y vigencia de los accesos activos.

| Columna | Tipo de Dato | Configuración Paso a Paso |
| :--- | :--- | :--- |
| **Token** | Texto | El token JWT o identificador de sesión. |
| **Auth Method** | Enlace (Link) | Vincule a `Auth Methods`. Elija `ID` como display. |
| **Identity Status** | Lookup | Apunte a la columna `Auth Method` y obtenga el campo `Status` de la tabla `Identity`. |
| **Last LogIn** | Automático (Creado) | Fecha y hora exacta del inicio de sesión. |
| **Expiration Date** | Fecha | Configure precisión de "Minutos". |
| **Status** | Single Select | Cree 2 opciones: `Active`, `Expired`. |
| **Device Name** | Texto | Nombre o tipo de dispositivo detectado. |
| **IP** | Texto | Dirección IP desde donde se conectó. |

## Paso 10: Configurar la Tabla "Customers"
Catálogo de clientes autorizados en el sistema.

| Columna | Tipo de Dato | Configuración Paso a Paso |
| :--- | :--- | :--- |
| **Name** | Texto | Nombre oficial de la empresa o cliente. |

## Paso 11: Configurar la Tabla "Markets"
Definición de mercados o regiones de operación.

| Columna | Tipo de Dato | Configuración Paso a Paso |
| :--- | :--- | :--- |
| **Name** | Texto | Nombre de la región o mercado (ej: `LATAM`, `Europe`). |

---

# 10. Configuración de Servicio de Correo (Microsoft Graph API)
Para que la librería pueda enviar notificaciones (verificación de email, recuperación de contraseña, etc.) de forma segura, se recomienda el uso de Microsoft Graph API. Siga este tutorial para configurar el acceso y limitar el alcance de envío.

## 10.1 Registro en Microsoft Entra ID (Azure AD)
1.  **Registro de Aplicación**: En el portal de Azure, cree un nuevo "App Registration".
2.  **Obtener Credenciales**: Copie el `Directory (tenant) ID` y el `Application (client) ID`.
3.  **Secretos**: En "Certificates & secrets", cree un nuevo `Client Secret` y guarde el **Value** (no el ID del secreto).
4.  **Permisos de API**:
    *   Vaya a "API permissions" -> "Add a permission".
    *   Seleccione **Microsoft Graph** -> **Application permissions**.
    *   Busque y añada `Mail.Send`.
    *   **Importante**: Haga clic en "Grant admin consent for [Nombre de su organización]".

## 10.2 Limitación de Seguridad (PowerShell)
Por defecto, el permiso `Mail.Send` permite a la aplicación enviar correos desde **cualquier** cuenta de la organización. Para limitar esto a una sola cuenta o grupo específico (ej: `noreply@tudominio.com`), debe ejecutar una política de acceso en Exchange Online.

### Requisito:
Tener instalado el módulo de PowerShell: `Install-Module -Name ExchangeOnlineManagement`.

### Proceso:
1.  **Conexión**:
    ```powershell
    Connect-ExchangeOnline
    ```
2.  **Creación de la Política**:
    Ejecute el siguiente comando reemplazando los valores correspondientes:
    ```powershell
    New-ApplicationAccessPolicy -AppId "SU_CLIENT_ID" -PolicyScopeGroupId "correo_permitido@tudominio.com" -AccessRight RestrictAccess -Description "Limitar el envío de correos al remitente oficial de Core Identity"
    ```
3.  **Verificación**:
    ```powershell
    Test-ApplicationAccessPolicy -Identity "correo_permitido@tudominio.com" -AppId "SU_CLIENT_ID"
    ```
    *Debería retornar `AccessCheckResult: Granted`.*

---

---

# 11. Referencia de Exportaciones (API Reference)
Esta sección detalla todos los elementos que puede importar de la librería y cómo utilizarlos.

## 11.1 Componentes de Interfaz
Importación: `import { ComponentName } from 'core-identity-library';`

#### `Login`
Formulario de acceso principal.
- **Props Obligatorias**: `apiBaseUrl` (String), `apiToken` (String).
- **Props Opcionales**: 
    - `onSuccess(data)`: Callback al loguear con éxito.
    - `onNavigate(page)`: Control de navegación interna (`'signup'`, `'forgot-password'`).
    - `primaryColor`, `backgroundColor`, `lang`, `texts`.

#### `SignUp`
Formulario de registro de nuevos usuarios.
- **Props Obligatorias**: `apiBaseUrl` (String), `apiToken` (String).
- **Props Opcionales**: `onSuccess`, `onNavigate`, `primaryColor`, `lang`.

#### `AppGrid`
Selector de aplicaciones (estilo Google Apps).
- **Props Obligatorias**: `apps` (Array de objetos con `appName`, `appKey`, `publicUrl`).
- **Props Opcionales**: `customLabels`, `primaryColor`, `onAppClick`.

#### `UserMenu`
Menú desplegable de perfil de usuario.
- **Props Obligatorias**: `user` (Object con `fullName` y `email`).
- **Props Opcionales**: `onLogout`, `onChangePassword`, `extraItems` (Array de `{ icon, label, onClick }`).

#### `ForgotPassword` & `ResetPassword`
Gestión de recuperación de cuenta.
- **Props Obligatorias**: `apiBaseUrl` (String), `apiToken` (String).
- **Props Opcionales**: `onNavigate`.

#### `ChangePassword`
Formulario seguro para cambiar la contraseña actual del usuario.
- **Props Obligatorias**: `apiBaseUrl` (String), `apiToken` (String).
- **Props Opcionales**: `onSuccess`, `onError`, `primaryColor`, `backgroundColor`, `lang`.

#### `UserProfile`
Ficha detallada del perfil de usuario y centro de seguridad.
- **Props Obligatorias**: 
    - `user`: Object con `fullName`, `Roles`, `permissions`, `active_sessions` y opcionalmente `profileImageURL`.
    - `authToken`: Token de sesión del usuario (necesario para gestionar sesiones).
    - `apiBaseUrl`: URL base de la infraestructura.
    - `apiToken`: X-API-KEY para autorización de red.
- **Props Opcionales**: `primaryColor`, `backgroundColor`, `onClose`, `onNavigate`, `lang`, `onSuccess`, `onError`.

---

## 11.2 Hooks de Lógica (Custom Hooks)
Utilícelos para integrar la lógica de la librería en sus propios componentes.

#### `useAuthApi(apiBaseUrl, apiToken)`
Este hook es el corazón de la comunicación con el backend. Además de métodos genéricos, incluye funciones pre-mapeadas para la gestión de identidad.

- **Métodos Genéricos**:
    - `get(url)`: Petición GET con X-API-KEY.
    - `post(url, body)`: Petición POST con X-API-KEY.

- **Métodos de Identidad y Branding**:
    - `getAppColors()`: Consulta los colores corporativos (`primaryColor`, `backgroundColor`) configurados para la instancia.
    - `verifySession(token, email)`: Valida si un token de sesión sigue siendo válido.
    - `getUserContext(token, email)`: Trae la "Sesión Completa" (Datos del usuario, Roles, Aplicaciones permitidas y Permisos granulares).
    - `logout(token, email)`: Invalida la sesión actual en el servidor.
    - `changePassword({ oldPassword, newPassword, token })`: Permite el cambio de contraseña dentro de una sesión activa.

- **Uso**: 
  ```javascript
  const { getUserContext, verifySession } = useAuthApi(apiBaseUrl, apiToken);
  ```

#### `useSecurity(apiToken)`
Verifica si el token proporcionado es válido para habilitar los componentes.
- **Retorna**: `{ isAuthorized, apiToken }`.

---

## 11.3 Ejemplo de Implementación Maestro
Aquí se muestra cómo configurar el entorno global y usar los componentes principales:

```jsx
import { Login, UserMenu, AppGrid } from 'core-identity-library';
import 'core-identity-library/style.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const apiToken = "mi_llave_secreta_aqui";
  const user = { fullName: "Juan Perez", email: "juan@empresa.com" };
  const apps = [
    { appName: "Portal Ventas", appKey: "sales", publicUrl: "https://vendas.com" }
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <nav className="flex justify-between p-4 bg-white shadow">
        <AppGrid apps={apps} primaryColor="#0055ff" />
        <UserMenu user={user} onLogout={() => console.log('Saliendo...')} />
      </nav>
      
      <main className="flex justify-center mt-10">
        <Login 
          apiBaseUrl="https://api.identidad.com" 
          apiToken={apiToken}
          primaryColor="#0055ff" 
        />
      </main>
    </QueryClientProvider>
  );
}
```

---

---

# 12. Ciclo de Vida y Optimización de Sesiones
Para garantizar una experiencia de usuario fluida y evitar sobrecargar el servidor, siga estas recomendaciones al integrar la librería.

## 12.1 Estrategia de Carga de Datos
La librería proporciona dos métodos principales para validar al usuario: `verifySession` (rápido) y `getUserContext` (completo).

### A. Al recargar la página (F5)
Cuando la aplicación se inicializa por completo, **solo debe llamar a `getUserContext`**.
*   **Razón**: Necesita reconstruir todo el estado de la aplicación (permisos, aplicaciones disponibles, roles). Llamar a `verifySession` primero es una petición redundante, ya que `getUserContext` fallará automáticamente si la sesión no es válida.

### B. Durante la navegación activa
Para verificaciones de seguridad "silenciosas" (por ejemplo, cada 5 minutos o al cambiar de ruta interna):
*   **Use `verifySession`**: Es mucho más rápido ya que solo confirma la validez del token sin procesar roles o permisos complejos.

## 12.2 Post-Login (Evitar Redundancia)
Cuando un usuario completa el formulario de `Login` con éxito:
*   **No llame a `getUserContext` inmediatamente**: La respuesta del endpoint `/login` ya incluye el objeto de sesión completo (Data del usuario, Roles, Aplicaciones y Permisos).
*   **Acción**: Utilice directamente la respuesta del callback `onSuccess` para llenar su estado global.

---

---

# 14. Filosofía de Operación: El Mensajero Seguro
**IMPORTANTE:** Es fundamental entender que la librería actúa como una **capa de transporte y seguridad** entre la aplicación principal (Host) y el Backend de Identidad.

## 14.1 ¿De qué se encarga la Librería?
La librería tiene la responsabilidad total de:
1.  **Mapear los Endpoints**: Gestiona todas las rutas críticas (`/login`, `/register`, `/verify-session`, `/user-context`, `/logout`, `/change-password`).
2.  **Seguridad Automática**: Inyecta el header `X-API-KEY` y maneja las credenciales (`cookies`) en cada petición.
3.  **Normalización de Errores**: Transforma los errores del servidor en mensajes legibles y tipos de error manejables (ej: errores de conexión vs errores de validación).

## 14.2 Entrega de Datos a la App Principal
La librería **no guarda permanentemente los datos**. Su función es obtenerlos y entregarlos a la aplicación principal inmediatamente para que esta decida cómo persistirlos:

*   **Vía Componentes**: A través del callback `onSuccess(data)`, la librería entrega el JSON completo (incluyendo el Token JWT y el contexto de usuario).
*   **Vía Hooks**: El hook `useAuthApi` retorna directamente la promesa con los datos procesados por la API.

> **Regla de Oro**: Si la API del backend se actualiza para retornar un nuevo campo (ej: `user.preferences`), este campo estará disponible automáticamente en el objeto `data` que la librería entrega a la aplicación principal, sin necesidad de actualizar la librería.

---

### 💡 Nota Final de Integración
Recuerde que la librería está diseñada para ser el "front-end" de su sistema de identidad. La lógica de persistencia del token (localStorage, cookies, session) queda a discreción del desarrollador host para integrarse mejor con su arquitectura de estado (Redux, Context, Zustand, etc.).

---

# 13. Estructura de Respuesta de la API (Referencia de Datos)
Para facilitar la integración, a continuación se detalla la estructura de los objetos JSON que la librería espera y procesa desde el backend.

## 13.1 Respuesta de Login / User Context
Este objeto contiene el "Contexto Completo" del usuario. Se recibe al iniciar sesión con éxito o al consultar `/user-context`.

```json
{
  "message": "User context retrieved",
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "handshake_code": "eyJl...",
  "user": {
    "Assignments": [
      {
        "Data": { "own": {} },
        "Role": [
          {
            "Role ID": "vendor_portal.vendor",
            "Role Name": "Vendor"
          }
        ],
        "Status": "Active"
      },
      {
        "Data": { "own": {} },
        "Role": [
          {
            "Role ID": "epr_crm.account_executive",
            "Role Name": "Account Executive"
          }
        ],
        "Status": "Active"
      },
      {
        "Data": {
          "assigned": {
            "Customers": ["Samsung"],
            "Markets": ["Costa Rica", "Ecuador", "El Salvador"]
          }
        },
        "Role": [
          {
            "Role ID": "insights.user",
            "Role Name": "User"
          }
        ],
        "Status": "Active"
      }
    ],
    "Auth Method": [
      {
        "display_value": "usuario@ejemplo.com",
        "row_id": "aK_QVJ99SrauID3lvk4gLA"
      }
    ],
    "Created Date": "2026-01-09T20:40:23.184-05:00",
    "First Name": "Nombre",
    "Last Name": "Apellido",
    "Full Name": "Nombre Apellido",
    "Identity ID": "00083",
    "Roles": [
      "vendor_portal.vendor",
      "epr_crm.account_executive",
      "insights.user"
    ],
    "Status": "Active",
    "Vendor ID": [],
    "_archived": false,
    "_creator": "core-identity",
    "_id": "Jxu0nOStRmu4BOWh3EPx-g",
    "_mtime": "2026-01-14T19:08:49.273-05:00",
    "appKey": "vendor_portal",
    "apps": [
      {
        "appKey": "insights",
        "appName": "Prism Insights",
        "publicUrl": "https://insights.prismgrp.com"
      },
      {
        "appKey": "vendor_portal",
        "appName": "Vendor Portal",
        "publicUrl": "https://vendors.prismgrp.com"
      }
    ],
    "auth_method_custom_id": "00101",
    "auth_method_id": "aK_QVJ99SrauID3lvk4gLA",
    "collaborator_info": [],
    "dataMode": "own",
    "dataModeInfo": {
      "mode": "own",
      "roles": [
        {
          "Role ID": "vendor_portal.vendor",
          "Role Name": "Vendor"
        }
      ]
    },
    "email": "usuario@ejemplo.com",
    "permissions": [
      {
        "Action Key": "view",
        "Permission ID": "vendor_portal.vendor_profile.view"
      },
      {
        "Action Key": "create",
        "Permission ID": "vendor_portal.bill.create"
      }
    ],
    "app_info": {
      "appName": "Prism Insights",
      "backgroundColor": "#ffffff",
      "primaryColor": "#2563eb"
    }
  }
}
```

## 14.2 Respuesta de `verifySession`
Este objeto es una respuesta ligera que solo confirma la validez de la sesión.

```json
{
  "success": true,
  "message": "Sesión válida",
  "identity_id": "Jxu0nOStRmu4BOWh3EPx-g",
  "email": "usuario@ejemplo.com",
  "token": "eyJhbGciOi...",
  "handshake_code": "eyJl..."
}
```

## 13.3 Control de Flujo (redirect_url)
La librería utiliza el campo `redirect_url` del backend para determinar si el usuario debe ser enviado a una pantalla de espera o verificación.

### A. Registro / Espera de Confirmación
Cuando un usuario se registra o intenta loguearse pero requiere validación manual o de email, el backend debe responder con:

```json
{
  "success": true,
  "message": "Hemos enviado un código a su correo",
  "redirect_url": "/waiting-confirmation",
  "wait_seconds": 300,
  "user": {
    "email": "usuario@ejemplo.com"
  }
}
```

---

# 14. Arquitectura de Componentes: El "Flat User Object"
Para garantizar la máxima compatibilidad y simplicidad, todos los componentes visuales de la librería (como `Header`, `UserMenu`, `UserProfile` y `AppGrid`) operan bajo un **Patrón de Objeto Plano**.

### 14.1 ¿Qué es un Objeto Plano?
Los componentes esperan recibir la información del usuario directamente en la raíz del objeto prop `user`. No deben estar envueltos en claves adicionales.

*   **✅ BIEN (Objeto Plano):**
    ```javascript
    {
      "email": "tasama@prism.com",
      "Full Name": "Anderson Tasama",
      "Roles": ["admin"],
      "active_sessions": [...]
    }
    ```
*   **❌ MAL (Objeto Anidado):**
    ```javascript
    {
      "success": true,
      "user": {
        "email": "tasama@prism.com",
        "Full Name": "Anderson Tasama"
      }
    }
    ```

### 14.2 Normalización de Datos
Si su API devuelve la estructura anidada (Pattern ❌ MAL), debe aplanarla antes de pasarla al prop `user` de los componentes.

```jsx
// Ejemplo de normalización rápida
const userData = apiResponse.user || apiResponse;
<Header user={userData} />
```

> **Tip Pro:** El hook `useUserProfile` incluido en la librería realiza esta normalización automáticamente. Si utiliza este hook para cargar el perfil, no necesita preocuparse por la estructura de la respuesta.

---

# 15. Troubleshooting: Errores Comunes de Integración

### 14.1 TypeError: Cannot read properties of undefined (reading 'expired_at')
**Causa:** El desarrollador intenta leer datos de sesión (JWT) en el callback `onSuccess` inmediatamente después de un registro.
**Solución:** El registro exitoso NO devuelve una sesión activa. Siempre valide la existencia del objeto de sesión antes de procesarlo:

```javascript
const handleSuccess = (data) => {
  if (data.user && data.token) {
    // Procesar login normal
  } else if (data.redirect_url) {
    // Es un registro o espera, no hay token aún
    console.log("Navegando a:", data.redirect_url);
  }
};
```

---

# 15. Handshake & Seguridad Cross-API (Tutorial para APIs)
Este apartado describe la lógica de **Handshake Stateless** requerida para la comunicación segura entre la Aplicación y sus APIs secundarias autorizadas.

## 15.1 El Concepto de Handshake
El `handshake_code` es un token de corta duración (60 segundos) y un solo uso que actúa como prueba de vida de una sesión activa. Permite que una API secundaria valide la identidad de un usuario sin tener que manejar JWTs complejos ni consultar la base de datos central.

## 2. Inserción del Campo
El campo `handshake_code` debe ser devuelto a **nivel de raíz** (root level) del JSON en los siguientes endpoints:
- `POST /api/auth/login`
- `POST /api/auth/verify-session`
- `GET /api/auth/user-context`
- Callback de **Google** y **Microsoft** (en el objeto `authData`).

## 15.3 Validación (Cross-API)
Para validar este código, cualquier sistema secundario autorizado debe realizar una petición al servidor de identidad. 

**IMPORTANTE:** Al igual que el frontend, las APIs secundarias **DEBEN** incluir el encabezado `X-API-KEY` con su token autorizado para que el servidor procese la validación del handshake.

- **Endpoint:** `POST /api/auth/validate-handshake`
- **Headers:** 
  - `Content-Type: application/json`
  - `X-API-KEY: SU_TOKEN_AUTORIZADO`
- **Payload:** `{ "code": "VALOR_DEL_HANDSHAKE" }`
- **Respuesta Exitosa:**
  ```json
  {
    "success": true,
    "valid": true,
    "email": "usuario@email.com"
  }
  ```

---

### 💡 Nota Final de Integración
Recuerde que la librería está diseñada para ser el "front-end" de su sistema de identidad. La lógica de persistencia del token (localStorage, cookies, session) queda a discreción del desarrollador host para integrarse mejor con su arquitectura de estado (Redux, Context, Zustand, etc.).
