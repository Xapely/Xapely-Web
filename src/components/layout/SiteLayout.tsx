import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header, type HeaderTone } from './Header';
import type { PageKey } from './navigation';

interface SiteLayoutProps {
    page: PageKey;
    headerTone?: HeaderTone;
    children: ReactNode;
}

export function SiteLayout({ page, headerTone = 'light', children }: SiteLayoutProps) {
    return (
        <>
            <a href="#main" className="sr-only rounded-control bg-paper px-4 py-2 font-semibold text-ledger focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60">
                Skip to content
            </a>
            <Header current={page} tone={headerTone} />
            <main id="main">{children}</main>
            <Footer />
        </>
    );
}
