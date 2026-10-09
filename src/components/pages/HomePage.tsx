import { PAGES } from '../layout/navigation';
import { SiteLayout } from '../layout/SiteLayout';
import { BuiltFor } from '../sections/home/BuiltFor';
import { Features } from '../sections/home/Features';
import { Hero } from '../sections/home/Hero';
import { HowItWorks } from '../sections/home/HowItWorks';
import { WaitlistCta } from '../sections/home/WaitlistCta';
import { WhyOrbit } from '../sections/home/WhyOrbit';

export function HomePage() {
    return (
        <SiteLayout meta={PAGES.home}>
            <Hero />
            <Features />
            <WhyOrbit />
            <HowItWorks />
            <BuiltFor />
            <WaitlistCta />
        </SiteLayout>
    );
}
