import { useSecurity } from "./useSecurity";

export function useAuthApi(apiBaseUrl, apiToken) {
    const { isAuthorized } = useSecurity(apiToken);

    const fetcher = async (url, options = {}) => {
        const { token, ...fetchOptions } = options;
        try {
            const headers = {
                'Content-Type': 'application/json',
                'X-API-KEY': apiToken,
                'X-REQUEST-URL': typeof window !== 'undefined' ? window.location.origin.replace(/\/$/, '') : '',
                ...options.headers,
            };

            // Professional Bearer Token implementation
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const response = await fetch(`${apiBaseUrl}${url}`, {
                ...fetchOptions,
                headers,
                credentials: 'include',
            });

            let data;
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                try {
                    data = await response.json();
                } catch (e) {
                    console.error("Failed to parse JSON response", e);
                    data = { message: await response.text() };
                }
            } else {
                data = { message: await response.text() };
            }

            if (!response.ok) {
                const error = new Error(data.message || data.error || `Error ${response.status}`);
                error.status = response.status;
                error.data = data;
                throw error;
            }

            return data;
        } catch (error) {
            if (error.name === 'TypeError' && (error.message.includes('Failed to fetch') || error.message.includes('NetworkError'))) {
                const connError = new Error('Connection Error');
                connError.isConnectionError = true;
                throw connError;
            }
            throw error;
        }
    };

    const post = async (url, body, options = {}) => {
        return fetcher(url, {
            method: 'POST',
            body: body ? JSON.stringify(body) : undefined,
            ...options
        });
    };

    const get = async (url, options = {}) => {
        return fetcher(url, {
            method: 'GET',
            ...options
        });
    };

    // Standard Identity Methods
    const verifySession = async (token, email) => {
        return post('/verify-session', { email }, { token });
    };

    const getUserContext = async (token, email) => {
        return post('/user-context', { email }, { token });
    };

    const logout = async (token, email) => {
        return post('/logout', { email }, { token });
    };

    const changePassword = async (body) => {
        const { token, ...rest } = body;
        return post('/change-password', rest, { token });
    };

    const getAppColors = async () => {
        return get('/colors-app');
    };

    const getMe = async (email, token) => {
        // Now using POST for /me as requested, and token in header
        return post('/me', { email }, { token });
    };

    return {
        post,
        get,
        verifySession,
        getUserContext,
        logout,
        changePassword,
        getAppColors,
        getMe
    };
}
