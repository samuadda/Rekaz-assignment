'use client';

export type PreviewBreakpoint = 'desktop' | 'tablet' | 'mobile';

const options: Array<{ value: PreviewBreakpoint; label: string }> = [
  { value: 'desktop', label: 'Desktop' },
  { value: 'tablet', label: 'Tablet' },
  { value: 'mobile', label: 'Mobile' },
];

interface Props {
  value: PreviewBreakpoint;
  onChange: (value: PreviewBreakpoint) => void;
}

export function BreakpointToggle({ value, onChange }: Props) {
  return (
    <div className="hidden items-center rounded-md border border-neutral-200 bg-white p-0.5 md:flex">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`rounded px-3 py-1 text-xs font-medium transition ${
            value === option.value
              ? 'bg-neutral-900 text-white'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
