import { useSecurity } from "./useSecurity";

export function useAuthApi(apiBaseUrl, apiToken) {
    const { isAuthorized } = useSecurity(apiToken);

    const fetcher = async (url, options = {}) => {
        try {
            const response = await fetch(`${apiBaseUrl}${url}`, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': apiToken,
                    ...options.headers,
                },
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
                // Attach status and full data to the error object so components can react to it (400 vs 500, expired status, etc.)
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

    const post = async (url, body) => {
        return fetcher(url, {
            method: 'POST',
            body: body ? JSON.stringify(body) : undefined,
        });
    };

    const get = async (url) => {
        return fetcher(url, {
            method: 'GET',
        });
    };

    // Standard Identity Methods
    const verifySession = async (token, email) => {
        return post('/verify-session', { token, email });
    };

    const getUserContext = async (token, email) => {
        return post('/user-context', { token, email });
    };

    const logout = async (token, email) => {
        return post('/logout', { token, email });
    };

    const changePassword = async (body) => {
        return post('/change-password', body);
    };

    const getAppColors = async () => {
        return get('/colors-app');
    };

    const getMe = async (email, token) => {
        return get(`/me?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`);
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
