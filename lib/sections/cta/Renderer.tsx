import type { CTASection } from '@/lib/types';

interface Props {
  data: CTASection['data'];
}

export function CTARenderer({ data }: Props) {
  return (
    <section className="bg-black px-6 py-20 text-center text-white sm:px-12 md:py-28">
      <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        {data.heading}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base text-neutral-300 sm:text-lg">
        {data.subheading}
      </p>
      {data.buttonText && (
        <a
          href={data.buttonHref || '#'}
          className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
        >
          {data.buttonText}
        </a>
      )}
    </section>
  );
}
