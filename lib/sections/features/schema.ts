import type { Schema } from '@/lib/sections/schema';

export const featuresSchema: Schema = [
  { key: 'heading', label: 'Heading', kind: 'text', placeholder: 'Why us' },
  {
    key: 'items',
    label: 'Features',
    kind: 'array',
    itemDefaults: { icon: '✨', title: 'New feature', description: 'Describe the benefit.' },
    itemLabel: (item) => String(item.title) || 'Feature',
    itemFields: [
      { key: 'icon', label: 'Icon (emoji)', kind: 'text', placeholder: '⚡' },
      { key: 'title', label: 'Title', kind: 'text' },
      { key: 'description', label: 'Description', kind: 'textarea' },
    ],
  },
];
