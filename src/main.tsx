import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import { WaitlistProvider } from './components/waitlist/WaitlistProvider';
import { router } from './router';
import './styles/app.css';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root element');

// WaitlistProvider sits above the router so a sign-up carries across pages.
createRoot(container).render(
    <StrictMode>
        <WaitlistProvider>
            <RouterProvider router={router} />
        </WaitlistProvider>
    </StrictMode>,
);
