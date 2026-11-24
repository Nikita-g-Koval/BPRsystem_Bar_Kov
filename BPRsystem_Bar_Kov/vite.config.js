
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    // Базовый URL для всех ресурсов сборки
    base: '/dist/',

    build: {
        outDir: path.resolve(__dirname, 'wwwroot/dist'),
        emptyOutDir: true,

        rollupOptions: {
            input: path.resolve(
                __dirname,
                'wwwroot/src/bpmn-init.js'
            ),

            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
});
