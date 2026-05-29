import type { Schema } from '@/lib/sections/schema';

export const footerSchema: Schema = [
  { key: 'logoText', label: 'Logo text', kind: 'text' },
  {
    key: 'columns',
    label: 'Columns',
    kind: 'array',
    itemDefaults: { heading: 'New column', links: [{ label: 'Link', href: '#' }] },
    itemLabel: (item) => String(item.heading) || 'Column',
    itemFields: [
      { key: 'heading', label: 'Heading', kind: 'text' },
      {
        key: 'links',
        label: 'Links',
        kind: 'array',
        itemDefaults: { label: 'New link', href: '#' },
        itemLabel: (item) => String(item.label) || 'Link',
        itemFields: [
          { key: 'label', label: 'Label', kind: 'text' },
          { key: 'href', label: 'URL', kind: 'url' },
        ],
      },
    ],
  },
  { key: 'copyright', label: 'Copyright', kind: 'text' },
];
