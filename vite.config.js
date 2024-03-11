// Alternatively, you can use the defineConfig helper which should provide intellisense 
// without the need for jsdoc annotations
// Vite also directly supports TS config files. You can use vite.config.ts with the 
// defineConfig helper as well.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://vitejs.dev/guide/static-deploy.html Github Pages section
export default defineConfig({
    plugins: [react()],
    base: '/Portfolio_x/', // absolute base path
    mode: 'development',
    server: {
        host: true,  // add host port export
        port: 3000,
    }
})
