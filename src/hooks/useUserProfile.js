import { useState, useEffect } from 'react';
import { useAuthApi } from './useAuthApi';

/**
 * Custom hook to fetch and manage user profile data
 * Implements loading states similar to useAppInfo pattern
 */
export function useUserProfile(apiBaseUrl, apiToken, authToken, userEmail) {
    const { getMe } = useAuthApi(apiBaseUrl, apiToken);

    const [state, setState] = useState({
        user: null,
        isLoading: true,
        error: null
    });

    useEffect(() => {
        if (!authToken || !userEmail) {
            setState({
                user: null,
                isLoading: false,
                error: 'Missing authentication credentials'
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
                        user: null,
                        isLoading: false,
                        error: data.message || 'Failed to load profile'
                    });
                }
            } catch (error) {
                console.error('Failed to fetch user profile:', error);
                setState({
                    user: null,
                    isLoading: false,
                    error: error.message || 'Connection error'
                });
            }
        };

        fetchProfile();
    }, [authToken, userEmail, apiBaseUrl, apiToken]);

    return state;
}
