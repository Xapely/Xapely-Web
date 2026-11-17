import { PAGES } from '../layout/navigation';
import { SiteLayout } from '../layout/SiteLayout';
import { LegalDocument } from '../legal/LegalDocument';
import { PrivacyContent, privacyTitle, TermsContent, termsTitle } from '../legal/LegalContent';

export function TermsPage() {
    return (
        <SiteLayout meta={PAGES.terms}>
            <LegalDocument title={termsTitle} related={{ label: 'Read the Privacy Policy', page: 'privacy' }}>
                <TermsContent />
            </LegalDocument>
        </SiteLayout>
    );
}

export function PrivacyPage() {
    return (
        <SiteLayout meta={PAGES.privacy}>
            <LegalDocument title={privacyTitle} related={{ label: 'Read the Terms of Service', page: 'terms' }}>
                <PrivacyContent />
            </LegalDocument>
        </SiteLayout>
    );
}
