import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        force: true
    },
    build: {
        minify: false,
        lib: {
            entry: './src/main.ts',
            name: 'Site',
            formats: ['umd'],
            fileName: 'site',
        },
    },
});
