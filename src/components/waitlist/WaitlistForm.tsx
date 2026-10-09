import { useId, useState, type FormEvent } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { EMAIL_PATTERN } from '../../lib/email';
import type { WaitlistSource } from '../../lib/waitlist-api';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { useWaitlist } from './WaitlistProvider';

type Tone = 'light' | 'dark';
type Shape = 'bar' | 'pill';

const fieldShell = cva('flex flex-col gap-2 sm:flex-row sm:items-center', {
    variants: {
        tone: {
            light: 'bg-paper ring-1 ring-line focus-within:ring-brand',
            dark: 'bg-ledger-raised ring-1 ring-ledger-line focus-within:ring-brand',
        },
        shape: {
            bar: 'rounded-[1rem] p-1.5 shadow-float',
            pill: 'rounded-[1.75rem] p-2 shadow-panel sm:rounded-full',
        },
        invalid: { true: 'ring-2 ring-brand-strong' },
    },
});

const input = cva('h-12 w-full min-w-0 bg-transparent px-4 text-[0.9375rem] outline-none', {
    variants: {
        tone: {
            light: 'text-ledger placeholder:text-muted',
            dark: 'text-paper placeholder:text-on-dark/70',
        },
        shape: {
            bar: 'rounded-control',
            pill: 'h-14 rounded-full px-5 ring-1 ring-line',
        },
    },
});

const message = cva('mt-3 text-sm leading-[1.6]', {
    variants: {
        tone: { light: 'text-body', dark: 'text-on-dark' },
        error: { true: 'font-medium' },
    },
    compoundVariants: [
        { tone: 'light', error: true, className: 'text-brand-strong' },
        { tone: 'dark', error: true, className: 'text-paper' },
    ],
});

interface WaitlistFormProps {
    /** Recorded with the sign-up so we know which form people used. */
    source: WaitlistSource;
    tone?: Tone;
    shape?: Shape;
    note?: string;
}

export function WaitlistForm({ source, tone = 'light', shape = 'bar', note }: WaitlistFormProps) {
    const { status, email: joinedEmail, errorMessage, source: activeSource, join } = useWaitlist();
    const [value, setValue] = useState('');
    const [validationError, setValidationError] = useState<string | null>(null);
    const inputId = useId();
    const messageId = useId();

    if (status === 'joined') {
        return (
            <div
                role="status"
                className={tone === 'light'
                    ? 'flex items-start gap-3 rounded-[1rem] bg-paid-soft p-4 text-ledger'
                    : 'flex items-start gap-3 rounded-[1rem] bg-paid/15 p-4 text-paper ring-1 ring-paid/40'}
            >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-paid text-paper">
                    <Icon name="check" className="size-4" />
                </span>
                <p className="text-left text-[0.9375rem] leading-[1.6]">
                    <strong className="font-semibold">You’re on the waitlist.</strong>{' '}
                    We’ll email <span className="font-semibold">{joinedEmail}</span> as soon as Orbit opens.
                </p>
            </div>
        );
    }

    const isActive = activeSource === source;
    const submitting = status === 'submitting' && isActive;
    const shownError = validationError ?? (status === 'error' && isActive ? errorMessage : null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Bots fill every field; people never see this one. Drop the request silently.
        if (new FormData(event.currentTarget).get('company')) return;

        if (!EMAIL_PATTERN.test(value.trim())) {
            setValidationError('Enter an email address like name@business.com.');
            return;
        }

        setValidationError(null);
        void join(value, source);
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className={cn(fieldShell({ tone, shape, invalid: Boolean(shownError) }))}>
                <div className="relative flex-1">
                    <label
                        htmlFor={inputId}
                        className={shape === 'pill'
                            ? 'absolute -top-2 left-5 bg-paper px-1.5 text-xs font-medium text-ledger'
                            : 'sr-only'}
                    >
                        Your email
                    </label>
                    <input
                        id={inputId}
                        type="email"
                        name="email"
                        autoComplete="email"
                        inputMode="email"
                        placeholder="you@yourbusiness.com"
                        value={value}
                        onChange={event => {
                            setValue(event.target.value);
                            if (validationError) setValidationError(null);
                        }}
                        aria-invalid={Boolean(shownError)}
                        aria-describedby={messageId}
                        className={input({ tone, shape })}
                    />
                </div>
                <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <Button
                    type="submit"
                    disabled={submitting}
                    className={cn('w-full sm:w-auto', shape === 'pill' && 'h-14 rounded-full px-7')}
                >
                    {submitting ? 'Joining…' : 'Join the waitlist'}
                </Button>
            </div>
            <p id={messageId} aria-live="polite" className={message({ tone, error: Boolean(shownError) })}>
                {shownError ?? note}
            </p>
        </form>
    );
}
