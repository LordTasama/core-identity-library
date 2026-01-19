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

    // Volatile state (Not persisted in localStorage)
    const [userFullName, setUserFullName] = useState('');
    const [userApps, setUserApps] = useState([]);

    const [initialMsg, setInitialMsg] = useState('');
    const [waitSeconds, setWaitSeconds] = useState(0);
    const [isLoadingSession, setIsLoadingSession] = useState(false);

    const apiBaseUrl = 'http://127.0.0.1:5001/api/auth';
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
                <div className="flex justify-center items-center h-64">
                    <p className="text-gray-600">Syncing session...</p>
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
            authToken: authToken
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
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="mb-8 text-center text-gray-800">
                <h1 className="text-3xl font-bold mb-1">Library Demo</h1>
                <p className="text-gray-600 text-sm mb-4">Demo: Only persists Email and Token</p>

                <div className="flex justify-center items-center gap-4 mb-6">
                    <AppGrid apps={userApps} primaryColor="#0ea5e9" customLabels={{ vendor_portal: 'Vendor' }} />
                    {authToken && (
                        <UserMenu
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
                    <div className="mt-2 text-xs font-mono bg-blue-50 text-blue-700 px-3 py-1 rounded-full inline-flex items-center gap-2">
                        <span>User: {userEmail}</span>
                        <button onClick={handleLogoutDemo} className="underline font-bold">Clear storage</button>
                    </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {['login', 'signup', 'forgot-password', 'reset-password', 'change-password', 'profile', 'email-verification', 'waiting-confirmation'].map(v => (
                        <button key={v} onClick={() => { setWaitSeconds(v.includes('wait') ? 151 : 0); setView(v); }} className={`px-3 py-1 text-xs rounded border transition-colors ${view === v ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-gray-50'}`}>
                            {v}
                        </button>
                    ))}
                </div>

                <div className="mt-4 flex gap-6 justify-center items-center border-t pt-4">
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-sm font-medium">
                            <input type="radio" name="lang" value="en" checked={lang === 'en'} onChange={() => setLang('en')} /> English
                        </label>
                        <label className="flex items-center gap-2 text-sm font-medium">
                            <input type="radio" name="lang" value="es" checked={lang === 'es'} onChange={() => setLang('es')} /> Español
                        </label>
                    </div>

                    {authToken && (
                        <button
                            onClick={() => verifySession(authToken)}
                            className="px-3 py-1 text-xs font-bold rounded bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-colors"
                        >
                            ⚡ Verify Session (Fast)
                        </button>
                    )}
                </div>
            </div>

            <div className="w-full max-w-md">
                {renderView()}
            </div>
        </div>
    );
}

export default App;
