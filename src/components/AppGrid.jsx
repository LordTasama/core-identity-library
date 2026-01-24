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

import LoadingSpinner from './LoadingSpinner';

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

    if (isAppInfoLoading) {
        return (
            <div className="cil-w-10 cil-h-10 cil-flex cil-items-center cil-justify-center">
                <LoadingSpinner size="sm" color={propPrimaryColor} />
            </div>
        );
    }


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
        <div className="cil-relative cil-inline-block cil-text-left" ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="cil-flex cil-items-center cil-justify-center cil-p-2 cil-rounded-full cil-transition-all cil-duration-200 cil-hover:bg-gray-100 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
                style={{
                    color: primaryColor,
                    borderColor: primaryColor
                }}
                aria-label="App Grid"
            >
                <TbGridDots
                    className="cil-w-6 cil-h-6"
                    style={{
                        color: primaryColor,
                        stroke: primaryColor,
                        fill: 'none'
                    }}
                />
            </button>

            {isOpen && (
                <div
                    className="cil-absolute cil-right-0 cil-mt-3 cil-w-80 cil-origin-top-right cil-rounded-[2rem] cil-bg-gray-100/90 cil-backdrop-blur-md cil-p-2 cil-shadow-2xl cil-border cil-border-gray-200/50 cil-z-50 cil-transform cil-transition-all cil-duration-300 cil-ease-out"
                >
                    <div
                        className="cil-rounded-[1.5rem] cil-p-4 cil-shadow-sm"
                        style={{ backgroundColor }}
                    >
                        <div className="cil-grid cil-grid-cols-3 cil-gap-3">
                            {apps.map((app) => (
                                <button
                                    key={app.appKey}
                                    onClick={() => handleAppClick(app)}
                                    className="cil-group cil-relative cil-flex cil-flex-col cil-items-center cil-p-2 cil-rounded-2xl cil-hover:bg-gray-50 cil-transition-all cil-duration-200"
                                >
                                    <div
                                        className="cil-w-14 cil-h-14 cil-flex cil-items-center cil-justify-center cil-rounded-2xl cil-shadow-sm cil-text-white cil-text-2xl cil-font-bold cil-mb-2 cil-group-hover:shadow-lg cil-group-hover:scale-105 cil-transition-all cil-duration-300"
                                        style={{ backgroundColor: getRandomColor(app.appKey) }}
                                    >
                                        {getAppInitial(app.appKey)}
                                    </div>
                                    <span className="cil-text-[10px] cil-font-bold cil-text-gray-700 cil-uppercase cil-tracking-wider cil-text-center cil-truncate cil-w-full cil-px-1">
                                        {customLabels[app.appKey]
                                            ? customLabels[app.appKey]
                                            : (app.appKey.replace(/_/g, ' ').length > 9
                                                ? `${app.appKey.replace(/_/g, ' ').substring(0, 9)}...`
                                                : app.appKey.replace(/_/g, ' '))}
                                    </span>

                                    {/* Tooltip */}
                                    <div className="cil-absolute cil--bottom-10 cil-left-1/2 cil--translate-x-1/2 cil-px-2 cil-py-1 cil-bg-gray-900 cil-text-white cil-text-[10px] cil-rounded cil-opacity-0 cil-group-hover:opacity-100 cil-transition-opacity cil-pointer-events-none cil-whitespace-nowrap cil-z-[60] cil-shadow-xl">
                                        {app.appName}
                                        <div className="cil-absolute cil--top-1 cil-left-1/2 cil--translate-x-1/2 cil-border-x-4 cil-border-x-transparent cil-border-b-4 cil-border-b-gray-900"></div>
                                    </div>
                                </button>
                            ))}

                            {apps.length === 0 && (
                                <div className="cil-col-span-3 cil-py-12 cil-text-center cil-text-gray-400 cil-text-sm">
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
