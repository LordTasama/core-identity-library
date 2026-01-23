/**
 * Componente: Login
 * Objetivo: Gestionar la autenticación de usuarios mediante correo y contraseña.
 * Descripción: Proporciona la interfaz de inicio de sesión, integrando botones de autenticación social y validando las credenciales con la API.
 */
import { useState } from 'react';
import SocialAuthButtons from './SocialAuthButtons';
import { translations } from '../translations';
import { useSecurity } from '../hooks/useSecurity';
import { useAuthApi } from '../hooks/useAuthApi';
import { useAppInfo } from '../hooks/useAppInfo';
import AuthError from './AuthError';
import FormError from './FormError';

export default function Login({
    apiBaseUrl,
    user = {},
    primaryColor: propPrimaryColor = '#3b82f6',
    backgroundColor: propBackgroundColor = '#ffffff',
    onSuccess,
    onError,
    onNavigate,
    apiToken,
    lang = 'en',
    texts: customTexts = {}
}) {
    const t = { ...translations[lang], ...customTexts };
    const { isAuthorized } = useSecurity(apiToken);
    const { primaryColor, backgroundColor, isLoading: isAppInfoLoading } = useAppInfo(apiBaseUrl, apiToken, user, propPrimaryColor, propBackgroundColor);
    const { post } = useAuthApi(apiBaseUrl, apiToken);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [localError, setLocalError] = useState('');


    if (isAppInfoLoading) return null;

    if (!isAuthorized) {
        return <AuthError lang={lang} />;
    }

    const handleLoginSuccess = (data) => {
        if (onSuccess) {
            onSuccess(data);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setLocalError('');

        try {
            const data = await post('/login', {
                provider: 'Email',
                email,
                password
            });

            if (data.success) {
                handleLoginSuccess({ ...data, email });
            } else {
                const errorMsg = data.message || data.error || t.unknownError;
                setLocalError(errorMsg);
                if (onError) onError(errorMsg);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('⚠️ Login Error:', error);
            let errorMsg = error.message;

            if (error.isConnectionError) {
                errorMsg = t.connectionError;
            } else if (error.status >= 500) {
                errorMsg = t.serverError;
            } else if (!errorMsg || errorMsg === 'Error ' + error.status) {
                errorMsg = t.unknownError;
            }

            setLocalError(errorMsg);
            if (onError) onError(errorMsg);
            setIsLoading(false);
        }
    };

    const primaryButtonStyle = {
        backgroundColor: primaryColor,
        color: '#ffffff'
    };

    const cardStyle = {
        backgroundColor: backgroundColor
    };

    const primaryTextStyle = {
        color: primaryColor
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border" style={cardStyle}>
            <div className="space-y-1 mb-6">
                <h2 className="text-2xl font-semibold">{t.login}</h2>
                <p className="text-sm text-gray-500">{t.loginSubtitle}</p>
            </div>

            <div className="space-y-4">
                <SocialAuthButtons
                    apiBaseUrl={apiBaseUrl}
                    user={user}
                    primaryColor={primaryColor}
                    onSuccess={handleLoginSuccess}
                    onError={(err) => {
                        setLocalError(err);
                        if (onError) onError(err);
                    }}
                    lang={lang}
                    apiToken={apiToken}
                    texts={customTexts}
                />

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="px-2 text-gray-500" style={cardStyle}>
                            {t.or}
                        </span>
                    </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <FormError message={localError} />

                    <div className="space-y-2">
                        <label htmlFor="auth-email" className="text-sm font-medium leading-none">
                            {t.email}
                        </label>
                        <input
                            id="auth-email"
                            type="email"
                            placeholder="user@example.com"
                            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (localError) setLocalError('');
                            }}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="auth-password" className="text-sm font-medium leading-none">
                            {t.password}
                        </label>
                        <input
                            id="auth-password"
                            type="password"
                            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (localError) setLocalError('');
                            }}
                            required
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => onNavigate && onNavigate('forgot-password')}
                            className="text-sm hover:underline"
                            style={primaryTextStyle}
                        >
                            {t.forgotPassword}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"
                        style={primaryButtonStyle}
                        disabled={isLoading}
                    >
                        {isLoading ? t.loading : t.loginButton}
                    </button>
                </form>
            </div>

            <div className="mt-6 flex justify-center">
                <p className="text-sm text-gray-500">
                    {t.dontHaveAccount}{' '}
                    <button
                        type="button"
                        onClick={() => onNavigate && onNavigate('signup')}
                        className="font-medium hover:underline"
                        style={primaryTextStyle}
                    >
                        {t.signUp}
                    </button>
                </p>
            </div>
        </div>
    );
}
