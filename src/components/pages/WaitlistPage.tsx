import { cn } from '../../lib/cn';
import { SiteLayout } from '../layout/SiteLayout';
import { Icon, type IconName } from '../ui/Icon';
import { SocialLinks } from '../ui/SocialLinks';
import { WaitlistForm } from '../waitlist/WaitlistForm';

interface Chip {
    icon: IconName;
    label: string;
    /** Where the chip floats on large screens. */
    position: string;
    iconClass: string;
}

const CHIPS: readonly Chip[] = [
    { icon: 'invoice', label: 'Invoices with VAT', position: 'top-[14%] left-[8%]', iconClass: 'bg-brand-ghost text-brand' },
    { icon: 'chat', label: 'WhatsApp and email', position: 'top-[8%] right-[12%]', iconClass: 'bg-ledger text-paper' },
    { icon: 'card', label: 'Card, USSD and bank transfer', position: 'top-[52%] right-[4%]', iconClass: 'bg-brand text-paper' },
    { icon: 'receipt', label: 'Automatic receipts', position: 'bottom-[12%] left-[12%]', iconClass: 'bg-paid-soft text-paid' },
];

const RINGS = ['size-[34rem]', 'size-[54rem]', 'size-[76rem]'] as const;

export function WaitlistPage() {
    return (
        <SiteLayout page="waitlist">
            <section className="relative isolate overflow-hidden bg-[radial-gradient(60%_60%_at_50%_45%,var(--color-paper)_0%,var(--color-mist)_100%)] py-20 lg:min-h-[calc(100svh-4rem)] lg:py-28">
                <div aria-hidden="true" className="absolute inset-0 -z-10 grid place-items-center">
                    {RINGS.map(size => (
                        <span key={size} className={cn('col-start-1 row-start-1 rounded-full border border-line', size)} />
                    ))}
                    <span className="col-start-1 row-start-1 size-3 translate-x-[17rem] rounded-full bg-line" />
                    <span className="col-start-1 row-start-1 size-4 -translate-x-[27rem] translate-y-24 rounded-full bg-brand-soft" />
                    <span className="col-start-1 row-start-1 size-2.5 translate-x-[30rem] -translate-y-40 rounded-full bg-line" />
                </div>

                <ul aria-hidden="true" className="hidden lg:block">
                    {CHIPS.map(chip => (
                        <li key={chip.label} className={cn('absolute flex items-center gap-3 rounded-[1rem] bg-paper py-2.5 pr-5 pl-2.5 text-sm font-semibold text-ledger shadow-float ring-1 ring-line', chip.position)}>
                            <span className={cn('grid size-9 place-items-center rounded-control', chip.iconClass)}>
                                <Icon name={chip.icon} className="size-4.5" />
                            </span>
                            {chip.label}
                        </li>
                    ))}
                </ul>

                <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
                    <h1 className="text-[2.5rem] leading-[1.05] font-semibold sm:text-[4.25rem]">
                        <span className="block">Invoice.</span>
                        <span className="mt-1 flex items-center justify-center gap-2.5 whitespace-nowrap sm:gap-5">
                            Share.
                            <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-full bg-paper shadow-panel ring-1 ring-line sm:size-20">
                                <span className="grid size-10 place-items-center rounded-[0.9rem] bg-[linear-gradient(145deg,var(--color-brand),var(--color-brand-strong))] text-paper shadow-brand sm:size-14">
                                    <Icon name="invoice" className="size-6 sm:size-7" />
                                </span>
                            </span>
                            Get paid.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-[1.7]">
                        Chasing payments and keeping invoices in order takes time you could spend on your business. <strong className="font-semibold text-ledger">Orbit</strong> puts it in one place: create compliant invoices, share them on WhatsApp or email, and get paid by card, USSD or bank transfer.
                    </p>

                    <div className="mt-10 w-full max-w-xl">
                        <WaitlistForm source="waitlist_page" shape="pill" note="We’ll only use your details to tell you when Orbit opens." />
                    </div>

                    <ul className="mt-8 flex flex-wrap justify-center gap-2 lg:hidden">
                        {CHIPS.map(chip => (
                            <li key={chip.label} className="flex items-center gap-2 rounded-full bg-paper py-1.5 pr-3.5 pl-1.5 text-sm font-semibold text-ledger shadow-inset-line">
                                <span className={cn('grid size-7 place-items-center rounded-full', chip.iconClass)}>
                                    <Icon name={chip.icon} className="size-3.5" />
                                </span>
                                {chip.label}
                            </li>
                        ))}
                    </ul>

                    <SocialLinks size="lg" className="mt-10 justify-center gap-3" />
                </div>
            </section>
        </SiteLayout>
    );
}
