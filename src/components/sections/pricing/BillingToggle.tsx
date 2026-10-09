import { cn } from '../../../lib/cn';

export type BillingPeriod = 'monthly' | 'annual';

interface BillingToggleProps {
    period: BillingPeriod;
    onChange: (period: BillingPeriod) => void;
}

export function BillingToggle({ period, onChange }: BillingToggleProps) {
    const annual = period === 'annual';

    return (
        <div className="flex items-center justify-center gap-3 text-sm font-medium">
            <span className={annual ? 'text-on-dark' : 'text-paper'}>Monthly</span>
            <button
                type="button"
                role="switch"
                aria-checked={annual}
                aria-label="Bill annually"
                onClick={() => onChange(annual ? 'monthly' : 'annual')}
                className={cn(
                    'relative h-8 w-14 rounded-full p-1 transition-transform active:scale-95 focus-visible:outline-paper',
                    annual ? 'bg-brand shadow-brand' : 'bg-ledger-line',
                )}
            >
                <span
                    className={cn(
                        'block size-6 rounded-full bg-paper transition-transform duration-300 ease-spring',
                        annual ? 'translate-x-6' : 'translate-x-0',
                    )}
                />
            </button>
            <span className={annual ? 'text-paper' : 'text-on-dark'}>Annually</span>
            <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-brand-soft ring-1 ring-brand/60">2 months free</span>
        </div>
    );
}
