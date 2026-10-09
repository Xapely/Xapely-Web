import { useEffect, useState, type RefObject } from 'react';

/** Tracks whether an element is on screen and the tab is visible. */
export function useInView(ref: RefObject<Element | null>): boolean {
    const [onScreen, setOnScreen] = useState(false);
    const [tabVisible, setTabVisible] = useState(() => document.visibilityState === 'visible');

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => setOnScreen(entry?.isIntersecting ?? false));
        observer.observe(element);
        return () => observer.disconnect();
    }, [ref]);

    useEffect(() => {
        const onVisibility = () => setTabVisible(document.visibilityState === 'visible');
        document.addEventListener('visibilitychange', onVisibility);
        return () => document.removeEventListener('visibilitychange', onVisibility);
    }, []);

    return onScreen && tabVisible;
}
