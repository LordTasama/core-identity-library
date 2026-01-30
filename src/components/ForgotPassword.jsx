/**
 * Componente: ForgotPassword
 * Objetivo: Permitir a los usuarios solicitar un restablecimiento de contraseña mediante su correo electrónico.
 * Descripción: Renderiza un formulario para recolectar el correo y gestiona el envío del enlace de recuperación a través de la API.
 */
import { useState, useEffect, useRef } from 'react';
import { translations } from '../translations';
import { useSecurity } from '../hooks/useSecurity';
import { useAuthApi } from '../hooks/useAuthApi';
import AuthError from './AuthError';
import FormError from './FormError';
import LoadingSpinner from './LoadingSpinner';

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
    const primaryColor = propPrimaryColor;
    const backgroundColor = propBackgroundColor;
    const { post } = useAuthApi(apiBaseUrl, apiToken);
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [localError, setLocalError] = useState('');
    const [countdown, setCountdown] = useState(0);
    const timerRef = useRef(null);

    // Countdown logic
    useEffect(() => {
        if (countdown > 0) {
            timerRef.current = setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timerRef.current);
    }, [countdown]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    if (!isAuthorized) {
        return <AuthError lang={lang} />;
    }

    const handleSubmit = async (e) => {
        if (e && e.preventDefault) e.preventDefault();
        setIsLoading(true);
        setLocalError('');

        try {
            const data = await post('/forgot-password', { email });

            if (data.success) {
                setSent(true);
                if (data.wait_seconds) setCountdown(data.wait_seconds);
                if (onSuccess) onSuccess({ ...data, email });
            } else {
                const errorMsg = data.message || data.error || t.unknownError;
                setLocalError(errorMsg);
                if (data.wait_seconds) setCountdown(data.wait_seconds);
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
        <div className="cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border" style={cardStyle}>
            <div className="cil-space-y-1 cil-mb-6 cil-text-center">
                <h2 className="cil-text-2xl cil-font-semibold">{t.forgotPassword}</h2>
                <p className="cil-text-sm cil-text-gray-500">
                    {sent ? t.checkEmail : t.resetPasswordInstructions}
                </p>
            </div>

            {sent ? (
                <div className="cil-text-center cil-space-y-6 cil-py-4">
                    <div className="cil-w-16 cil-h-16 cil-mx-auto cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center">
                        <svg className="cil-w-8 cil-h-8 cil-text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="cil-space-y-2">
                        <p className="cil-text-sm cil-font-medium cil-text-gray-900">
                            {t.checkEmail}
                        </p>
                        <p className="cil-text-sm cil-text-gray-500">
                            {t.verifyEmailMessage}
                        </p>
                    </div>
                    <div className="cil-space-y-4">
                        <div className="cil-flex cil-flex-col cil-gap-2">
                            <span className="cil-text-xs cil-text-gray-500">
                                {t.dontReceiveEmail || (lang === 'es' ? '¿No recibiste el correo?' : "Didn't receive the email?") }
                            </span>
                            {countdown > 0 ? (
                                <div className="cil-text-xs cil-text-gray-500 cil-font-mono">
                                    {t.resendCodeIn}
                                    <span className="cil-font-bold">{formatTime(countdown)}</span>
                                </div>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="cil-text-sm cil-font-medium cil-hover:underline"
                                    style={primaryTextStyle}
                                >
                                    {isLoading ? t.sending : t.resendCode}
                                </button>
                            )}
                        </div>
                        <div className="cil-pt-2">
                            <button
                                onClick={() => onNavigate && onNavigate('login')}
                                className="cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-border cil-border-gray-200 cil-hover:bg-gray-50"
                            >
                                {t.backToLogin}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="cil-space-y-4">
                    <FormError message={localError} />
                    <div className="cil-space-y-2">
                        <label htmlFor="auth-forgot-email" className="cil-text-sm cil-font-medium">
                            {t.email}
                        </label>
                        <input
                            id="auth-forgot-email"
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
                    <button
                        type="submit"
                        className="cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed"
                        style={primaryButtonStyle}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="cil-flex cil-items-center cil-gap-2">
                                <LoadingSpinner size="sm" color="#ffffff" />
                                <span>{t.sending}</span>
                            </div>
                        ) : t.sendResetLink}
                    </button>


                    <button
                        type="button"
                        onClick={() => onNavigate && onNavigate('login')}
                        className="cil-w-full cil-text-sm cil-font-medium cil-hover:underline cil-text-center"
                        style={primaryTextStyle}
                    >
                        {t.backToLogin}
                    </button>
                </form>
            )}
        </div>
    );
}
