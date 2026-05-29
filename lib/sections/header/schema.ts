import type { Schema } from '@/lib/sections/schema';

export const headerSchema: Schema = [
  { key: 'logoText', label: 'Logo text', kind: 'text', placeholder: 'Brand name' },
  {
    key: 'navLinks',
    label: 'Navigation links',
    kind: 'array',
    itemDefaults: { label: 'New link', href: '#' },
    itemLabel: (item) => String(item.label) || 'Link',
    itemFields: [
      { key: 'label', label: 'Label', kind: 'text', placeholder: 'About' },
      { key: 'href', label: 'URL', kind: 'url', placeholder: '/about' },
    ],
  },
];
