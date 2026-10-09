import type { ReactNode } from 'react';
import { cn } from '../../../lib/cn';
import { Container } from '../../ui/Container';
import { PaymentsChart } from '../../mocks/PaymentsChart';
import { Icon } from '../../ui/Icon';

function BentoCard({ className, children }: { className?: string; children: ReactNode }) {
    return (
        <div className={cn('relative overflow-hidden rounded-card bg-[linear-gradient(160deg,var(--color-mist)_0%,var(--color-brand-ghost)_100%)] p-8 ring-1 ring-line', className)}>
            {children}
        </div>
    );
}

function CardCopy({ title, body }: { title: string; body: string }) {
    return (
        <>
            <h3 className="text-2xl leading-[1.15] font-semibold">{title}</h3>
            <p className="mt-3 max-w-sm leading-[1.7]">{body}</p>
        </>
    );
}

const LINE_ITEMS = [
    { item: 'Logo design', amount: '₦150,000' },
    { item: 'Brand guidelines', amount: '₦90,000' },
] as const;

function LineItemsMock() {
    return (
        <div aria-hidden="true" className="mt-8 rounded-control bg-paper p-4 text-sm shadow-float ring-1 ring-line">
            {LINE_ITEMS.map(line => (
                <div key={line.item} className="flex items-center justify-between border-b border-line py-2.5 first:pt-0">
                    <span className="flex items-center gap-2 text-ledger">
                        <Icon name="check" className="size-4 text-paid" />
                        {line.item}
                    </span>
                    <span className="tabular-nums">{line.amount}</span>
                </div>
            ))}
            <div className="flex items-center justify-between pt-3">
                <span className="flex items-center gap-2 text-brand"><Icon name="bolt" className="size-4" />Totals added for you</span>
                <span className="font-display text-base font-semibold text-ledger tabular-nums">₦240,000</span>
            </div>
        </div>
    );
}

function ShareMock() {
    return (
        <div aria-hidden="true" className="mt-8 flex items-center gap-3">
            <span className="grid size-14 shrink-0 place-items-center rounded-control bg-brand text-paper shadow-brand">
                <Icon name="invoice" className="size-7" />
            </span>
            <span className="h-px flex-1 border-t-2 border-dashed border-brand/40" />
            <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2 rounded-full bg-paper py-1.5 pr-3.5 pl-1.5 text-sm font-semibold text-ledger shadow-float ring-1 ring-line">
                    <span className="grid size-7 place-items-center rounded-full bg-ledger text-paper"><Icon name="chat" className="size-4" /></span>
                    WhatsApp
                </span>
                <span className="flex items-center gap-2 rounded-full bg-paper py-1.5 pr-3.5 pl-1.5 text-sm font-semibold text-ledger shadow-float ring-1 ring-line">
                    <span className="grid size-7 place-items-center rounded-full bg-ledger text-paper"><Icon name="mail" className="size-4" /></span>
                    Email
                </span>
            </div>
        </div>
    );
}

export function WhyOrbit() {
    return (
        <section className="bg-paper py-24 lg:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-[2rem] leading-[1.1] font-semibold sm:text-[2.75rem]">Built around how you already get paid</h2>
                    <p className="mt-4 text-lg leading-[1.7]">No new habits to learn. Orbit fits the way you talk to clients today, and keeps the record for you.</p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-2">
                    <BentoCard>
                        <CardCopy title="Create an invoice in seconds" body="Add your items and Orbit adds up the totals on a branded, compliant invoice." />
                        <LineItemsMock />
                    </BentoCard>

                    <BentoCard>
                        <CardCopy title="Send it where your clients are" body="Share each invoice on WhatsApp or by email in a tap, straight from Orbit." />
                        <ShareMock />
                    </BentoCard>

                    <BentoCard className="grid gap-10 lg:col-span-2 lg:grid-cols-[1fr_1.35fr] lg:items-end lg:pr-0">
                        <div className="lg:self-center">
                            <CardCopy title="See every payment as it lands" body="Track what’s paid, pending and overdue in real time, without chasing anyone for an update." />
                        </div>
                        <PaymentsChart className="relative -mb-8 rounded-t-card shadow-panel ring-1 ring-line lg:-mr-8" />
                    </BentoCard>
                </div>
            </Container>
        </section>
    );
}
