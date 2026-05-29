import type { PricingSection } from '@/lib/types';

export const pricingDefaults: PricingSection['data'] = {
  heading: 'Simple pricing',
  tiers: [
    {
      name: 'Starter',
      price: '$0',
      features: [
        { text: 'Up to 3 projects' },
        { text: 'Community support' },
        { text: 'Export to JSON' },
      ],
    },
    {
      name: 'Pro',
      price: '$19',
      features: [
        { text: 'Unlimited projects' },
        { text: 'Priority support' },
        { text: 'Custom domains' },
      ],
    },
    {
      name: 'Team',
      price: '$49',
      features: [
        { text: 'Everything in Pro' },
        { text: 'Team workspaces' },
        { text: 'Audit logs' },
      ],
    },
  ],
};
