import { useState, useEffect, useRef } from 'react';
import { translations } from '../translations';
import { useSecurity } from '../hooks/useSecurity';
import { useAuthApi } from '../hooks/useAuthApi';
import { useAppInfo } from '../hooks/useAppInfo';
import AuthError from './AuthError';
import FormError from './FormError';
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

    if (isAppInfoLoading) return null;

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
            <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center" style={cardStyle}>
                <div className="space-y-1 mb-6">
                    <h2 className="text-2xl font-semibold">{t.verifySuccess}</h2>
                    <p className="text-sm text-gray-500">{t.verifySuccess}</p>
                </div>
                <div className="py-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <button
                    onClick={() => onNavigate && onNavigate('login')}
                    className="w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors"
                    style={primaryButtonStyle}
                >
                    {t.goToLogin}
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center" style={cardStyle}>
            <div className="flex items-center justify-center mb-6">
                {isVerifying ? (
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-blue-500" style={{ borderTopColor: primaryColor }} />
                ) : (
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}
            </div>

            <h2 className="text-2xl font-semibold mb-2">{t.waitingConfirmation}</h2>

            <p className="text-sm mb-6 text-gray-500">
                {statusMessage}
            </p>

            <div className="mb-4">
                <FormSuccess message={localSuccess} />
                <FormError message={localError} />
            </div>

            <form onSubmit={handleVerifyCode} className="mb-8 space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block text-left px-1">
                        {t.enterCode}
                    </label>
                    <input
                        type="text"
                        placeholder="XXXXXX"
                        className="flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-center text-lg font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={isVerifying || !verificationCode}
                    className="w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50"
                    style={primaryButtonStyle}
                >
                    {isVerifying ? t.loading : t.verifyButton}
                </button>
            </form>

            <div className="border-t pt-6 space-y-3">
                {countdown > 0 ? (
                    <div className="p-2 rounded bg-gray-50 text-gray-700 text-xs font-mono border inline-block">
                        {t.resendCodeIn}
                        <span className="font-bold">{formatTime(countdown)}</span>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={handleResend}
                        disabled={isLoading || !userEmail}
                        className="text-sm font-medium hover:underline"
                        style={primaryTextStyle}
                    >
                        {isLoading ? t.loading : t.resendEmail}
                    </button>
                )}

                <button
                    type="button"
                    onClick={() => onNavigate && onNavigate('login')}
                    className="w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-200 hover:bg-gray-50"
                >
                    {t.goToLogin}
                </button>
            </div>
        </div>
    );
}
