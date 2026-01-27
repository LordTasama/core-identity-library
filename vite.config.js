import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
    const isBuild = command === 'build';

    return {
        plugins: [react()],
        publicDir: 'src/public',
        build: isBuild ? {
            lib: {
                entry: resolve(__dirname, 'src/index.js'),
                name: 'CoreIdentityLibrary',
                fileName: 'core-identity-library',
            },
            rollupOptions: {
                external: ['react', 'react-dom', '@tanstack/react-query', 'lucide-react', 'react-icons'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                        '@tanstack/react-query': 'ReactQuery',
                        'lucide-react': 'LucideReact',
                        'react-icons': 'ReactIcons',
                    },
                },
            },
        } : {},
        // Ensure root index.html is found if running from root
        server: {
            port: 5173,
            strictPort: false,
        }
    };
});
