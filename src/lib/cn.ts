import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Teach tailwind-merge about our custom shadow and radius tokens so they merge correctly.
const twMerge = extendTailwindMerge({
    extend: {
        theme: {
            shadow: ['float', 'panel', 'brand', 'inset-line'],
            radius: ['panel', 'card', 'control'],
        },
    },
});

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
