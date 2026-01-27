/**
 * Componente: UserMenu
 * Objetivo: Mostrar un menú desplegable con opciones de usuario (Perfil, Contraseña, Cerrar Sesión).
 * Descripción: Renderiza el avatar o inicial del usuario y gestiona la apertura de un menú con accesos rápidos a funciones de cuenta.
 */
import { useState, useRef, useEffect } from 'react';
import { translations } from '../translations';
import { getValidProfileImageUrl } from '../utils/urlValidation';
import {
    KeyRound,
    LogOut,
    User,
} from 'lucide-react';

export default function UserMenu({
    user = {},
    backgroundColor: propBackgroundColor = '#ffffff',
    primaryColor: propPrimaryColor = '#3b82f6',
    onLogout,
    onChangePassword,
    onProfileClick, // Added onProfileClick
    extraItems = [], // Array of { icon: ReactNode, label: string, onClick: function }
    lang = 'en',
    texts: customTexts = {}
}) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const t = { ...translations[lang], ...customTexts };
    const primaryColor = propPrimaryColor;
    const backgroundColor = propBackgroundColor;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);



    const profileImageURL = getValidProfileImageUrl(user);

    const getInitial = () => {
        const name = user["Full Name"] || user.fullName || user.full_name || user.firstName || user.first_name;
        if (name) return name.trim().charAt(0).toUpperCase();
        if (user.email) return user.email.charAt(0).toUpperCase();
        return 'U';
    };

    const displayName = user["Full Name"] || user.fullName || user.full_name || user.firstName || user.first_name || user.email?.split('@')[0] || 'User';

    const MenuItem = ({ icon: Icon, label, onClick, className = "", color = "cil-text-gray-600", hoverColor }) => {
        const [isHovered, setIsHovered] = useState(false);
        const itemHoverStyle = isHovered ? { backgroundColor: hoverColor || `${primaryColor}10` } : {};

        return (
            <button
                onClick={() => {
                    setIsOpen(false);
                    if (onClick) onClick();
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={itemHoverStyle}
                className={`cil-w-full cil-flex cil-items-center cil-gap-3 cil-px-4 cil-py-3 cil-text-sm cil-transition-colors cil-group ${color} ${className}`}
            >
                {Icon && <Icon className="cil-w-5 cil-h-5 cil-transition-transform cil-group-hover:scale-105" />}
                <span className="cil-flex-1 cil-text-left cil-font-medium">{label}</span>
            </button>
        );
    };

    return (
        <div className="cil-relative cil-inline-block cil-text-left" ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="cil-flex cil-items-center cil-justify-center cil-w-10 cil-h-10 cil-rounded-full cil-border-2 cil-transition-all cil-duration-200 cil-hover:shadow-md cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-overflow-hidden"
                style={{
                    borderColor: primaryColor,
                    backgroundColor: backgroundColor,
                    color: primaryColor
                }}
            >
                {profileImageURL ? (
                    <img
                        src={profileImageURL}
                        alt={displayName}
                        className="cil-w-full cil-h-full cil-object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'cil-block';
                        }}
                    />
                ) : null}
                <span className={`${profileImageURL ? 'cil-hidden' : 'cil-block'} cil-text-sm cil-font-bold`}>{getInitial()}</span>
            </button>

            {isOpen && (
                <div
                    className="cil-absolute cil-right-0 cil-mt-1 cil-w-64 cil-origin-top-right cil-rounded-md cil-bg-white cil-shadow-2xl cil-border cil-border-gray-100 cil-z-50 cil-overflow-hidden"
                >
                    {/* Header */}
                    <div className="cil-px-4 cil-py-3 cil-border-b cil-border-gray-100 cil-bg-gray-50/50">
                        <p className="cil-text-sm cil-font-bold cil-text-gray-800 cil-truncate cil-mb-0.5">{displayName}</p>
                        <p className="cil-text-xs cil-font-medium cil-text-gray-500 cil-truncate">{user.email}</p>
                    </div>

                    <div className="cil-py-1">
                        {/* Default Item: Profile */}
                        <MenuItem
                            icon={User}
                            label={t.profile}
                            onClick={onProfileClick}
                        />

                        {/* Default Item: Change Password */}
                        <MenuItem
                            icon={KeyRound}
                            label={t.changePassword}
                            onClick={onChangePassword}
                        />

                        {/* Extra Items provided by consumer */}
                        {extraItems.map((item, index) => (
                            <MenuItem
                                key={`extra-${index}`}
                                icon={item.icon}
                                label={item.label}
                                onClick={item.onClick}
                            />
                        ))}

                        <div className="cil-my-1 cil-border-t cil-border-gray-100" />

                        {/* Default Item: Logout */}
                        <MenuItem
                            icon={LogOut}
                            label={t.logoutThisSession}
                            onClick={onLogout}
                            color="cil-text-gray-700"
                            hoverColor="#fff1f2" // Minimal red hover (rose-50)
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
