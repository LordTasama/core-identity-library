/**
 * Hook: useSecurity
 * Objetivo: Verificar la presencia y validez básica del token de API.
 * Descripción: Comprueba que el `apiToken` esté configurado correctamente para permitir las llamadas a los servicios de identidad.
 */
export function useSecurity(token) {
    // Ahora el token debe ser pasado explícitamente desde el componente o prop
    const isAuthorized = !!token && token.length > 0;

    if (!isAuthorized) {
        console.warn('⚠️ Core Identity Library: Falta el token de autorización (apiToken) en las props del componente.');
    }

    return { isAuthorized, apiToken: token };
}
