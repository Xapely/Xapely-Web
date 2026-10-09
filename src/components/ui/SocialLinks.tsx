import xIcon from '../../../assets/icons/x.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';
import facebookIcon from '../../../assets/icons/facebook.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';
import { cn } from '../../lib/cn';

// Profile URLs aren't set up yet; swap each "#" for the real link when they exist.
const SOCIALS = [
    { label: 'Xapely on X', icon: xIcon, href: '#' },
    { label: 'Xapely on Instagram', icon: instagramIcon, href: '#' },
    { label: 'Xapely on Facebook', icon: facebookIcon, href: '#' },
    { label: 'Xapely on LinkedIn', icon: linkedinIcon, href: '#' },
] as const;

export function SocialLinks({ size = 'md', className }: { size?: 'md' | 'lg'; className?: string }) {
    return (
        <ul className={cn('flex gap-2', className)}>
            {SOCIALS.map(social => (
                <li key={social.label}>
                    <a
                        href={social.href}
                        aria-label={social.label}
                        className={cn(
                            'grid place-items-center rounded-full bg-paper shadow-inset-line transition-transform hover:shadow-[inset_0_0_0_1px_var(--color-brand)] active:scale-95',
                            size === 'md' ? 'size-9' : 'size-12 shadow-float',
                        )}
                    >
                        <img src={social.icon} alt="" width={16} height={16} loading="lazy" className={cn('opacity-70', size === 'md' ? 'size-4' : 'size-5')} />
                    </a>
                </li>
            ))}
        </ul>
    );
}
