import { Container } from '../../ui/Container';
import { Icon, type IconName } from '../../ui/Icon';
import { OrbitRings } from '../../ui/OrbitRings';
import { WaitlistForm } from '../../waitlist/WaitlistForm';
import { LiveInvoice } from './LiveInvoice';

const CHANNELS: readonly { icon: IconName; label: string }[] = [
    { icon: 'chat', label: 'WhatsApp' },
    { icon: 'mail', label: 'Email' },
    { icon: 'card', label: 'Card' },
    { icon: 'ussd', label: 'USSD' },
    { icon: 'bank', label: 'Bank transfer' },
];

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-[radial-gradient(120%_80%_at_85%_10%,var(--color-brand-soft)_0%,transparent_55%),linear-gradient(180deg,var(--color-mist)_0%,var(--color-mist)_100%)]">
            <OrbitRings className="absolute top-1/2 left-[62%] w-224 max-w-none -translate-y-1/2 opacity-80 max-lg:hidden" />

            <Container className="relative grid items-center gap-14 pt-14 pb-32 lg:grid-cols-[1.1fr_1fr] lg:pt-20 lg:pb-40">
                <div>
                    <p className="inline-flex items-center gap-2 rounded-full bg-paper/80 py-1.5 pr-3.5 pl-2 text-sm font-medium text-ledger ring-1 ring-line">
                        <span className="size-2.5 rounded-full bg-brand ring-4 ring-brand/20" />
                        Orbit opens to the public soon
                    </p>

                    <h1 className="mt-6 text-[2.75rem] leading-[1.02] font-semibold sm:text-6xl lg:text-[4.25rem]">
                        Invoice in seconds. Get paid without the chase.
                    </h1>

                    <p className="mt-6 max-w-136 text-lg leading-[1.7]">
                        Orbit is invoicing from Xapely. Create compliant invoices, send them on WhatsApp or email, and collect payment by card, USSD or bank transfer, all in one place.
                    </p>

                    <div className="mt-8 max-w-120">
                        <WaitlistForm source="landing_hero" note="We’ll only use your details to tell you when Orbit opens." />
                    </div>

                    <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3" aria-label="Works with">
                        {CHANNELS.map(channel => (
                            <li key={channel.label} className="flex items-center gap-2 text-[0.9375rem] font-semibold text-ledger/75">
                                <Icon name={channel.icon} className="size-4.5 text-brand" />
                                {channel.label}
                            </li>
                        ))}
                    </ul>
                </div>

                <LiveInvoice />
            </Container>
        </section>
    );
}
