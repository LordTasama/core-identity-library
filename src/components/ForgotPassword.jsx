/**
 * Componente: ForgotPassword
 * Objetivo: Permitir a los usuarios solicitar un restablecimiento de contraseña mediante su correo electrónico.
 * Descripción: Renderiza un formulario para recolectar el correo y gestiona el envío del enlace de recuperación a través de la API.
 */
import { useState } from 'react';
import { translations } from '../translations';
import { useSecurity } from '../hooks/useSecurity';
import { useAuthApi } from '../hooks/useAuthApi';
import { useAppInfo } from '../hooks/useAppInfo';
import AuthError from './AuthError';
import FormError from './FormError';

export default function ForgotPassword({
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
    const [isLoading, setIsLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [localError, setLocalError] = useState('');

    if (isAppInfoLoading) return null;

    if (!isAuthorized) {
        return <AuthError lang={lang} />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setLocalError('');

        try {
            const data = await post('/forgot-password', { email });

            if (data.success) {
                setSent(true);
                if (onSuccess) onSuccess({ ...data, email });
            } else {
                const errorMsg = data.message || data.error || t.unknownError;
                setLocalError(errorMsg);
                if (onError) onError(errorMsg);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('⚠️ ForgotPassword Error:', error);
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
            <div className="space-y-1 mb-6 text-center">
                <h2 className="text-2xl font-semibold">{t.forgotPassword}</h2>
                <p className="text-sm text-gray-500">
                    {sent ? t.checkEmail : t.resetPasswordInstructions}
                </p>
            </div>

            {sent ? (
                <div className="text-center space-y-6 py-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <p className="text-sm text-gray-500">
                        {t.verifyEmailMessage}
                    </p>
                    <div className="space-y-3">
                        <button
                            onClick={() => onNavigate && onNavigate('reset-password')}
                            className="w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors"
                            style={primaryButtonStyle}
                        >
                            {t.enterCodeAndPassword}
                        </button>
                        <button
                            onClick={() => onNavigate && onNavigate('login')}
                            className="w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-200 hover:bg-gray-50"
                        >
                            {t.backToLogin}
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <FormError message={localError} />
                    <div className="space-y-2">
                        <label htmlFor="auth-forgot-email" className="text-sm font-medium">
                            {t.email}
                        </label>
                        <input
                            id="auth-forgot-email"
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
                    <button
                        type="submit"
                        className="w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"
                        style={primaryButtonStyle}
                        disabled={isLoading}
                    >
                        {isLoading ? t.sending : t.sendResetLink}
                    </button>

                    <button
                        type="button"
                        onClick={() => onNavigate && onNavigate('login')}
                        className="w-full text-sm font-medium hover:underline text-center"
                        style={primaryTextStyle}
                    >
                        {t.backToLogin}
                    </button>
                </form>
            )}
        </div>
    );
}
