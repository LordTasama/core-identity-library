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
import LoadingSpinner from './LoadingSpinner';



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

    if (isAppInfoLoading) {
        return (
            <div className="cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-relative" style={{ backgroundColor: propBackgroundColor }}>
                {/* Central Overlay Spinner */}
                <div className="cil-absolute cil-inset-0 cil-z-10 cil-flex cil-flex-col cil-items-center cil-justify-center cil-bg-white/40 cil-backdrop-blur-[1px] cil-rounded-lg">
                    <LoadingSpinner size="xl" color={propPrimaryColor} />
                </div>

                {/* Skeleton Structure */}
                <div className="cil-animate-pulse cil-opacity-20 cil-pointer-events-none">
                    <div className="cil-space-y-1 cil-mb-6 cil-text-center">
                        <div className="cil-h-8 cil-w-48 cil-mx-auto cil-bg-gray-400 cil-rounded"></div>
                        <div className="cil-h-4 cil-w-40 cil-mx-auto cil-bg-gray-400 cil-rounded"></div>
                    </div>

                    <div className="cil-py-6 cil-flex cil-flex-col cil-items-center">
                        <div className="cil-w-16 cil-h-16 cil-rounded-full cil-bg-gray-400"></div>
                    </div>

                    <div className="cil-mt-6 cil-flex cil-justify-center">
                        <div className="cil-h-10 cil-w-full cil-bg-gray-400 cil-rounded-md"></div>
                    </div>
                </div>
            </div>
        );
    }




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
            <div className="cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center" style={cardStyle}>
                <div className="cil-space-y-1 cil-mb-6">
                    <h2 className="cil-text-2xl cil-font-semibold">
                        {status === 'verifying' ? t.verifying : t.emailVerification}
                    </h2>
                    <p className="cil-text-sm cil-text-gray-500">
                        {status === 'verifying' ? t.verifyingSubtitle : message}
                    </p>
                </div>

                <div className="cil-py-6 cil-flex cil-flex-col cil-items-center">
                    <FormError message={localError} />
                    {status === 'verifying' && (
                        <LoadingSpinner size="xl" color={primaryColor} />
                    )}


                    {status === 'success' && (
                        <div className="cil-w-16 cil-h-16 cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500">
                            <svg className="cil-w-8 cil-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="cil-w-16 cil-h-16 cil-rounded-full cil-bg-red-50 cil-flex cil-items-center cil-justify-center cil-text-red-500">
                            <svg className="cil-w-8 cil-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    )}
                </div>

                {status !== 'verifying' && (
                    <button
                        onClick={() => onNavigate && onNavigate('login')}
                        className="cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors"
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
        <div className="cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center" style={cardStyle}>
            <div className="cil-space-y-1 cil-mb-6">
                <h2 className="cil-text-2xl cil-font-semibold">{t.emailVerification}</h2>
                <p className="cil-text-sm cil-text-gray-500">{t.checkEmail}</p>
            </div>
            <div className="cil-space-y-6 cil-py-4 cil-flex cil-flex-col cil-items-center">
                <div className="cil-w-16 cil-h-16 cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center cil-text-blue-500">
                    <svg className="cil-w-8 cil-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <p className="cil-text-sm cil-text-gray-500 cil-max-w-sm">
                    {t.verifyEmailMessage}
                </p>
                <button
                    onClick={() => onNavigate && onNavigate('login')}
                    className="cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-border cil-border-gray-200 cil-hover:bg-gray-50"
                >
                    {t.backToLogin}
                </button>
            </div>
        </div>
    );
}
