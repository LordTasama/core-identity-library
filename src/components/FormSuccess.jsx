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
        <div className="cil-flex cil-items-center cil-gap-2 cil-p-3 cil-text-sm cil-text-green-700 cil-bg-green-50 cil-border cil-border-green-100 cil-rounded-md cil-animate-in cil-fade-in cil-slide-in-from-top-1 cil-duration-200">
            <CheckCircle className="cil-w-4 cil-h-4 cil-flex-shrink-0" />
            <p>{message}</p>
        </div>
    );
}
