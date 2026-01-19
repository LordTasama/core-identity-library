/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./demo/**/*.{js,ts,jsx,tsx}",
        "./index.html"
    ],
    theme: {
        extend: {
            colors: {
                auth: {
                    primary: 'var(--auth-primary-color)',
                    bg: 'var(--auth-bg-color)',
                }
            }
        },
    },
    plugins: [],
}
