import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { CONTACT_EMAIL, PAGE_HREF, type PageKey } from '../layout/navigation';
import { Container } from '../ui/Container';
import { termsVersion } from './LegalContent';

interface LegalDocumentProps {
    title: string;
    /** The other policy, linked under the title so readers can move between them. */
    related: { label: string; page: PageKey };
    children: ReactNode;
}

/** termsVersion is the effective date (YYYY-MM-DD); shown as "17 November 2026". */
const effectiveDate = new Date(`${termsVersion}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
});

const relatedLink = 'rounded-sm font-semibold text-brand-strong underline decoration-brand/40 underline-offset-4 hover:decoration-brand-strong active:text-ledger';

/** Page body for /terms and /privacy: a title band, then the policy text at a comfortable reading width. */
export function LegalDocument({ title, related, children }: LegalDocumentProps) {
    return (
        <>
            <section className="border-b border-line bg-[radial-gradient(80%_120%_at_0%_0%,var(--color-brand-ghost)_0%,transparent_60%),linear-gradient(180deg,var(--color-paper),var(--color-mist))] py-14 lg:py-20">
                <Container>
                    <div className="max-w-[68ch]">
                        <h1 className="text-[2.5rem] leading-[1.05] font-semibold sm:text-[3.25rem]">{title}</h1>
                        <p className="mt-5 text-base leading-[1.7]">
                            Effective {effectiveDate}. Questions? Email{' '}
                            <a href={`mailto:${CONTACT_EMAIL}`} className={relatedLink}>{CONTACT_EMAIL}</a>.
                        </p>
                        <p className="mt-2 text-base leading-[1.7]">
                            <Link to={PAGE_HREF[related.page]} className={relatedLink}>{related.label}</Link>
                        </p>
                    </div>
                </Container>
            </section>

            <Container className="py-14 lg:py-20">
                <article className="legal-prose max-w-[68ch]">{children}</article>
            </Container>
        </>
    );
}
