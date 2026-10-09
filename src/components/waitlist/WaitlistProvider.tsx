import { createContext, useCallback, useContext, useMemo, useReducer, useRef, type ReactNode } from 'react';
import { normalizeEmail, submitToWaitlist, WaitlistError, type WaitlistSource } from '../../lib/waitlist-api';

/*
 * One waitlist state shared by every form on the page, so joining from the hero
 * also updates the form at the bottom. Guards against needless backend calls:
 * - only one request can be in flight at a time
 * - an email this browser already joined with is never sent again
 * - after a failure, retries wait 5s, then 10s, 20s… up to a minute
 */

const STORAGE_KEY = 'xapely:waitlist-email';
const BASE_COOLDOWN_MS = 5_000;
const MAX_COOLDOWN_MS = 60_000;

type WaitlistStatus = 'idle' | 'submitting' | 'joined' | 'error';

interface WaitlistState {
    status: WaitlistStatus;
    email: string | null;
    errorMessage: string | null;
    /** Which form made the latest attempt, so only that form shows progress and errors. */
    source: WaitlistSource | null;
}

type WaitlistAction =
    | { type: 'submit'; source: WaitlistSource }
    | { type: 'joined'; email: string }
    | { type: 'failed'; message: string; source: WaitlistSource };

function reducer(state: WaitlistState, action: WaitlistAction): WaitlistState {
    switch (action.type) {
        case 'submit':
            return { ...state, status: 'submitting', errorMessage: null, source: action.source };
        case 'joined':
            return { ...state, status: 'joined', email: action.email, errorMessage: null };
        case 'failed':
            return { ...state, status: 'error', errorMessage: action.message, source: action.source };
    }
}

function readStoredEmail(): string | null {
    try {
        return window.localStorage.getItem(STORAGE_KEY);
    } catch {
        return null;
    }
}

function storeEmail(email: string): void {
    try {
        window.localStorage.setItem(STORAGE_KEY, email);
    } catch {
        // Storage can be unavailable (private mode); the in-memory state still works.
    }
}

function initState(): WaitlistState {
    const email = readStoredEmail();
    return { status: email ? 'joined' : 'idle', email, errorMessage: null, source: null };
}

const FAILURE_MESSAGES: Record<WaitlistError['reason'], string> = {
    'not-configured': 'The waitlist isn’t accepting sign-ups yet. Please check back soon.',
    network: 'We couldn’t reach the waitlist. Check your connection and try again.',
    invalid: 'That email doesn’t look right. Check it and try again.',
    'rate-limited': 'Too many attempts from this connection. Wait a minute, then try again.',
    server: 'The waitlist is having trouble right now. Try again in a few minutes.',
};

interface WaitlistContextValue extends WaitlistState {
    join: (email: string, source: WaitlistSource) => Promise<void>;
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function WaitlistProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, undefined, initState);
    const inFlight = useRef(false);
    const failures = useRef(0);
    const retryAt = useRef(0);

    const join = useCallback(async (rawEmail: string, source: WaitlistSource) => {
        const email = normalizeEmail(rawEmail);

        if (inFlight.current) return;

        if (readStoredEmail() === email) {
            dispatch({ type: 'joined', email });
            return;
        }

        const wait = retryAt.current - Date.now();
        if (wait > 0) {
            const seconds = Math.ceil(wait / 1000);
            dispatch({ type: 'failed', message: `Please wait ${seconds}s before trying again.`, source });
            return;
        }

        inFlight.current = true;
        dispatch({ type: 'submit', source });

        try {
            await submitToWaitlist(email, source);
            failures.current = 0;
            storeEmail(email);
            dispatch({ type: 'joined', email });
        } catch (error) {
            const reason = error instanceof WaitlistError ? error.reason : 'network';
            failures.current += 1;
            // The server already said slow down, so wait the full minute.
            const cooldown = reason === 'rate-limited'
                ? MAX_COOLDOWN_MS
                : Math.min(BASE_COOLDOWN_MS * 2 ** (failures.current - 1), MAX_COOLDOWN_MS);
            retryAt.current = Date.now() + cooldown;
            dispatch({ type: 'failed', message: FAILURE_MESSAGES[reason], source });
        } finally {
            inFlight.current = false;
        }
    }, []);

    const value = useMemo(() => ({ ...state, join }), [state, join]);

    return <WaitlistContext.Provider value={value}>{children}</WaitlistContext.Provider>;
}

export function useWaitlist(): WaitlistContextValue {
    const context = useContext(WaitlistContext);
    if (!context) {
        throw new Error('useWaitlist must be used inside <WaitlistProvider>');
    }
    return context;
}
