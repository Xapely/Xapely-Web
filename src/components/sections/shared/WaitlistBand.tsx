import { PAGE_HREF } from '../../layout/navigation';
import { ButtonLink } from '../../ui/Button';
import { CheckList } from '../../ui/CheckList';
import { Container } from '../../ui/Container';
import { DarkPanel } from '../../ui/DarkPanel';

interface WaitlistBandProps {
    title: string;
    body: string;
    points: readonly string[];
}

/** Closing call to action that sends people to the waitlist page. */
export function WaitlistBand({ title, body, points }: WaitlistBandProps) {
    return (
        <section className="bg-paper pb-24 lg:pb-28">
            <Container>
                <DarkPanel>
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                        <div>
                            <h2 className="text-[2rem] leading-[1.1] font-semibold text-paper sm:text-[2.75rem]">{title}</h2>
                            <CheckList items={points} tone="dark" className="mt-8 grid gap-3 space-y-0 text-on-dark sm:grid-cols-2" />
                        </div>
                        <div className="lg:justify-self-end">
                            <p className="max-w-sm leading-[1.7] text-on-dark">{body}</p>
                            <ButtonLink href={PAGE_HREF.waitlist} intent="light" className="mt-6">Join the waitlist</ButtonLink>
                        </div>
                    </div>
                </DarkPanel>
            </Container>
        </section>
    );
}
