import logoUrl from '../../../assets/images/logo.webp';
import { Container } from '../ui/Container';
import { SocialLinks } from '../ui/SocialLinks';
import { COMPANY_ADDRESS, CONTACT_EMAIL, PAGE_HREF } from './navigation';

interface FooterColumn {
    title: string;
    links: readonly { label: string; href: string }[];
}

const COLUMNS: readonly FooterColumn[] = [
    {
        title: 'Orbit',
        links: [
            { label: 'Features', href: `${PAGE_HREF.home}#features` },
            { label: 'How it works', href: `${PAGE_HREF.home}#how-it-works` },
            { label: 'Pricing', href: PAGE_HREF.pricing },
            { label: 'Join the waitlist', href: PAGE_HREF.waitlist },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About us', href: PAGE_HREF.about },
            { label: 'Contact', href: PAGE_HREF.contact },
            { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
        ],
    },
];

const footerLink = 'rounded-sm text-sm text-body hover:text-ledger active:text-brand-strong';
const columnTitle = 'font-body text-sm font-semibold tracking-normal text-ledger';

export function Footer() {
    return (
        <footer className="border-t border-line bg-[linear-gradient(180deg,var(--color-paper),var(--color-mist))]">
            <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_auto]">
                <div className="max-w-xs">
                    <img src={logoUrl} alt="Xapely" width={106} height={30} loading="lazy" className="h-7 w-auto" />
                    <p className="mt-4 text-sm leading-[1.7]">Simple tools to run, manage and grow your business.</p>
                    <p className="mt-2 text-sm leading-[1.7] text-muted">{COMPANY_ADDRESS}</p>
                </div>

                {COLUMNS.map(column => (
                    <div key={column.title}>
                        <h2 className={columnTitle}>{column.title}</h2>
                        <ul className="mt-4 space-y-3">
                            {column.links.map(link => (
                                <li key={link.label}><a href={link.href} className={footerLink}>{link.label}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h2 className={columnTitle}>Follow us</h2>
                    <SocialLinks className="mt-4" />
                </div>
            </Container>
            <Container className="border-t border-line py-6 text-center text-xs text-muted">
                © 2026 Xapely. All rights reserved.
            </Container>
        </footer>
    );
}
