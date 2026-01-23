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
        <div className="cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border" style={cardStyle}>
            <div className="cil-space-y-1 cil-mb-6">
                <h2 className="cil-text-2xl cil-font-semibold">{t.login}</h2>
                <p className="cil-text-sm cil-text-gray-500">{t.loginSubtitle}</p>
            </div>

            <div className="cil-space-y-4">
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

                <div className="cil-relative cil-py-2">
                    <div className="cil-absolute cil-inset-0 cil-flex cil-items-center">
                        <div className="cil-w-full cil-border-t cil-border-gray-200"></div>
                    </div>
                    <div className="cil-relative cil-flex cil-justify-center cil-text-xs cil-uppercase">
                        <span className="cil-px-2 cil-text-gray-500" style={cardStyle}>
                            {t.or}
                        </span>
                    </div>
                </div>

                <form onSubmit={handleLogin} className="cil-space-y-4">
                    <FormError message={localError} />

                    <div className="cil-space-y-2">
                        <label htmlFor="auth-email" className="cil-text-sm cil-font-medium cil-leading-none">
                            {t.email}
                        </label>
                        <input
                            id="auth-email"
                            type="email"
                            placeholder="user@example.com"
                            className="cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (localError) setLocalError('');
                            }}
                            required
                        />
                    </div>
                    <div className="cil-space-y-2">
                        <label htmlFor="auth-password" className="cil-text-sm cil-font-medium cil-leading-none">
                            {t.password}
                        </label>
                        <input
                            id="auth-password"
                            type="password"
                            className="cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (localError) setLocalError('');
                            }}
                            required
                        />
                    </div>

                    <div className="cil-flex cil-justify-end">
                        <button
                            type="button"
                            onClick={() => onNavigate && onNavigate('forgot-password')}
                            className="cil-text-sm cil-hover:underline"
                            style={primaryTextStyle}
                        >
                            {t.forgotPassword}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-50"
                        style={primaryButtonStyle}
                        disabled={isLoading}
                    >
                        {isLoading ? t.loading : t.loginButton}
                    </button>
                </form>
            </div>

            <div className="cil-mt-6 cil-flex cil-justify-center">
                <p className="cil-text-sm cil-text-gray-500">
                    {t.dontHaveAccount}{' '}
                    <button
                        type="button"
                        onClick={() => onNavigate && onNavigate('signup')}
                        className="cil-font-medium cil-hover:underline"
                        style={primaryTextStyle}
                    >
                        {t.signUp}
                    </button>
                </p>
            </div>
        </div>
    );
}
