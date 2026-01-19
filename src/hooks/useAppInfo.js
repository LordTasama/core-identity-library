import { useState, useEffect } from 'react';
import { useAuthApi } from './useAuthApi';

// Global cache to avoid redundant API calls across component mounts
let cachedColors = null;
let fetchPromise = null;

export function useAppInfo(apiBaseUrl, apiToken, user, propPrimaryColor, propBackgroundColor) {
    const { getAppColors } = useAuthApi(apiBaseUrl, apiToken);

    // Initial state from cache or user info or props
    const [state, setState] = useState({
        primaryColor: user?.app_info?.primaryColor || user?.app_info?.primary_color || cachedColors?.primaryColor || propPrimaryColor,
        backgroundColor: user?.app_info?.backgroundColor || user?.app_info?.background_color || cachedColors?.backgroundColor || propBackgroundColor,
        isLoading: !cachedColors && !user?.app_info && !!(apiBaseUrl && apiToken)
    });

    useEffect(() => {
        // If we have app_info from user, it always takes precedence
        if (user?.app_info) {
            const uPrimary = user.app_info.primaryColor || user.app_info.primary_color;
            const uBackground = user.app_info.backgroundColor || user.app_info.background_color;

            if (uPrimary || uBackground) {
                setState(prev => ({
                    primaryColor: uPrimary || prev.primaryColor,
                    backgroundColor: uBackground || prev.backgroundColor,
                    isLoading: false
                }));
                // If we have both, we are truly done
                if (uPrimary && uBackground) return;
            }
        }

        // If we already have cached colors, use them as fallback before fetching
        if (cachedColors && !user?.app_info) {
            setState({
                primaryColor: cachedColors.primaryColor,
                backgroundColor: cachedColors.backgroundColor,
                isLoading: false
            });
            return;
        }

        // Only fetch if we have the means and no cache
        if (apiBaseUrl && apiToken) {
            const fetchInfo = async () => {
                // Use a shared promise to avoid concurrent requests
                if (!fetchPromise) {
                    fetchPromise = getAppColors().catch(err => {
                        console.error("Failed to fetch app colors:", err);
                        return null; // Fallback handled below
                    });
                }

                const data = await fetchPromise;

                const finalColors = {
                    primaryColor: data?.primaryColor || data?.primary_color || propPrimaryColor,
                    backgroundColor: data?.backgroundColor || data?.background_color || propBackgroundColor
                };

                cachedColors = finalColors;
                setState({ ...finalColors, isLoading: false });
            };

            fetchInfo();
        } else {
            // If no API info, we can't fetch, so stop loading
            setState(prev => ({ ...prev, isLoading: false }));
        }
    }, [user?.app_info, propPrimaryColor, propBackgroundColor, apiBaseUrl, apiToken]);

    return state;
}
