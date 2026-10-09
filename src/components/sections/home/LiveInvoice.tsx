import { useEffect, useRef, useState } from 'react';
import { cn } from '../../../lib/cn';
import { useInView } from '../../../hooks/useInView';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { Icon, type IconName } from '../../ui/Icon';

interface Stage {
    label: string;
    pillClass: string;
    action: string;
    actionClass: string;
    toast: { icon: IconName; iconClass: string; title: string; body: string } | null;
    /** How long this stage stays on screen before the next one. */
    holdMs: number;
}

const STAGES: readonly Stage[] = [
    {
        label: 'Draft',
        pillClass: 'bg-mist text-body',
        action: 'Send on WhatsApp',
        actionClass: 'bg-brand text-paper',
        toast: null,
        holdMs: 2200,
    },
    {
        label: 'Sent',
        pillClass: 'bg-brand-ghost text-brand-strong',
        action: 'Waiting for payment',
        actionClass: 'bg-mist text-body',
        toast: { icon: 'chat', iconClass: 'bg-brand text-paper', title: 'Delivered on WhatsApp', body: 'Ada’s Kitchen opened your invoice' },
        holdMs: 2600,
    },
    {
        label: 'Paid',
        pillClass: 'bg-paid-soft text-paid',
        action: 'Payment received',
        actionClass: 'bg-paid text-paper',
        toast: { icon: 'check', iconClass: 'bg-paid text-paper', title: '₦1,250,000 received', body: 'Paid by bank transfer' },
        holdMs: 3800,
    },
];

const FINAL_STAGE = STAGES.length - 1;
const STEP_LABELS = ['Created', 'Sent', 'Paid'] as const;

/**
 * Hero visual: one invoice that moves from draft, to sent, to paid.
 * Plays only while on screen, and holds on "Paid" for reduced-motion visitors.
 */
export function LiveInvoice() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);
    const reducedMotion = useReducedMotion();
    const [stage, setStage] = useState(0);
    const current = reducedMotion ? FINAL_STAGE : stage;

    useEffect(() => {
        if (reducedMotion || !inView) return;
        const timer = window.setTimeout(
            () => setStage(s => (s + 1) % STAGES.length),
            STAGES[stage]?.holdMs ?? 2500,
        );
        return () => window.clearTimeout(timer);
    }, [stage, inView, reducedMotion]);

    return (
        <div
            ref={ref}
            role="img"
            aria-label="Example Orbit invoice for ₦1,250,000 moving from draft, to sent on WhatsApp, to paid by bank transfer."
            className="relative mx-auto w-full max-w-92 pt-28 pb-10 sm:pt-24"
        >
            {/* Payment options card, peeking out above and behind the invoice */}
            <div className="absolute top-0 right-0 z-0 w-50 rotate-[4deg] rounded-card bg-[linear-gradient(145deg,var(--color-brand)_0%,var(--color-brand-strong)_100%)] p-4 pb-10 text-paper shadow-brand sm:-right-14">
                <p className="text-xs text-paper/75">Your client can pay by</p>
                <div className="mt-3 flex flex-col gap-2 text-sm font-medium">
                    <span className="flex items-center gap-2"><Icon name="card" className="size-4" />Card</span>
                    <span className="flex items-center gap-2"><Icon name="ussd" className="size-4" />USSD</span>
                    <span className="flex items-center gap-2"><Icon name="bank" className="size-4" />Bank transfer</span>
                </div>
            </div>

            <div aria-hidden="true" className="relative z-10 rounded-card bg-paper p-5 shadow-panel ring-1 ring-line">
                <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-control bg-brand-ghost font-display font-semibold text-brand">AK</span>
                    <div>
                        <p className="font-semibold text-ledger">Ada’s Kitchen</p>
                        <p className="text-xs text-muted">Invoice #1042</p>
                    </div>
                    <span className="ml-auto grid text-xs font-semibold">
                        {STAGES.map((s, i) => (
                            <span
                                key={s.label}
                                className={cn(
                                    'col-start-1 row-start-1 rounded-full px-2.5 py-1 text-center transition-opacity duration-300',
                                    s.pillClass,
                                    i === current ? 'opacity-100' : 'opacity-0',
                                )}
                            >
                                {s.label}
                            </span>
                        ))}
                    </span>
                </div>

                <div className="mt-5 rounded-control bg-mist p-4">
                    <p className="text-xs text-muted">Amount due</p>
                    <p className="mt-1 font-display text-[2rem] leading-none font-semibold tracking-[-0.03em] text-ledger tabular-nums">₦1,250,000</p>
                    <p className="mt-2 text-xs text-muted">Due 24 October 2026</p>
                </div>

                <dl className="mt-4 space-y-2.5 text-sm">
                    <div className="flex justify-between"><dt>Catering for 40 guests</dt><dd className="text-ledger tabular-nums">₦1,000,000</dd></div>
                    <div className="flex justify-between"><dt>Delivery and setup</dt><dd className="text-ledger tabular-nums">₦250,000</dd></div>
                </dl>

                <div className="mt-5 grid grid-cols-3 gap-1.5">
                    {STEP_LABELS.map((label, i) => (
                        <div key={label}>
                            <div className="h-1.5 overflow-hidden rounded-full bg-line">
                                <div
                                    className={cn(
                                        'h-full origin-left rounded-full transition-transform duration-700 ease-out',
                                        i === FINAL_STAGE ? 'bg-paid' : 'bg-brand',
                                        i <= current ? 'scale-x-100' : 'scale-x-0',
                                    )}
                                />
                            </div>
                            <p className={cn('mt-1.5 text-[0.6875rem]', i <= current ? 'text-ledger' : 'text-muted')}>{label}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 grid h-11 text-sm font-semibold">
                    {STAGES.map((s, i) => (
                        <span
                            key={s.action}
                            className={cn(
                                'col-start-1 row-start-1 flex items-center justify-center rounded-control transition-opacity duration-300',
                                s.actionClass,
                                i === current ? 'opacity-100' : 'opacity-0',
                            )}
                        >
                            {s.action}
                        </span>
                    ))}
                </div>
            </div>

            {/* Notification that confirms each step */}
            <div aria-hidden="true" className="absolute bottom-0 left-0 z-20 grid sm:-left-12">
                {STAGES.map((s, i) =>
                    s.toast ? (
                        <div
                            key={s.toast.title}
                            className={cn(
                                'col-start-1 row-start-1 flex w-62 items-center gap-3 rounded-[1rem] bg-paper p-3 shadow-float ring-1 ring-line',
                                'transition-[opacity,transform] duration-500 ease-spring',
                                i === current ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
                            )}
                        >
                            <span className={cn('grid size-9 shrink-0 place-items-center rounded-full', s.toast.iconClass)}>
                                <Icon name={s.toast.icon} className="size-4.5" />
                            </span>
                            <span>
                                <span className="block text-sm font-semibold text-ledger">{s.toast.title}</span>
                                <span className="block text-xs text-muted">{s.toast.body}</span>
                            </span>
                        </div>
                    ) : null,
                )}
            </div>
        </div>
    );
}
