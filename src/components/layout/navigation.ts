export type PageKey = 'home' | 'about' | 'pricing' | 'contact' | 'waitlist';

export interface PageMeta {
    /** Route path; also used for the canonical URL. */
    path: string;
    title: string;
    description: string;
}

export const SITE_URL = 'https://xapely.com';

/** Every page's URL and metadata lives here; nothing else hard-codes a path. */
export const PAGES: Record<PageKey, PageMeta> = {
    home: {
        path: '/',
        title: 'Xapely | Orbit invoicing for growing businesses',
        description: 'Orbit by Xapely: create compliant invoices, send them on WhatsApp or email, and get paid by card, USSD or bank transfer. Join the waitlist.',
    },
    about: {
        path: '/about',
        title: 'About us | Xapely',
        description: 'Xapely builds simple tools that help businesses save time, stay organised and get paid faster. Orbit, our invoicing platform, is the first.',
    },
    pricing: {
        path: '/pricing',
        title: 'Pricing | Xapely Orbit',
        description: 'Draft pricing for Orbit: start free, upgrade when your team grows. Compare invoicing, payments, client and team features by plan.',
    },
    contact: {
        path: '/contact',
        title: 'Contact | Xapely',
        description: 'Questions about Orbit, pricing or working with Xapely? Get in touch with the team.',
    },
    waitlist: {
        path: '/waitlist',
        title: 'Join the Orbit waitlist | Xapely',
        description: 'Orbit opens to the public soon. Join the waitlist and we’ll email you the moment it’s ready.',
    },
};

export const PAGE_HREF = Object.fromEntries(
    Object.entries(PAGES).map(([key, page]) => [key, page.path]),
) as Record<PageKey, string>;

export const NOT_FOUND_META: Omit<PageMeta, 'path'> = {
    title: 'Page not found | Xapely',
    description: 'This page doesn’t exist. Head back to Xapely to learn about Orbit or join the waitlist.',
};

interface NavItem {
    page: PageKey;
    label: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
    { page: 'home', label: 'Product' },
    { page: 'pricing', label: 'Pricing' },
    { page: 'about', label: 'About us' },
    { page: 'contact', label: 'Contact' },
];

export const CONTACT_EMAIL = 'hello@xapely.com';
export const COMPANY_ADDRESS = '1, Second Avenue, Imagbon, Ikorodu, Lagos';
