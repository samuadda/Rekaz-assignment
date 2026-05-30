import type { HeaderSection } from '@/lib/types';

interface Props {
  data: HeaderSection['data'];
}

export function HeaderRenderer({ data }: Props) {
  return (
    <header className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 @sm:px-12">
      <span className="text-lg font-semibold tracking-tight">{data.logoText}</span>
      <nav className="hidden gap-6 text-sm text-neutral-600 @sm:flex">
        {data.navLinks.map((link, i) => (
          <a key={i} href={link.href} className="hover:text-neutral-900">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
