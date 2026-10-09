import { useId } from 'react';
import { cn } from '../../lib/cn';

const MONTHS = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'] as const;
const STATUS_CHIPS = [
    { label: 'paid', count: 24, className: 'bg-paid-soft text-paid' },
    { label: 'pending', count: 6, className: 'bg-brand-ghost text-brand-strong' },
    { label: 'overdue', count: 2, className: 'bg-mist text-body' },
] as const;

const LINE = 'M0 118 C40 112 50 100 80 102 S130 108 160 98 S210 72 240 74 S290 60 320 52 S370 24 400 18';

/** Decorative sample of Orbit's payments overview. Not real data. */
export function PaymentsChart({ className }: { className?: string }) {
    const gradientId = useId();

    return (
        <div aria-hidden="true" className={cn('bg-paper p-6 pb-4', className)}>
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs text-muted">Collected this month</p>
                    <p className="mt-1 font-display text-[1.75rem] leading-none font-semibold tracking-[-0.03em] text-ledger tabular-nums">₦1,876,580</p>
                </div>
                <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium">Last 6 months</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                {STATUS_CHIPS.map(chip => (
                    <span key={chip.label} className={cn('rounded-full px-2.5 py-1 text-xs font-semibold', chip.className)}>
                        {chip.count} {chip.label}
                    </span>
                ))}
            </div>
            <svg viewBox="0 0 400 140" className="mt-4 h-36 w-full" preserveAspectRatio="none">
                <defs>
                    <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d={`${LINE} L400 140 L0 140 Z`} fill={`url(#${gradientId})`} />
                <path d={LINE} fill="none" stroke="var(--color-brand)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="mt-2 flex justify-between text-[0.6875rem] text-muted">
                {MONTHS.map(month => <span key={month}>{month}</span>)}
            </div>
        </div>
    );
}
