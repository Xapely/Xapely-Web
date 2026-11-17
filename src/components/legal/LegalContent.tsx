/*
 * Terms of Service and Privacy Policy text.
 *
 * This file is kept byte-identical in two projects:
 *   Xapely-Web/src/components/legal/LegalContent.tsx
 *   Xapely-Orbit-Frontend/src/components/legal/legal-content.tsx
 * When a policy changes, edit both copies and bump termsVersion in both.
 *
 * Only plain elements (h2, p, ul, li, strong, a) are used here. Each project
 * styles them through its own `.legal-prose` wrapper, so this file needs no
 * project-specific classes or imports.
 */

/**
 * Identifies the policy text a business agreed to; stored on the business as
 * termsVersion. Change it whenever either document changes (use the new
 * effective date).
 */
export const termsVersion = '2026-11-17';

export const termsTitle = 'Terms & Conditions';
export const privacyTitle = 'Privacy Policy';

const CONTACT_EMAIL = 'hello@xapely.com';

function ContactEmail() {
    return <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
}

export function TermsContent() {
    return (
        <>
            <p>
                These terms and conditions apply to the Orbit app for mobile devices and web browsers, together with any related services operated by Xapely Technologies (collectively, the &quot;Application&quot;). Xapely Technologies is hereby referred to as the &quot;Service Provider&quot;.
            </p>
            <p>
                By downloading or using the Application, you agree to these Terms and Conditions. You should read them carefully before using the Application.
            </p>

            <h2 id="license-to-use-the-application">License to use the Application</h2>
            <p>
                Subject to your compliance with these Terms, the Service Provider grants you a limited, non-exclusive, non-transferable, revocable license to install and use the Application on a mobile device or computer for personal or internal business purposes. You may not reproduce, distribute, modify, create derivative works from, reverse engineer, decompile, or disassemble the Application, except as and only to the extent that such activity is expressly permitted by applicable law.
            </p>

            <h2 id="intellectual-property">Intellectual Property</h2>
            <p>
                The Service Provider retains all intellectual property rights in the Application, including its code, design, trademarks, service marks, trade names, logos, and branding (the &quot;IP&quot;). Nothing in these Terms grants you any license or right to use the Service Provider&apos;s trademarks, logos, or branding for any purpose. You agree not to remove, alter, or obscure any copyright, trademark, or other proprietary notices displayed in or on the Application.
            </p>

            <h2 id="termination">Termination</h2>
            <p>
                The Service Provider may suspend your access to the Application or services if you materially breach these Terms. The Service Provider will provide you with written notice of the breach and, where the breach is capable of cure, you will have 14 days from receipt of notice to remedy the breach. If you fail to cure the breach within that period, the Service Provider may terminate your access.
            </p>
            <p>
                The Service Provider may suspend or terminate your access immediately without notice if you violate applicable law, infringe intellectual property rights, or engage in activity that could cause harm to other users or the Service Provider.
            </p>
            <p>
                Upon termination, your right to use the Application will end and you must delete all copies from your devices.
            </p>
            <p>
                By accessing and using this Application, you represent that you are legally permitted to use it in your jurisdiction. You must be at least 16 years of age (the age of digital consent in your jurisdiction) to use the Application. If you are below 16, a parent or legal guardian must review and accept these Terms on your behalf.
            </p>
            <p>
                Unauthorized copying, modification of the Application, any part of the Application, or the Service Provider&apos;s trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.
            </p>

            <h2 id="financial-and-tax-disclaimer">Financial and Tax Disclaimer</h2>
            <p>
                Orbit provides software infrastructure to generate, format, manage, and transmit invoices, track payments, and structure records in alignment with Nigeria Revenue Service (NRS) digital schema standards. The Service Provider does not act as a financial advisor, certified accountant, tax consultant, or legal counsel. Nothing within the Application constitutes tax or legal advice, and the Service Provider does not guarantee statutory tax compliance on your behalf. You remain solely responsible for verifying the mathematical accuracy of your invoices, collecting payments from your clients, and fulfilling all applicable tax obligations, filings, and remittances (including Value Added Tax and Withholding Tax) under Nigerian law.
            </p>

            <h2 id="business-content-automated-messaging-and-acceptable-use">Business Content, Automated Messaging, and Acceptable Use</h2>
            <p>
                You retain ownership of all business records, invoice data, and client details you input into the Application (&quot;Business Content&quot;). By submitting Business Content, you grant the Service Provider a limited, non-exclusive, royalty-free license to host, process, format, and transmit that content solely as necessary to operate and provide the Application.
            </p>
            <p>You agree not to use the Application to generate or transmit content that:</p>
            <ul>
                <li>Is fraudulent, deceptive, unlawful, or misrepresents commercial transactions</li>
                <li>Infringes third-party intellectual property, privacy, or personal data rights</li>
                <li>Constitutes unsolicited spam, phishing, harassment, or contains malware</li>
            </ul>
            <p>
                The Application utilizes third-party communication APIs (including WhatsApp and email providers) to send automated payment reminders and invoices on your behalf. You act as the Data Controller for your clients&apos; contact information and assume full responsibility for obtaining explicit, legally valid consent from your clients before inputting their details or triggering automated messages. The Service Provider is not liable for account restrictions, messaging bans, spam complaints, or undelivered notifications resulting from your client data or messaging practices.
            </p>
            <p>
                The Service Provider reserves the right to suspend or terminate accounts that violate these acceptable use rules and to cooperate with law enforcement where required by applicable law.
            </p>

            <h2 id="service-charges-and-device-responsibility">Service Charges and Device Responsibility</h2>
            <p>
                The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.
            </p>
            <p>
                The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your mobile device or computer and access to the Application.
            </p>
            <p>
                The Service Provider strongly advises against jailbreaking or rooting your mobile device or computer, which involves removing software restrictions and limitations imposed by the official operating system of your mobile device or computer. Such actions could expose your mobile device or computer to malware, viruses, malicious programs, compromise your mobile device or computer&apos;s security features, and may result in the Application not functioning correctly or at all.
            </p>
            <p>
                Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.
            </p>
            <p>
                If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider&apos;s agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.
            </p>
            <p>
                Nothing in these Terms shall limit any rights you have under applicable consumer protection laws that cannot be lawfully excluded.
            </p>

            <h2 id="limitation-of-liability">Limitation of Liability</h2>
            <p>
                To the fullest extent permitted by law, the Service Provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, data loss, or business interruption, even if advised of the possibility of such damages.
            </p>
            <p>However, the Service Provider retains full liability for:</p>
            <ul>
                <li>Death or personal injury caused by negligence</li>
                <li>Fraud or fraudulent misrepresentation</li>
                <li>Any other liability that cannot be excluded or limited under applicable law</li>
            </ul>
            <p>
                To the fullest extent permitted by law, the total liability of the Service Provider for any claim shall not exceed the amount paid by you to the Service Provider for the Application in the 12 months preceding the claim, or the minimum amount that must be paid under applicable law, whichever is greater. If the Application is provided free of charge, this means the Service Provider&apos;s liability is limited to the minimum amount permitted by applicable law.
            </p>
            <p>
                The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on third-party information provided through this Application, or for inaccuracies in content provided by third parties.
            </p>

            <h2 id="indemnification">Indemnification</h2>
            <p>
                To the fullest extent permitted by law, you agree to indemnify and hold harmless the Service Provider, its affiliates, officers, directors, employees and agents from and against any claims, liabilities, damages, losses and expenses, including reasonable legal fees, arising out of or directly related to your breach of these Terms or your intentional misuse of the Application, including Business Content you submit in violation of these Terms.
            </p>
            <p>
                This indemnification does not apply to claims arising from the Service Provider&apos;s own negligence, breach of these Terms, or violation of applicable law. In jurisdictions where consumer indemnification is restricted by law, this clause shall be limited to the maximum extent permitted.
            </p>
            <p>
                The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. You should accept updates when offered; if you choose not to, the Service Provider may cease to support earlier versions and the Application may not function properly. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination,
            </p>
            <p>(a) the rights and licenses granted to you in these terms will end;</p>
            <p>(b) you must cease using the application, and (if necessary) delete it from your device.</p>

            <h2 id="governing-law-and-jurisdiction">Governing Law and Jurisdiction</h2>
            <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, excluding conflict of law rules, except to the extent mandatory consumer protection laws provide otherwise.
            </p>
            <p>
                Nothing in this clause limits any rights you may have to bring a claim in a court that is competent under mandatory law.
            </p>

            <h2 id="severability">Severability</h2>
            <p>
                If any provision of these Terms and Conditions is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, and the remaining provisions of these Terms shall remain in full force and effect.
            </p>

            <h2 id="entire-agreement">Entire Agreement</h2>
            <p>
                These Terms and Conditions, together with the Privacy Policy, constitute the entire agreement between you and the Service Provider concerning your use of the Application, superseding any prior agreements or understandings.
            </p>

            <h2 id="changes-to-these-terms-and-conditions">Changes to These Terms and Conditions</h2>
            <p>
                The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.
            </p>
            <p>
                Previous versions of these Terms and Conditions will be maintained and made available upon request by contacting the Service Provider at <ContactEmail />.
            </p>
            <p>These terms and conditions are effective as of 2026-11-17</p>

            <h2 id="contact-us">Contact Us</h2>
            <p>
                If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at <ContactEmail />.
            </p>
        </>
    );
}

