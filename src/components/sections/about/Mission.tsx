import missionImageUrl from '../../../../assets/images/mission-hero.webp';
import { featureGroup } from '../../../content/orbit';
import { PAGE_HREF } from '../../layout/navigation';
import { ButtonLink } from '../../ui/Button';
import { Container } from '../../ui/Container';
import { Icon } from '../../ui/Icon';

const AREAS = ['invoicing', 'payments', 'clients', 'team'].map(featureGroup);

export function Mission() {
    return (
        <section className="bg-paper py-24 lg:py-28">
            <Container className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
                <div className="flex flex-col">
                    <h2 className="text-[2rem] leading-[1.1] font-semibold sm:text-[2.75rem]">Our mission is to make running your business simple.</h2>
                    <p className="mt-5 max-w-lg text-lg leading-[1.7]">
                        By creating tools that save you time, reduce stress and help you get paid faster, we want you to focus less on the hassle and more on growth.
                    </p>
                    <ButtonLink href={PAGE_HREF.waitlist} className="mt-8 self-start">Join the waitlist</ButtonLink>

                    <ul className="mt-12 grid gap-4 sm:grid-cols-2">
                        {AREAS.map(area => (
                            <li key={area.id} className="rounded-card bg-mist p-5 ring-1 ring-line">
                                <Icon name={area.icon} className="size-5 text-brand" />
                                <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em]">{area.title}</h3>
                                <p className="mt-1 text-sm leading-[1.6]">{area.summary}</p>
                                <a href={`${PAGE_HREF.pricing}#compare`} className="mt-4 inline-block rounded-sm text-sm font-semibold text-brand-strong underline decoration-brand/40 underline-offset-4 hover:decoration-brand active:text-ledger">
                                    See what’s included
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative min-h-80 overflow-hidden rounded-panel bg-[linear-gradient(180deg,var(--color-brand-ghost),var(--color-mist))] ring-1 ring-line">
                    <img
                        src={missionImageUrl}
                        alt="Two people planning work together at a desk"
                        width={1000}
                        height={515}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-contain object-center p-8 mix-blend-multiply"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,rgb(60_131_246/0.18),transparent)]" />
                </div>
            </Container>
        </section>
    );
}
