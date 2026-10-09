import type { ReactNode } from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import { Footer } from './Footer';
import { Header, type HeaderTone } from './Header';
import type { PageMeta } from './navigation';

interface SiteLayoutProps {
    /** Title and description for this page; omit `path` for pages that shouldn't be indexed. */
    meta: Omit<PageMeta, 'path'> & { path?: string };
    headerTone?: HeaderTone;
    children: ReactNode;
}

export function SiteLayout({ meta, headerTone = 'light', children }: SiteLayoutProps) {
    usePageMeta(meta);

    return (
        <>
            <a href="#main" className="sr-only rounded-control bg-paper px-4 py-2 font-semibold text-ledger focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60">
                Skip to content
            </a>
            <Header tone={headerTone} />
            <main id="main">{children}</main>
            <Footer />
        </>
    );
}
