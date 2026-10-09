import { cn } from '../../../lib/cn';
import { Container } from '../../ui/Container';
import { Icon, type IconName } from '../../ui/Icon';

const CHANNELS: readonly { icon: IconName; label: string }[] = [
    { icon: 'chat', label: 'WhatsApp' },
    { icon: 'mail', label: 'Email' },
    { icon: 'card', label: 'Card' },
    { icon: 'ussd', label: 'USSD' },
    { icon: 'bank', label: 'Bank transfer' },
];

export function WhoWeAre() {
    return (
        <section className="bg-paper py-24 lg:py-28">
            <Container>
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <h2 className="text-[2rem] leading-[1.1] font-semibold sm:text-[2.75rem]">
                        Simple, practical, and built for the way your business works.
                    </h2>
                    <div className="space-y-4 text-lg leading-[1.7] lg:pt-2">
                        <p>No complex systems, no wasted time, just tools that work for you.</p>
                        <p>We’ve started, but this is just the beginning. Step by step, we’re building a platform that brings together everything your business needs, all in one place.</p>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="font-body text-base font-semibold tracking-normal">Orbit works with the channels your clients already use</h3>
                    <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                        {CHANNELS.map((channel, index) => (
                            <li
                                key={channel.label}
                                className={cn(
                                    'flex aspect-square flex-col items-center justify-center gap-3 rounded-full text-center font-semibold text-ledger',
                                    index === 0 ? 'bg-paper shadow-panel ring-1 ring-line' : 'bg-mist',
                                )}
                            >
                                <Icon name={channel.icon} className="size-7 text-brand" />
                                {channel.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}
