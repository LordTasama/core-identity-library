/**
 * Componente: UserProfile
 * Objetivo: Visualizar y gestionar la información detallada del perfil del usuario.
 * Descripción: Muestra datos personales, roles, permisos y sesiones activas, permitiendo también la gestión de estas últimas.
 */
import { useState, useEffect } from 'react';
import { translations } from '../translations';
import { useUserProfile } from '../hooks/useUserProfile';
import { useAuthApi } from '../hooks/useAuthApi';
import { getValidProfileImageUrl } from '../utils/urlValidation';
import { User, Key, Mail, Settings, LogOut, AlertCircle, Sparkles, Monitor, Smartphone, Tablet } from 'lucide-react';
import FormError from './FormError';
import LoadingSpinner from './LoadingSpinner';
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
    user: propUser,
    texts: customTexts = {}
}) {
    const t = { ...translations[lang], ...customTexts };

    // Fetch user profile data from /me endpoint, using propUser as initial value if provided
    const { user, isLoading: isLoadingProfile, error: profileError } = useUserProfile(apiBaseUrl, apiToken, authToken, userEmail, propUser);

    const primaryColor = propPrimaryColor;
    const backgroundColor = propBackgroundColor;
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
    if (isLoadingProfile) {
        return (
            <div className="cil-w-full cil-max-w-5xl cil-mx-auto cil-animate-pulse">
                {/* Hero Header Skeleton */}
                <div className="cil-relative cil-rounded-t-[2.5rem] cil-p-8 md:cil-p-12 cil-min-h-[300px] cil-flex cil-items-center"
                    style={{ background: `linear-gradient(135deg, ${propPrimaryColor}15 0%, ${propPrimaryColor}05 100%)` }}>
                    <div className="cil-flex cil-flex-col md:cil-flex-row cil-items-center md:cil-items-start cil-gap-6 cil-w-full">
                        <div className="cil-w-32 cil-h-32 md:cil-w-40 md:cil-h-40 cil-rounded-3xl cil-bg-gray-200"></div>
                        <div className="cil-flex-1 cil-space-y-4 cil-w-full">
                            <div className="cil-h-12 cil-w-2/3 cil-bg-gray-200 cil-rounded-xl"></div>
                            <div className="cil-h-6 cil-w-1/3 cil-bg-gray-200 cil-rounded-lg"></div>
                            <div className="cil-flex cil-gap-2">
                                <div className="cil-h-8 cil-w-20 cil-bg-gray-200 cil-rounded-full"></div>
                                <div className="cil-h-8 cil-w-20 cil-bg-gray-200 cil-rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Skeleton */}
                <div className="cil-rounded-b-[2.5rem] cil-shadow-2xl cil-border cil-p-8 md:cil-p-12" style={{ backgroundColor: propBackgroundColor }}>
                    <div className="cil-grid cil-grid-cols-1 lg:cil-grid-cols-2 cil-gap-10">
                        <div className="cil-space-y-8">
                            <div className="cil-h-8 cil-w-48 cil-bg-gray-100 cil-rounded-lg"></div>
                            <div className="cil-space-y-4">
                                <div className="cil-h-20 cil-w-full cil-bg-gray-50 cil-rounded-2xl"></div>
                                <div className="cil-h-20 cil-w-full cil-bg-gray-50 cil-rounded-2xl"></div>
                            </div>
                        </div>
                        <div className="cil-space-y-8">
                            <div className="cil-h-8 cil-w-48 cil-bg-gray-100 cil-rounded-lg"></div>
                            <div className="cil-space-y-3">
                                <div className="cil-h-24 cil-w-full cil-bg-gray-50 cil-rounded-2xl"></div>
                                <div className="cil-h-24 cil-w-full cil-bg-gray-50 cil-rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Show error state
    if (profileError || !user) {
        return (
            <div className="cil-w-full cil-max-w-4xl cil-mx-auto cil-p-8">
                <div className="cil-flex cil-flex-col cil-items-center cil-justify-center cil-py-20 cil-space-y-4">
                    <AlertCircle className="cil-w-16 cil-h-16 cil-text-red-500" />
                    <p className="cil-text-lg cil-font-semibold cil-text-red-600">
                        {profileError || t.failedLoadProfile}
                    </p>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="cil-mt-4 cil-px-6 cil-py-2 cil-rounded-xl cil-font-semibold cil-text-white cil-transition-all cil-hover:brightness-110"
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
        <div className="cil-w-full cil-max-w-5xl cil-mx-auto">
            {/* Hero Header with Gradient Background */}
            <div
                className="cil-relative cil-rounded-t-[2.5rem] cil-p-8 md:cil-p-12 cil-overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${primaryColor}15 0%, ${primaryColor}05 100%)`
                }}
            >
                {/* Decorative Elements */}
                <div className="cil-absolute cil-top-0 cil-right-0 cil-w-64 cil-h-64 cil-opacity-10 cil-blur-3xl cil-rounded-full"
                    style={{ backgroundColor: primaryColor }}></div>
                <div className="cil-absolute cil-bottom-0 cil-left-0 cil-w-48 cil-h-48 cil-opacity-10 cil-blur-3xl cil-rounded-full"
                    style={{ backgroundColor: primaryColor }}></div>

                {/* Profile Header Content */}
                <div className="cil-relative cil-flex cil-flex-col md:cil-flex-row cil-items-center md:cil-items-start cil-gap-6">
                    {/* Avatar */}
                    <div className="cil-relative cil-group">
                        {profileImageURL && !imageLoadError ? (
                            <div className="cil-relative">
                                <img
                                    src={profileImageURL}
                                    alt={displayName}
                                    className="cil-w-32 cil-h-32 md:cil-w-40 md:cil-h-40 cil-rounded-3xl cil-object-cover cil-shadow-2xl cil-ring-4 cil-ring-white cil-transition-transform cil-group-hover:scale-105"
                                    style={{ filter: 'none' }}
                                    referrerPolicy="no-referrer"
                                    onError={() => setImageLoadError(true)}
                                />
                            </div>
                        ) : (
                            <div
                                className="cil-w-32 cil-h-32 md:cil-w-40 md:cil-h-40 cil-rounded-3xl cil-flex cil-items-center cil-justify-center cil-text-5xl md:cil-text-6xl cil-font-black cil-shadow-2xl cil-ring-4 cil-ring-white cil-transition-transform cil-group-hover:scale-105"
                                style={{
                                    background: `linear-gradient(135deg, ${primaryColor}30 0%, ${primaryColor}10 100%)`,
                                    color: primaryColor
                                }}
                            >
                                {getInitial()}
                            </div>
                        )}
                        <div
                            className="cil-absolute cil--bottom-2 cil--right-2 cil-w-12 cil-h-12 cil-rounded-2xl cil-flex cil-items-center cil-justify-center cil-shadow-lg"
                            style={{ backgroundColor: primaryColor }}
                        >
                            <Sparkles className="cil-w-6 cil-h-6 cil-text-white" />
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="cil-flex-1 cil-text-center md:cil-text-left cil-space-y-3">
                        <h1 className="cil-text-4xl md:cil-text-5xl cil-font-black cil-text-gray-900 cil-tracking-tight">
                            {displayName}
                        </h1>
                        <div className="cil-flex cil-items-center cil-justify-center md:cil-justify-start cil-gap-2 cil-text-gray-600">
                            <Mail className="cil-w-5 cil-h-5" />
                            <span className="cil-text-lg cil-font-medium">{user.email || userEmail}</span>
                        </div>
                        {biography && (
                            <p className="cil-text-gray-600 cil-max-w-2xl cil-leading-relaxed cil-italic">
                                "{biography}"
                            </p>
                        )}

                        {/* Role Badges */}
                        {roles.length > 0 && (
                            <div className="cil-flex cil-flex-wrap cil-gap-2 cil-justify-center md:cil-justify-start cil-pt-2">
                                {roles.map((role, idx) => (
                                    <span
                                        key={idx}
                                        className="cil-px-4 cil-py-1.5 cil-rounded-full cil-text-xs cil-font-bold cil-uppercase cil-tracking-wider cil-shadow-sm cil-transition-all cil-hover:scale-105 cil-hover:shadow-md"
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
                className="cil-rounded-b-[2.5rem] cil-shadow-2xl cil-border-x cil-border-b cil-border-gray-100 cil-p-8 md:cil-p-12"
                style={{ backgroundColor: backgroundColor }}
            >
                <FormError message={localError} />
                <FormSuccess message={localSuccess} />

                <div className="cil-grid cil-grid-cols-1 lg:cil-grid-cols-2 cil-gap-10">
                    {/* Left Column: Personal Info & Permissions */}
                    <div className="cil-space-y-8">
                        {/* Personal Information */}
                        <div className="cil-space-y-4">
                            <div className="cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2" style={{ borderColor: `${primaryColor}20` }}>
                                <div className="cil-p-2 cil-rounded-xl" style={{ backgroundColor: `${primaryColor}15` }}>
                                    <User className="cil-w-6 cil-h-6" style={{ color: primaryColor }} />
                                </div>
                                <h2 className="cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide">
                                    {t.personalInfo}
                                </h2>
                            </div>
                            <div className="cil-space-y-4 cil-pl-2">
                                <div className="cil-group">
                                    <p className="cil-text-xs cil-uppercase cil-font-bold cil-text-gray-400 cil-tracking-widest cil-mb-1.5">
                                        {t.fullNameLabel}
                                    </p>
                                    <p className="cil-text-base cil-font-bold cil-text-gray-800 cil-group-hover:text-gray-900 cil-transition-colors">
                                        {displayName}
                                    </p>
                                </div>
                                <div className="cil-group">
                                    <p className="cil-text-xs cil-uppercase cil-font-bold cil-text-gray-400 cil-tracking-widest cil-mb-1.5">
                                        {t.email}
                                    </p>
                                    <p className="cil-text-base cil-font-semibold cil-text-gray-700 cil-group-hover:text-gray-900 cil-transition-colors">
                                        {user.email || userEmail}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Permissions */}
                        <div className="cil-space-y-4">
                            <div className="cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2" style={{ borderColor: `${primaryColor}20` }}>
                                <div className="cil-p-2 cil-rounded-xl" style={{ backgroundColor: `${primaryColor}15` }}>
                                    <Key className="cil-w-6 cil-h-6" style={{ color: primaryColor }} />
                                </div>
                                <h2 className="cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide">
                                    {t.permissionsLabel}
                                </h2>
                            </div>
                            <div className="cil-grid cil-grid-cols-1 cil-gap-3 cil-max-h-[400px] cil-overflow-y-auto cil-pr-2 cil-custom-scrollbar">
                                {permissions.length > 0 ? permissions.map((perm, idx) => (
                                    <div
                                        key={idx}
                                        className="cil-p-4 cil-rounded-2xl cil-border-2 cil-flex cil-flex-col cil-gap-2 cil-hover:shadow-lg cil-transition-all cil-group"
                                        style={{
                                            backgroundColor: `${primaryColor}05`,
                                            borderColor: `${primaryColor}20`
                                        }}
                                    >
                                        <p className="cil-text-xs cil-font-bold cil-uppercase cil-tracking-wider" style={{ color: primaryColor }}>
                                            {perm["Permission ID"]?.split('.')[0] || 'App'}
                                        </p>
                                        <p className="cil-text-sm cil-font-bold cil-text-gray-800">
                                            {perm["Permission ID"]?.split('.').slice(1).join(' ') || perm["Permission ID"]}
                                        </p>
                                        <span
                                            className="cil-mt-1 cil-w-fit cil-px-3 cil-py-1 cil-rounded-lg cil-text-xs cil-font-extrabold cil-uppercase cil-tracking-widest"
                                            style={{ backgroundColor: primaryColor, color: 'white' }}
                                        >
                                            {perm["Action Key"]}
                                        </span>
                                    </div>
                                )) : (
                                    <div className="cil-py-8 cil-text-center">
                                        <Key className="cil-w-12 cil-h-12 cil-mx-auto cil-mb-3 cil-text-gray-300" />
                                        <p className="cil-text-sm cil-text-gray-400 cil-italic">{t.noPermissions}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Active Sessions */}
                    <div className="cil-space-y-4">
                        <div className="cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2" style={{ borderColor: `${primaryColor}20` }}>
                            <div className="cil-p-2 cil-rounded-xl" style={{ backgroundColor: `${primaryColor}15` }}>
                                <Settings className="cil-w-6 cil-h-6" style={{ color: primaryColor }} />
                            </div>
                            <h2 className="cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide">
                                {t.activeSessions}
                            </h2>
                        </div>

                        <div className="cil-space-y-3 cil-max-h-[500px] cil-overflow-y-auto cil-pr-2 cil-custom-scrollbar">
                            {activeSessions.length > 0 ? activeSessions.map((session) => (
                                <div
                                    key={session._id}
                                    className="cil-p-4 cil-border-2 cil-rounded-2xl cil-flex cil-justify-between cil-items-center cil-group cil-hover:shadow-lg cil-transition-all"
                                    style={{
                                        backgroundColor: `${primaryColor}05`,
                                        borderColor: `${primaryColor}15`
                                    }}
                                >
                                    <div className="cil-flex cil-items-center cil-gap-3 cil-flex-1">
                                        <div className="cil-p-2 cil-rounded-xl" style={{ backgroundColor: `${primaryColor}10`, color: primaryColor }}>
                                            {getDeviceIcon(session['Device Name'])}
                                        </div>
                                        <div className="cil-space-y-1.5 cil-flex-1">
                                            <div className="cil-font-black cil-text-gray-800 cil-text-sm" title={session['Device Name']}>
                                                {getCleanDeviceName(session['Device Name'])}
                                            </div>
                                            <div className="cil-text-xs cil-text-gray-600 cil-font-semibold cil-flex cil-items-center cil-gap-2">
                                                <span className="cil-w-2 cil-h-2 cil-rounded-full cil-bg-green-500"></span>
                                                {session.IP}
                                            </div>
                                            {session['Expiration Date'] && (
                                                <div className="cil-text-xs cil-text-gray-500 cil-italic">
                                                    {t.expiry}: {new Date(session['Expiration Date']).toLocaleDateString()}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleLogoutSessions(false, [session._id])}
                                        disabled={isLoggingOutSession}
                                        className="cil-p-3 cil-text-red-500 cil-hover:bg-red-50 cil-rounded-xl cil-transition-all cil-opacity-0 cil-group-hover:opacity-100 cil-focus:opacity-100 cil-hover:scale-110"
                                        title={t.logoutThisSession}
                                    >
                                        <LogOut className="cil-w-5 cil-h-5" />
                                    </button>
                                </div>
                            )) : (
                                <div className="cil-py-12 cil-text-center">
                                    <Settings className="cil-w-12 cil-h-12 cil-mx-auto cil-mb-3 cil-text-gray-300" />
                                    <p className="cil-text-sm cil-text-gray-400 cil-italic">
                                        {t.noSessions}
                                    </p>
                                </div>
                            )}
                        </div>

                        {activeSessions.length > 1 && (
                            <button
                                onClick={() => handleLogoutSessions(true)}
                                disabled={isLoggingOutSession}
                                className="cil-w-full cil-py-3 cil-text-sm cil-uppercase cil-tracking-widest cil-font-extrabold cil-text-white cil-rounded-2xl cil-transition-all cil-active:scale-95 cil-hover:brightness-110 cil-shadow-lg"
                                style={{ backgroundColor: '#ef4444' }}
                            >
                                {isLoggingOutSession ? (
                                    <span className="cil-flex cil-items-center cil-justify-center cil-gap-2">
                                        <LoadingSpinner size="sm" color="#ffffff" />
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
                <div className="cil-mt-12 cil-flex cil-flex-col sm:cil-flex-row cil-gap-4 cil-justify-center cil-pt-8 cil-border-t-2" style={{ borderColor: `${primaryColor}10` }}>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="cil-px-10 cil-py-4 cil-rounded-2xl cil-font-bold cil-text-base cil-transition-all cil-border-2 cil-border-gray-300 cil-hover:border-gray-400 cil-hover:bg-gray-50 cil-active:scale-95 cil-shadow-md cil-hover:shadow-lg"
                        >
                            {t.closeProfile}
                        </button>
                    )}
                    <button
                        onClick={() => onNavigate && onNavigate('change-password')}
                        className="cil-px-10 cil-py-4 cil-rounded-2xl cil-font-bold cil-text-base cil-text-white cil-shadow-lg cil-transition-all cil-active:scale-95 cil-hover:brightness-110 cil-hover:shadow-xl"
                        style={{ backgroundColor: primaryColor }}
                    >
                        {t.changePassword}
                    </button>
                </div>
            </div>
        </div>
    );
}
