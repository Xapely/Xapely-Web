import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/app.css';
import { WaitlistProvider } from './waitlist/WaitlistProvider';

/** Entry point shared by every page: global styles, waitlist state, React root. */
export function mountPage(page: ReactNode): void {
    const container = document.getElementById('root');
    if (!container) throw new Error('Missing #root element');

    createRoot(container).render(
        <StrictMode>
            <WaitlistProvider>{page}</WaitlistProvider>
        </StrictMode>,
    );
}
