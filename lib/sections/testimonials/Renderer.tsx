import type { TestimonialsSection } from '@/lib/types';

interface Props {
  data: TestimonialsSection['data'];
}

export function TestimonialsRenderer({ data }: Props) {
  return (
    <section className="bg-neutral-50 px-6 py-16 @sm:px-12 @md:py-24">
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold tracking-tight @sm:text-3xl @md:text-4xl">
        {data.heading}
      </h2>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 @sm:grid-cols-2 @md:grid-cols-3">
        {data.quotes.map((q, i) => (
          <figure key={i} className="rounded-lg bg-white p-6 shadow-sm">
            <blockquote className="text-sm text-neutral-700">“{q.quote}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              {q.avatarUrl && (
                <img src={q.avatarUrl} alt="" className="h-10 w-10 rounded-full object-cover" />
              )}
              <div>
                <div className="text-sm font-medium">{q.author}</div>
                <div className="text-xs text-neutral-500">{q.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
