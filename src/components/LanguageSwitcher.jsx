/**
 * Componente: LanguageSwitcher
 * Objetivo: Permitir al usuario cambiar el idioma de la interfaz.
 * Descripción: Renderiza un botón con un icono de globo que despliega un menú con las opciones de idioma disponibles.
 */
import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';

export default function LanguageSwitcher({
    lang = 'en',
    onLanguageChange,
    variant = 'header', // 'header' or 'default'
    primaryColor = '#3b82f6'
}) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

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

    const languages = [
        { code: 'en', label: 'English', flag: 'US' },
        { code: 'es', label: 'Español', flag: 'ES' }
    ];

    const currentLanguage = languages.find(l => l.code === lang) || languages[0];

    // Estilos basados en la variante
    const buttonStyles = variant === 'header'
        ? { color: '#ffffff' }
        : { color: primaryColor };

    return (
        <div className="cil-relative cil-inline-block cil-text-left" ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="cil-flex cil-items-center cil-justify-center cil-p-2 cil-rounded-full cil-transition-all cil-duration-200 cil-hover:bg-white/10 cil-focus:outline-none"
                style={buttonStyles}
                aria-label="Change Language"
            >
                <Globe className="cil-w-6 cil-h-6" />
            </button>

            {isOpen && (
                <div className="cil-absolute cil-right-0 cil-mt-2 cil-w-48 cil-origin-top-right cil-rounded-xl cil-bg-white cil-shadow-lg cil-border cil-border-gray-200 cil-z-[100] cil-overflow-hidden">
                    <div className="cil-py-1">
                        {languages.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => {
                                    if (onLanguageChange) onLanguageChange(l.code);
                                    setIsOpen(false);
                                }}
                                className={`cil-w-full cil-flex cil-items-center cil-gap-3 cil-px-4 cil-py-3 cil-text-sm cil-transition-colors ${lang === l.code
                                        ? 'cil-bg-green-50 cil-text-green-600'
                                        : 'cil-text-gray-700 cil-hover:bg-gray-50'
                                    }`}
                            >
                                <span className="cil-w-6 cil-text-[10px] cil-font-bold cil-text-gray-400 cil-uppercase">
                                    {l.flag}
                                </span>
                                <span className="cil-flex-1 cil-text-left cil-font-medium">{l.label}</span>
                                {lang === l.code && <Check className="cil-w-4 cil-h-4" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
