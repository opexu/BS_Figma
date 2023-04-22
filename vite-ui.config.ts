import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        viteSingleFile(),
    ],
    build: {
        target: "esnext",
        assetsInlineLimit: 100000000,
        chunkSizeWarningLimit: 100000000,
        cssCodeSplit: false,
        emptyOutDir: false,
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
                //dir: "./dist",
                //manualChunks: () => "everything.js",
                //manualChunks: undefined,
            },
            input: {
                index: path.resolve(__dirname, "src/index.html")
            }
        },
        outDir: "../dist"
    },
    root: "src"
})