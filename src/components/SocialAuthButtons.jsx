/**
 * Componente: SocialAuthButtons
 * Objetivo: Facilitar la autenticación mediante proveedores externos (Google, Microsoft).
 * Descripción: Renderiza botones para inicio de sesión social y maneja la comunicación vía ventanas emergentes (popups) con los proveedores de OAuth.
 */
import { useEffect } from 'react';
import { SiGoogle } from 'react-icons/si';
import { translations } from '../translations';
import { useAuthApi } from '../hooks/useAuthApi';

export default function SocialAuthButtons({
    apiBaseUrl,
    user = {},
    primaryColor: propPrimaryColor = '#3b82f6',
    onSuccess,
    onError,
    lang = 'en',
    apiToken,
    texts: customTexts = {}
}) {
    const t = { ...translations[lang], ...customTexts };
    const { post } = useAuthApi(apiBaseUrl, apiToken);

    // Color Priority: user.app_info > stage context
    const primaryColor = user.app_info?.primaryColor || propPrimaryColor;

    useEffect(() => {
        const handleMessage = (event) => {
            // Get origins for validation
            let apiOrigin;
            let apiBaseDomain;
            try {
                const url = new URL(apiBaseUrl);
                apiOrigin = url.origin;
                const parts = url.hostname.split('.');
                if (parts.length >= 2) {
                    apiBaseDomain = parts.slice(-2).join('.');
                }
            } catch (e) { }

            // Allow messages from same origin, exact API origin, or any subdomain of the API base domain
            const isFromAllowedDomain = (apiBaseDomain && event.origin.endsWith(apiBaseDomain)) || (apiOrigin && event.origin === apiOrigin);
            const isAllowedOrigin = event.origin === window.location.origin || isFromAllowedDomain;

            if (!isAllowedOrigin) return;

            if (event.data.type === "OAUTH_SUCCESS") {
                const { token, handshake_code, user } = event.data.payload;
                console.log("OAuth Login Successful:", user);

                if (onSuccess) {
                    onSuccess({
                        success: true,
                        token,
                        handshake_code,
                        user,
                        email: user?.email, // Ensure compatibility with existing success handlers
                        provider: 'Social'
                    });
                }
            } else if (event.data.type === "OAUTH_ERROR") {
                const { message, apps } = event.data.payload;
                console.error("OAuth Login Error:", message);

                if (onError) {
                    onError(message, apps);
                }
            }
        };

        window.addEventListener("message", handleMessage, false);
        return () => window.removeEventListener("message", handleMessage);
    }, [onSuccess, onError, apiBaseUrl]);

    const handleSocialLogin = (provider) => {
        // We explicitly send frontend_origin to help backend construction of postMessage target origin
        post('/login', {
            provider: provider,
            frontend_origin: window.location.origin
        })
            .then(data => {
                const authUrl = data.auth_url || data.redirect_url;
                if (authUrl) {
                    const width = 600;
                    const height = 700;
                    const left = window.screen.width / 2 - width / 2;
                    const top = window.screen.height / 2 - height / 2;

                    window.open(
                        authUrl,
                        "login_popup",
                        `width=${width},height=${height},left=${left},top=${top},status=no,resizable=yes,scrollbars=yes`
                    );
                } else {
                    const errorMsg = data.error || data.message || (lang === 'es' ? 'Error al iniciar sesión social' : 'Social login error');
                    if (onError) onError(errorMsg);
                }
            })
            .catch(err => {
                console.error('⚠️ Social Auth Error:', err);
                if (onError) onError(err.message || 'Error');
            });
    };

    const buttonStyle = primaryColor ? { borderColor: primaryColor, color: primaryColor } : {};

    return (
        <div className="space-y-3">
            <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
                style={buttonStyle}
                onClick={() => handleSocialLogin('Google')}
                data-testid="button-google-login"
            >
                <SiGoogle className="h-4 w-4" />
                <span>{t.continueWith} Google</span>
            </button>
            <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
                style={buttonStyle}
                onClick={() => handleSocialLogin('Microsoft')}
                data-testid="button-microsoft-login"
            >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
                </svg>
                <span>{t.continueWith} Microsoft</span>
            </button>
        </div>
    );
}
