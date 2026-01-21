/**
 * Componente: UserProfile
 * Objetivo: Visualizar y gestionar la información detallada del perfil del usuario.
 * Descripción: Muestra datos personales, roles, permisos y sesiones activas, permitiendo también la gestión de estas últimas.
 */
import { useState, useEffect } from 'react';
import { translations } from '../translations';
import { useAppInfo } from '../hooks/useAppInfo';
import { useUserProfile } from '../hooks/useUserProfile';
import { useAuthApi } from '../hooks/useAuthApi';
import { getValidProfileImageUrl } from '../utils/urlValidation';
import { User, Key, Mail, Settings, LogOut, Loader2, AlertCircle, Sparkles, Monitor, Smartphone, Tablet } from 'lucide-react';
import FormError from './FormError';
import FormSuccess from './FormSuccess';

export default function UserProfile({
    apiBaseUrl,
    apiToken,
    authToken,
    userEmail,
    primaryColor: propPrimaryColor = '#3b82f6',
    backgroundColor: propBackgroundColor = '#ffffff',
    onClose,
    onNavigate,
    onError,
    onSuccess,
    lang = 'en',
    texts: customTexts = {}
}) {
    const t = { ...translations[lang], ...customTexts };

    // Fetch user profile data from /me endpoint
    const { user, isLoading: isLoadingProfile, error: profileError } = useUserProfile(apiBaseUrl, apiToken, authToken, userEmail);

    // Get app colors
    const { primaryColor, backgroundColor, isLoading: isAppInfoLoading } = useAppInfo(apiBaseUrl, apiToken, user, propPrimaryColor, propBackgroundColor);

    const { post } = useAuthApi(apiBaseUrl, apiToken);

    const [activeSessions, setActiveSessions] = useState([]);
    const [isLoggingOutSession, setIsLoggingOutSession] = useState(false);
    const [localError, setLocalError] = useState('');
    const [localSuccess, setLocalSuccess] = useState('');
    const [imageLoadError, setImageLoadError] = useState(false);

    // Update active sessions when user data loads
    useEffect(() => {
        if (user?.active_sessions) {
            setActiveSessions(user.active_sessions);
        } else if (user?.sessions) {
            setActiveSessions(user.sessions);
        }
    }, [user]);

    // Helper to parse Device Name if it's a User Agent
    const getCleanDeviceName = (deviceName) => {
        if (!deviceName) return t.deviceName;
        if (deviceName.includes('Mozilla/')) {
            if (deviceName.includes('iPhone')) return 'iPhone';
            if (deviceName.includes('Android')) return 'Android Device';
            if (deviceName.includes('Windows')) return 'Windows PC';
            if (deviceName.includes('Macintosh')) return 'Mac';
            if (deviceName.includes('iPad')) return 'iPad';
            return 'Web Browser';
        }
        return deviceName;
    };

    const getDeviceIcon = (deviceName) => {
        if (!deviceName) return <Monitor className="w-5 h-5" />;
        const dn = deviceName.toLowerCase();
        if (dn.includes('iphone') || dn.includes('android')) return <Smartphone className="w-5 h-5" />;
        if (dn.includes('ipad') || dn.includes('tablet')) return <Tablet className="w-5 h-5" />;
        return <Monitor className="w-5 h-5" />;
    };

    // Show loading state
    if (isLoadingProfile || isAppInfoLoading) {
        return (
            <div className="w-full max-w-4xl mx-auto p-8">
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                    <div className="relative">
                        <Loader2 className="w-16 h-16 animate-spin" style={{ color: propPrimaryColor }} />
                        <Sparkles className="w-6 h-6 absolute top-0 right-0 animate-pulse" style={{ color: propPrimaryColor }} />
                    </div>
                    <p className="text-lg font-semibold text-gray-600 animate-pulse">
                        {t.loadingProfile}
                    </p>
                </div>
            </div>
        );
    }

    // Show error state
    if (profileError || !user) {
        return (
            <div className="w-full max-w-4xl mx-auto p-8">
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                    <AlertCircle className="w-16 h-16 text-red-500" />
                    <p className="text-lg font-semibold text-red-600">
                        {profileError || t.failedLoadProfile}
                    </p>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="mt-4 px-6 py-2 rounded-xl font-semibold text-white transition-all hover:brightness-110"
                            style={{ backgroundColor: propPrimaryColor }}
                        >
                            {t.close}
                        </button>
                    )}
                </div>
            </div>
        );
    }

    const displayName = user["Full Name"] || user.fullName || user.full_name || `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User';
    const roles = user.Roles || [];
    const permissions = user.permissions || [];
    const biography = user.biography || user.bio || '';

    // Validate profile image URL
    const profileImageURL = getValidProfileImageUrl(user);

    const getInitial = () => {
        return displayName.charAt(0).toUpperCase();
    };

    const handleLogoutSessions = async (all = false, sessionIds = []) => {
        if (!authToken) {
            const errorMsg = t.noSessions;
            setLocalError(errorMsg);
            return;
        }

        setIsLoggingOutSession(true);
        setLocalError('');
        setLocalSuccess('');
        try {
            const data = await post('/logout_sessions', {
                email: user.email || userEmail || '',
                all_sessions: all,
                session_ids: sessionIds
            }, { token: authToken });

            if (data.success) {
                if (all) {
                    setActiveSessions([]);
                } else {
                    setActiveSessions(prev => prev.filter(s => !sessionIds.includes(s._id)));
                }
                setLocalSuccess(t.logoutSuccess);
                if (onSuccess) onSuccess(data);
            } else {
                const errorMsg = data.message || data.error || 'Logout failed';
                setLocalError(errorMsg);
                if (onError) onError(errorMsg);
            }
        } catch (error) {
            console.error('⚠️ Logout Sessions Error:', error);
            setLocalError(t.connectionError);
        } finally {
            setIsLoggingOutSession(false);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            {/* Hero Header with Gradient Background */}
            <div
                className="relative rounded-t-[2.5rem] p-8 md:p-12 overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${primaryColor}15 0%, ${primaryColor}05 100%)`
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10 blur-3xl rounded-full"
                    style={{ backgroundColor: primaryColor }}></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10 blur-3xl rounded-full"
                    style={{ backgroundColor: primaryColor }}></div>

                {/* Profile Header Content */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
                    {/* Avatar */}
                    <div className="relative group">
                        {profileImageURL && !imageLoadError ? (
                            <div className="relative">
                                <img
                                    src={profileImageURL}
                                    alt={displayName}
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-2xl ring-4 ring-white transition-transform group-hover:scale-105"
                                    onError={() => setImageLoadError(true)}
                                />
                            </div>
                        ) : (
                            <div
                                className="w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center text-5xl md:text-6xl font-black shadow-2xl ring-4 ring-white transition-transform group-hover:scale-105"
                                style={{
                                    background: `linear-gradient(135deg, ${primaryColor}30 0%, ${primaryColor}10 100%)`,
                                    color: primaryColor
                                }}
                            >
                                {getInitial()}
                            </div>
                        )}
                        <div
                            className="absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                            style={{ backgroundColor: primaryColor }}
                        >
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="flex-1 text-center md:text-left space-y-3">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                            {displayName}
                        </h1>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                            <Mail className="w-5 h-5" />
                            <span className="text-lg font-medium">{user.email || userEmail}</span>
                        </div>
                        {biography && (
                            <p className="text-gray-600 max-w-2xl leading-relaxed italic">
                                "{biography}"
                            </p>
                        )}

                        {/* Role Badges */}
                        {roles.length > 0 && (
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
                                {roles.map((role, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover:scale-105 hover:shadow-md"
                                        style={{
                                            backgroundColor: `${primaryColor}20`,
                                            color: primaryColor,
                                            border: `2px solid ${primaryColor}40`
                                        }}
                                    >
                                        {role.replace(/_/g, ' ')}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content Card */}
            <div
                className="rounded-b-[2.5rem] shadow-2xl border-x border-b border-gray-100 p-8 md:p-12"
                style={{ backgroundColor: backgroundColor }}
            >
                <FormError message={localError} />
                <FormSuccess message={localSuccess} />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Column: Personal Info & Permissions */}
                    <div className="space-y-8">
                        {/* Personal Information */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 pb-3 border-b-2" style={{ borderColor: `${primaryColor}20` }}>
                                <div className="p-2 rounded-xl" style={{ backgroundColor: `${primaryColor}15` }}>
                                    <User className="w-6 h-6" style={{ color: primaryColor }} />
                                </div>
                                <h2 className="text-xl font-black text-gray-800 uppercase tracking-wide">
                                    {t.personalInfo}
                                </h2>
                            </div>
                            <div className="space-y-4 pl-2">
                                <div className="group">
                                    <p className="text-xs uppercase font-bold text-gray-400 tracking-widest mb-1.5">
                                        {t.fullNameLabel}
                                    </p>
                                    <p className="text-base font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                                        {displayName}
                                    </p>
                                </div>
                                <div className="group">
                                    <p className="text-xs uppercase font-bold text-gray-400 tracking-widest mb-1.5">
                                        {t.email}
                                    </p>
                                    <p className="text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                                        {user.email || userEmail}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Permissions */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 pb-3 border-b-2" style={{ borderColor: `${primaryColor}20` }}>
                                <div className="p-2 rounded-xl" style={{ backgroundColor: `${primaryColor}15` }}>
                                    <Key className="w-6 h-6" style={{ color: primaryColor }} />
                                </div>
                                <h2 className="text-xl font-black text-gray-800 uppercase tracking-wide">
                                    {t.permissionsLabel}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {permissions.length > 0 ? permissions.map((perm, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-2xl border-2 flex flex-col gap-2 hover:shadow-lg transition-all group"
                                        style={{
                                            backgroundColor: `${primaryColor}05`,
                                            borderColor: `${primaryColor}20`
                                        }}
                                    >
                                        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: primaryColor }}>
                                            {perm["Permission ID"]?.split('.')[0] || 'App'}
                                        </p>
                                        <p className="text-sm font-bold text-gray-800">
                                            {perm["Permission ID"]?.split('.').slice(1).join(' ') || perm["Permission ID"]}
                                        </p>
                                        <span
                                            className="mt-1 w-fit px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-widest"
                                            style={{ backgroundColor: primaryColor, color: 'white' }}
                                        >
                                            {perm["Action Key"]}
                                        </span>
                                    </div>
                                )) : (
                                    <div className="py-8 text-center">
                                        <Key className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                                        <p className="text-sm text-gray-400 italic">{t.noPermissions}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Active Sessions */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 pb-3 border-b-2" style={{ borderColor: `${primaryColor}20` }}>
                            <div className="p-2 rounded-xl" style={{ backgroundColor: `${primaryColor}15` }}>
                                <Settings className="w-6 h-6" style={{ color: primaryColor }} />
                            </div>
                            <h2 className="text-xl font-black text-gray-800 uppercase tracking-wide">
                                {t.activeSessions}
                            </h2>
                        </div>

                        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {activeSessions.length > 0 ? activeSessions.map((session) => (
                                <div
                                    key={session._id}
                                    className="p-4 border-2 rounded-2xl flex justify-between items-center group hover:shadow-lg transition-all"
                                    style={{
                                        backgroundColor: `${primaryColor}05`,
                                        borderColor: `${primaryColor}15`
                                    }}
                                >
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="p-2 rounded-xl" style={{ backgroundColor: `${primaryColor}10`, color: primaryColor }}>
                                            {getDeviceIcon(session['Device Name'])}
                                        </div>
                                        <div className="space-y-1.5 flex-1">
                                            <div className="font-black text-gray-800 text-sm" title={session['Device Name']}>
                                                {getCleanDeviceName(session['Device Name'])}
                                            </div>
                                            <div className="text-xs text-gray-600 font-semibold flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                                {session.IP}
                                            </div>
                                            {session['Expiration Date'] && (
                                                <div className="text-xs text-gray-500 italic">
                                                    {t.expiry}: {new Date(session['Expiration Date']).toLocaleDateString()}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleLogoutSessions(false, [session._id])}
                                        disabled={isLoggingOutSession}
                                        className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110"
                                        title={t.logoutThisSession}
                                    >
                                        <LogOut className="w-5 h-5" />
                                    </button>
                                </div>
                            )) : (
                                <div className="py-12 text-center">
                                    <Settings className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                                    <p className="text-sm text-gray-400 italic">
                                        {t.noSessions}
                                    </p>
                                </div>
                            )}
                        </div>

                        {activeSessions.length > 1 && (
                            <button
                                onClick={() => handleLogoutSessions(true)}
                                disabled={isLoggingOutSession}
                                className="w-full py-3 text-sm uppercase tracking-widest font-extrabold text-white rounded-2xl transition-all active:scale-95 hover:brightness-110 shadow-lg"
                                style={{ backgroundColor: '#ef4444' }}
                            >
                                {isLoggingOutSession ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        {t.loggingOut}
                                    </span>
                                ) : (
                                    t.logoutAllSessions
                                )}
                            </button>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t-2" style={{ borderColor: `${primaryColor}10` }}>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="px-10 py-4 rounded-2xl font-bold text-base transition-all border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 active:scale-95 shadow-md hover:shadow-lg"
                        >
                            {t.closeProfile}
                        </button>
                    )}
                    <button
                        onClick={() => onNavigate && onNavigate('change-password')}
                        className="px-10 py-4 rounded-2xl font-bold text-base text-white shadow-lg transition-all active:scale-95 hover:brightness-110 hover:shadow-xl"
                        style={{ backgroundColor: primaryColor }}
                    >
                        {t.changePassword}
                    </button>
                </div>
            </div>
        </div>
    );
}
