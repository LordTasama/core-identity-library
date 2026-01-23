# 🔐 Core Identity Library

**Componentes de Autenticación y Navegación Premium para React**

Core Identity Library es una solución "plug-and-play" diseñada para acelerar el desarrollo de flujos de identidad y ecosistemas de aplicaciones. Ofrece componentes visualmente impresionantes, totalmente responsivos y **compatible con cualquier framework CSS** (Bootstrap, Material-UI, Tailwind, o CSS vanilla).

---

## 🚀 Instalación

```bash
# Instalación de la librería y todas sus dependencias
npm install core-identity-library react react-dom @tanstack/react-query lucide-react react-icons
```

> **✅ Sin conflictos de estilos:** Esta librería usa clases CSS con prefijo `cil-` y viene con estilos pre-compilados. **NO necesitas instalar Tailwind CSS** en tu proyecto. Funciona perfectamente junto a Bootstrap, Material-UI, o cualquier otro framework CSS sin interferencias.

📘 **¿Usas Bootstrap, Material-UI u otro framework?** Ver [Guía de Integración](./INTEGRATION_GUIDE.md) para ejemplos específicos.

---

## 🔑 Configuración de Seguridad

Para habilitar los componentes, añade tu token de autorización en el archivo `.env`:

```env
VITE_API_TOKEN=tu_token_de_autorizacion_prism
```

---

## 🧱 Componentes Incluidos

La librería ofrece dos categorías principales de componentes:

### 1. Flujo de Autenticación
- **`Login`**: Soporte para password y OAuth (Google, Microsoft).
- **`SignUp`**: Registro con validaciones premium.
- **`ForgotPassword` / `ResetPassword`**: Flujo completo de recuperación.
- **`EmailVerification` / `WaitingConfirmation`**: Feedback de estado de cuenta.

### 2. Navegación y Ecosistema (Premium)
- **`AppGrid`**: Selector de aplicaciones con efecto Glassmorphism y generación de avatares automática.
- **`UserMenu`**: Menú de perfil extensible con gestión de identidad.

---

## 📖 Uso Básico

### Autenticación
```jsx
import { Login } from 'core-identity-library';
import 'core-identity-library/style.css';

<Login 
  apiBaseUrl="https://api.tu-dominio.com/auth"
  onSuccess={(data) => console.log(data)}
  primaryColor="#0ea5e9"
/>
```

### Barra de Navegación
```jsx
import { UserMenu, AppGrid } from 'core-identity-library';

<div className="navbar">
  <AppGrid apps={userApps} />
  <UserMenu user={currentUser} onLogout={doLogout} />
</div>
```

---

## 🎨 Estética e Integración
- **Tipografía**: La librería hereda automáticamente la fuente de tu sitio. No necesitas configurar tipografías adicionales.
- **Personalización**: Usa la prop `primaryColor` para alinear todos los componentes con tu marca rápidamente.
- **Efectos**: Incluye desenfoques de fondo (glassmorphism) y micro-animaciones CSS para una sensación "High-End".

---

## 🔒 Aislamiento de Estilos

### ¿Por qué no hay conflictos con otros frameworks?

Esta librería utiliza un enfoque de **aislamiento completo de estilos**:

1. **Prefijo único (`cil-`)**: Todas las clases CSS están prefijadas con `cil-` (Core Identity Library)
   ```jsx
   // Ejemplo: las clases internas son como:
   <div className="cil-flex cil-items-center cil-justify-between">
   ```

2. **CSS Pre-compilado**: Los estilos ya vienen generados en `dist/style.css`, no se generan en tiempo de ejecución

3. **Sin dependencias de build**: Tu proyecto NO necesita:
   - ❌ Tailwind CSS
   - ❌ PostCSS
   - ❌ Autoprefixer
   - ✅ Solo importar: `import 'core-identity-library/style.css'`

4. **Compatible con cualquier framework**:
   - ✅ Bootstrap
   - ✅ Material-UI
   - ✅ Ant Design
   - ✅ Chakra UI
   - ✅ CSS Vanilla
   - ✅ Styled Components

### Ejemplo de Integración

```jsx
// En tu proyecto con Bootstrap, Material-UI, o lo que sea:
import { Login } from 'core-identity-library';
import 'core-identity-library/style.css'; // ← Solo esto
import 'bootstrap/dist/css/bootstrap.min.css'; // ← Sin conflictos

function App() {
  return (
    <div className="container"> {/* Bootstrap */}
      <Login apiBaseUrl="..." /> {/* Core Identity - estilos aislados */}
    </div>
  );
}
```

---

## 📝 Documentación Completa
Para una referencia técnica exhaustiva de todas las Props y flujos lógicos, consulta:
👉 [CORE_IDENTITY_LIBRARY_DOCS.md](./CORE_IDENTITY_LIBRARY_DOCS.md)

---

## 🛠️ Soporte
Desarrollado y mantenido por **Prism Group**.
MIT License.
