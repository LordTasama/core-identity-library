import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function FormError({ message }) {
    if (!message) return null;

    return (
        <div className="flex items-center gap-2 p-3 text-sm text-red-700 bg-red-50 border border-red-100 rounded-md animate-in fade-in slide-in-from-top-1 duration-200">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <p>{message}</p>
        </div>
    );
}
