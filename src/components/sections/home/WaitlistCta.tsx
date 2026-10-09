import { Container } from '../../ui/Container';
import { DarkPanel } from '../../ui/DarkPanel';
import { WaitlistForm } from '../../waitlist/WaitlistForm';

export function WaitlistCta() {
    return (
        <section id="waitlist" className="bg-paper pb-24 lg:pb-32">
            <Container>
                <DarkPanel>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                        <div>
                            <h2 className="text-[2rem] leading-[1.1] font-semibold text-paper sm:text-[2.75rem]">
                                Be first in line when Orbit opens.
                            </h2>
                            <p className="mt-4 max-w-md leading-[1.7] text-on-dark">
                                Join the waitlist and we’ll email you the moment Orbit is ready, before we open it to everyone.
                            </p>
                        </div>
                        <WaitlistForm source="landing_closing" tone="dark" note="We’ll only use your details to tell you when Orbit opens." />
                    </div>
                </DarkPanel>
            </Container>
        </section>
    );
}
