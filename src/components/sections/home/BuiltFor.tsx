import { cva } from 'class-variance-authority';
import { Link } from 'react-router';
import { PAGE_HREF } from '../../layout/navigation';
import { CheckList } from '../../ui/CheckList';
import { Container } from '../../ui/Container';
import { Icon } from '../../ui/Icon';
import { OrbitRings } from '../../ui/OrbitRings';

const INVOICE_CONTENTS = [
    'Your business name, logo and contact details',
    'The details your invoice legally needs',
    'Clear line items, totals and due date',
    'A payment page for card, USSD or bank transfer',
] as const;

const audienceCard = cva(
    'group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-card p-8 transition-transform duration-300 ease-spring hover:-translate-y-1 active:translate-y-0',
    {
        variants: {
            tone: {
                light: 'bg-[linear-gradient(160deg,var(--color-mist),var(--color-brand-ghost))] text-ledger ring-1 ring-line',
                brand: 'bg-[linear-gradient(145deg,var(--color-brand)_0%,var(--color-brand-strong)_100%)] text-paper shadow-brand',
            },
        },
    },
);

const AUDIENCES = [
    {
        tone: 'light',
        title: 'Freelancers',
        body: 'Send polished invoices from your phone between jobs, and know the moment you’re paid.',
    },
    {
        tone: 'brand',
        title: 'Small businesses',
        body: 'Keep every invoice compliant and every payment tracked as your client list grows.',
    },
] as const;

export function BuiltFor() {
    return (
        <section id="built-for" className="bg-paper py-24 lg:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-[2rem] leading-[1.1] font-semibold sm:text-[2.75rem]">Less admin. More time for the work that pays.</h2>
                    <p className="mt-4 text-lg leading-[1.7]">
                        We’re building Orbit to save you time, reduce stress and help you get paid faster, so you can focus on growth instead of paperwork.
                    </p>
                </div>

                <div className="mx-auto mt-14 max-w-4xl rounded-card bg-mist p-6 ring-1 ring-line sm:p-8">
                    <h3 className="font-body text-base font-semibold tracking-normal">On every Orbit invoice</h3>
                    <CheckList items={INVOICE_CONTENTS} className="mt-5 grid gap-4 space-y-0 sm:grid-cols-2" />
                </div>

                <div className="mx-auto mt-5 grid max-w-4xl gap-5 md:grid-cols-2">
                    {AUDIENCES.map(audience => (
                        <Link key={audience.title} to={PAGE_HREF.waitlist} className={audienceCard({ tone: audience.tone })}>
                            {audience.tone === 'brand' && (
                                <OrbitRings className="absolute -right-40 -bottom-40 w-104" ringClassName="stroke-paper/25" dotClassName="fill-paper/70" />
                            )}
                            <div className="relative">
                                <h3 className="text-[1.75rem] font-semibold text-current">{audience.title}</h3>
                                <p className={audience.tone === 'brand' ? 'mt-3 leading-[1.7] text-paper/85' : 'mt-3 leading-[1.7]'}>{audience.body}</p>
                            </div>
                            <span className="relative mt-8 flex items-center justify-between font-semibold">
                                Join the waitlist
                                <span className="grid size-10 place-items-center rounded-full bg-current/10 transition-transform duration-300 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    <Icon name="arrowUpRight" className="size-5" />
                                </span>
                            </span>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
