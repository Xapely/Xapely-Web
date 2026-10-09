import { Container } from '../../ui/Container';
import { Icon, type IconName } from '../../ui/Icon';

const GOALS: readonly { icon: IconName; title: string; body: string }[] = [
    { icon: 'users', title: 'Empower thousands of businesses', body: 'Give businesses of every size the tools to run, manage and scale with ease.' },
    { icon: 'card', title: 'Make payments seamless', body: 'Let clients pay the way they prefer: card, USSD or bank transfer.' },
    { icon: 'clock', title: 'Save time and effort', body: 'Cut the admin around invoicing so you can focus less on the hassle and more on growth.' },
    { icon: 'shield', title: 'Build a trusted platform', body: 'Keep every invoice compliant and every payment accounted for.' },
    { icon: 'target', title: 'Keep it simple', body: 'Practical tools designed around how your business already works.' },
    { icon: 'layers', title: 'Bring it all together', body: 'Step by step, put everything your business needs in one place.' },
];

export function Principles() {
    return (
        <section className="bg-mist py-24 lg:py-28">
            <Container>
                <h2 className="mx-auto max-w-xl text-center text-[2rem] leading-[1.1] font-semibold sm:text-[2.75rem]">
                    What we’re working towards
                </h2>
                <ul className="mt-14 grid overflow-hidden rounded-card bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3 [&>li]:bg-paper gap-px">
                    {GOALS.map(goal => (
                        <li key={goal.title} className="p-8">
                            <span className="grid size-10 place-items-center rounded-control bg-brand-ghost text-brand">
                                <Icon name={goal.icon} className="size-5" />
                            </span>
                            <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em]">{goal.title}</h3>
                            <p className="mt-2 text-[0.9375rem] leading-[1.7]">{goal.body}</p>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
