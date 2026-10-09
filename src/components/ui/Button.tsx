import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const buttonStyles = cva(
    [
        'inline-flex items-center justify-center gap-2 rounded-control font-body font-semibold whitespace-nowrap',
        'transition-transform duration-200 ease-spring active:scale-[0.97]',
        'focus-visible:outline-2 focus-visible:outline-offset-2',
        'disabled:pointer-events-none disabled:opacity-60',
    ],
    {
        variants: {
            intent: {
                primary: 'bg-brand text-paper shadow-brand hover:bg-brand-strong focus-visible:outline-brand',
                dark: 'bg-ledger text-paper hover:bg-ledger-raised focus-visible:outline-ledger',
                light: 'bg-paper text-ledger shadow-inset-line hover:bg-brand-ghost focus-visible:outline-brand',
                onDark: 'bg-paper/10 text-paper ring-1 ring-paper/20 hover:bg-paper/15 focus-visible:outline-paper',
            },
            size: {
                sm: 'h-10 px-4 text-sm',
                md: 'h-12 px-5 text-[0.9375rem]',
            },
        },
        defaultVariants: { intent: 'primary', size: 'md' },
    },
);

type ButtonVariants = VariantProps<typeof buttonStyles>;

export function Button({ className, intent, size, type = 'button', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants) {
    return <button type={type} className={cn(buttonStyles({ intent, size }), className)} {...props} />;
}

export function ButtonLink({ className, intent, size, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & ButtonVariants) {
    return <a className={cn(buttonStyles({ intent, size }), className)} {...props} />;
}
