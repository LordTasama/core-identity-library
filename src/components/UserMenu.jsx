import { useState, useRef, useEffect } from 'react';
import { translations } from '../translations';
import { useAppInfo } from '../hooks/useAppInfo';
import { getValidProfileImageUrl } from '../utils/urlValidation';
import {
    KeyRound,
    LogOut,
    User,
    Settings
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
    apiBaseUrl,
    apiToken,
    texts: customTexts = {}
}) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const t = { ...translations[lang], ...customTexts };
    const { primaryColor, backgroundColor, isLoading: isAppInfoLoading } = useAppInfo(apiBaseUrl, apiToken, user, propPrimaryColor, propBackgroundColor);

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

    if (isAppInfoLoading) return null;

    const profileImageURL = getValidProfileImageUrl(user);

    const getInitial = () => {
        const name = user["Full Name"] || user.fullName || user.full_name || user.firstName || user.first_name;
        if (name) return name.trim().charAt(0).toUpperCase();
        if (user.email) return user.email.charAt(0).toUpperCase();
        return 'U';
    };

    const displayName = user["Full Name"] || user.fullName || user.full_name || user.firstName || user.first_name || user.email?.split('@')[0] || 'User';

    const MenuItem = ({ icon: Icon, label, onClick, className = "", color = "text-gray-600" }) => (
        <button
            onClick={() => {
                setIsOpen(false);
                if (onClick) onClick();
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-xl hover:bg-gray-50 transition-colors group ${color} ${className}`}
        >
            {Icon && <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />}
            <span className="flex-1 text-left">{label}</span>
        </button>
    );

    return (
        <div className="relative inline-block text-left" ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden"
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
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                ) : null}
                <span className={`${profileImageURL ? 'hidden' : 'block'} text-sm font-bold`}>{getInitial()}</span>
            </button>

            {isOpen && (
                <div
                    className="absolute right-0 mt-3 w-56 origin-top-right rounded-2xl bg-gray-100/90 backdrop-blur-md p-2 shadow-2xl border border-gray-200/50 z-50 transform transition-all duration-300 ease-out"
                >
                    <div
                        className="rounded-[1.5rem] bg-white p-2 shadow-sm"
                    >
                        {/* Header */}
                        <div className="px-3 py-2 border-b border-gray-50 mb-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Account</p>
                            <p className="text-sm font-bold text-gray-700 truncate mb-0.5">{displayName}</p>
                            <p className="text-[10px] font-medium text-gray-400 truncate">{user.email}</p>
                        </div>

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

                        {/* Separator if there are extra items */}
                        {extraItems.length > 0 && <div className="my-1 border-t border-gray-50" />}

                        {/* Default Item: Logout */}
                        <MenuItem
                            icon={LogOut}
                            label={t.logoutThisSession}
                            onClick={onLogout}
                            color="text-red-500"
                            className="hover:bg-red-50"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
