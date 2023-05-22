import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        force: true
    },
    build: {
        // just to see the output generated
        minify: false,
        lib: {
            entry: './src/main.ts',
            name: 'Site',
            formats: ['umd'],
            fileName: 'site',
        },
    },
});
