import type { HeroSection } from '@/lib/types';

interface Props {
  data: HeroSection['data'];
}

export function HeroRenderer({ data }: Props) {
  return (
    <section className="px-6 py-20 text-center @sm:px-12 @md:py-28">
      <h1 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight @sm:text-4xl @md:text-5xl">
        {data.title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 @sm:text-lg">
        {data.subtitle}
      </p>
      {data.imageUrl && (
        <img
          src={data.imageUrl}
          alt=""
          className="mx-auto mt-10 w-full max-w-4xl rounded-lg shadow-sm"
        />
      )}
      {data.ctaText && (
        <a
          href={data.ctaHref || '#'}
          className="mt-8 inline-block rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          {data.ctaText}
        </a>
      )}
    </section>
  );
}
