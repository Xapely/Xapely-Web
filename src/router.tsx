import type { ComponentType } from 'react';
import { createBrowserRouter, Navigate, useLocation, type RouteObject } from 'react-router';
import { PAGES, type PageKey } from './components/layout/navigation';
import { RootLayout } from './components/layout/RootLayout';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { HomePage } from './components/pages/HomePage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { PricingPage } from './components/pages/PricingPage';
import { WaitlistPage } from './components/pages/WaitlistPage';

const PAGE_COMPONENTS: Record<PageKey, ComponentType> = {
    home: HomePage,
    about: AboutPage,
    pricing: PricingPage,
    contact: ContactPage,
    waitlist: WaitlistPage,
};

/** Keeps links from the old multi-page site (/about.html) working, including any #section. */
function LegacyRedirect({ to }: { to: string }) {
    const { search, hash } = useLocation();
    return <Navigate to={{ pathname: to, search, hash }} replace />;
}

const pageRoutes: RouteObject[] = (Object.keys(PAGES) as PageKey[]).flatMap(key => {
    const { path } = PAGES[key];
    const legacyPath = path === '/' ? '/index.html' : `${path}.html`;
    return [
        { path, Component: PAGE_COMPONENTS[key] },
        { path: legacyPath, element: <LegacyRedirect to={path} /> },
    ];
});

export const router = createBrowserRouter([
    {
        Component: RootLayout,
        children: [...pageRoutes, { path: '*', Component: NotFoundPage }],
    },
]);
