import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    // Render sets both for web services; locally they're unset and the defaults apply.
    const { PORT, RENDER_EXTERNAL_HOSTNAME } = loadEnv(mode, '.', ['PORT', 'RENDER_']);

    return {
        plugins: [react(), tailwindcss()],
        // `npm start` runs `vite preview` to serve dist/ on Render. Every path falls back to
        // index.html and React Router picks the page, including the 404 page.
        preview: {
            host: true,
            port: PORT ? Number(PORT) : undefined,
            strictPort: Boolean(PORT),
            allowedHosts: RENDER_EXTERNAL_HOSTNAME ? [RENDER_EXTERNAL_HOSTNAME] : [],
        },
    };
});
