/**
 * Utilidad: urlValidation
 * Objetivo: Validar y normalizar URLs, especialmente para imágenes de perfil y enlaces de aplicaciones.
 * Descripción: Contiene funciones para comprobar la validez de una URL y obtener una imagen de perfil válida desde el objeto de usuario.
 */
/**
 * Validates if a string is a valid URL
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if valid URL, false otherwise
 */
export function isValidUrl(url) {
    if (!url || typeof url !== 'string') return false;

    try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch (e) {
        return false;
    }
}

/**
 * Gets a valid profile image URL or returns null
 * @param {object} user - User object
 * @returns {string|null} - Valid URL or null
 */
export function getValidProfileImageUrl(user) {

    if (!user) return null;

    const possibleFields = [
        user.profileImageURL,
        user.profile_image_url,
        user.profile_image,
        user.profileImage,
        user.avatar,
        user.avatarUrl,
        user.avatar_url,

    ];

    for (const field of possibleFields) {
        if (isValidUrl(field)) {
            return field;
        }
    }

    return null;
}
