import { useEffect } from 'react';
import { SITE_URL, type PageMeta } from '../components/layout/navigation';

/** Sets an attribute on a head tag, creating the tag if needed, or removes it when value is null. */
function setHeadTag(tag: 'meta' | 'link', key: Record<string, string>, attr: 'content' | 'href', value: string | null): void {
    const selector = tag + Object.entries(key).map(([name, val]) => `[${name}="${val}"]`).join('');
    let element = document.head.querySelector(selector);

    if (value === null) {
        element?.remove();
        return;
    }

    if (!element) {
        element = document.createElement(tag);
        for (const [name, val] of Object.entries(key)) element.setAttribute(name, val);
        document.head.append(element);
    }
    element.setAttribute(attr, value);
}

/**
 * index.html is loaded once, so each route updates the title and metadata as it renders.
 * Pages without a path (the 404 page) get no canonical URL and are kept out of search results.
 */
export function usePageMeta({ title, description, path }: Omit<PageMeta, 'path'> & { path?: string }): void {
    useEffect(() => {
        const url = path === undefined ? null : new URL(path, SITE_URL).href;

        document.title = title;
        setHeadTag('meta', { name: 'description' }, 'content', description);
        setHeadTag('meta', { property: 'og:title' }, 'content', title);
        setHeadTag('meta', { property: 'og:description' }, 'content', description);
        setHeadTag('meta', { property: 'og:url' }, 'content', url);
        setHeadTag('link', { rel: 'canonical' }, 'href', url);
        setHeadTag('meta', { name: 'robots' }, 'content', path === undefined ? 'noindex' : null);
    }, [title, description, path]);
}
