import { SiteLayout } from '../layout/SiteLayout';
import { COMPANY_ADDRESS, CONTACT_EMAIL, PAGES } from '../layout/navigation';
import { OrbitDashboard } from '../mocks/OrbitDashboard';
import { ContactForm } from '../sections/contact/ContactForm';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';

const PAYMENT_METHODS = ['Card', 'USSD', 'Bank transfer', 'WhatsApp', 'Email'] as const;

export function ContactPage() {
    return (
        <SiteLayout meta={PAGES.contact}>
            <section className="bg-mist py-16 lg:py-24">
                <Container className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                    <div className="max-w-xl">
                        <h1 className="text-[2.5rem] leading-[1.05] font-semibold sm:text-[3.25rem]">Talk to the Xapely team</h1>
                        <p className="mt-4 text-lg leading-[1.7]">Questions about Orbit, pricing or working with us? Send us a note and we’ll get back to you.</p>
                        <div className="mt-10">
                            <ContactForm />
                        </div>
                    </div>

                    <div className="relative lg:sticky lg:top-24">
                        {/* Hatched guide band behind the device, as in a design canvas */}
                        <div aria-hidden="true" className="absolute -inset-y-12 left-[18%] hidden w-40 border-x border-dashed border-line bg-[repeating-linear-gradient(135deg,transparent_0_10px,rgb(10_27_61/0.04)_10px_11px)] lg:block" />
                        <OrbitDashboard className="relative lg:-mr-24" />

                        <div className="relative mt-10 grid gap-6 sm:grid-cols-2">
                            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 rounded-card bg-paper p-5 shadow-inset-line hover:bg-brand-ghost active:scale-[0.99] transition-transform">
                                <span className="grid size-10 place-items-center rounded-full bg-brand-ghost text-brand"><Icon name="mail" /></span>
                                <span>
                                    <span className="block text-sm text-muted">Email us</span>
                                    <span className="block font-semibold text-ledger underline decoration-line underline-offset-4">{CONTACT_EMAIL}</span>
                                </span>
                            </a>
                            <div className="flex items-center gap-3 rounded-card bg-paper p-5 shadow-inset-line">
                                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-ghost text-brand"><Icon name="mapPin" /></span>
                                <span>
                                    <span className="block text-sm text-muted">Visit us</span>
                                    <span className="block text-sm font-semibold leading-[1.5] text-ledger">{COMPANY_ADDRESS}</span>
                                </span>
                            </div>
                        </div>

                        <div className="relative mt-10 border-t border-line pt-6">
                            <p className="text-sm font-semibold text-ledger">Orbit works with</p>
                            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-display text-xl font-semibold text-ledger/45">
                                {PAYMENT_METHODS.map(method => <li key={method}>{method}</li>)}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </SiteLayout>
    );
}
