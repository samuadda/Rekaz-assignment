import type { PricingSection } from '@/lib/types';

interface Props {
  data: PricingSection['data'];
}

export function PricingRenderer({ data }: Props) {
  return (
    <section className="px-6 py-16 sm:px-12 md:py-24">
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        {data.heading}
      </h2>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3">
        {data.tiers.map((tier, i) => (
          <div key={i} className="rounded-lg border border-neutral-200 p-6">
            <div className="text-sm font-medium text-neutral-500">{tier.name}</div>
            <div className="mt-2 text-3xl font-bold">{tier.price}</div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-neutral-400">·</span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
