import { useId, useState, type FormEvent, type InputHTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { EMAIL_PATTERN } from '../../lib/email';
import { NAME_MAX_LENGTH, normalizeName, type WaitlistSource } from '../../lib/waitlist-api';
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

interface FieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
    label: string;
    tone: Tone;
    shape: Shape;
}

/** Floating label on the pill shape; screen-reader-only on the bar. */
function Field({ label, tone, shape, ...inputProps }: FieldProps) {
    const id = useId();
    return (
        <div className="relative flex-1">
            <label
                htmlFor={id}
                className={shape === 'pill'
                    ? 'absolute -top-2 left-5 bg-paper px-1.5 text-xs font-medium text-ledger'
                    : 'sr-only'}
            >
                {label}
            </label>
            <input id={id} {...inputProps} className={input({ tone, shape })} />
        </div>
    );
}

type FieldName = 'name' | 'email';

interface ValidationError {
    field: FieldName;
    message: string;
}

function validate(name: string, email: string): ValidationError | null {
    if (!normalizeName(name)) return { field: 'name', message: 'Enter your name.' };
    if (!EMAIL_PATTERN.test(email.trim())) return { field: 'email', message: 'Enter an email address like name@business.com.' };
    return null;
}

interface WaitlistFormProps {
    /** Recorded with the sign-up so we know which form people used. */
    source: WaitlistSource;
    tone?: Tone;
    shape?: Shape;
    note?: string;
}

export function WaitlistForm({ source, tone = 'light', shape = 'bar', note }: WaitlistFormProps) {
    const { status, email: joinedEmail, errorMessage, source: activeSource, join } = useWaitlist();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [validationError, setValidationError] = useState<ValidationError | null>(null);
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
    const shownError = validationError?.message ?? (status === 'error' && isActive ? errorMessage : null);
    // A local check knows which field is wrong; a server error doesn't, so it marks neither.
    const isInvalid = (field: FieldName) => validationError?.field === field;

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Bots fill every field; people never see this one. Drop the request silently.
        if (new FormData(event.currentTarget).get('company')) return;

        const error = validate(name, email);
        setValidationError(error);
        if (error) return;

        void join({ name, email }, source);
    }

    function clearErrorFor(field: FieldName) {
        if (validationError?.field === field) setValidationError(null);
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className={cn('mb-3', fieldShell({ tone, shape, invalid: isInvalid('name') }))}>
                <Field
                    label="Your name"
                    tone={tone}
                    shape={shape}
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your full name"
                    maxLength={NAME_MAX_LENGTH}
                    value={name}
                    onChange={event => {
                        setName(event.target.value);
                        clearErrorFor('name');
                    }}
                    aria-invalid={isInvalid('name')}
                    aria-describedby={messageId}
                />
            </div>
            <div className={cn(fieldShell({ tone, shape, invalid: isInvalid('email') }))}>
                <Field
                    label="Your email"
                    tone={tone}
                    shape={shape}
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@yourbusiness.com"
                    value={email}
                    onChange={event => {
                        setEmail(event.target.value);
                        clearErrorFor('email');
                    }}
                    aria-invalid={isInvalid('email')}
                    aria-describedby={messageId}
                />
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
