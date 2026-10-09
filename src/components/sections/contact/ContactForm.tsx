import { useState, type FormEvent } from 'react';
import { EMAIL_PATTERN } from '../../../lib/email';
import { cn } from '../../../lib/cn';
import { CONTACT_EMAIL } from '../../layout/navigation';
import { Button } from '../../ui/Button';
import { fieldControl, FormField } from '../../ui/FormField';
import { Icon, type IconName } from '../../ui/Icon';

const TOPICS = ['A question about Orbit', 'Pricing', 'Working with Xapely', 'Press', 'Something else'] as const;

type Audience = 'solo' | 'team';

const AUDIENCES: readonly { value: Audience; icon: IconName; title: string; body: string }[] = [
    { value: 'solo', icon: 'invoice', title: 'I work for myself', body: 'Freelancer or sole trader sending my own invoices.' },
    { value: 'team', icon: 'users', title: 'I’m part of a team', body: 'A business with people who invoice or chase payments.' },
];

interface ContactValues {
    firstName: string;
    lastName: string;
    email: string;
    topic: (typeof TOPICS)[number];
    audience: Audience;
    message: string;
}

type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const INITIAL: ContactValues = { firstName: '', lastName: '', email: '', topic: TOPICS[0], audience: 'solo', message: '' };

function validate(values: ContactValues): ContactErrors {
    const errors: ContactErrors = {};
    if (!values.firstName.trim()) errors.firstName = 'Enter your first name.';
    if (!values.lastName.trim()) errors.lastName = 'Enter your last name.';
    if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter an email address like name@business.com.';
    if (values.message.trim().length < 10) errors.message = 'Tell us a little more, at least 10 characters.';
    return errors;
}

function buildMailto(values: ContactValues): string {
    const audience = AUDIENCES.find(a => a.value === values.audience)?.title ?? '';
    const name = `${values.firstName.trim()} ${values.lastName.trim()}`;
    const subject = `${values.topic}: ${name}`;
    const body = [values.message.trim(), '', `From: ${name} <${values.email.trim()}>`, audience].join('\n');
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * There is no contact API yet, so the form opens the visitor's email app with
 * a message to hello@xapely.com already written, ready to send.
 */
export function ContactForm() {
    const [values, setValues] = useState<ContactValues>(INITIAL);
    const [errors, setErrors] = useState<ContactErrors>({});
    const [opened, setOpened] = useState(false);

    function update<K extends keyof ContactValues>(key: K, value: ContactValues[K]) {
        setValues(current => ({ ...current, [key]: value }));
        if (errors[key]) setErrors(current => ({ ...current, [key]: undefined }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const found = validate(values);
        setErrors(found);
        if (Object.keys(found).length > 0) return;

        window.location.href = buildMailto(values);
        setOpened(true);
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <FormField label="First name" error={errors.firstName}>
                    {({ id, describedBy }) => (
                        <input id={id} autoComplete="given-name" placeholder="Ada" value={values.firstName}
                            onChange={e => update('firstName', e.target.value)}
                            aria-invalid={Boolean(errors.firstName)} aria-describedby={describedBy}
                            className={fieldControl({ invalid: Boolean(errors.firstName) })} />
                    )}
                </FormField>
                <FormField label="Last name" error={errors.lastName}>
                    {({ id, describedBy }) => (
                        <input id={id} autoComplete="family-name" placeholder="Okafor" value={values.lastName}
                            onChange={e => update('lastName', e.target.value)}
                            aria-invalid={Boolean(errors.lastName)} aria-describedby={describedBy}
                            className={fieldControl({ invalid: Boolean(errors.lastName) })} />
                    )}
                </FormField>
            </div>

            <FormField label="Email" error={errors.email}>
                {({ id, describedBy }) => (
                    <input id={id} type="email" autoComplete="email" inputMode="email" placeholder="you@yourbusiness.com" value={values.email}
                        onChange={e => update('email', e.target.value)}
                        aria-invalid={Boolean(errors.email)} aria-describedby={describedBy}
                        className={fieldControl({ invalid: Boolean(errors.email) })} />
                )}
            </FormField>

            <FormField label="What’s it about?">
                {({ id }) => (
                    <div className="relative">
                        <select id={id} value={values.topic}
                            onChange={e => update('topic', e.target.value as ContactValues['topic'])}
                            className={cn(fieldControl(), 'appearance-none pr-10')}>
                            {TOPICS.map(topic => <option key={topic}>{topic}</option>)}
                        </select>
                        <Icon name="chevronDown" className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted" />
                    </div>
                )}
            </FormField>

            <fieldset className="grid gap-3">
                <legend className="mb-2 text-sm font-semibold text-ledger">Which sounds like you?</legend>
                {AUDIENCES.map(option => (
                    <label
                        key={option.value}
                        className="flex cursor-pointer items-center gap-4 rounded-card bg-paper p-4 shadow-inset-line transition-transform active:scale-[0.99] has-checked:shadow-[inset_0_0_0_2px_var(--color-ledger)] has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand hover:bg-brand-ghost/50"
                    >
                        <input type="radio" name="audience" value={option.value} checked={values.audience === option.value}
                            onChange={() => update('audience', option.value)} className="peer sr-only" />
                        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-ghost text-brand">
                            <Icon name={option.icon} className="size-5" />
                        </span>
                        <span className="flex-1">
                            <span className="block font-semibold text-ledger">{option.title}</span>
                            <span className="block text-sm leading-[1.5]">{option.body}</span>
                        </span>
                        <span className="grid size-6 shrink-0 place-items-center rounded-full text-transparent shadow-inset-line peer-checked:bg-ledger peer-checked:text-paper peer-checked:shadow-none">
                            <Icon name="check" className="size-3.5" />
                        </span>
                    </label>
                ))}
            </fieldset>

            <FormField label="Message" error={errors.message}>
                {({ id, describedBy }) => (
                    <textarea id={id} rows={4} placeholder="How can we help?" value={values.message}
                        onChange={e => update('message', e.target.value)}
                        aria-invalid={Boolean(errors.message)} aria-describedby={describedBy}
                        className={fieldControl({ multiline: true, invalid: Boolean(errors.message) })} />
                )}
            </FormField>

            <Button type="submit" intent="dark" className="h-13 w-full">Write the email</Button>

            <p aria-live="polite" className="text-center text-sm leading-[1.6]">
                {opened
                    ? <>Your email app should now be open with your message. If it didn’t open, write to us at <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-ledger underline underline-offset-4">{CONTACT_EMAIL}</a>.</>
                    : <>This opens your email app with the message ready to send to {CONTACT_EMAIL}.</>}
            </p>
        </form>
    );
}
