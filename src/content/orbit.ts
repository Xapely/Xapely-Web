import type { IconName } from '../components/ui/Icon';
import type { PageKey } from '../components/layout/navigation';

/*
 * Orbit's features, taken from what the Orbit app and API actually do today
 * (Xapely-Orbit-Frontend and Xapely-orbit-backend-bootstrap). Plans and prices
 * are a DRAFT: which plan gets which feature is a proposal, not a decision.
 */

type PlanKey = 'starter' | 'growth' | 'business';

const ALL_PLANS: readonly PlanKey[] = ['starter', 'growth', 'business'];
const PAID_PLANS: readonly PlanKey[] = ['growth', 'business'];

export interface Feature {
    name: string;
    plans: readonly PlanKey[];
}

interface FeatureGroup {
    id: string;
    title: string;
    icon: IconName;
    summary: string;
    features: readonly Feature[];
}

export const FEATURE_GROUPS: readonly FeatureGroup[] = [
    {
        id: 'invoicing',
        title: 'Invoicing',
        icon: 'invoice',
        summary: 'Professional, compliant invoices with VAT, ready in seconds.',
        features: [
            { name: 'Create, edit and void invoices', plans: ALL_PLANS },
            { name: 'VAT calculated on every invoice', plans: ALL_PLANS },
            { name: 'PDF invoices to download or print', plans: ALL_PLANS },
            { name: 'Overdue invoices flagged automatically', plans: ALL_PLANS },
            { name: 'Custom invoice prefix and numbering', plans: PAID_PLANS },
            { name: 'Default notes, terms and payment terms', plans: PAID_PLANS },
            { name: 'Credit notes, debit notes, prepayment and self-billed invoices', plans: PAID_PLANS },
        ],
    },
    {
        id: 'sharing',
        title: 'Sharing',
        icon: 'share',
        summary: 'Send invoices where your clients already are.',
        features: [
            { name: 'Send invoices by email', plans: ALL_PLANS },
            { name: 'Send invoices on WhatsApp', plans: ALL_PLANS },
        ],
    },
    {
        id: 'payments',
        title: 'Getting paid',
        icon: 'card',
        summary: 'A payment page on every invoice, settled to your bank account.',
        features: [
            { name: 'Payment page for every invoice', plans: ALL_PLANS },
            { name: 'Card, USSD and bank transfer', plans: ALL_PLANS },
            { name: 'Settlement to your verified bank account', plans: ALL_PLANS },
            { name: 'Receipts created automatically', plans: ALL_PLANS },
            { name: 'Transaction history', plans: ALL_PLANS },
            { name: 'Payment stats', plans: PAID_PLANS },
        ],
    },
    {
        id: 'clients',
        title: 'Clients',
        icon: 'users',
        summary: 'Every client, their invoices and what they owe, in one list.',
        features: [
            { name: 'Client directory and search', plans: ALL_PLANS },
            { name: 'Client financial summary', plans: PAID_PLANS },
            { name: 'Client statement PDF', plans: PAID_PLANS },
            { name: 'Bulk import from CSV or Excel', plans: PAID_PLANS },
        ],
    },
    {
        id: 'team',
        title: 'Team and security',
        icon: 'shield',
        summary: 'Bring your team in, each with the right level of access.',
        features: [
            { name: 'One-time code verification by email', plans: ALL_PLANS },
            { name: 'Sign in with Google', plans: ALL_PLANS },
            { name: 'See and sign out active sessions', plans: ALL_PLANS },
            { name: 'In-app notifications', plans: ALL_PLANS },
            { name: 'Invite team members', plans: PAID_PLANS },
            { name: 'Roles: admin, sub-admin and member', plans: PAID_PLANS },
        ],
    },
    {
        id: 'insights',
        title: 'Insights',
        icon: 'chart',
        summary: 'See how your business is doing at a glance.',
        features: [{ name: 'Business dashboard', plans: ALL_PLANS }],
    },
];

export function featureGroup(id: FeatureGroup['id']): FeatureGroup {
    const group = FEATURE_GROUPS.find(g => g.id === id);
    if (!group) throw new Error(`Unknown feature group: ${id}`);
    return group;
}

export interface Plan {
    key: PlanKey;
    name: string;
    description: string;
    /** Naira amounts. `null` means priced per business. */
    price: { monthly: number; annual: number } | null;
    highlights: readonly string[];
    cta: { label: string; page: PageKey };
    featured?: boolean;
}

export const PLANS: readonly Plan[] = [
    {
        key: 'starter',
        name: 'Starter',
        description: 'For freelancers sending their first invoices.',
        price: { monthly: 0, annual: 0 },
        highlights: [
            'Invoices with VAT and PDF downloads',
            'Send by email and WhatsApp',
            'Card, USSD and bank transfer',
            'Receipts created automatically',
            'Client directory',
            'Business dashboard',
        ],
        cta: { label: 'Join the waitlist', page: 'waitlist' },
    },
    {
        key: 'growth',
        name: 'Growth',
        description: 'For small businesses billing clients every week.',
        price: { monthly: 9_500, annual: 95_000 },
        highlights: [
            'Everything in Starter',
            'Invite your team with roles',
            'Bulk client import',
            'Client statements and summaries',
            'Custom invoice numbering and terms',
            'Credit and debit notes',
        ],
        cta: { label: 'Join the waitlist', page: 'waitlist' },
        featured: true,
    },
    {
        key: 'business',
        name: 'Business',
        description: 'For larger teams with high invoice volumes.',
        price: null,
        highlights: [
            'Everything in Growth',
            'Pricing based on your invoice volume',
            'Help moving your clients into Orbit',
        ],
        cta: { label: 'Contact us', page: 'contact' },
    },
];
