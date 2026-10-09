import type { Plan } from '../../../content/orbit';
import { cn } from '../../../lib/cn';
import { PAGE_HREF } from '../../layout/navigation';
import { ButtonLink } from '../../ui/Button';
import { CheckList } from '../../ui/CheckList';
import type { BillingPeriod } from './BillingToggle';

const naira = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 });

function PriceLine({ plan, period }: { plan: Plan; period: BillingPeriod }) {
    if (!plan.price) {
        return (
            <>
                <p className="font-display text-[2.5rem] leading-none font-semibold tracking-[-0.03em] text-paper">Custom</p>
                <p className="mt-2 text-sm text-on-dark">Priced for your invoice volume</p>
            </>
        );
    }

    if (plan.price.monthly === 0) {
        return (
            <>
                <p className="font-display text-[2.5rem] leading-none font-semibold tracking-[-0.03em] text-paper">Free</p>
                <p className="mt-2 text-sm text-on-dark">No monthly fee</p>
            </>
        );
    }

    const perMonth = period === 'annual' ? Math.round(plan.price.annual / 12) : plan.price.monthly;

    return (
        <>
            <p className="font-display text-[2.5rem] leading-none font-semibold tracking-[-0.03em] text-paper tabular-nums">
                {naira.format(perMonth)}
                <span className="text-xl font-medium text-on-dark"> / month</span>
            </p>
            <p className="mt-2 text-sm text-on-dark tabular-nums">
                {period === 'annual' ? `Billed ${naira.format(plan.price.annual)} a year` : 'Billed monthly'}
            </p>
        </>
    );
}

export function PlanCard({ plan, period }: { plan: Plan; period: BillingPeriod }) {
    return (
        <article
            className={cn(
                'flex flex-col rounded-card p-7 ring-1',
                plan.featured
                    ? 'bg-[linear-gradient(180deg,rgb(60_131_246/0.16),var(--color-ledger-raised))] shadow-[0_0_0_1px_var(--color-brand),0_30px_80px_-30px_rgb(60_131_246/0.6)] ring-brand'
                    : 'bg-ledger-raised/60 ring-ledger-line',
            )}
        >
            <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold text-paper">{plan.name}</h2>
                {plan.featured && <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold text-paper">Most popular</span>}
            </div>
            <p className="mt-2 min-h-12 text-[0.9375rem] leading-[1.6] text-on-dark">{plan.description}</p>

            <div className="mt-6 border-t border-dashed border-ledger-line pt-6">
                <PriceLine plan={plan} period={period} />
            </div>

            <ButtonLink
                href={PAGE_HREF[plan.cta.page]}
                intent={plan.featured ? 'primary' : 'onDark'}
                className="mt-6 w-full"
            >
                {plan.cta.label}
            </ButtonLink>

            <CheckList items={plan.highlights} tone="dark" className="mt-8 text-on-dark" />
        </article>
    );
}
