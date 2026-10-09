import { NOT_FOUND_META, PAGE_HREF } from '../layout/navigation';
import { SiteLayout } from '../layout/SiteLayout';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';
import { OrbitRings } from '../ui/OrbitRings';

export function NotFoundPage() {
    return (
        <SiteLayout meta={NOT_FOUND_META}>
            <section className="relative isolate overflow-hidden bg-[radial-gradient(60%_60%_at_50%_40%,var(--color-paper)_0%,var(--color-mist)_100%)] py-24 lg:min-h-[calc(100svh-4rem)] lg:py-32">
                <OrbitRings className="absolute top-1/2 left-1/2 -z-10 w-200 max-w-none -translate-x-1/2 -translate-y-1/2" ringClassName="stroke-line" dotClassName="fill-brand-soft" />

                <Container className="flex flex-col items-center text-center">
                    <h1 className="max-w-xl text-[2.5rem] leading-[1.05] font-semibold sm:text-[3.5rem]">
                        This page isn’t here.
                    </h1>
                    <p className="mt-6 max-w-md text-lg leading-[1.7]">
                        The link may be out of date, or the address may have a typo. Everything about Orbit starts on the homepage.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        <ButtonLink to={PAGE_HREF.home}>Go to the homepage</ButtonLink>
                        <ButtonLink to={PAGE_HREF.waitlist} intent="light">Join the waitlist</ButtonLink>
                    </div>
                </Container>
            </section>
        </SiteLayout>
    );
}
