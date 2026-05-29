import type { Schema } from '@/lib/sections/schema';

export const heroSchema: Schema = [
  { key: 'title', label: 'Title', kind: 'text', placeholder: 'Headline' },
  { key: 'subtitle', label: 'Subtitle', kind: 'textarea', placeholder: 'Supporting line' },
  { key: 'imageUrl', label: 'Image URL', kind: 'image', placeholder: 'https://…' },
  { key: 'ctaText', label: 'Button text', kind: 'text', placeholder: 'Get started' },
  { key: 'ctaHref', label: 'Button link', kind: 'url', placeholder: 'https://…' },
];
