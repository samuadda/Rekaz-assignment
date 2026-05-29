import type { FooterSection } from '@/lib/types';

export const footerDefaults: FooterSection['data'] = {
  logoText: 'Pagewright',
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Changelog', href: '#' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
      ],
    },
  ],
  copyright: '© 2026 Pagewright. All rights reserved.',
};
