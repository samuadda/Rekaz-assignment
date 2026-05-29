import type { GallerySection } from '@/lib/types';

export const galleryDefaults: GallerySection['data'] = {
  heading: 'Built with Pagewright',
  images: [
    { src: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800', alt: 'Workspace' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800', alt: 'Code on screen' },
    { src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800', alt: 'Designer at desk' },
    { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', alt: 'Dashboard' },
    { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', alt: 'Analytics' },
    { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800', alt: 'Team meeting' },
  ],
};
