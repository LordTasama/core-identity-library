/**
 * Componente: SignUp
 * Objetivo: Proporcionar una interfaz para que los nuevos usuarios se registren en la plataforma.
 * Descripción: Gestiona el formulario de registro de usuario, validando datos básicos y comunicándose con el endpoint de registro de la API.
 */
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
        return <AuthError lang={lang} />;
    }

    const handleLoginSuccess = (data) => {
        if (onSuccess) {
            onSuccess(data);
        }
    };

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
                handleLoginSuccess({ ...result, email: formData.email });
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
        <div className="cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border" style={cardStyle}>
            <div className="cil-space-y-1 cil-mb-6 cil-text-center">
                <h2 className="cil-text-2xl cil-font-semibold">{t.createAccount}</h2>
                <p className="cil-text-sm cil-text-gray-500">{t.createAccountSubtitle}</p>
            </div>

            <div className="cil-space-y-4">
                <SocialAuthButtons
                    apiBaseUrl={apiBaseUrl}
                    user={user}
                    primaryColor={primaryColor}
                    onSuccess={handleLoginSuccess}
                    onError={(err) => {
                        setLocalError(err);
                        if (onError) onError(err);
                    }}
                    lang={lang}
                    apiToken={apiToken}
                    texts={customTexts}
                />

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

                <form onSubmit={handleSignUp} className="cil-space-y-4">
                    <FormError message={localError} />

                    <div className="cil-grid cil-grid-cols-2 cil-gap-4">
                        <div className="cil-space-y-2">
                            <label className="cil-text-sm cil-font-medium">{t.firstName}</label>
                            <input
                                value={formData.firstName}
                                onChange={(e) => updateField('firstName', e.target.value)}
                                required
                                className="cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
                            />
                        </div>
                        <div className="cil-space-y-2">
                            <label className="cil-text-sm cil-font-medium">{t.lastName}</label>
                            <input
                                value={formData.lastName}
                                onChange={(e) => updateField('lastName', e.target.value)}
                                required
                                className="cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
                            />
                        </div>
                    </div>

                    <div className="cil-space-y-2">
                        <label className="cil-text-sm cil-font-medium">{t.email}</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            required
                            className="cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
                        />
                    </div>

                    <div className="cil-space-y-2">
                        <label className="cil-text-sm cil-font-medium">{t.password}</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => updateField('password', e.target.value)}
                            required
                            className="cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
                        />
                    </div>

                    <div className="cil-space-y-2">
                        <label className="cil-text-sm cil-font-medium">{t.confirmPassword}</label>
                        <input
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => updateField('confirmPassword', e.target.value)}
                            required
                            className="cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-50"
                        style={primaryButtonStyle}
                        disabled={isLoading}
                    >
                        {isLoading ? t.creatingAccount : t.createAccount}
                    </button>
                </form>
            </div>

            <div className="cil-mt-6 cil-text-center">
                <p className="cil-text-sm cil-text-gray-500">
                    {t.alreadyHaveAccount}{' '}
                    <button
                        type="button"
                        onClick={() => onNavigate && onNavigate('login')}
                        className="cil-font-medium cil-hover:underline"
                        style={primaryTextStyle}
                    >
                        {t.login}
                    </button>
                </p>
            </div>
        </div>
    );
}
