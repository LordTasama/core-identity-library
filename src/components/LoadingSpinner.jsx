/**
 * Componente: LoadingSpinner
 * Objetivo: Mostrar un indicador de carga elegante y personalizable.
 * Descripción: Renderiza un spinner animado que utiliza el color primario, ajustable en tamaño.
 */
import React from 'react';

export default function LoadingSpinner({
    size = 'md',
    color = 'currentColor',
    className = ''
}) {
    const sizeClasses = {
        xs: 'cil-w-3 cil-h-3',
        sm: 'cil-w-4 cil-h-4',
        md: 'cil-w-6 cil-h-6',
        lg: 'cil-w-8 cil-h-8',
        xl: 'cil-w-12 cil-h-12'
    };

    const strokeWidth = {
        xs: 2,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4
    };

    return (
        <div className={`cil-flex cil-items-center cil-justify-center ${className}`}>
            <svg
                className={`cil-animate-spin ${sizeClasses[size] || sizeClasses.md}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="cil-opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke={color}
                    strokeWidth={strokeWidth[size] || 3}
                ></circle>
                <path
                    className="cil-opacity-75"
                    fill={color}
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
        </div>
    );
}
