import type { Schema } from '@/lib/sections/schema';

export const gallerySchema: Schema = [
  { key: 'heading', label: 'Heading', kind: 'text' },
  {
    key: 'images',
    label: 'Images',
    kind: 'array',
    itemDefaults: { src: '', alt: '' },
    itemLabel: (item, i) => String(item.alt) || `Image ${i + 1}`,
    itemFields: [
      { key: 'src', label: 'Image URL', kind: 'image', placeholder: 'https://…' },
      { key: 'alt', label: 'Alt text', kind: 'text' },
    ],
  },
];
