import type { ComponentType } from 'react';

import type { Section, SectionType } from '@/lib/types';

import { CTARenderer, ctaDefaults, ctaSchema } from './cta';
import { FeaturesRenderer, featuresDefaults, featuresSchema } from './features';
import { FooterRenderer, footerDefaults, footerSchema } from './footer';
import { GalleryRenderer, galleryDefaults, gallerySchema } from './gallery';
import { HeaderRenderer, headerDefaults, headerSchema } from './header';
import { HeroRenderer, heroDefaults, heroSchema } from './hero';
import { PricingRenderer, pricingDefaults, pricingSchema } from './pricing';
import type { Schema } from './schema';
import { TestimonialsRenderer, testimonialsDefaults, testimonialsSchema } from './testimonials';

interface SectionDefinition<T extends SectionType> {
  label: string;
  Renderer: ComponentType<{ data: Extract<Section, { type: T }>['data'] }>;
  schema: Schema;
  defaults: Extract<Section, { type: T }>['data'];
}

type Registry = {
  [T in SectionType]: SectionDefinition<T>;
};

export const sectionRegistry: Registry = {
  header: { label: 'Header', Renderer: HeaderRenderer, schema: headerSchema, defaults: headerDefaults },
  hero: { label: 'Hero', Renderer: HeroRenderer, schema: heroSchema, defaults: heroDefaults },
  features: { label: 'Features', Renderer: FeaturesRenderer, schema: featuresSchema, defaults: featuresDefaults },
  pricing: { label: 'Pricing', Renderer: PricingRenderer, schema: pricingSchema, defaults: pricingDefaults },
  testimonials: { label: 'Testimonials', Renderer: TestimonialsRenderer, schema: testimonialsSchema, defaults: testimonialsDefaults },
  cta: { label: 'Call to action', Renderer: CTARenderer, schema: ctaSchema, defaults: ctaDefaults },
  gallery: { label: 'Gallery', Renderer: GalleryRenderer, schema: gallerySchema, defaults: galleryDefaults },
  footer: { label: 'Footer', Renderer: FooterRenderer, schema: footerSchema, defaults: footerDefaults },
};

export const sectionTypes = Object.keys(sectionRegistry) as SectionType[];
