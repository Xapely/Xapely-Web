import { cn } from '../../lib/cn';

interface OrbitRingsProps {
    className?: string;
    /** Stroke colour class for the rings, e.g. "stroke-brand/25". */
    ringClassName?: string;
    /** Fill colour class for the planets on each ring. */
    dotClassName?: string;
}

/** Tilted concentric orbits, the brand motif for Orbit. Purely decorative. */
export function OrbitRings({ className, ringClassName = 'stroke-brand/25', dotClassName = 'fill-brand' }: OrbitRingsProps) {
    return (
        <svg viewBox="0 0 600 600" fill="none" aria-hidden="true" className={cn('pointer-events-none', className)}>
            <g transform="rotate(-24 300 300)" className={ringClassName} strokeWidth="1.25">
                <ellipse cx="300" cy="300" rx="290" ry="150" />
                <ellipse cx="300" cy="300" rx="215" ry="108" />
                <ellipse cx="300" cy="300" rx="140" ry="68" />
                <g className={dotClassName} stroke="none">
                    <circle cx="590" cy="300" r="7" />
                    <circle cx="160" cy="382" r="5" />
                    <circle cx="410" cy="258" r="4" />
                </g>
            </g>
        </svg>
    );
}
