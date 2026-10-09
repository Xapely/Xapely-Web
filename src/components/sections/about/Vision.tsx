import visionImageUrl from '../../../../assets/icons/vision-icon.svg';
import { PAGE_HREF } from '../../layout/navigation';
import { ButtonLink } from '../../ui/Button';
import { Container } from '../../ui/Container';

export function Vision() {
    return (
        <section className="bg-paper pb-24 lg:pb-28">
            <Container>
                <div className="grid overflow-hidden rounded-panel bg-mist ring-1 ring-line lg:grid-cols-2">
                    <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                        <h2 className="text-[2rem] leading-[1.1] font-semibold sm:text-[2.5rem]">Our vision</h2>
                        <p className="mt-5 max-w-md text-lg leading-[1.7]">
                            We see a future where every business can find everything it needs to succeed in one place. We want Xapely to be the platform you rely on to run, manage and scale your business with ease.
                        </p>
                        <ButtonLink href={PAGE_HREF.home} intent="dark" className="mt-8 self-start">See what Orbit does</ButtonLink>
                    </div>
                    <div className="m-3 grid place-items-center rounded-card bg-[radial-gradient(80%_80%_at_50%_40%,var(--color-brand-soft),var(--color-brand-ghost))] p-8 sm:p-12">
                        <img
                            src={visionImageUrl}
                            alt="Illustration of a team lifting a growth arrow together"
                            width={750}
                            height={500}
                            loading="lazy"
                            decoding="async"
                            className="h-auto w-full max-w-md"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
