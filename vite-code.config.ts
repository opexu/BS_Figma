import { defineConfig } from 'vite'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        emptyOutDir: false,
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
                //manualChunks: () => "everything.js",
                entryFileNames: "code.js",
            },
            input: {
                index: path.resolve(__dirname, "src/figma/code.ts")
            }
        },
        outDir: "./dist"
    }
})