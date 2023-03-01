/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

const root = path.resolve(__dirname, 'app');
const port = Number(process.argv.find((arg) => arg.startsWith('--port='))?.split('=')[1]) || 8080;
// https://vitejs.dev/config/
export default defineConfig({
    root: root,
    server: {
        origin: `http://127.0.0.1:${port}`,
        port,
    },
    build: {
        assetsInlineLimit: 131072, // 128kb
        rollupOptions: {
            input: root,
            output: {
                sourcemap: true,
                entryFileNames: 'app.js',
                format: 'iife',
                // chunks don't work with iife
                // chunkFileNames: 'vendors.js',
                // manualChunks: {
                //     // Bundle all code from `node_modules` into a separate file called `vendors`
                //     vendors: ['react', 'react-dom', 'antd'],
                // },
            },
        },
        outDir: path.resolve(__dirname, 'dist'),
    },
    plugins: [tsconfigPaths(), react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: path.join(root, 'test', 'setup.ts'),
        // you might want to disable it, if you don't have tests that rely on CSS
        // since parsing CSS is slow
        css: true,
    },
});
