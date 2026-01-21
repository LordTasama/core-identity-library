/**
 * Componente: AuthError
 * Objetivo: Mostrar un mensaje de error legible cuando ocurre un fallo de autenticación o falta de permisos.
 * Descripción: Presenta una alerta visual estilizada indicando que el usuario no tiene acceso o que hubo un error de autorización.
 */
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { translations } from '../translations';

export default function AuthError({ lang = 'en' }) {
    const t = translations[lang] || translations.en;

    return (
        <div className="flex items-center justify-center p-8 bg-red-50 border border-red-200 rounded-lg text-red-800 space-x-4 max-w-md mx-auto my-10">
            <AlertTriangle className="w-8 h-8 flex-shrink-0" />
            <div>
                <h3 className="font-bold text-lg">{t.authErrorTitle}</h3>
                <p className="text-sm">
                    {t.authErrorMessage}
                </p>
            </div>
        </div>
    );
}
