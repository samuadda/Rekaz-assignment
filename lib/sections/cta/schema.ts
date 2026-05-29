import type { Schema } from '@/lib/sections/schema';

export const ctaSchema: Schema = [
  { key: 'heading', label: 'Heading', kind: 'text' },
  { key: 'subheading', label: 'Subheading', kind: 'textarea' },
  { key: 'buttonText', label: 'Button text', kind: 'text' },
  { key: 'buttonHref', label: 'Button link', kind: 'url' },
];
