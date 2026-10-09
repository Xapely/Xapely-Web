import { PAGES } from '../layout/navigation';
import { SiteLayout } from '../layout/SiteLayout';
import { AboutHero } from '../sections/about/AboutHero';
import { Mission } from '../sections/about/Mission';
import { Principles } from '../sections/about/Principles';
import { Vision } from '../sections/about/Vision';
import { WhoWeAre } from '../sections/about/WhoWeAre';
import { WaitlistBand } from '../sections/shared/WaitlistBand';

export function AboutPage() {
    return (
        <SiteLayout meta={PAGES.about}>
            <AboutHero />
            <WhoWeAre />
            <Principles />
            <Mission />
            <Vision />
            <WaitlistBand
                title="Run your business with less admin."
                body="Orbit opens to the public soon. Join the waitlist and we’ll email you the moment it’s ready."
                points={['VAT on every invoice', 'Card, USSD and bank transfer', 'Sent on WhatsApp or email', 'Built in Lagos']}
            />
        </SiteLayout>
    );
}
