import { cn } from '../../lib/cn';
import { Icon, type IconName } from '../ui/Icon';
import { PaymentsChart } from './PaymentsChart';

// Mirrors the sections of the Orbit app (Xapely-Orbit-Frontend/src/app/(protected)).
const NAV: readonly { icon: IconName; label: string }[] = [
    { icon: 'home', label: 'Dashboard' },
    { icon: 'invoice', label: 'Invoices' },
    { icon: 'users', label: 'Clients' },
    { icon: 'receipt', label: 'Transactions' },
    { icon: 'settings', label: 'Settings' },
];

const INVOICES = [
    { client: 'Ada’s Kitchen', number: 'INV-1042', amount: '₦1,250,000', status: 'Paid', tone: 'bg-paid-soft text-paid' },
    { client: 'Bright Prints', number: 'INV-1041', amount: '₦86,000', status: 'Pending', tone: 'bg-brand-ghost text-brand-strong' },
    { client: 'Kemi Studio', number: 'INV-1039', amount: '₦240,000', status: 'Overdue', tone: 'bg-mist text-body' },
] as const;

/** Decorative preview of the Orbit app inside a device frame. Sample data only. */
export function OrbitDashboard({ className }: { className?: string }) {
    return (
        <div aria-hidden="true" className={cn('rounded-[1.75rem] bg-ledger p-2.5 shadow-panel', className)}>
            <div className="flex overflow-hidden rounded-[1.25rem] bg-paper">
                <aside className="hidden w-44 shrink-0 flex-col gap-1 border-r border-line bg-mist/60 p-3 sm:flex">
                    <p className="mb-3 px-2 font-display text-sm font-semibold text-ledger">Orbit</p>
                    {NAV.map((item, index) => (
                        <span
                            key={item.label}
                            className={cn('flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium', index === 0 ? 'bg-paper text-ledger shadow-inset-line' : 'text-body')}
                        >
                            <Icon name={item.icon} className="size-3.5" />
                            {item.label}
                        </span>
                    ))}
                </aside>
                <div className="min-w-0 flex-1">
                    <div className="border-b border-line px-6 py-4">
                        <p className="font-display text-base font-semibold text-ledger">Dashboard</p>
                        <p className="text-xs text-muted">How your invoices and payments are doing</p>
                    </div>
                    <PaymentsChart className="border-b border-line" />
                    <ul className="divide-y divide-line px-6 py-2 text-xs">
                        {INVOICES.map(invoice => (
                            <li key={invoice.number} className="flex items-center gap-3 py-2.5">
                                <span className="grid size-7 place-items-center rounded-full bg-brand-ghost font-semibold text-brand">{invoice.client[0]}</span>
                                <span className="min-w-0 flex-1">
                                    <span className="block truncate font-semibold text-ledger">{invoice.client}</span>
                                    <span className="block text-muted">{invoice.number}</span>
                                </span>
                                <span className="tabular-nums text-ledger">{invoice.amount}</span>
                                <span className={cn('rounded-full px-2 py-0.5 font-semibold', invoice.tone)}>{invoice.status}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
