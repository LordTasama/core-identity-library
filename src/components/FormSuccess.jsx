/**
 * Componente: FormSuccess
 * Objetivo: Mostrar mensajes de éxito en formularios tras operaciones exitosas.
 * Descripción: Renderiza un recuadro verde con un icono de confirmación para indicar que una operación se completó correctamente.
 */
import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function FormSuccess({ message }) {
    if (!message) return null;

    return (
        <div className="flex items-center gap-2 p-3 text-sm text-green-700 bg-green-50 border border-green-100 rounded-md animate-in fade-in slide-in-from-top-1 duration-200">
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
            <p>{message}</p>
        </div>
    );
}
