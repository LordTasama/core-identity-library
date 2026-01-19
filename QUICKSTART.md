# ⚡ Guía de Inicio Rápida

Esta guía te ayudará a integrar **Core Identity Library** en tu proyecto en menos de 5 minutos.

## 1. Instalación

```bash
npm install core-identity-library lucide-react react-icons @tanstack/react-query
```

## 2. Configuración del Token (OBLIGATORIO)

Crea un archivo `.env` en la raíz de tu proyecto e inserta tu token de autorización. Este paso es fundamental para habilitar los componentes.

```env
# .env
VITE_API_TOKEN=tu_token_aqui
```

## 3. Implementación de Autenticación

En tu página de login:

```jsx
import { Login } from 'core-identity-library';
import 'core-identity-library/style.css';

function LoginPage() {
  const handleSuccess = (data) => {
    localStorage.setItem('token', data.token);
    window.location.href = '/dashboard';
  };

  return (
    <Login 
      apiBaseUrl="https://api.tudominio.com/auth"
      onSuccess={handleSuccess}
      primaryColor="#2563eb"
    />
  );
}
```

## 4. Implementación de Navegación (Navbar)

Puedes usar los nuevos componentes de menú y grid de aplicaciones en tu barra de navegación:

```jsx
import { UserMenu, AppGrid } from 'core-identity-library';

function Navbar({ user, apps }) {
  return (
    <nav className="flex justify-between p-4">
      <div className="logo">Mi App</div>
      <div className="flex gap-4">
        <AppGrid apps={apps} />
        <UserMenu 
          user={user} 
          onLogout={() => console.log('Logout')}
        />
      </div>
    </nav>
  );
}
```

## 5. Tipografía y Estilos
La librería heredará automáticamente la fuente que elijas para tu proyecto. Solo asegúrate de tener Tailwind CSS configurado.

---

¿Necesitas más detalles? Revisa la [Guía Completa](./CORE_IDENTITY_LIBRARY_DOCS.md).
