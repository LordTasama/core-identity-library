/**
 * Hook: useUserProfile
 * Objetivo: Gestionar la obtención y el estado de la información del perfil del usuario actual.
 * Descripción: Realiza la llamada al endpoint `/me` para obtener el contexto completo del usuario (roles, permisos, sesiones).
 */
import { useState, useEffect } from 'react';
import { useAuthApi } from './useAuthApi';

/**
 * Custom hook to fetch and manage user profile data
 * Implements loading states similar to useAppInfo pattern
 */
export function useUserProfile(apiBaseUrl, apiToken, authToken, userEmail, initialData = null) {
    const { getMe } = useAuthApi(apiBaseUrl, apiToken);

    const [state, setState] = useState({
        user: initialData,
        isLoading: !initialData,
        error: null
    });

    useEffect(() => {
        // Skip if we already have initial data
        if (initialData && state.user === initialData && !state.error) {
            if (state.isLoading) setState(prev => ({ ...prev, isLoading: false }));
            return;
        }

        if (!authToken || !userEmail || !apiBaseUrl) {
            setState({
                user: initialData || null,
                isLoading: false,
                error: (authToken && userEmail) ? null : 'Missing authentication credentials'
            });
            return;
        }

        const fetchProfile = async () => {
            setState(prev => ({ ...prev, isLoading: true, error: null }));

            try {
                // Use the new /me endpoint via getMe method
                const data = await getMe(userEmail, authToken);

                if (data.success) {
                    const userData = data.user
                        ? { ...data.user, ...Object.fromEntries(Object.entries(data).filter(([k]) => k !== 'user' && k !== 'success')) }
                        : data;

                    setState({
                        user: userData,
                        isLoading: false,
                        error: null
                    });
                } else {
                    setState({
                        user: initialData || null,
                        isLoading: false,
                        error: data.message || 'Failed to load profile'
                    });
                }
            } catch (error) {
                console.error('Failed to fetch user profile:', error);
                setState({
                    user: initialData || null,
                    isLoading: false,
                    error: error.message || 'Connection error'
                });
            }
        };

        fetchProfile();
    }, [authToken, userEmail, apiBaseUrl, apiToken, initialData]);

    return state;
}
