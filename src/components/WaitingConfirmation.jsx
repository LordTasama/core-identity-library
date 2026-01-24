/**
 * Componente: WaitingConfirmation
 * Objetivo: Informar al usuario que debe confirmar su cuenta y permitir el reenvío del código.
 * Descripción: Muestra un estado de espera tras el registro o solicitud de recuperación, facilitando la entrada manual del código de verificación.
 */
import { useState, useEffect, useRef } from 'react';
import { translations } from '../translations';
import { useSecurity } from '../hooks/useSecurity';
import { useAuthApi } from '../hooks/useAuthApi';
import { useAppInfo } from '../hooks/useAppInfo';
import AuthError from './AuthError';
import FormError from './FormError';
import LoadingSpinner from './LoadingSpinner';
import FormSuccess from './FormSuccess';


export default function WaitingConfirmation({
    apiBaseUrl,
    user = {},
    primaryColor: propPrimaryColor = '#3b82f6',
    backgroundColor: propBackgroundColor = '#ffffff',
    onNavigate,
    lang = 'en',
    userEmail,
    initialMessage,
    initialWaitSeconds = 0,
    onSuccess,
    onError,
    apiToken, // Added apiToken
    texts: customTexts = {}
}) {
    const t = { ...translations[lang], ...customTexts };
    const { isAuthorized } = useSecurity(apiToken);
    const { primaryColor, backgroundColor, isLoading: isAppInfoLoading } = useAppInfo(apiBaseUrl, apiToken, user, propPrimaryColor, propBackgroundColor);
    const { post } = useAuthApi(apiBaseUrl, apiToken);
    const [isLoading, setIsLoading] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [statusMessage, setStatusMessage] = useState(initialMessage || t.waitingConfirmationMsg);
    const [countdown, setCountdown] = useState(initialWaitSeconds);
    const [isResendSuccess, setIsResendSuccess] = useState(false);
    const [verifySuccess, setVerifySuccess] = useState(false);
    const [localError, setLocalError] = useState('');
    const [localSuccess, setLocalSuccess] = useState('');
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

    // Reset status message when countdown ends
    useEffect(() => {
        if (countdown === 0 && (initialWaitSeconds > 0 || isResendSuccess)) {
            setStatusMessage(t.waitingConfirmationMsg);
            setIsResendSuccess(false);
        }
    }, [countdown, initialWaitSeconds, t.waitingConfirmationMsg]);

    if (isAppInfoLoading) {
        return (
            <div className="cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-relative" style={{ backgroundColor: propBackgroundColor }}>
                {/* Central Overlay Spinner */}
                <div className="cil-absolute cil-inset-0 cil-z-10 cil-flex cil-flex-col cil-items-center cil-justify-center cil-bg-white/40 cil-backdrop-blur-[1px] cil-rounded-lg">
                    <LoadingSpinner size="xl" color={propPrimaryColor} />
                </div>

                {/* Skeleton Structure */}
                <div className="cil-animate-pulse cil-opacity-20 cil-pointer-events-none">
                    <div className="cil-flex cil-items-center cil-justify-center cil-mb-6">
                        <div className="cil-w-16 cil-h-16 cil-rounded-full cil-bg-gray-400"></div>
                    </div>

                    <div className="cil-space-y-1 cil-mb-6 cil-text-center">
                        <div className="cil-h-8 cil-w-48 cil-mx-auto cil-bg-gray-400 cil-rounded"></div>
                        <div className="cil-h-4 cil-w-56 cil-mx-auto cil-bg-gray-400 cil-rounded"></div>
                    </div>

                    <div className="cil-space-y-4">
                        <div className="cil-space-y-2">
                            <div className="cil-h-4 cil-w-24 cil-bg-gray-400 cil-rounded"></div>
                            <div className="cil-h-12 cil-w-full cil-bg-gray-400 cil-rounded-md"></div>
                        </div>
                        <div className="cil-h-10 cil-w-full cil-bg-gray-400 cil-rounded-md"></div>
                    </div>

                    <div className="cil-border-t cil-pt-6 cil-mt-6 cil-space-y-3">
                        <div className="cil-h-8 cil-w-32 cil-mx-auto cil-bg-gray-400 cil-rounded"></div>
                        <div className="cil-h-10 cil-w-full cil-bg-gray-400 cil-rounded-md"></div>
                    </div>
                </div>
            </div>
        );
    }




    if (!isAuthorized) {
        return <AuthError lang={lang} />;
    }

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleVerifyCode = async (e) => {
        e.preventDefault();
        if (!verificationCode) return;

        setIsVerifying(true);
        setLocalError('');
        try {
            const data = await post('/verify-email', { token: verificationCode });

            if (data.success) {
                setVerifySuccess(true);
                if (onSuccess) onSuccess(data);
            } else {
                const errorMsg = data.message || data.error || t.verificationFailed;
                setLocalError(errorMsg);
                if (onError) onError(errorMsg);
            }
        } catch (error) {
            console.error('⚠️ Manual Verification Error:', error);
            const errorMsg = t.connectionError;
            setLocalError(errorMsg);
            if (onError) onError(errorMsg);
        } finally {
            setIsVerifying(false);
        }
    };

    const handleResend = async () => {
        if (!userEmail || countdown > 0) return;

        setIsLoading(true);
        setIsResendSuccess(false);
        setLocalError('');
        setLocalSuccess(''); // Clear previous success message

        try {
            const data = await post('/resend-confirmation', { email: userEmail });

            if (data.success) {
                setIsResendSuccess(true);
                const successMsg = data.message || t.resendSent;
                setLocalSuccess(successMsg);
                if (data.wait_seconds) {
                    setCountdown(data.wait_seconds);
                }
            } else {
                const errorMsg = data.message || data.error || (t.connectionError);
                setLocalError(errorMsg);
                if (data.wait_seconds) {
                    setCountdown(data.wait_seconds);
                }
                if (onError) onError(errorMsg);
            }
        } catch (error) {
            console.error('⚠️ Resend Error:', error);
            const errorMsg = t.connectionError;
            setLocalError(errorMsg);
            if (onError) onError(errorMsg);
        } finally {
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

    if (verifySuccess) {
        return (
            <div className="cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center" style={cardStyle}>
                <div className="cil-space-y-1 cil-mb-6">
                    <h2 className="cil-text-2xl cil-font-semibold">{t.verifySuccess}</h2>
                    <p className="cil-text-sm cil-text-gray-500">{t.verifySuccess}</p>
                </div>
                <div className="cil-py-6 cil-flex cil-justify-center">
                    <div className="cil-w-16 cil-h-16 cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500">
                        <svg className="cil-w-8 cil-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <button
                    onClick={() => onNavigate && onNavigate('login')}
                    className="cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors"
                    style={primaryButtonStyle}
                >
                    {t.goToLogin}
                </button>
            </div>
        );
    }

    return (
        <div className="cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center" style={cardStyle}>
            <div className="cil-flex cil-items-center cil-justify-center cil-mb-6">
                {isVerifying ? (
                    <LoadingSpinner size="lg" color={primaryColor} />
                ) : (
                    <div className="cil-w-16 cil-h-16 cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center cil-text-blue-500">
                        <svg className="cil-w-8 cil-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}

            </div>

            <h2 className="cil-text-2xl cil-font-semibold cil-mb-2">{t.waitingConfirmation}</h2>

            <p className="cil-text-sm cil-mb-6 cil-text-gray-500">
                {statusMessage}
            </p>

            <div className="cil-mb-4">
                <FormSuccess message={localSuccess} />
                <FormError message={localError} />
            </div>

            <form onSubmit={handleVerifyCode} className="cil-mb-8 cil-space-y-4">
                <div className="cil-space-y-2">
                    <label className="cil-text-sm cil-font-medium cil-text-gray-700 cil-block cil-text-left cil-px-1">
                        {t.enterCode}
                    </label>
                    <input
                        type="text"
                        placeholder="XXXXXX"
                        className="cil-flex cil-h-12 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-center cil-text-lg cil-font-mono cil-tracking-widest cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={isVerifying || !verificationCode}
                    className="cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed"
                    style={primaryButtonStyle}
                >
                    {isVerifying ? (
                        <div className="cil-flex cil-items-center cil-gap-2">
                            <LoadingSpinner size="sm" color="#ffffff" />
                            <span>{t.loading}</span>
                        </div>
                    ) : t.verifyButton}
                </button>

            </form>

            <div className="cil-border-t cil-pt-6 cil-space-y-3">
                {countdown > 0 ? (
                    <div className="cil-p-2 cil-rounded cil-bg-gray-50 cil-text-gray-700 cil-text-xs cil-font-mono cil-border cil-inline-block">
                        {t.resendCodeIn}
                        <span className="cil-font-bold">{formatTime(countdown)}</span>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={handleResend}
                        disabled={isLoading || !userEmail}
                        className="cil-text-sm cil-font-medium cil-hover:underline cil-flex cil-items-center cil-justify-center cil-gap-2 cil-mx-auto"
                        style={primaryTextStyle}
                    >
                        {isLoading ? (
                            <>
                                <LoadingSpinner size="xs" color={primaryColor} />
                                {t.loading}
                            </>
                        ) : t.resendEmail}
                    </button>

                )}

                <button
                    type="button"
                    onClick={() => onNavigate && onNavigate('login')}
                    className="cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-border cil-border-gray-200 cil-hover:bg-gray-50"
                >
                    {t.goToLogin}
                </button>
            </div>
        </div>
    );
}
