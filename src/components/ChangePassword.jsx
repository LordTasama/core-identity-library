import { useState } from 'react';
import { translations } from '../translations';
import { useSecurity } from '../hooks/useSecurity';
import { useAuthApi } from '../hooks/useAuthApi';
import { useAppInfo } from '../hooks/useAppInfo';
import AuthError from './AuthError';
import FormError from './FormError';
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

    if (isAppInfoLoading) return null;

    if (!isAuthorized) {
        return <AuthError />;
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
        <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border" style={cardStyle}>
            <div className="space-y-1 mb-6 text-center">
                <h2 className="text-2xl font-semibold">{t.changePassword}</h2>
                <p className="text-sm text-gray-500">{t.changePasswordSubtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <FormError message={localError} />
                <FormSuccess message={localSuccess} />

                <div className="space-y-2">
                    <label className="text-sm font-medium">{t.oldPassword}</label>
                    <input
                        type="password"
                        value={formData.oldPassword}
                        onChange={(e) => updateField('oldPassword', e.target.value)}
                        required
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">{t.newPassword}</label>
                    <input
                        type="password"
                        value={formData.newPassword}
                        onChange={(e) => updateField('newPassword', e.target.value)}
                        required
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">{t.confirmNewPassword || t.confirmPassword}</label>
                    <input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => updateField('confirmPassword', e.target.value)}
                        required
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"
                    style={primaryButtonStyle}
                    disabled={isLoading}
                >
                    {isLoading ? t.loading : t.changePassword}
                </button>

                {onNavigate && (
                    <button
                        type="button"
                        onClick={() => onNavigate('login')}
                        className="w-full text-sm font-medium hover:underline text-center"
                        style={primaryTextStyle}
                    >
                        {t.backToLogin}
                    </button>
                )}
            </form>
        </div>
    );
}
