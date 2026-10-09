import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

/** Page-width wrapper: 1152px max with a 24px gutter on small screens. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('mx-auto w-full max-w-6xl px-6', className)} {...props} />;
}
