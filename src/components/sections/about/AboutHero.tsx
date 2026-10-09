import { Link } from 'react-router';
import missionImageUrl from '../../../../assets/images/mission-hero.webp';
import { PAGE_HREF } from '../../layout/navigation';
import { Container } from '../../ui/Container';
import { Icon } from '../../ui/Icon';
import { OrbitRings } from '../../ui/OrbitRings';

const FACTS = [
    { value: 'Lagos', label: 'Where we build Xapely' },
    { value: '3 ways', label: 'To get paid: card, USSD and bank transfer' },
    { value: '1 place', label: 'For invoices, payments and clients' },
] as const;

const heroLink = 'inline-flex items-center gap-1.5 border-b border-paper/50 pb-1 text-sm font-semibold text-paper hover:border-paper active:opacity-80';

export function AboutHero() {
    return (
        <section className="bg-mist pt-6 pb-16 lg:pb-24">
            <Container>
                <div className="relative overflow-hidden rounded-panel bg-[radial-gradient(90%_100%_at_0%_100%,rgb(60_131_246/0.45)_0%,transparent_60%),linear-gradient(160deg,var(--color-ledger-raised),var(--color-ledger))] px-8 pt-16 pb-10 sm:px-12 lg:min-h-136 lg:pt-24 lg:pb-40">
                    <OrbitRings className="absolute -top-40 -right-56 w-200 max-w-none" ringClassName="stroke-paper/15" dotClassName="fill-brand" />

                    <div className="relative max-w-2xl">
                        <h1 className="text-[2.75rem] leading-[1.02] font-semibold text-paper sm:text-6xl lg:text-[4.5rem]">
                            Running a business should be simple.
                        </h1>
                        <p className="mt-6 max-w-lg text-lg leading-[1.7] text-on-dark">
                            Xapely builds tools that help you save time, stay organised and grow. Orbit, our invoicing platform, is where we’re starting.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-8">
                            <Link to={PAGE_HREF.home} className={heroLink}>Meet Orbit <Icon name="arrowUpRight" className="size-4" /></Link>
                            <Link to={PAGE_HREF.contact} className={heroLink}>Talk to us <Icon name="arrowUpRight" className="size-4" /></Link>
                        </div>
                    </div>

                    <Link
                        to={PAGE_HREF.home}
                        className="relative mt-12 flex w-full max-w-68 flex-col gap-4 rounded-card bg-paper/10 p-3 text-paper ring-1 ring-paper/20 backdrop-blur-md transition-transform duration-300 ease-spring hover:-translate-y-1 active:translate-y-0 lg:absolute lg:top-16 lg:right-16 lg:mt-0"
                    >
                        <span className="block overflow-hidden rounded-control bg-mist">
                            <img src={missionImageUrl} alt="" width={1000} height={515} className="aspect-[4/3] w-full object-cover object-[center_35%] mix-blend-multiply" />
                        </span>
                        <span className="flex items-end justify-between gap-3 px-1 pb-1">
                            <span className="text-sm leading-[1.5] font-semibold">Orbit, our first product: invoicing that gets you paid</span>
                            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-paper text-ledger"><Icon name="arrowUpRight" className="size-4" /></span>
                        </span>
                    </Link>
                </div>

                <dl className="relative z-10 mx-auto -mt-px grid gap-6 rounded-b-panel bg-paper px-8 py-8 shadow-panel sm:grid-cols-3 lg:-mt-28 lg:mr-0 lg:w-176 lg:rounded-tl-panel lg:rounded-br-none lg:rounded-bl-panel lg:px-10 lg:shadow-none">
                    {FACTS.map(fact => (
                        <div key={fact.value} className="flex flex-col-reverse">
                            <dt className="mt-2 text-sm leading-[1.6] text-muted">{fact.label}</dt>
                            <dd className="font-display text-4xl font-semibold tracking-[-0.03em] text-ledger">{fact.value}</dd>
                        </div>
                    ))}
                </dl>
            </Container>
        </section>
    );
}
