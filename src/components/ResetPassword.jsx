/**
 * Componente: ResetPassword
 * Objetivo: Permitir a los usuarios establecer una nueva contraseña utilizando un código de recuperación.
 * Descripción: Maneja el flujo de restablecimiento de contraseña, permitiendo también cerrar sesiones activas tras un cambio exitoso.
 */
import { useState, useEffect, useRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { translations } from '../translations';
import { useSecurity } from '../hooks/useSecurity';
import { useAuthApi } from '../hooks/useAuthApi';
import SocialAuthButtons from './SocialAuthButtons';
import AuthError from './AuthError';
import FormError from './FormError';
import LoadingSpinner from './LoadingSpinner';
import FormSuccess from './FormSuccess';

export default function ResetPassword({
    apiBaseUrl,
    token: initialToken = null, // The recovery code from URL/Email
    authMode = null, // '1' means social reset, '0' means normal reset
    primaryColor: propPrimaryColor = '#3b82f6',
    backgroundColor: propBackgroundColor = '#ffffff',
    onSuccess,
    onError,
    onNavigate,
    apiToken,
    lang = 'en',
    email: userEmail = '',
    authToken: propAuthToken = '', // Auth token passed from consumer
    user = {},
    initialWaitSeconds = 0,
    texts: customTexts = {}
}) {
    const t = { ...translations[lang], ...customTexts };
    const { isAuthorized } = useSecurity(apiToken);
    const primaryColor = propPrimaryColor;
    const backgroundColor = propBackgroundColor;
    const { post } = useAuthApi(apiBaseUrl, apiToken);

    const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    const effectiveToken = initialToken || urlParams?.get('token') || '';
    const effectiveAuthMode = authMode || urlParams?.get('auth') || '0';

    const [formData, setFormData] = useState({
        token: effectiveToken,
        newPassword: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [success, setSuccess] = useState(false);
    const [activeSessions, setActiveSessions] = useState([]);
    const [isLoggingOutSession, setIsLoggingOutSession] = useState(false);
    const [localError, setLocalError] = useState('');
    const [localSuccess, setLocalSuccess] = useState('');
    const [currentAuthToken, setCurrentAuthToken] = useState(propAuthToken);
    const [countdown, setCountdown] = useState(initialWaitSeconds);
    const [statusMessage, setStatusMessage] = useState(t.resetPasswordSubtitle);
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

    // Sync state with prop if it changes
    useEffect(() => {
        if (propAuthToken) setCurrentAuthToken(propAuthToken);
    }, [propAuthToken]);

    if (!isAuthorized) {
        return <AuthError lang={lang} />;
    }

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleResendCode = async () => {
        if (!userEmail || countdown > 0) return;
        setIsResending(true);
        setLocalError('');

        try {
            const data = await post('/forgot-password', { email: userEmail });

            if (data.success) {
                if (data.wait_seconds) setCountdown(data.wait_seconds);
                setStatusMessage(data.message || t.resendSent);
            } else {
                const errorMsg = data.message || data.error || (t.connectionError);
                setLocalError(errorMsg);
                if (data.wait_seconds) setCountdown(data.wait_seconds);
                if (onError) onError(errorMsg);
            }
        } catch (error) {
            console.error('⚠️ Resend Reset Error:', error);
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
        } finally {
            setIsResending(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLocalError('');

        if (formData.newPassword !== formData.confirmPassword) {
            const errorMsg = t.passwordsDontMatch;
            setLocalError(errorMsg);
            if (onError) onError(errorMsg);
            return;
        }

        if (!formData.token) {
            const errorMsg = t.enterRecoveryCode;
            setLocalError(errorMsg);
            if (onError) onError(errorMsg);
            return;
        }

        setIsLoading(true);

        try {
            const data = await post('/reset-password', {
                token: formData.token,
                newPassword: formData.newPassword,
                confirmPassword: formData.confirmPassword
            });

            if (data.success || data.status) {
                setSuccess(true);
                if (data.active_sessions) {
                    setActiveSessions(data.active_sessions);
                }
                if (data.token) {
                    setCurrentAuthToken(data.token);
                }
                if (onSuccess) onSuccess({ ...data, type: 'password_reset' });
            } else {
                const errorMsg = data.message || data.error || (t.unknownError);
                setLocalError(errorMsg);
                if (onError) onError(errorMsg);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('⚠️ ResetPassword Error:', error);
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

    const handleLogoutSessions = async (all = false, sessionIds = []) => {
        if (!currentAuthToken) {
            const errorMsg = t.noSessions;
            setLocalError(errorMsg);
            if (onError) onError(errorMsg);
            return;
        }

        setIsLoggingOutSession(true);
        setLocalError('');
        setLocalSuccess('');
        try {
            const data = await post('/logout_sessions', {
                email: userEmail || '',
                all_sessions: all,
                session_ids: sessionIds
            }, { token: currentAuthToken });

            if (data.success) {
                if (all) {
                    setActiveSessions([]);
                } else {
                    setActiveSessions(prev => prev.filter(s => !sessionIds.includes(s._id)));
                }
                setLocalSuccess(t.logoutSuccess);
            } else {
                const errorMsg = data.message || data.error || 'Logout failed';
                setLocalError(errorMsg);
                if (onError) onError(errorMsg);
            }
        } catch (error) {
            console.error('⚠️ Logout Sessions Error:', error);
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
        } finally {
            setIsLoggingOutSession(false);
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

    if (success) {
        return (
            <div className="cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border" style={cardStyle}>
                <div className="cil-text-center cil-mb-6">
                    <div className="cil-w-16 cil-h-16 cil-mx-auto cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500 cil-mb-4">
                        <svg className="cil-w-8 cil-h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="cil-text-2xl cil-font-semibold">{t.resetSuccessTitle}</h2>
                    <p className="cil-text-sm cil-text-gray-500">{t.resetSuccessSubtitle}</p>
                </div>

                <FormSuccess message={localSuccess} />
                <FormError message={localError} />

                {activeSessions.length > 0 && (
                    <div className="cil-mt-8 cil-space-y-4 cil-border-t cil-pt-6">
                        <div className="cil-text-left">
                            <h3 className="cil-text-lg cil-font-medium">{t.activeSessions}</h3>
                            <p className="cil-text-xs cil-text-gray-500">{t.sessionsSubtitle}</p>
                        </div>

                        <div className="cil-space-y-3 cil-max-h-60 cil-overflow-y-auto cil-pr-1">
                            {activeSessions.map((session) => (
                                <div key={session._id} className="cil-p-3 cil-border cil-rounded-md cil-text-xs cil-bg-gray-50 cil-flex cil-justify-between cil-items-center">
                                    <div className="cil-space-y-1">
                                        <div className="cil-font-semibold cil-text-gray-700 cil-truncate cil-max-w-[180px]" title={session['Device Name']}>
                                            {session['Device Name']?.split(' ')[0] || t.deviceName}
                                        </div>
                                        <div className="cil-text-gray-500">{session.IP}</div>
                                        {session['Expiration Date'] && (
                                            <div className="cil-text-gray-400 cil-italic">{t.expiry}: {new Date(session['Expiration Date']).toLocaleDateString()}</div>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleLogoutSessions(false, [session._id])}
                                        disabled={isLoggingOutSession}
                                        className="cil-px-2 cil-py-1 cil-text-red-600 cil-hover:bg-red-50 cil-rounded cil-transition-colors"
                                    >
                                        {t.logoutThisSession}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => handleLogoutSessions(true)}
                            disabled={isLoggingOutSession}
                            className="cil-w-full cil-py-2 cil-text-sm cil-text-red-600 cil-border cil-border-red-200 cil-rounded-md cil-hover:bg-red-50 cil-transition-colors cil-font-medium cil-flex cil-items-center cil-justify-center cil-gap-2"
                        >
                            {isLoggingOutSession ? (
                                <>
                                    <LoadingSpinner size="xs" color="#ef4444" />
                                    {t.loggingOut}
                                </>
                            ) : t.logoutAllSessions}
                        </button>

                    </div>
                )}

                <div className="cil-mt-8 cil-pt-6 cil-border-t">
                    <button
                        onClick={() => onNavigate && onNavigate('login')}
                        className="cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors"
                        style={primaryButtonStyle}
                    >
                        {t.goToLogin}
                    </button>
                </div>
            </div>
        );
    }

    const isSocialReset = effectiveAuthMode === '1';

    return (
        <div className="cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border" style={cardStyle}>
            <div className="cil-space-y-1 cil-mb-6 cil-text-center">
                <h2 className="cil-text-2xl cil-font-semibold">{t.resetPasswordTitle}</h2>
                <p className="cil-text-sm cil-text-gray-500">
                    {isSocialReset ? t.socialLoginSubtitle || 'Verify your identity' : statusMessage}
                </p>
            </div>

            <div className="cil-space-y-4">
                {isSocialReset && (
                    <>
                        <div className="cil-space-y-4">
                            <p className="cil-text-sm cil-text-center cil-text-gray-600">
                                {t.socialResetMsg || 'Verify your identity with social login or use the form below'}
                            </p>
                            <SocialAuthButtons
                                apiBaseUrl={apiBaseUrl}
                                user={user}
                                primaryColor={primaryColor}
                                onSuccess={(data) => {
                                    if (onSuccess) onSuccess({ ...data, type: 'login' });
                                }}
                                onError={(err) => {
                                    setLocalError(err);
                                    if (onError) onError(err);
                                }}
                                lang={lang}
                                apiToken={apiToken}
                                texts={customTexts}
                            />
                        </div>

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
                    </>
                )}

                <form onSubmit={handleSubmit} className="cil-space-y-4">
                    <FormError message={localError} />

                    <div className="cil-space-y-2">
                        <label className="cil-text-sm cil-font-medium">{t.newPassword}</label>
                        <div className="cil-relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={formData.newPassword}
                                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                                required
                                className="cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
                                placeholder={t.min8Chars}
                            />
                            <button
                                type="button"
                                className="cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="cil-space-y-2">
                        <label className="cil-text-sm cil-font-medium">{t.confirmPassword}</label>
                        <div className="cil-relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                required
                                className="cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
                            />
                            <button
                                type="button"
                                className="cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed"
                        style={primaryButtonStyle}
                        disabled={isLoading || (!formData.token && !effectiveToken)}
                    >
                        {isLoading ? (
                            <div className="cil-flex cil-items-center cil-gap-2">
                                <LoadingSpinner size="sm" color="#ffffff" />
                                <span>{t.resetting}</span>
                            </div>
                        ) : t.resetPasswordTitle}
                    </button>


                    <div className="cil-pt-2 cil-text-center cil-space-y-3">
                        <div className="cil-flex cil-flex-col cil-gap-2">
                            <span className="cil-text-xs cil-text-gray-500">
                                {t.dontReceiveEmail || (lang === 'es' ? '¿No recibiste el correo?' : "Didn't receive the email?") }
                            </span>
                            {userEmail ? (
                                countdown > 0 ? (
                                    <div className="cil-text-xs cil-text-gray-500 cil-font-mono">
                                        {t.resendCodeIn}
                                        <span className="cil-font-bold">{formatTime(countdown)}</span>
                                    </div>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleResendCode}
                                        disabled={isResending}
                                        className="cil-text-sm cil-font-medium cil-hover:underline"
                                        style={primaryTextStyle}
                                    >
                                        {isResending ? t.loading : t.resendCode}
                                    </button>
                                )
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => onNavigate && onNavigate('forgot-password')}
                                    className="cil-text-sm cil-font-medium cil-hover:underline"
                                    style={primaryTextStyle}
                                >
                                    {t.sendResetLink || t.resendCode}
                                </button>
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={() => onNavigate && onNavigate('login')}
                            className="cil-w-full cil-text-sm cil-font-medium cil-hover:underline cil-text-center cil-text-gray-500"
                        >
                            {t.backToLogin}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