export function PrivacyContent() {
    return (
        <>
            <p>
                This privacy policy applies to the Orbit app for mobile devices and web browsers, together with any related services operated by Xapely Technologies (collectively, the &quot;Application&quot;). Xapely Technologies is hereby referred to as the &quot;Service Provider&quot;.
            </p>

            <h2 id="information-collection-and-use">Information Collection and Use</h2>
            <p>The Application collects information when you download and use it. This information may include information such as</p>
            <ul>
                <li>Your device&apos;s Internet Protocol address</li>
                <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                <li>The time spent on the Application</li>
                <li>your operating system you use</li>
            </ul>
            <p>
                The Service Provider may use the information you provide to send important information, required notices, and, where permitted by law, marketing communications.
            </p>
            <p>
                For a better experience while using the Application, the Service Provider may require you to provide certain personally identifiable information, including but not limited to Name, Email, Phone number, Bank account details. The information the Service Provider requests will be retained and used as described in this privacy policy.
            </p>

            <h2 id="client-data-and-role-as-data-processor">Client Data and Role as Data Processor</h2>
            <p>
                To generate invoices, track payments, and send automated payment reminders, you will input personal and business information belonging to your clients (including client names, phone numbers, email addresses, and transaction records). Under the Nigeria Data Protection Act (NDPA), you act as the <strong>Data Controller</strong> for your clients&apos; personal data, and the Service Provider acts solely as the <strong>Data Processor</strong> processing that information on your instructions. You are legally responsible for ensuring you have a lawful basis and explicit consent from your clients before uploading their contact details or triggering automated WhatsApp and email notifications through the Application.
            </p>

            <h2 id="cookies-and-tracking-technologies">Cookies and tracking technologies</h2>
            <p>
                The Application or its third-party SDKs may use cookies, SDKs, pixels, and similar technologies to support functionality, analytics, or service delivery. Where required by applicable law, the Service Provider will obtain consent before using non-essential tracking technologies.
            </p>

            <h2 id="your-rights">Your Rights</h2>
            <p>
                Under the Nigeria Data Protection Act (NDPA), you may request access to, correction of, or deletion of your personal data held by the Service Provider. To exercise these rights, or to withdraw consent where processing is based on consent, contact the Service Provider at <ContactEmail />.
            </p>

            <h2 id="third-party-access-and-sub-processors">Third Party Access and Sub-processors</h2>
            <p>
                The Service Provider does not sell your personal data or your clients&apos; data. To operate the Application and deliver its core features, the Service Provider transmits necessary account, invoice, and recipient contact information to trusted third-party infrastructure providers (sub-processors), specifically:
            </p>
            <ul>
                <li>
                    <strong>Amazon Web Services (AWS):</strong> Used for cloud server hosting, transactional database storage, and encrypted invoice PDF archival.
                </li>
                <li>
                    <strong>Messaging and Email Providers (including Meta / WhatsApp APIs):</strong> Used to deliver invoices and automated payment reminders to your clients on your behalf.
                </li>
            </ul>
            <p>The Service Provider may also disclose User Provided and Automatically Collected Information:</p>
            <ul>
                <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                <li>
                    when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;
                </li>
                <li>
                    with their trusted services providers who work on their behalf, do not have an independent use of the information the Service Provider discloses to them, and have agreed to adhere to the rules set forth in this privacy statement.
                </li>
            </ul>

            <h2 id="international-data-transfers">International Data Transfers</h2>
            <p>
                Because our cloud hosting and communication infrastructure providers operate global servers, the Service Provider or its third-party service providers may transfer and store personal data in countries outside Nigeria. Where data is transferred outside Nigeria, the Service Provider ensures appropriate safeguards are in place in accordance with the Nigeria Data Protection Act (NDPA), including reliance on jurisdictions with adequate data protection laws, binding contractual protections, or your explicit consent where required by law.
            </p>

            <h2 id="opt-out-rights">Opt-Out Rights</h2>
            <p>
                You can stop further collection of information from your mobile device or computer by uninstalling the Application. Uninstalling will stop the Application from collecting data from your device, but it does not automatically delete information that has already been transmitted to the Service Provider or to third parties.
            </p>
            <p>
                You can stop further collection of information from your device by ceasing to use the website. Ceasing to use will stop the website from collecting data from your device, but it does not automatically delete information that has already been transmitted to the Service Provider or to third parties.
            </p>
            <p>
                To request deletion of your personal data, to withdraw consent, or to exercise any of your rights, contact the Service Provider at <ContactEmail />.
            </p>

            <h2 id="data-retention-policy">Data Retention Policy</h2>
            <p>The Service Provider retains personal data based on its necessity for the stated purposes:</p>
            <ul>
                <li>User Provided Data: Retained for the duration of your use of the Application plus 12 months thereafter, unless longer retention is required by law</li>
                <li>Automatically Collected Data: Retained for up to 24 months from collection, unless longer retention is required for legal compliance</li>
                <li>Aggregated and Anonymized Data: Retained indefinitely as it no longer identifies you</li>
                <li>Data required for legal compliance: Retained as long as required by applicable law</li>
            </ul>
            <p>
                You may request deletion of your personal data, subject to any legal obligation to retain it. If you want the Service Provider to delete User Provided Data submitted through the Application, please contact them at <ContactEmail />. Please note that some User Provided Data may be required for the Application to function properly.
            </p>

            <h2 id="data-deletion">Data Deletion</h2>
            <p>
                You can request deletion of your personal data or account by contacting the Service Provider at <ContactEmail /> . The Service Provider will process your request within the timeframes required by applicable law.
            </p>
            <p>
                Upon verification of your identity, the Service Provider will delete your personal data from its systems, except where retention is required for legal compliance or legitimate business purposes.
            </p>

            <h2 id="children">Children</h2>
            <p>
                The Application is not intended for children under 16 years of age, or such higher age as required by applicable law. The Service Provider does not knowingly solicit data from children or market the Application to them.
            </p>
            <p>
                The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourages parents and legal guardians to monitor their children&apos;s Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider so that they will be able to take the necessary actions. If you are under 16 years of age, your parent or guardian must provide consent on your behalf where permitted by law.
            </p>

            <h2 id="security">Security</h2>
            <p>
                The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
            </p>

            <h2 id="data-breach-notification">Data Breach Notification</h2>
            <p>
                If a data breach occurs that affects your personal data, the Service Provider will notify you and the relevant regulatory authorities in accordance with applicable legal requirements under the Nigeria Data Protection Act (NDPA), including, where required, providing information about the nature of the breach and the steps being taken to address it.
            </p>

            <h2 id="changes">Changes</h2>
            <p>
                The Service Provider may update this Privacy Policy from time to time. The Service Provider will notify you of material changes by posting the updated Privacy Policy with an effective date. Where required by law, the Service Provider will seek your consent to material changes before they take effect.
            </p>
            <p>
                Previous versions of this Privacy Policy will be maintained and made available upon request by contacting the Service Provider at <ContactEmail />.
            </p>
            <p>This privacy policy is effective as of 2026-11-17</p>

            <h2 id="your-consent">Your Consent</h2>
            <p>
                Where processing is based on consent, you provide that consent by affirmatively opting in to the relevant feature or action. You may withdraw consent at any time without affecting processing carried out before withdrawal. Processing based on other lawful bases is carried out as described above.
            </p>

            <h2 id="governing-law">Governing Law</h2>
            <p>
                This Privacy Policy is governed by the laws of the Federal Republic of Nigeria, including the Nigeria Data Protection Act (NDPA).
            </p>

            <h2 id="contact-us">Contact Us</h2>
            <p>
                If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <ContactEmail />
            </p>
        </>
    );
}
