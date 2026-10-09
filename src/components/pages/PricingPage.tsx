import { useState } from 'react';
import { PLANS } from '../../content/orbit';
import { PAGES } from '../layout/navigation';
import { SiteLayout } from '../layout/SiteLayout';
import { BillingToggle, type BillingPeriod } from '../sections/pricing/BillingToggle';
import { FeatureComparison } from '../sections/pricing/FeatureComparison';
import { PlanCard } from '../sections/pricing/PlanCard';
import { Container } from '../ui/Container';

export function PricingPage() {
    const [period, setPeriod] = useState<BillingPeriod>('monthly');

    return (
        <SiteLayout meta={PAGES.pricing} headerTone="dark">
            <div className="bg-ledger bg-[radial-gradient(60%_40%_at_50%_0%,rgb(60_131_246/0.35),transparent_70%),radial-gradient(rgb(255_255_255/0.07)_1px,transparent_1px)] [background-size:100%_100%,24px_24px]">
                <section className="pt-20 pb-16 lg:pt-28">
                    <Container className="text-center">
                        <p className="inline-flex rounded-full px-4 py-1.5 text-sm font-medium text-brand-soft ring-1 ring-brand/60">
                            Draft pricing. Final prices are announced at launch.
                        </p>
                        <h1 className="mx-auto mt-6 max-w-3xl text-[2.75rem] leading-[1.04] font-semibold text-paper sm:text-6xl">
                            Start free. Pay when your business grows.
                        </h1>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.7] text-on-dark">
                            Every plan includes invoicing with VAT, sharing on WhatsApp and email, and payment by card, USSD or bank transfer.
                        </p>
                        <div className="mt-10">
                            <BillingToggle period={period} onChange={setPeriod} />
                        </div>
                    </Container>
                </section>

                <section aria-label="Plans" className="pb-20 lg:pb-28">
                    <Container className="grid gap-5 lg:grid-cols-3">
                        {PLANS.map(plan => <PlanCard key={plan.key} plan={plan} period={period} />)}
                    </Container>
                    <Container>
                        <p className="mt-8 text-center text-sm text-on-dark">
                            Prices are in naira and may change before launch. Everyone on the waitlist hears about final pricing first.
                        </p>
                    </Container>
                </section>

                <FeatureComparison />
            </div>
        </SiteLayout>
    );
}
