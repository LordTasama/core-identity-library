/**
 * Componente: Header
 * Objetivo: Proporcionar una barra de navegación superior consistente para las aplicaciones.
 * Descripción: Integra búsqueda, selección de clientes, notificaciones, cambio de tema, cuadrícula de aplicaciones y menú de usuario.
 */
import { useState, useRef, useEffect } from 'react';
import {
    Search,
    Bell,
    Sun,
    Moon,
    ChevronDown,
    Settings
} from 'lucide-react';
import AppGrid from './AppGrid';
import UserMenu from './UserMenu';
import LanguageSwitcher from './LanguageSwitcher';
import prismLogoWhite from '../assets/prism-logo-white.png';

export default function Header({
    logo,
    customers = [],
    selectedCustomers = [],
    onCustomerChange,
    onSearch,
    theme = 'light',
    onTheme,
    notificationsEnabled = false,
    onNotification,
    notificationData = [],
    onSettings,
    user,
    onProfileClick,
    onChangePassword,
    onLogout,
    apps,
    primaryColor = '#10b981', // Por defecto el verde de la imagen
    lang = 'en',
    onLanguageChange,
    navItems = [], // Array of { label, onClick, active }
    extraItems = [], // Array of components or items to render
    userMenuExtraItems = [], // Array of { icon: ReactNode, label: string, onClick: function } for UserMenu
    apiBaseUrl,
    apiToken
}) {
    const [isCustomerOpen, setIsCustomerOpen] = useState(false);
    const customerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (customerRef.current && !customerRef.current.contains(event.target)) {
                setIsCustomerOpen(false);
            }
        };
        if (isCustomerOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isCustomerOpen]);

    const headerStyle = {
        backgroundColor: primaryColor,
        color: '#ffffff'
    };

    const handleCustomerToggle = (customer) => {
        if (!onCustomerChange) return;

        const isSelected = selectedCustomers.includes(customer);
        let newSelection;
        if (isSelected) {
            newSelection = selectedCustomers.filter(c => c !== customer);
        } else {
            newSelection = [...selectedCustomers, customer];
        }
        onCustomerChange(newSelection);
    };

    const displayCustomerLabel = () => {
        if (selectedCustomers.length === 0) return 'All Customers';
        if (selectedCustomers.length === 1) return selectedCustomers[0];
        return `${selectedCustomers.length} Customers`;
    };

    return (
        <header
            className="cil-w-full cil-h-16 cil-flex cil-items-center cil-px-6 cil-shadow-md cil-relative cil-z-[1000] cil-gap-4"
            style={headerStyle}
        >
            {/* Logo Section */}
            <div className="cil-flex cil-items-center cil-gap-2 cil-min-w-fit">
                {logo ? (
                    typeof logo === 'string' ? <img src={logo} alt="Logo" className="cil-h-14" /> : logo
                ) : (
                    <img src={prismLogoWhite} alt="The Prism Group" className="cil-h-14" />
                )}
            </div>

            {/* Navigation Items */}
            {navItems && navItems.length > 0 && (
                <nav className="cil-flex cil-items-center cil-gap-6 cil-ml-4 cil-min-w-fit">
                    {navItems.map((item, index) => (
                        <button
                            key={`nav-${index}`}
                            onClick={item.onClick}
                            className={`cil-text-sm cil-transition-colors cil-hover:text-white ${item.active ? 'cil-text-white cil-font-bold' : 'cil-text-white/90'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            )}

            {/* Customer Selector */}
            {onCustomerChange && customers.length > 0 && (
                <div className="cil-relative" ref={customerRef}>
                    <button
                        onClick={() => setIsCustomerOpen(!isCustomerOpen)}
                        className="cil-flex cil-items-center cil-gap-2 cil-px-3 cil-py-1.5 cil-rounded-lg cil-hover:bg-white/10 cil-transition-colors cil-text-sm cil-font-medium"
                    >
                        <span>{displayCustomerLabel()}</span>
                        <ChevronDown className={`cil-w-6 cil-h-6 cil-transition-transform ${isCustomerOpen ? 'cil-rotate-180' : ''}`} />
                    </button>

                    {isCustomerOpen && (
                        <div className="cil-absolute cil-left-0 cil-mt-2 cil-w-64 cil-bg-white cil-rounded-xl cil-shadow-xl cil-border cil-border-gray-200 cil-p-2 cil-text-gray-800">
                            <div className="cil-max-h-60 cil-overflow-y-auto">
                                <button
                                    onClick={() => onCustomerChange && onCustomerChange([])}
                                    className={`cil-w-full cil-text-left cil-px-3 cil-py-2 cil-rounded-lg cil-text-sm cil-mb-1 ${selectedCustomers.length === 0 ? 'cil-bg-gray-100 cil-font-bold' : 'cil-hover:bg-gray-50'}`}
                                >
                                    All Customers
                                </button>
                                {customers.map((customer, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCustomerToggle(customer)}
                                        className={`cil-w-full cil-text-left cil-px-3 cil-py-2 cil-rounded-lg cil-text-sm cil-flex cil-items-center cil-gap-2 ${selectedCustomers.includes(customer) ? 'cil-bg-gray-100 cil-font-bold' : 'cil-hover:bg-gray-50'}`}
                                    >
                                        <div className={`cil-w-4 cil-h-4 cil-rounded cil-border cil-flex cil-items-center cil-justify-center ${selectedCustomers.includes(customer) ? 'cil-bg-green-500 cil-border-green-500' : 'cil-border-gray-300'}`}>
                                            {selectedCustomers.includes(customer) && <Check className="cil-w-3 cil-h-3 cil-text-white" />}
                                        </div>
                                        {customer}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Search Bar */}
            {onSearch && (
                <div className="cil-flex-1 cil-flex cil-justify-center">
                    <div className="cil-relative cil-w-full cil-max-w-md">
                        <Search className="cil-absolute cil-left-3 cil-top-1/2 cil--translate-y-1/2 cil-w-6 cil-h-6 cil-text-white/70" />
                        <input
                            type="text"
                            placeholder="Type / to search"
                            onChange={(e) => onSearch && onSearch(e.target.value)}
                            className="cil-w-full cil-bg-white/20 cil-border-none cil-rounded-lg cil-py-2 cil-pl-12 cil-pr-4 cil-text-sm cil-placeholder-white/70 cil-text-white cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-white/30 cil-transition-all"
                        />
                    </div>
                </div>
            )}

            {/* Actions Section */}
            <div className="cil-flex cil-items-center cil-gap-1 cil-ml-auto">
                {/* App Grid */}
                <AppGrid
                    apps={apps}
                    user={user}
                    primaryColor="#ffffff"
                    backgroundColor="#ffffff"
                    lang={lang}
                    apiBaseUrl={apiBaseUrl}
                    apiToken={apiToken}
                />

                {/* Notifications */}
                {notificationsEnabled && (
                    <button
                        onClick={() => onNotification && onNotification()}
                        className="cil-p-2 cil-rounded-full cil-hover:bg-white/10 cil-transition-colors cil-relative"
                    >
                        <Bell className="cil-w-6 cil-h-6" />
                        {notificationData.length > 0 && (
                            <span className="cil-absolute cil-top-1 cil-right-1 cil-w-2 cil-h-2 cil-bg-red-500 cil-rounded-full"></span>
                        )}
                    </button>
                )}

                {/* Extra Items */}
                {extraItems.map((item, index) => (
                    <div key={`header-extra-${index}`} className="cil-flex cil-items-center">
                        {item}
                    </div>
                ))}

                {/* Language Switcher */}
                <LanguageSwitcher
                    lang={lang}
                    onLanguageChange={onLanguageChange}
                    variant="header"
                />

                {/* Theme Switcher */}
                {onTheme && (
                    <button
                        onClick={() => onTheme && onTheme()}
                        className="cil-p-2 cil-rounded-full cil-hover:bg-white/10 cil-transition-colors"
                    >
                        {theme === 'dark' ? <Sun className="cil-w-6 cil-h-6" /> : <Moon className="cil-w-6 cil-h-6" />}
                    </button>
                )}

                {/* Settings */}
                {onSettings && (
                    <button
                        onClick={() => onSettings()}
                        className="cil-p-2 cil-rounded-full cil-hover:bg-white/10 cil-transition-colors"
                    >
                        <Settings className="cil-w-6 cil-h-6" />
                    </button>
                )}

                {/* User Menu */}
                {user && (
                    <UserMenu
                        user={user}
                        primaryColor={primaryColor}
                        backgroundColor="#ffffff"
                        lang={lang}
                        onProfileClick={onProfileClick}
                        onChangePassword={onChangePassword}
                        onLogout={onLogout}
                        extraItems={userMenuExtraItems}
                        apiBaseUrl={apiBaseUrl}
                        apiToken={apiToken}
                    />
                )}
            </div>
        </header>
    );
}

// Add local Check icon for Customer Selector
function Check({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
