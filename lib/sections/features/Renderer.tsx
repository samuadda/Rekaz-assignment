import type { FeaturesSection } from '@/lib/types';

interface Props {
  data: FeaturesSection['data'];
}

export function FeaturesRenderer({ data }: Props) {
  return (
    <section className="px-6 py-16 sm:px-12 md:py-24">
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        {data.heading}
      </h2>
      <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3">
        {data.items.map((item, i) => (
          <div key={i} className="rounded-lg border border-neutral-200 p-6">
            <div className="text-3xl">{item.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
