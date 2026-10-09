import { useEffect, useId, useState } from 'react';
import { cva } from 'class-variance-authority';
import logoUrl from '../../../assets/images/logo.webp';
import { cn } from '../../lib/cn';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { NAV_ITEMS, PAGE_HREF, type PageKey } from './navigation';

export type HeaderTone = 'light' | 'dark';

const bar = cva('sticky top-0 z-50 border-b backdrop-blur-md', {
    variants: {
        tone: {
            light: 'border-line/70 bg-mist/85',
            dark: 'border-ledger-line/60 bg-ledger/95',
        },
    },
});

const navLink = cva('rounded-md px-1 py-1 text-[0.9375rem] font-medium aria-[current=page]:underline aria-[current=page]:decoration-brand aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8', {
    variants: {
        tone: {
            light: 'text-ledger/75 hover:text-ledger active:text-brand-strong',
            dark: 'text-on-dark hover:text-paper active:text-brand-soft',
        },
    },
});

const iconButton = cva('grid size-10 place-items-center rounded-control transition-transform active:scale-95 md:hidden', {
    variants: {
        tone: {
            light: 'text-ledger hover:bg-paper',
            dark: 'text-paper hover:bg-ledger-raised',
        },
    },
});

const mobilePanel = cva('border-t md:hidden', {
    variants: {
        tone: {
            light: 'border-line bg-paper',
            dark: 'border-ledger-line bg-ledger',
        },
    },
});

interface HeaderProps {
    current: PageKey;
    tone: HeaderTone;
}

export function Header({ current, tone }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuId = useId();

    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMenuOpen(false);
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    const links = NAV_ITEMS.map(item => ({
        ...item,
        href: PAGE_HREF[item.page],
        ariaCurrent: item.page === current ? ('page' as const) : undefined,
    }));

    return (
        <header className={bar({ tone })}>
            <Container className="flex h-16 items-center justify-between gap-6">
                <a href={PAGE_HREF.home} className="rounded-md" aria-label="Xapely home">
                    <img src={logoUrl} alt="" width={106} height={30} className="h-7 w-auto" />
                </a>

                <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
                    {links.map(link => (
                        <a key={link.page} href={link.href} aria-current={link.ariaCurrent} className={navLink({ tone })}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    {current !== 'waitlist' && (
                        <ButtonLink href={PAGE_HREF.waitlist} size="sm" className="hidden sm:inline-flex">Join the waitlist</ButtonLink>
                    )}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(open => !open)}
                        aria-expanded={menuOpen}
                        aria-controls={menuId}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        className={iconButton({ tone })}
                    >
                        <Icon name={menuOpen ? 'close' : 'menu'} />
                    </button>
                </div>
            </Container>

            <nav id={menuId} aria-label="Mobile" className={cn(mobilePanel({ tone }), menuOpen ? 'block' : 'hidden')}>
                <Container className="flex flex-col gap-1 py-4">
                    {links.map(link => (
                        <a key={link.page} href={link.href} aria-current={link.ariaCurrent} className={cn(navLink({ tone }), 'px-2 py-3')}>
                            {link.label}
                        </a>
                    ))}
                    {current !== 'waitlist' && (
                        <ButtonLink href={PAGE_HREF.waitlist} className="mt-2">Join the waitlist</ButtonLink>
                    )}
                </Container>
            </nav>
        </header>
    );
}
