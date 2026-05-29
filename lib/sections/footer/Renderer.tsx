import type { FooterSection } from '@/lib/types';

interface Props {
  data: FooterSection['data'];
}

export function FooterRenderer({ data }: Props) {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 px-6 py-12 sm:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="text-lg font-semibold tracking-tight">{data.logoText}</div>
        {data.columns.map((col, i) => (
          <div key={i}>
            <div className="text-sm font-semibold text-neutral-900">{col.heading}</div>
            <ul className="mt-3 space-y-2">
              {col.links.map((link, j) => (
                <li key={j}>
                  <a href={link.href} className="text-sm text-neutral-600 hover:text-neutral-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-neutral-200 pt-6 text-xs text-neutral-500">
        {data.copyright}
      </div>
    </footer>
  );
}
