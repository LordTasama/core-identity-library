# 🔐 Core Identity Library

**Componentes de Autenticación y Navegación Premium para React + Tailwind CSS**

Core Identity Library es una solución "plug-and-play" diseñada para acelerar el desarrollo de flujos de identidad y ecosistemas de aplicaciones. Ofrece componentes visualmente impresionantes, totalmente responsivos y herencia de estilos inteligente.

---

## 🚀 Instalación

```bash
# Instalación de la librería y dependencias necesarias
npm install core-identity-library lucide-react react-icons @tanstack/react-query
```

> **Nota:** Requiere `tailwindcss` v3.0+ configurado en tu proyecto.

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

## 📝 Documentación Completa
Para una referencia técnica exhaustiva de todas las Props y flujos lógicos, consulta:
👉 [CORE_IDENTITY_LIBRARY_DOCS.md](./CORE_IDENTITY_LIBRARY_DOCS.md)

---

## 🛠️ Soporte
Desarrollado y mantenido por **Prism Group**.
MIT License.
