import type { GallerySection } from '@/lib/types';

interface Props {
  data: GallerySection['data'];
}

export function GalleryRenderer({ data }: Props) {
  return (
    <section className="px-6 py-16 sm:px-12 md:py-24">
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        {data.heading}
      </h2>
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
        ))}
      </div>
    </section>
  );
}
