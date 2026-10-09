import { useId, type ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

/** Shared look for text inputs, selects and textareas. */
export const fieldControl = cva(
    'w-full rounded-control bg-paper px-4 text-[0.9375rem] text-ledger shadow-inset-line outline-none placeholder:text-muted focus:shadow-[inset_0_0_0_2px_var(--color-brand)]',
    {
        variants: {
            multiline: { true: 'min-h-32 resize-y py-3 leading-[1.6]', false: 'h-12' },
            invalid: { true: 'shadow-[inset_0_0_0_2px_var(--color-brand-strong)]' },
        },
        defaultVariants: { multiline: false },
    },
);

interface FormFieldProps {
    label: string;
    error?: string | undefined;
    className?: string;
    /** Receives the ids to wire onto the control for labelling and error text. */
    children: (ids: { id: string; describedBy: string | undefined }) => ReactNode;
}

export function FormField({ label, error, className, children }: FormFieldProps) {
    const id = useId();
    const errorId = `${id}-error`;

    return (
        <div className={cn('flex flex-col gap-2', className)}>
            <label htmlFor={id} className="text-sm font-semibold text-ledger">{label}</label>
            {children({ id, describedBy: error ? errorId : undefined })}
            {error && <p id={errorId} className="text-sm font-medium text-brand-strong">{error}</p>}
        </div>
    );
}
