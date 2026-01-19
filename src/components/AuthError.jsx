import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function AuthError() {
    return (
        <div className="flex items-center justify-center p-8 bg-red-50 border border-red-200 rounded-lg text-red-800 space-x-4 max-w-md mx-auto my-10">
            <AlertTriangle className="w-8 h-8 flex-shrink-0" />
            <div>
                <h3 className="font-bold text-lg">Error de Autorización</h3>
                <p className="text-sm">
                    No se ha encontrado el token de la librería en el archivo <code>.env</code>.
                    Por favor, configura <code>VITE_API_TOKEN</code> para habilitar el uso de los componentes.
                </p>
            </div>
        </div>
    );
}
