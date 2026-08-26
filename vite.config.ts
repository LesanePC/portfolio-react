import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/portfolio-react/',
    server: {
        headers: {
            'Content-Security-Policy': 
                "default-src 'self'; " +
                "connect-src 'self' http://localhost:5000 https://api.formspree.io; " +
                "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
                "style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; " +
                "img-src 'self' data:; " +
                "font-src 'self' data: https://cdnjs.cloudflare.com;"
        }
    }
});