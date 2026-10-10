/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** Orbit backend origin, e.g. https://api.example.com. The waitlist posts to `${VITE_API_URL}/api/v1/waitlist`. */
    readonly VITE_API_URL?: string;
    /** This site's public origin, for canonical URLs. Falls back to window.location.origin. */
    readonly VITE_WEBSITE_URL?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
