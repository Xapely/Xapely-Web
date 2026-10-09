/** Mirrors WaitlistSource in the Orbit backend (src/waitlist/interface/waitlist-source.enum.ts). */
export type WaitlistSource = 'landing_hero' | 'landing_closing' | 'waitlist_page';

type WaitlistFailure = 'not-configured' | 'network' | 'invalid' | 'rate-limited' | 'server';

export class WaitlistError extends Error {
    readonly reason: WaitlistFailure;

    constructor(reason: WaitlistFailure) {
        super(`Waitlist request failed: ${reason}`);
        this.reason = reason;
    }
}

const API_URL = import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, '');
const REQUEST_TIMEOUT_MS = 10_000;

/** Mirrors MaxLength on `name` in the backend's CreateWaitlistEntryDto. */
export const NAME_MAX_LENGTH = 100;

export interface WaitlistSignUp {
    name: string;
    email: string;
}

/** Same normalisation the backend applies, so local duplicate checks agree with it. */
export function normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
}

/** Same normalisation the backend applies, so local validation agrees with it. */
export function normalizeName(name: string): string {
    return name.trim().replace(/\s+/g, ' ');
}

/**
 * POST /api/v1/waitlist. The backend treats a repeat sign-up as success,
 * so any 2xx means the email is on the list.
 */
export async function submitToWaitlist({ name, email }: WaitlistSignUp, source: WaitlistSource): Promise<void> {
    if (!API_URL) {
        throw new WaitlistError('not-configured');
    }

    let response: Response;
    try {
        response = await fetch(`${API_URL}/api/v1/waitlist`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ name, email, source }),
            signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
        });
    } catch {
        throw new WaitlistError('network');
    }

    if (response.ok) return;
    if (response.status === 400) throw new WaitlistError('invalid');
    if (response.status === 429) throw new WaitlistError('rate-limited');
    throw new WaitlistError('server');
}
