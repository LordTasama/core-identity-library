/**
 * Componente: EmailVerification
 * Objetivo: Gestionar y mostrar el estado del proceso de verificación de correo electrónico del usuario.
 * Descripción: Procesa el token de verificación de la URL, realiza la llamada a la API para confirmar el correo y muestra feedback visual del resultado.
 */
import { useState, useEffect } from 'react';
import { translations } from '../translations';
import { useSecurity } from '../hooks/useSecurity';
import { useAuthApi } from '../hooks/useAuthApi';
import { useAppInfo } from '../hooks/useAppInfo';
import AuthError from './AuthError';
import FormError from './FormError';

export default function EmailVerification({
    apiBaseUrl,
    token,
    user = {},
    primaryColor: propPrimaryColor = '#3b82f6',
    backgroundColor: propBackgroundColor = '#ffffff',
    onSuccess,
    onError,
    onNavigate,
    lang = 'en',
    apiToken,
    texts: customTexts = {}
}) {
    const t = { ...translations[lang], ...customTexts };
    const { isAuthorized } = useSecurity(apiToken);
    const { primaryColor, backgroundColor, isLoading: isAppInfoLoading } = useAppInfo(apiBaseUrl, apiToken, user, propPrimaryColor, propBackgroundColor);
    const { post } = useAuthApi(apiBaseUrl, apiToken);
    const [status, setStatus] = useState(token ? 'verifying' : 'idle'); // idle, verifying, success, error
    const [message, setMessage] = useState('');
    const [localError, setLocalError] = useState('');

    useEffect(() => {
        if (token && status === 'verifying') {
            verifyAccount();
        }
    }, [token]);

    if (isAppInfoLoading) return null;

    if (!isAuthorized) {
        return <AuthError lang={lang} />;
    }

    const verifyAccount = async () => {
        setLocalError('');
        try {
            const data = await post('/verify-email', { token });

            if (data.success) {
                setStatus('success');
                setMessage(data.message || t.verifySuccess);
                if (onSuccess) onSuccess(data);
            } else {
                setStatus('error');
                const errorMsg = data.message || data.error || t.verifyError;
                setMessage(errorMsg);
                setLocalError(errorMsg);
                if (onError) onError(errorMsg);
            }
        } catch (error) {
            console.error('⚠️ Verification Error:', error);
            setStatus('error');
            const errorMsg = t.connectionError;
            setMessage(errorMsg);
            setLocalError(errorMsg);
            if (onError) onError(errorMsg);
        }
    };

    const primaryButtonStyle = {
        backgroundColor: primaryColor,
        color: '#ffffff'
    };

    const cardStyle = {
        backgroundColor: backgroundColor
    };

    // UI for when we are verifying or finished verifying
    if (token) {
        return (
            <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center" style={cardStyle}>
                <div className="space-y-1 mb-6">
                    <h2 className="text-2xl font-semibold">
                        {status === 'verifying' ? t.verifying : t.emailVerification}
                    </h2>
                    <p className="text-sm text-gray-500">
                        {status === 'verifying' ? t.verifyingSubtitle : message}
                    </p>
                </div>

                <div className="py-6 flex flex-col items-center">
                    <FormError message={localError} />
                    {status === 'verifying' && (
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-500" style={{ borderTopColor: primaryColor }} />
                    )}

                    {status === 'success' && (
                        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    )}
                </div>

                {status !== 'verifying' && (
                    <button
                        onClick={() => onNavigate && onNavigate('login')}
                        className="w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors"
                        style={primaryButtonStyle}
                    >
                        {t.backToLogin}
                    </button>
                )}
            </div>
        );
    }

    // Default UI (No token - just instruction)
    return (
        <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center" style={cardStyle}>
            <div className="space-y-1 mb-6">
                <h2 className="text-2xl font-semibold">{t.emailVerification}</h2>
                <p className="text-sm text-gray-500">{t.checkEmail}</p>
            </div>
            <div className="space-y-6 py-4 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <p className="text-sm text-gray-500 max-w-sm">
                    {t.verifyEmailMessage}
                </p>
                <button
                    onClick={() => onNavigate && onNavigate('login')}
                    className="w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-200 hover:bg-gray-50"
                >
                    {t.backToLogin}
                </button>
            </div>
        </div>
    );
}
