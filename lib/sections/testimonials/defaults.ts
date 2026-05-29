import type { TestimonialsSection } from '@/lib/types';

export const testimonialsDefaults: TestimonialsSection['data'] = {
  heading: 'Loved by builders',
  quotes: [
    {
      author: 'Maya Khan',
      role: 'Founder, Tilt',
      quote: 'Shipped our landing page in an afternoon.',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    {
      author: 'Leo Park',
      role: 'Designer, Forma',
      quote: 'The closest thing to writing HTML by hand without the pain.',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    },
    {
      author: 'Sara Cole',
      role: 'PM, Northstar',
      quote: 'Our marketing team finally stopped asking for engineering help.',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    },
  ],
};
