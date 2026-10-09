import { cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { Icon } from './Icon';

const mark = cva('mt-0.5 grid size-5 shrink-0 place-items-center rounded-full', {
    variants: {
        tone: {
            light: 'bg-brand-ghost text-brand',
            dark: 'bg-brand/20 text-brand-soft',
            brand: 'bg-paper/20 text-paper',
        },
    },
});

interface CheckListProps {
    items: readonly string[];
    tone?: 'light' | 'dark' | 'brand';
    className?: string;
}

export function CheckList({ items, tone = 'light', className }: CheckListProps) {
    return (
        <ul className={cn('space-y-3', className)}>
            {items.map(item => (
                <li key={item} className="flex items-start gap-3 text-[0.9375rem] leading-[1.6]">
                    <span className={mark({ tone })}>
                        <Icon name="check" className="size-3" />
                    </span>
                    {item}
                </li>
            ))}
        </ul>
    );
}
