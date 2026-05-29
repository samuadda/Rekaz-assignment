import type { FeaturesSection } from '@/lib/types';

export const featuresDefaults: FeaturesSection['data'] = {
  heading: 'Why teams choose us',
  items: [
    { icon: '⚡', title: 'Fast', description: 'Pages render server-side and ship in milliseconds.' },
    { icon: '🎨', title: 'Designable', description: 'Pixel-level control without leaving the canvas.' },
    { icon: '📦', title: 'Portable', description: 'Export to JSON and own your work forever.' },
  ],
};
