import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { OrbitRings } from './OrbitRings';

/** Rounded Ledger-navy panel with a blue glow and orbit rings, used for closing calls to action. */
export function DarkPanel({ className, children }: { className?: string; children: ReactNode }) {
    return (
        <div className={cn('relative overflow-hidden rounded-panel bg-[radial-gradient(80%_120%_at_100%_100%,rgb(60_131_246/0.35)_0%,transparent_60%),linear-gradient(180deg,var(--color-ledger),var(--color-ledger))] p-8 sm:p-12 lg:p-16', className)}>
            <OrbitRings
                className="absolute -right-40 -bottom-56 w-168 max-sm:hidden"
                ringClassName="stroke-brand/30"
                dotClassName="fill-brand/80"
            />
            <div className="relative">{children}</div>
        </div>
    );
}
