import { Container } from '../../ui/Container';

const STEPS = [
    {
        title: 'Create your invoice',
        body: 'Add your client and what you’re billing for. Orbit builds a branded, compliant invoice in seconds.',
    },
    {
        title: 'Send it on WhatsApp or email',
        body: 'Deliver it through the channel your client already uses, so your bill gets seen.',
    },
    {
        title: 'Get paid',
        body: 'Your client pays by card, USSD or bank transfer, and Orbit records the payment and creates the receipt for you.',
    },
] as const;

export function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="relative overflow-hidden bg-[radial-gradient(70%_90%_at_100%_0%,rgb(60_131_246/0.28)_0%,transparent_60%),linear-gradient(180deg,var(--color-ledger),var(--color-ledger))] py-24 lg:py-28"
        >
            <Container>
                <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
                    <h2 className="text-[2rem] leading-[1.1] font-semibold text-paper sm:text-[2.75rem]">
                        From invoice to paid in three steps.
                    </h2>
                    <p className="max-w-md leading-[1.7] text-on-dark">
                        No spreadsheets, no reminders written by hand. Orbit keeps the whole journey in one place.
                    </p>
                </div>

                <ol className="mt-14 grid gap-5 md:grid-cols-3">
                    {STEPS.map((step, index) => (
                        <li key={step.title} className="relative rounded-card bg-ledger-raised/70 p-7 ring-1 ring-ledger-line">
                            <span
                                aria-hidden="true"
                                className="block font-display text-[4.5rem] leading-none font-semibold text-transparent [-webkit-text-stroke:1.5px_var(--color-brand)]"
                            >
                                {index + 1}
                            </span>
                            <h3 className="mt-10 text-xl font-semibold text-paper">
                                <span className="sr-only">Step {index + 1}: </span>
                                {step.title}
                            </h3>
                            <p className="mt-3 text-[0.9375rem] leading-[1.7] text-on-dark">{step.body}</p>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    );
}
