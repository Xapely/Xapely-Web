import { Container } from '../../ui/Container';
import { Icon, type IconName } from '../../ui/Icon';

const FEATURES: readonly { icon: IconName; title: string; body: string }[] = [
    {
        icon: 'invoice',
        title: 'Smart invoicing',
        body: 'Generate a professional invoice with your business details in seconds. Orbit adds the details your invoice legally needs.',
    },
    {
        icon: 'share',
        title: 'Easy sharing',
        body: 'Send invoices on WhatsApp or email, the channels your clients already use, so your bill gets seen.',
    },
    {
        icon: 'shield',
        title: 'Secure payments',
        body: 'Clients pay by card, USSD or bank transfer from the invoice’s payment page, and the money settles to your verified bank account.',
    },
];

export function Features() {
    return (
        <section id="features" className="relative -mt-20 lg:-mt-24">
            <Container>
                <div className="rounded-panel bg-paper p-8 shadow-panel ring-1 ring-line sm:p-12 lg:p-14">
                    <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-end">
                        <h2 className="text-[2rem] leading-[1.1] font-semibold sm:text-[2.5rem]">
                            Everything an invoice needs, and nothing it doesn’t.
                        </h2>
                        <p className="max-w-md leading-[1.7]">
                            Orbit takes care of the paperwork on every invoice, so your time goes into the next sale instead of the last one.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
                        {FEATURES.map(feature => (
                            <div key={feature.title}>
                                <span className="grid size-11 place-items-center rounded-control bg-brand-ghost text-brand">
                                    <Icon name={feature.icon} className="size-5.5" />
                                </span>
                                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{feature.title}</h3>
                                <p className="mt-2 text-[0.9375rem] leading-[1.7]">{feature.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
