import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const PAGES = ['index', 'about', 'pricing', 'contact', 'waitlist'] as const;

const FONTS_URL =
    'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..700&family=Figtree:wght@400..700&display=swap';

/** Head tags every page shares, so the HTML entry files only hold page-specific metadata. */
function sharedHead(): Plugin {
    return {
        name: 'xapely-shared-head',
        transformIndexHtml: () => [
            { tag: 'meta', attrs: { name: 'theme-color', content: '#eef3fb' }, injectTo: 'head' },
            { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }, injectTo: 'head' },
            { tag: 'meta', attrs: { property: 'og:site_name', content: 'Xapely' }, injectTo: 'head' },
            { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' }, injectTo: 'head' },
            { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' }, injectTo: 'head' },
            { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }, injectTo: 'head' },
            { tag: 'link', attrs: { rel: 'stylesheet', href: FONTS_URL }, injectTo: 'head' },
        ],
    };
}

export default defineConfig(({ mode }) => {
    // Render sets both for web services; locally they're unset and the defaults apply.
    const { PORT, RENDER_EXTERNAL_HOSTNAME } = loadEnv(mode, '.', ['PORT', 'RENDER_']);

    return {
        plugins: [react(), tailwindcss(), sharedHead()],
        // Separate HTML pages, not a single-page app: unknown paths 404 instead of serving index.html.
        appType: 'mpa',
        // `npm start` runs `vite preview` to serve dist/ on Render.
        preview: {
            host: true,
            port: PORT ? Number(PORT) : undefined,
            strictPort: Boolean(PORT),
            allowedHosts: RENDER_EXTERNAL_HOSTNAME ? [RENDER_EXTERNAL_HOSTNAME] : [],
        },
        build: {
            rollupOptions: {
                input: Object.fromEntries(PAGES.map(page => [page, `${page}.html`])),
            },
        },
    };
});
