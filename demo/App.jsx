import React, { useState, useEffect, useRef } from 'react';
import {
    Login,
    SignUp,
    ForgotPassword,
    ResetPassword,
    EmailVerification,
    WaitingConfirmation,
    AppGrid,
    UserProfile,
    ChangePassword,
    Header,
    LanguageSwitcher,
    useAuthApi,
    LoadingSpinner
} from '../src/index';
import '../src/styles/identity-layer.css';

// Demo Helper: Parse URL params
const getUrlParam = (name) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
};

function App() {
    // Initial view from URL or default to 'login'
    const initialView = getUrlParam('view') || 'login';
    const [view, setView] = useState(initialView);
    const [lang, setLang] = useState('en');

    // Token and AuthMode from URL for simulation
    const urlToken = getUrlParam('token') || '';
    const urlAuthMode = getUrlParam('auth') || '0';

    // Initialize state from localStorage (ONLY Email and Token as requested)
    const [userEmail, setUserEmail] = useState(() => localStorage.getItem('demo_user_email') || '');
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('demo_auth_token') || '');
    const [apiToken, setApiToken] = useState(() => import.meta.env.VITE_API_TOKEN || '');

    // Theme state
    const [primaryColor, setPrimaryColor] = useState('#3b82f6');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [isBrandingLoading, setIsBrandingLoading] = useState(true);

    // Volatile state (Not persisted in localStorage)
    const [userFullName, setUserFullName] = useState('');
    const [userApps, setUserApps] = useState([]);
    const [currentUser, setCurrentUser] = useState(null); // Centralized user object

    const [initialMsg, setInitialMsg] = useState('');
    const [waitSeconds, setWaitSeconds] = useState(0);
    const [isLoadingSession, setIsLoadingSession] = useState(false);

    // FIX: Ref to prevent double execution on mount (Strict Mode)
    const hasFetched = useRef(false);

    const apiBaseUrl = 'http://127.0.0.1:5009/api/auth';

    // FIX: Pass apiToken to useAuthApi hook and destructure getAppColors
    const {
        getUserContext: apiGetContext,
        logout: apiLogout,
        getAppColors,
        get: apiGet
    } = useAuthApi(apiBaseUrl, apiToken);

    // Diagnostic Log
    useEffect(() => {
        console.log('🛠️ [Demo App] API Token:', apiToken ? 'Found (hidden)' : 'MISSING ⚠️');
        if (!apiToken) {
            console.warn('⚠️ apiToken is undefined. Check your .env file or VITE_API_TOKEN configuration.');
        }
    }, [apiToken]);

    // Initial Theme and Session Recovery
    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        // 1. Fetch initial branding colors with 5s timeout
        const fetchInitialTheme = async () => {
            setIsBrandingLoading(true);

            // Timeout promise
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject(new Error('Branding timeout')), 5000);
            });

            try {
                // Race the API call against the timeout
                const data = await Promise.race([
                    getAppColors(),
                    timeoutPromise
                ]);

                if (data.primaryColor) setPrimaryColor(data.primaryColor);
                if (data.backgroundColor) setBackgroundColor(data.backgroundColor);
            } catch (err) {
                console.warn('⚠️ Using default branding:', err.message);
            } finally {
                setIsBrandingLoading(false);
                // Recover session if token exists
                if (authToken) {
                    fetchUserContext(authToken);
                }
            }
        };

        fetchInitialTheme();
    }, []);

    const fetchUserContext = async (token) => {
        setIsLoadingSession(true);
        try {
            const data = await apiGetContext(token, userEmail);
            if (data.expired) {
                handleLogoutDemo();
                return;
            }
            if (data.success) {
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

                setCurrentUser(userData); // Update centralized user object

                // Update theme colors from user context if provided
                if (userData.primaryColor) setPrimaryColor(userData.primaryColor);
                if (userData.backgroundColor) setBackgroundColor(userData.backgroundColor);

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

        setCurrentUser(userData); // Update centralized user object

        if (data.token) {
            setAuthToken(data.token);
            localStorage.setItem('demo_auth_token', data.token);
        }

        if (data.wait_seconds) setWaitSeconds(data.wait_seconds);

        // Update theme colors if provided
        if (userData.primaryColor) setPrimaryColor(userData.primaryColor);
        if (userData.backgroundColor) setBackgroundColor(userData.backgroundColor);

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
        setCurrentUser(null);
        setAuthToken('');
        // Reset to default or re-fetch initial branding? Let's re-fetch branding
        setPrimaryColor('#3b82f6');
        setBackgroundColor('#ffffff');
        setView('login');

        // Re-fetch branding to be sure
        getAppColors().then(data => {
            if (data.primaryColor) setPrimaryColor(data.primaryColor);
            if (data.backgroundColor) setBackgroundColor(data.backgroundColor);
        }).catch(() => { });
    };
    
    // Test helper for specific X-REQUEST-URL headers
    const handleRequestWithUrl = async (url) => {
        try {
            console.log(`🚀 Requesting branding for: ${url}`);
            const data = await apiGet('/colors-app', {
                headers: { 'X-REQUEST-URL': url }
            });
            console.log(`✅ Success [${url}]:`, data);
            if (data.primaryColor) setPrimaryColor(data.primaryColor);
            if (data.backgroundColor) setBackgroundColor(data.backgroundColor);
        } catch (err) {
            console.error(`❌ Error [${url}]:`, err);
            alert(`Failed to fetch colors for ${url}\nError: ${err.message}`);
        }
    };


    const renderView = () => {
        if (isLoadingSession) {
            return (
                <div className="cil-flex cil-justify-center cil-items-center cil-h-64">
                    <div className="cil-text-center">
                        <LoadingSpinner size="lg" color={primaryColor} />
                        <p className="cil-mt-4 cil-text-gray-600 cil-animate-pulse">Syncing session...</p>
                    </div>
                </div>
            );
        }

        const commonProps = {
            apiBaseUrl,
            onNavigate: handleNavigate,
            onSuccess: handleSuccess,
            onError: handleError,
            primaryColor,
            backgroundColor,
            lang: lang,
            email: userEmail,
            authToken: authToken,
            apiToken: apiToken
        };

        switch (view) {
            case 'login': return <Login {...commonProps} />;
            case 'signup': return <SignUp {...commonProps} />;
            case 'forgot-password': return <ForgotPassword {...commonProps} />;
            case 'change-password': return <ChangePassword {...commonProps} onNavigate={() => setView('login')} />;
            case 'profile': return (
                <UserProfile
                    {...commonProps}
                    user={currentUser}
                    userEmail={userEmail}
                    onClose={() => setView('login')}
                />
            );
            case 'reset-password': return (
                <ResetPassword
                    {...commonProps}
                    token={urlToken}
                    authMode={urlAuthMode}
                    email={userEmail}
                    onNavigate={handleNavigate}
                />
            );
            case 'email-verification': return (
                <EmailVerification
                    {...commonProps}
                    token={urlToken}
                    onNavigate={handleNavigate}
                />
            );
            case 'waiting-confirmation': return <WaitingConfirmation {...commonProps} userEmail={userEmail} initialMessage={initialMsg} initialWaitSeconds={waitSeconds} />;
            default: return <Login {...commonProps} />;
        }
    };

    if (isBrandingLoading) {
        return (
            <div className="cil-min-h-screen cil-bg-gray-50 cil-flex cil-flex-col cil-items-center cil-justify-center">
                <div className="cil-relative">
                    <div className="cil-w-24 cil-h-24 cil-rounded-3xl cil-bg-white cil-shadow-2xl cil-flex cil-items-center cil-justify-center cil-animate-bounce">
                        <div className="cil-w-16 cil-h-16 cil-rounded-2xl cil-bg-blue-600/10 cil-flex cil-items-center cil-justify-center">
                            <LoadingSpinner size="lg" color="#3b82f6" />
                        </div>
                    </div>
                    <div className="cil-absolute cil--bottom-12 cil-left-1/2 cil--translate-x-1/2 cil-whitespace-nowrap">
                        <p className="cil-text-gray-400 cil-text-sm cil-font-bold cil-uppercase cil-tracking-widest cil-animate-pulse">
                            Configuring Experience
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cil-min-h-screen cil-bg-gray-100 cil-flex cil-flex-col">
            {/* Header Integration */}
            <Header
                user={currentUser || { email: userEmail, "Full Name": userFullName }}
                apps={userApps}
                primaryColor={primaryColor}
                backgroundColor={backgroundColor}
                lang={lang}
                onLanguageChange={(l) => setLang(l)}
                navItems={[
                    { label: 'Inicio', onClick: () => alert('Home clicked!'), active: true },
                    { label: 'Contacto', onClick: () => alert('Contact clicked!') }
                ]}
                customers={['Client Alpha', 'Client Beta', 'Client Gamma']}
                onCustomerChange={(selected) => console.log('Selected customers:', selected)}
                onSearch={(q) => console.log('Searching for:', q)}
                notificationsEnabled={true}
                notificationData={[]}
                onNotification={() => alert('Notifications clicked!')}
                onTheme={() => alert('Theme toggle clicked!')}
                onSettings={() => alert('Settings clicked!')}
                extraItems={[
                    <button key="gift" className="cil-p-2 cil-rounded-full cil-hover:bg-white/10 cil-transition-colors" onClick={() => alert('Gift clicked!')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12v10H4V12" /><path d="M2 7h20v5H2z" /><path d="M12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
                    </button>
                ]}
                apiBaseUrl={apiBaseUrl}
                apiToken={apiToken}
            />

            <div className="cil-flex-1 cil-flex cil-flex-col cil-items-center cil-justify-center cil-p-4">
                <div className="cil-mb-8 cil-text-center cil-text-gray-800">
                    <h1 className="cil-text-3xl cil-font-bold cil-mb-1">Library Demo</h1>
                    <p className="cil-text-gray-600 cil-text-sm cil-mb-4">Demo: Only persists Email and Token</p>

                    <div className="cil-flex cil-justify-center cil-items-center cil-gap-4 cil-mb-6">
                        {!userEmail && (
                            <div className="cil-flex cil-gap-4">
                                <AppGrid apps={userApps} primaryColor={primaryColor} customLabels={{ vendor_portal: 'Vendor' }} />
                                <LanguageSwitcher lang={lang} onLanguageChange={setLang} variant="default" primaryColor={primaryColor} />
                            </div>
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
                </div>

                <div className={`cil-w-full cil-transition-all cil-duration-500 ${view === 'profile' ? 'cil-max-w-5xl' : 'cil-max-w-md'}`}>
                    {renderView()}
                </div>
            </div>

            {/* Simulation Controls Overlay (Dev only) */}
            <div className="cil-fixed cil-bottom-4 cil-left-4 cil-flex cil-flex-col cil-gap-2 cil-z-[100]">
                <div className="cil-bg-black/80 cil-text-white cil-p-3 cil-rounded-lg cil-text-[10px] cil-font-mono cil-shadow-2xl">
                    <p className="cil-font-bold cil-mb-1 cil-text-blue-400">Simulation Tools</p>
                    <button
                        onClick={() => window.location.href = '?view=email-verification&token=DEMO_TOKEN'}
                        className="cil-block cil-hover:text-blue-300 cil-mb-1"
                    >
                        &gt; Verify Email (Link)
                    </button>
                    <button
                        onClick={() => window.location.href = '?view=reset-password&token=DEMO_TOKEN&auth=0'}
                        className="cil-block cil-hover:text-blue-300 cil-mb-1"
                    >
                        &gt; Reset Pass (Normal)
                    </button>
                    <button
                        onClick={() => window.location.href = '?view=reset-password&token=DEMO_TOKEN&auth=1'}
                        className="cil-block cil-hover:text-blue-300"
                    >
                        &gt; Reset Pass (Social)
                    </button>

                    <div className="cil-mt-2 cil-pt-2 cil-border-t cil-border-white/10">
                        <p className="cil-font-bold cil-mb-1 cil-text-green-400">Branding Tests</p>
                        <button
                            onClick={() => handleRequestWithUrl('https://eprcrm.prismgrp.com')}
                            className="cil-block cil-hover:text-green-300 cil-mb-1"
                        >
                            &gt; EPR CRM Branding
                        </button>
                        <button
                            onClick={() => handleRequestWithUrl('https://insights.prismgrp.com')}
                            className="cil-block cil-hover:text-green-300"
                        >
                            &gt; Insights Branding
                        </button>
                    </div>
                    <div className="cil-mt-2 cil-pt-2 cil-border-t cil-border-white/10">
                        <button
                            onClick={() => window.location.href = '/'}
                            className="cil-text-red-400 cil-hover:text-red-300"
                        >
                            [ Clear All ]
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;