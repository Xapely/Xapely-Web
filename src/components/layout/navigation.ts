export type PageKey = 'home' | 'about' | 'pricing' | 'contact' | 'waitlist';

/** Every page's URL lives here; nothing else hard-codes a path. */
export const PAGE_HREF: Record<PageKey, string> = {
    home: '/',
    about: '/about.html',
    pricing: '/pricing.html',
    contact: '/contact.html',
    waitlist: '/waitlist.html',
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
