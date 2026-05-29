import type { Schema } from '@/lib/sections/schema';

export const pricingSchema: Schema = [
  { key: 'heading', label: 'Heading', kind: 'text' },
  {
    key: 'tiers',
    label: 'Tiers',
    kind: 'array',
    itemDefaults: { name: 'New tier', price: '$0', features: [{ text: 'Feature' }] },
    itemLabel: (item) => String(item.name) || 'Tier',
    itemFields: [
      { key: 'name', label: 'Name', kind: 'text' },
      { key: 'price', label: 'Price', kind: 'text', placeholder: '$19' },
      {
        key: 'features',
        label: 'Features',
        kind: 'array',
        itemDefaults: { text: 'New feature' },
        itemLabel: (item) => String(item.text) || 'Feature',
        itemFields: [{ key: 'text', label: 'Text', kind: 'text' }],
      },
    ],
  },
];
