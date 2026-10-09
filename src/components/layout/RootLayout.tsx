import { Outlet, ScrollRestoration } from 'react-router';

/**
 * Wraps every route. ScrollRestoration starts each new page at the top, scrolls to
 * `#section` links, and restores the previous position on back/forward.
 */
export function RootLayout() {
    return (
        <>
            <ScrollRestoration />
            <Outlet />
        </>
    );
}
