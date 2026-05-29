import type { Schema } from '@/lib/sections/schema';

export const testimonialsSchema: Schema = [
  { key: 'heading', label: 'Heading', kind: 'text' },
  {
    key: 'quotes',
    label: 'Quotes',
    kind: 'array',
    itemDefaults: { author: 'New person', role: 'Their role', quote: 'A short quote.', avatarUrl: '' },
    itemLabel: (item) => String(item.author) || 'Quote',
    itemFields: [
      { key: 'author', label: 'Author', kind: 'text' },
      { key: 'role', label: 'Role', kind: 'text', placeholder: 'CEO, Acme' },
      { key: 'quote', label: 'Quote', kind: 'textarea' },
      { key: 'avatarUrl', label: 'Avatar URL', kind: 'image', placeholder: 'https://…' },
    ],
  },
];
