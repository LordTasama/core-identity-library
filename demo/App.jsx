import React, { useState, useEffect } from 'react';
import {
    Login,
    SignUp,
    ForgotPassword,
    ResetPassword,
    EmailVerification,
    WaitingConfirmation,
    AppGrid,
    UserMenu,
    UserProfile,
    ChangePassword,
    useAuthApi
} from '../src/index';
import '../src/styles/identity-layer.css';
import { Settings, CreditCard, User } from 'lucide-react';

function App() {
    const [view, setView] = useState('login');
    const [lang, setLang] = useState('en');

    // Initialize state from localStorage (ONLY Email and Token as requested)
    const [userEmail, setUserEmail] = useState(() => localStorage.getItem('demo_user_email') || '');
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('demo_auth_token') || '');
    const [apiToken, setApiToken] = useState(() => import.meta.env.VITE_API_TOKEN || '');
    // Volatile state (Not persisted in localStorage)
    const [userFullName, setUserFullName] = useState('');
    const [userApps, setUserApps] = useState([]);

    const [initialMsg, setInitialMsg] = useState('');
    const [waitSeconds, setWaitSeconds] = useState(0);
    const [isLoadingSession, setIsLoadingSession] = useState(false);

    const apiBaseUrl = 'http://127.0.0.1:5009/api/auth';
    const { verifySession: apiVerify, getUserContext: apiGetContext, logout: apiLogout } = useAuthApi(apiBaseUrl);

    // Context Loading Logic
    useEffect(() => {
        if (authToken) {
            // Since we don't persist context in localStorage, we ALWAYS 
            // fetch it on mount if we have a token (to recover identity/apps)
            fetchUserContext(authToken);
        }
    }, []);

    const verifySession = async (token) => {
        setIsLoadingSession(true);
        try {
            const data = await apiVerify(token, userEmail);
            if (data.expired) {
                handleLogoutDemo();
                return;
            }
            if (!data.success) {
                handleLogoutDemo();
            }
        } catch (err) {
            if (err.data?.expired) handleLogoutDemo();
            else console.error('Fast session check failed:', err);
        } finally {
            setIsLoadingSession(false);
        }
    };

    const fetchUserContext = async (token) => {
        setIsLoadingSession(true);
        try {
            const data = await apiGetContext(token, userEmail);
            if (data.expired) {
                handleLogoutDemo();
                return;
            }
            if (data.success) {
                console.log('🔄 User context loaded:', data);
                const userData = data.user || data;

                if (userData.email) {
                    setUserEmail(userData.email);
                    localStorage.setItem('demo_user_email', userData.email);
                }

                const name = userData["Full Name"] || userData.fullName || userData.full_name;
                if (name) {
                    setUserFullName(name);
                }

                if (userData.apps) {
                    setUserApps(userData.apps);
                }
            } else {
                handleLogoutDemo();
            }
        } catch (err) {
            if (err.data?.expired) handleLogoutDemo();
            else console.error('Full context fetch failed:', err);
        } finally {
            setIsLoadingSession(false);
        }
    };

    const handleSuccess = (data) => {
        console.log('✅ Success callback:', data);
        const userData = data.user || data;

        if (userData.email) {
            setUserEmail(userData.email);
            localStorage.setItem('demo_user_email', userData.email);
        }

        const name = userData["Full Name"] || userData.fullName || userData.full_name;
        if (name) {
            setUserFullName(name);
        }

        if (userData.apps) {
            setUserApps(userData.apps);
        }

        if (data.token) {
            setAuthToken(data.token);
            localStorage.setItem('demo_auth_token', data.token);
        }

        if (data.wait_seconds) setWaitSeconds(data.wait_seconds);

        if (data.redirect_url === '/esperando-confirmacion' || data.redirect_url === '/waiting-confirmation') {
            if (data.message) setInitialMsg(data.message);
            setView('waiting-confirmation');
        } else {
            console.log('✨ Session initialized.');
        }
    };

    const handleError = (error) => {
        console.error('❌ Error callback:', error);
    };

    const handleNavigate = (newView) => {
        setView(newView);
    };

    const handleLogoutDemo = async () => {
        if (authToken) {
            try {
                await apiLogout(authToken, userEmail);
            } catch (err) {
                console.error('Logout failed:', err);
            }
        }
        localStorage.removeItem('demo_user_email');
        localStorage.removeItem('demo_auth_token');
        setUserEmail('');
        setUserFullName('');
        setUserApps([]);
        setAuthToken('');
        setView('login');
    };

    const handleChangePasswordDemo = async () => {
        console.log('Redirecting to change password...');
    };

    const renderView = () => {
        if (isLoadingSession) {
            return (
                <div className="cil-flex cil-justify-center cil-items-center cil-h-64">
                    <p className="cil-text-gray-600">Syncing session...</p>
                </div>
            );
        }

        const commonProps = {
            apiBaseUrl,
            onNavigate: handleNavigate,
            onSuccess: handleSuccess,
            onError: handleError,
            primaryColor: '#0ea5e9',
            lang: lang,
            email: userEmail,
            authToken: authToken,
            apiToken: apiToken
        };

        switch (view) {
            case 'login': return <Login {...commonProps} />;
            case 'signup': return <SignUp {...commonProps} />;
            case 'forgot-password': return <ForgotPassword {...commonProps} />;
            case 'reset-password': return <ResetPassword {...commonProps} initialWaitSeconds={waitSeconds} />;
            case 'change-password': return <ChangePassword {...commonProps} onNavigate={() => setView('login')} />;
            case 'profile': return (
                <UserProfile
                    {...commonProps}
                    userEmail={userEmail}
                    onClose={() => setView('login')}
                />
            );
            case 'email-verification': return <EmailVerification {...commonProps} />;
            case 'waiting-confirmation': return <WaitingConfirmation {...commonProps} userEmail={userEmail} initialMessage={initialMsg} initialWaitSeconds={waitSeconds} />;
            default: return <Login {...commonProps} />;
        }
    };

    return (
        <div className="cil-min-h-screen cil-bg-gray-100 cil-flex cil-flex-col cil-items-center cil-justify-center cil-p-4">
            <div className="cil-mb-8 cil-text-center cil-text-gray-800">
                <h1 className="cil-text-3xl cil-font-bold cil-mb-1">Library Demo</h1>
                <p className="cil-text-gray-600 cil-text-sm cil-mb-4">Demo: Only persists Email and Token</p>

                <div className="cil-flex cil-justify-center cil-items-center cil-gap-4 cil-mb-6">
                    <AppGrid apps={userApps} primaryColor="#0ea5e9" customLabels={{ vendor_portal: 'Vendor' }} />
                    {authToken && (
                        <UserMenu
                            apiToken={apiToken}
                            user={{ email: userEmail, "Full Name": userFullName }}
                            primaryColor="#0ea5e9"
                            lang={lang}
                            onLogout={handleLogoutDemo}
                            onChangePassword={() => setView('change-password')}
                            extraItems={[
                                { icon: User, label: 'View Profile', onClick: () => setView('profile') },
                                { icon: Settings, label: 'Settings', onClick: () => alert('Settings clicked!') }
                            ]}
                        />
                    )}
                </div>

                {userEmail && (
                    <div className="cil-mt-2 cil-text-xs cil-font-mono cil-bg-blue-50 cil-text-blue-700 cil-px-3 cil-py-1 cil-rounded-full cil-inline-flex cil-items-center cil-gap-2">
                        <span>User: {userEmail}</span>
                        <button onClick={handleLogoutDemo} className="cil-underline cil-font-bold">Clear storage</button>
                    </div>
                )}

                <div className="cil-mt-4 cil-flex cil-flex-wrap cil-gap-2 cil-justify-center">
                    {['login', 'signup', 'forgot-password', 'reset-password', 'change-password', 'profile', 'email-verification', 'waiting-confirmation'].map(v => (
                        <button key={v} onClick={() => { setWaitSeconds(v.includes('wait') ? 151 : 0); setView(v); }} className={`cil-px-3 cil-py-1 cil-text-xs cil-rounded cil-border cil-transition-colors ${view === v ? 'cil-bg-blue-600 cil-text-white cil-border-blue-600' : 'cil-bg-white cil-hover:bg-gray-50'}`}>
                            {v}
                        </button>
                    ))}
                </div>

                <div className="cil-mt-4 cil-flex cil-gap-6 cil-justify-center cil-items-center cil-border-t cil-pt-4">
                    <div className="cil-flex cil-gap-4">
                        <label className="cil-flex cil-items-center cil-gap-2 cil-text-sm cil-font-medium">
                            <input type="radio" name="lang" value="en" checked={lang === 'en'} onChange={() => setLang('en')} /> English
                        </label>
                        <label className="cil-flex cil-items-center cil-gap-2 cil-text-sm cil-font-medium">
                            <input type="radio" name="lang" value="es" checked={lang === 'es'} onChange={() => setLang('es')} /> Español
                        </label>
                    </div>

                    {authToken && (
                        <button
                            onClick={() => verifySession(authToken)}
                            className="cil-px-3 cil-py-1 cil-text-xs cil-font-bold cil-rounded cil-bg-green-50 cil-text-green-700 cil-border cil-border-green-200 cil-hover:bg-green-100 cil-transition-colors"
                        >
                            ⚡ Verify Session (Fast)
                        </button>
                    )}
                </div>
            </div>

            <div className={`cil-w-full cil-transition-all cil-duration-500 ${view === 'profile' ? 'cil-max-w-5xl' : 'cil-max-w-md'}`}>
                {renderView()}
            </div>
        </div>
    );
}

export default App;
