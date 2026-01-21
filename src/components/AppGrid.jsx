/**
 * Componente: AppGrid
 * Objetivo: Mostrar una cuadrícula de aplicaciones disponibles para el usuario, permitiendo la navegación entre ellas.
 * Descripción: Este componente renderiza un botón que despliega un menú con las aplicaciones configuradas, gestionando colores dinámicos y estados de carga.
 */
import { useState, useRef, useEffect } from 'react';
import { TbGridDots } from 'react-icons/tb';
import { useAppInfo } from '../hooks/useAppInfo';
import { translations } from '../translations';

const COLORS = [
    '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
    '#ec4899', '#06b6d4', '#84cc16', '#f97316', '#6366f1'
];

export default function AppGrid({
    apps = [],
    user = {},
    customLabels = {},
    backgroundColor: propBackgroundColor = '#ffffff',
    primaryColor: propPrimaryColor = '#3b82f6',
    apiBaseUrl,
    apiToken,
    onAppClick,
    lang = 'en',
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

    const getAppInitial = (name) => {
        return name ? name.charAt(0).toUpperCase() : '?';
    };

    const getRandomColor = (appKey) => {
        let hash = 0;
        for (let i = 0; i < appKey.length; i++) {
            hash = appKey.charCodeAt(i) + ((hash << 5) - hash);
        }
        return COLORS[Math.abs(hash) % COLORS.length];
    };

    const handleAppClick = (app) => {
        if (onAppClick) onAppClick(app);
        setIsOpen(false);
        if (app.publicUrl) {
            window.open(app.publicUrl, '_blank');
        }
    };

    return (
        <div className="relative inline-block text-left" ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center p-2 rounded-full transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                    color: primaryColor,
                    borderColor: primaryColor
                }}
                aria-label="App Grid"
            >
                <TbGridDots
                    className="w-6 h-6"
                    style={{
                        color: primaryColor,
                        stroke: primaryColor,
                        fill: 'none'
                    }}
                />
            </button>

            {isOpen && (
                <div
                    className="absolute right-0 mt-3 w-80 origin-top-right rounded-[2rem] bg-gray-100/90 backdrop-blur-md p-2 shadow-2xl border border-gray-200/50 z-50 transform transition-all duration-300 ease-out"
                >
                    <div
                        className="rounded-[1.5rem] p-4 shadow-sm"
                        style={{ backgroundColor }}
                    >
                        <div className="grid grid-cols-3 gap-3">
                            {apps.map((app) => (
                                <button
                                    key={app.appKey}
                                    onClick={() => handleAppClick(app)}
                                    className="group relative flex flex-col items-center p-2 rounded-2xl hover:bg-gray-50 transition-all duration-200"
                                >
                                    <div
                                        className="w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm text-white text-2xl font-bold mb-2 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
                                        style={{ backgroundColor: getRandomColor(app.appKey) }}
                                    >
                                        {getAppInitial(app.appKey)}
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wider text-center truncate w-full px-1">
                                        {customLabels[app.appKey]
                                            ? customLabels[app.appKey]
                                            : (app.appKey.replace(/_/g, ' ').length > 9
                                                ? `${app.appKey.replace(/_/g, ' ').substring(0, 9)}...`
                                                : app.appKey.replace(/_/g, ' '))}
                                    </span>

                                    {/* Tooltip */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[60] shadow-xl">
                                        {app.appName}
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-b-4 border-b-gray-900"></div>
                                    </div>
                                </button>
                            ))}

                            {apps.length === 0 && (
                                <div className="col-span-3 py-12 text-center text-gray-400 text-sm">
                                    {t.noApps}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
