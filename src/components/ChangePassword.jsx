/**
 * Componente: ChangePassword
 * Objetivo: Proporcionar una interfaz para que los usuarios autenticados cambien su contraseña actual.
 * Descripción: Gestiona el formulario de cambio de contraseña, validando que las nuevas contraseñas coincidan y comunicándose con la API de autenticación.
 */
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { translations } from '../translations';
import { useSecurity } from '../hooks/useSecurity';
import { useAuthApi } from '../hooks/useAuthApi';
import { useAppInfo } from '../hooks/useAppInfo';
import AuthError from './AuthError';
import FormError from './FormError';
import LoadingSpinner from './LoadingSpinner';
import FormSuccess from './FormSuccess';


export default function ChangePassword({
    apiBaseUrl,
    user = {},
    primaryColor: propPrimaryColor = '#3b82f6',
    backgroundColor: propBackgroundColor = '#ffffff',
    onSuccess,
    onError,
    onNavigate,
    apiToken, // X-API-KEY for headers
    authToken, // User session token
    email, // User email
    lang = 'en',
    texts: customTexts = {}
}) {
    const t = { ...translations[lang], ...customTexts };
    const { isAuthorized } = useSecurity(apiToken);
    const { primaryColor, backgroundColor, isLoading: isAppInfoLoading } = useAppInfo(apiBaseUrl, apiToken, user, propPrimaryColor, propBackgroundColor);
    const { changePassword } = useAuthApi(apiBaseUrl, apiToken);

    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [localError, setLocalError] = useState('');
    const [localSuccess, setLocalSuccess] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                        <div className="cil-h-4 cil-w-56 cil-mx-auto cil-bg-gray-400 cil-rounded"></div>
                    </div>

                    <div className="cil-space-y-4">
                        <div className="cil-space-y-2">
                            <div className="cil-h-4 cil-w-24 cil-bg-gray-400 cil-rounded"></div>
                            <div className="cil-h-10 cil-w-full cil-bg-gray-400 cil-rounded-md"></div>
                        </div>
                        <div className="cil-space-y-2">
                            <div className="cil-h-4 cil-w-24 cil-bg-gray-400 cil-rounded"></div>
                            <div className="cil-h-10 cil-w-full cil-bg-gray-400 cil-rounded-md"></div>
                        </div>
                        <div className="cil-space-y-2">
                            <div className="cil-h-4 cil-w-24 cil-bg-gray-400 cil-rounded"></div>
                            <div className="cil-h-10 cil-w-full cil-bg-gray-400 cil-rounded-md"></div>
                        </div>
                        <div className="cil-h-11 cil-w-full cil-bg-gray-400 cil-rounded-md"></div>
                    </div>

                    <div className="cil-mt-6 cil-flex cil-justify-center">
                        <div className="cil-h-4 cil-w-24 cil-bg-gray-400 cil-rounded"></div>
                    </div>
                </div>
            </div>
        );
    }




    if (!isAuthorized) {
        return <AuthError lang={lang} />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLocalError('');
        setLocalSuccess('');

        if (formData.newPassword !== formData.confirmPassword) {
            const errorMsg = t.passwordsDontMatch;
            setLocalError(errorMsg);
            if (onError) onError(errorMsg);
            return;
        }

        setIsLoading(true);

        try {
            const result = await changePassword({
                email: email || user.email,
                old_password: formData.oldPassword,
                new_password: formData.newPassword,
                token: authToken // Now using user session token, not api key
            });

            if (result.success) {
                setSuccess(true);
                setLocalSuccess(t.passwordChanged);
                if (onSuccess) onSuccess(result);
                setFormData({ oldPassword: '', newPassword: '', confirmPassword: '' });

                // Clear success message after 5 seconds if not navigated away
                setTimeout(() => setLocalSuccess(''), 5000);
            } else {
                const errorMsg = result.message || result.error || t.unknownError;
                setLocalError(errorMsg);
                if (onError) onError(errorMsg);
            }
        } catch (err) {
            console.error("⚠️ ChangePassword Error:", err);
            let errorMsg = err.message;

            if (err.isConnectionError) {
                errorMsg = t.connectionError;
            } else if (err.status >= 500) {
                errorMsg = t.serverError;
            } else if (!errorMsg || errorMsg === 'Error ' + err.status) {
                errorMsg = t.unknownError;
            }

            setLocalError(errorMsg);
            if (onError) onError(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    const updateField = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (localError) setLocalError('');
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
                <h2 className="cil-text-2xl cil-font-semibold">{t.changePassword}</h2>
                <p className="cil-text-sm cil-text-gray-500">{t.changePasswordSubtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="cil-space-y-4">
                <FormError message={localError} />
                <FormSuccess message={localSuccess} />

                <div className="cil-space-y-2">
                    <label className="cil-text-sm cil-font-medium">{t.oldPassword}</label>
                    <div className="cil-relative">
                        <input
                            type={showOldPassword ? "text" : "password"}
                            value={formData.oldPassword}
                            onChange={(e) => updateField('oldPassword', e.target.value)}
                            required
                            className="cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
                        />
                        <button
                            type="button"
                            className="cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700"
                            onClick={() => setShowOldPassword(!showOldPassword)}
                        >
                            {showOldPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <div className="cil-space-y-2">
                    <label className="cil-text-sm cil-font-medium">{t.newPassword}</label>
                    <div className="cil-relative">
                        <input
                            type={showNewPassword ? "text" : "password"}
                            value={formData.newPassword}
                            onChange={(e) => updateField('newPassword', e.target.value)}
                            required
                            className="cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
                        />
                        <button
                            type="button"
                            className="cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                            {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <div className="cil-space-y-2">
                    <label className="cil-text-sm cil-font-medium">{t.confirmNewPassword || t.confirmPassword}</label>
                    <div className="cil-relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={(e) => updateField('confirmPassword', e.target.value)}
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
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="cil-flex cil-items-center cil-gap-2">
                            <LoadingSpinner size="sm" color="#ffffff" />
                            <span>{t.loading}</span>
                        </div>
                    ) : t.changePassword}
                </button>


                {onNavigate && (
                    <button
                        type="button"
                        onClick={() => onNavigate('login')}
                        className="cil-w-full cil-text-sm cil-font-medium cil-hover:underline cil-text-center"
                        style={primaryTextStyle}
                    >
                        {t.backToLogin}
                    </button>
                )}
            </form>
        </div>
    );
}
