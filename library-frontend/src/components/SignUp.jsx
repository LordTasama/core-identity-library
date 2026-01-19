import { useState } from 'react';
import SocialAuthButtons from './SocialAuthButtons';
import { translations } from '../translations';
import { useSecurity } from '../hooks/useSecurity';
import { useAuthApi } from '../hooks/useAuthApi';
import { useAppInfo } from '../hooks/useAppInfo';
import AuthError from './AuthError';
import FormError from './FormError';

export default function SignUp({
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
    const { primaryColor, backgroundColor, isLoading: isAppInfoLoading } = useAppInfo(apiBaseUrl, apiToken, user, propPrimaryColor, propBackgroundColor);
    const { post } = useAuthApi(apiBaseUrl, apiToken);
    const [isLoading, setIsLoading] = useState(false);
    const [localError, setLocalError] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    if (isAppInfoLoading) return null;

    if (!isAuthorized) {
        return <AuthError />;
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLocalError('');

        if (formData.password !== formData.confirmPassword) {
            const errorMsg = t.passwordsDontMatch;
            setLocalError(errorMsg);
            if (onError) onError(errorMsg);
            return;
        }

        setIsLoading(true);
        try {
            const result = await post('/register', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            });

            if (result.success) {
                if (onSuccess) onSuccess({ ...result, email: formData.email });
            } else {
                const errorMsg = result.message || result.error || t.unknownError;
                setLocalError(errorMsg);
                if (onError) onError(errorMsg);
                setIsLoading(false);
            }
        } catch (err) {
            console.error("⚠️ SignUp Error:", err);
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
                <h2 className="text-2xl font-semibold">{t.createAccount}</h2>
                <p className="text-sm text-gray-500">{t.createAccountSubtitle}</p>
            </div>

            <div className="space-y-4">
                <SocialAuthButtons
                    apiBaseUrl={apiBaseUrl}
                    user={user}
                    primaryColor={primaryColor}
                    onSuccess={onSuccess}
                    onError={(err) => {
                        setLocalError(err);
                        if (onError) onError(err);
                    }}
                    lang={lang}
                    apiToken={apiToken}
                    texts={customTexts}
                />

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="px-2 text-gray-500" style={cardStyle}>
                            {t.or}
                        </span>
                    </div>
                </div>

                <form onSubmit={handleSignUp} className="space-y-4">
                    <FormError message={localError} />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t.firstName}</label>
                            <input
                                value={formData.firstName}
                                onChange={(e) => updateField('firstName', e.target.value)}
                                required
                                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t.lastName}</label>
                            <input
                                value={formData.lastName}
                                onChange={(e) => updateField('lastName', e.target.value)}
                                required
                                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">{t.email}</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            required
                            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">{t.password}</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => updateField('password', e.target.value)}
                            required
                            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">{t.confirmPassword}</label>
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
                        {isLoading ? t.creatingAccount : t.createAccount}
                    </button>
                </form>
            </div>

            <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                    {t.alreadyHaveAccount}{' '}
                    <button
                        type="button"
                        onClick={() => onNavigate && onNavigate('login')}
                        className="font-medium hover:underline"
                        style={primaryTextStyle}
                    >
                        {t.login}
                    </button>
                </p>
            </div>
        </div>
    );
}
