import { Link } from 'react-router';
import logoUrl from '../../../assets/images/logo.webp';
import { Container } from '../ui/Container';
import { SocialLinks } from '../ui/SocialLinks';
import { CONTACT_EMAIL, PAGE_HREF } from './navigation';

/** `to` is a route on this site; `href` leaves it (e.g. mailto:). */
type FooterLink = { label: string } & ({ to: string; href?: never } | { href: string; to?: never });

interface FooterColumn {
    title: string;
    links: readonly FooterLink[];
}

const COLUMNS: readonly FooterColumn[] = [
    {
        title: 'Orbit',
        links: [
            { label: 'Features', to: `${PAGE_HREF.home}#features` },
            { label: 'How it works', to: `${PAGE_HREF.home}#how-it-works` },
            { label: 'Pricing', to: PAGE_HREF.pricing },
            { label: 'Join the waitlist', to: PAGE_HREF.waitlist },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About us', to: PAGE_HREF.about },
            { label: 'Contact', to: PAGE_HREF.contact },
            { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
        ],
    },
];

const LEGAL_LINKS = [
    { label: 'Terms of Service', to: PAGE_HREF.terms },
    { label: 'Privacy Policy', to: PAGE_HREF.privacy },
] as const;

const footerLink = 'rounded-sm text-sm text-body hover:text-ledger active:text-brand-strong';
const legalLink = 'rounded-sm text-xs text-body underline decoration-line underline-offset-4 hover:text-ledger hover:decoration-brand active:text-brand-strong';
const columnTitle = 'font-body text-sm font-semibold tracking-normal text-ledger';

export function Footer() {
    return (
        <footer className="border-t border-line bg-[linear-gradient(180deg,var(--color-paper),var(--color-mist))]">
            <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_auto]">
                <div className="max-w-xs">
                    <img src={logoUrl} alt="Xapely" width={106} height={30} loading="lazy" className="h-7 w-auto" />
                    <p className="mt-4 text-sm leading-[1.7]">Simple tools to run, manage and grow your business.</p>
                </div>

                {COLUMNS.map(column => (
                    <div key={column.title}>
                        <h2 className={columnTitle}>{column.title}</h2>
                        <ul className="mt-4 space-y-3">
                            {column.links.map(link => (
                                <li key={link.label}>
                                    {link.to !== undefined
                                        ? <Link to={link.to} className={footerLink}>{link.label}</Link>
                                        : <a href={link.href} className={footerLink}>{link.label}</a>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h2 className={columnTitle}>Follow us</h2>
                    <SocialLinks className="mt-4" />
                </div>
            </Container>
            <Container className="flex flex-col items-center gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:justify-between">
                <p>© 2026 Xapely. All rights reserved.</p>
                <ul className="flex gap-6">
                    {LEGAL_LINKS.map(link => (
                        <li key={link.to}>
                            <Link to={link.to} className={legalLink}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </footer>
    );
}
