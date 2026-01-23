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
        <div className="cil-flex cil-items-center cil-justify-center cil-p-8 cil-bg-red-50 cil-border cil-border-red-200 cil-rounded-lg cil-text-red-800 cil-space-x-4 cil-max-w-md cil-mx-auto cil-my-10">
            <AlertTriangle className="cil-w-8 cil-h-8 cil-flex-shrink-0" />
            <div>
                <h3 className="cil-font-bold cil-text-lg">{t.authErrorTitle}</h3>
                <p className="text-sm">
                    {t.authErrorMessage}
                </p>
            </div>
        </div>
    );
}
