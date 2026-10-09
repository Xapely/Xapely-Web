/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** Orbit backend origin, e.g. https://api.example.com. The waitlist posts to `${VITE_API_URL}/api/v1/waitlist`. */
    readonly VITE_API_URL?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
