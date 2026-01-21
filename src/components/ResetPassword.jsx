/**
 * Componente: ResetPassword
 * Objetivo: Permitir a los usuarios establecer una nueva contraseña utilizando un código de recuperación.
 * Descripción: Maneja el flujo de restablecimiento de contraseña, permitiendo también cerrar sesiones activas tras un cambio exitoso.
 */
import { useState, useEffect, useRef } from 'react';
import { translations } from '../translations';
import { useSecurity } from '../hooks/useSecurity';
import { useAuthApi } from '../hooks/useAuthApi';
import { useAppInfo } from '../hooks/useAppInfo';
import AuthError from './AuthError';
import FormError from './FormError';
import FormSuccess from './FormSuccess';

export default function ResetPassword({
    apiBaseUrl,
    token: initialToken = '', // The recovery code from URL/Email
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
    const { primaryColor, backgroundColor, isLoading: isAppInfoLoading } = useAppInfo(apiBaseUrl, apiToken, user, propPrimaryColor, propBackgroundColor);
    const { post } = useAuthApi(apiBaseUrl, apiToken);

    const [formData, setFormData] = useState({
        token: initialToken,
        newPassword: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isResending, setIsResending] = useState(false);
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

    if (isAppInfoLoading) return null;

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
                if (onSuccess) onSuccess(data);
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
            <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border" style={cardStyle}>
                <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold">{t.resetSuccessTitle}</h2>
                    <p className="text-sm text-gray-500">{t.resetSuccessSubtitle}</p>
                </div>

                <FormSuccess message={localSuccess} />
                <FormError message={localError} />

                {activeSessions.length > 0 && (
                    <div className="mt-8 space-y-4 border-t pt-6">
                        <div className="text-left">
                            <h3 className="text-lg font-medium">{t.activeSessions}</h3>
                            <p className="text-xs text-gray-500">{t.sessionsSubtitle}</p>
                        </div>

                        <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                            {activeSessions.map((session) => (
                                <div key={session._id} className="p-3 border rounded-md text-xs bg-gray-50 flex justify-between items-center">
                                    <div className="space-y-1">
                                        <div className="font-semibold text-gray-700 truncate max-w-[180px]" title={session['Device Name']}>
                                            {session['Device Name']?.split(' ')[0] || t.deviceName}
                                        </div>
                                        <div className="text-gray-500">{session.IP}</div>
                                        {session['Expiration Date'] && (
                                            <div className="text-gray-400 italic">{t.expiry}: {new Date(session['Expiration Date']).toLocaleDateString()}</div>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleLogoutSessions(false, [session._id])}
                                        disabled={isLoggingOutSession}
                                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                                    >
                                        {t.logoutThisSession}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => handleLogoutSessions(true)}
                            disabled={isLoggingOutSession}
                            className="w-full py-2 text-sm text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors font-medium"
                        >
                            {isLoggingOutSession ? t.loggingOut : t.logoutAllSessions}
                        </button>
                    </div>
                )}

                <div className="mt-8 pt-6 border-t">
                    <button
                        onClick={() => onNavigate && onNavigate('login')}
                        className="w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors"
                        style={primaryButtonStyle}
                    >
                        {t.goToLogin}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border" style={cardStyle}>
            <div className="space-y-1 mb-6 text-center">
                <h2 className="text-2xl font-semibold">{t.resetPasswordTitle}</h2>
                <p className="text-sm text-gray-500">{statusMessage}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <FormError message={localError} />
                <div className="space-y-2">
                    <label className="text-sm font-medium">{t.verificationCode}</label>
                    <input
                        type="text"
                        value={formData.token}
                        onChange={(e) => setFormData({ ...formData, token: e.target.value })}
                        required
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 font-mono tracking-widest text-center"
                        placeholder="XXXXXX"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">{t.newPassword}</label>
                    <input
                        type="password"
                        value={formData.newPassword}
                        onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                        required
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                        placeholder={t.min8Chars}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">{t.confirmPassword}</label>
                    <input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        required
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"
                    style={primaryButtonStyle}
                    disabled={isLoading || !formData.token}
                >
                    {isLoading ? t.resetting : t.resetPasswordTitle}
                </button>

                <div className="pt-2 text-center space-y-3">
                    {countdown > 0 ? (
                        <div className="text-xs text-gray-500 font-mono">
                            {t.resendCodeIn}
                            <span className="font-bold">{formatTime(countdown)}</span>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={handleResendCode}
                            disabled={isResending || !userEmail}
                            className="text-sm font-medium hover:underline"
                            style={primaryTextStyle}
                        >
                            {isResending ? t.loading : t.resendCode}
                        </button>
                    )}

                    <button
                        type="button"
                        onClick={() => onNavigate && onNavigate('login')}
                        className="w-full text-sm font-medium hover:underline text-center text-gray-500"
                    >
                        {t.backToLogin}
                    </button>
                </div>
            </form>
        </div>
    );
}
