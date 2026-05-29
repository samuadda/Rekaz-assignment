import type { HeaderSection } from '@/lib/types';

export const headerDefaults: HeaderSection['data'] = {
  logoText: 'Pagewright',
  navLinks: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};
