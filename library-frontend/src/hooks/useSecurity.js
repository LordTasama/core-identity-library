export function useSecurity(token) {
    // Ahora el token debe ser pasado explícitamente desde el componente o prop
    const isAuthorized = !!token && token.length > 0;

    if (!isAuthorized) {
        console.warn('⚠️ Core Identity Library: Falta el token de autorización (apiToken) en las props del componente.');
    }

    return { isAuthorized, apiToken: token };
}
