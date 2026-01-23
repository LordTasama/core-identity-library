/**
 * Componente: FormError
 * Objetivo: Mostrar mensajes de error en formularios de manera consistente.
 * Descripción: Renderiza un recuadro de alerta rojo con un icono para notificar fallos de validación o errores de API.
 */
import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function FormError({ message }) {
    if (!message) return null;

    return (
        <div className="cil-flex cil-items-center cil-gap-2 cil-p-3 cil-text-sm cil-text-red-700 cil-bg-red-50 cil-border cil-border-red-100 cil-rounded-md cil-animate-in cil-fade-in cil-slide-in-from-top-1 cil-duration-200">
            <AlertCircle className="cil-w-4 cil-h-4 cil-flex-shrink-0" />
            <p>{message}</p>
        </div>
    );
}
