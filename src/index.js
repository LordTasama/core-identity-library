/**
 * Archivo Principal: index.js
 * Objetivo: Exportar todos los componentes, hooks y utilidades de la librería para su uso externo.
 * Descripción: Punto de entrada de la librería Core Identity, facilitando la importación de las herramientas de autenticación y gestión de usuario.
 */
import './styles/identity-layer.css';
export { default as Login } from './components/Login';
export { default as SignUp } from './components/SignUp';
export { default as ForgotPassword } from './components/ForgotPassword';
export { default as ResetPassword } from './components/ResetPassword';
export { default as ChangePassword } from './components/ChangePassword';
export { default as EmailVerification } from './components/EmailVerification';
export { default as WaitingConfirmation } from './components/WaitingConfirmation';
export { default as SocialAuthButtons } from './components/SocialAuthButtons';
export { useAuthApi } from './hooks/useAuthApi';
export { useSecurity } from './hooks/useSecurity';
export { useUserProfile } from './hooks/useUserProfile';
export { default as AuthError } from './components/AuthError';
export { default as AppGrid } from './components/AppGrid';
export { default as UserMenu } from './components/UserMenu';
export { default as Header } from './components/Header';
export { default as LanguageSwitcher } from './components/LanguageSwitcher';
export { default as UserProfile } from './components/UserProfile';
export { default as LoadingSpinner } from './components/LoadingSpinner';
export { translations } from './translations';

export { isValidUrl, getValidProfileImageUrl } from './utils/urlValidation';
