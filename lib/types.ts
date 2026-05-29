export interface HeaderSection {
  id: string;
  type: 'header';
  data: {
    logoText: string;
    navLinks: Array<{ label: string; href: string }>;
  };
}

export interface HeroSection {
  id: string;
  type: 'hero';
  data: {
    title: string;
    subtitle: string;
    imageUrl: string;
    ctaText: string;
    ctaHref: string;
  };
}

export interface FeaturesSection {
  id: string;
  type: 'features';
  data: {
    heading: string;
    items: Array<{ icon: string; title: string; description: string }>;
  };
}

export interface PricingSection {
  id: string;
  type: 'pricing';
  data: {
    heading: string;
    tiers: Array<{
      name: string;
      price: string;
      features: Array<{ text: string }>;
    }>;
  };
}

export interface TestimonialsSection {
  id: string;
  type: 'testimonials';
  data: {
    heading: string;
    quotes: Array<{
      author: string;
      role: string;
      quote: string;
      avatarUrl: string;
    }>;
  };
}

export interface CTASection {
  id: string;
  type: 'cta';
  data: {
    heading: string;
    subheading: string;
    buttonText: string;
    buttonHref: string;
  };
}

export interface GallerySection {
  id: string;
  type: 'gallery';
  data: {
    heading: string;
    images: Array<{ src: string; alt: string }>;
  };
}

export interface FooterSection {
  id: string;
  type: 'footer';
  data: {
    logoText: string;
    columns: Array<{
      heading: string;
      links: Array<{ label: string; href: string }>;
    }>;
    copyright: string;
  };
}

export type Section =
  | HeaderSection
  | HeroSection
  | FeaturesSection
  | PricingSection
  | TestimonialsSection
  | CTASection
  | GallerySection
  | FooterSection;

export type SectionType = Section['type'];
