'use client';

interface Props {
  onOpenLibrary: () => void;
  onOpenEditor: () => void;
}

export function Toolbar({ onOpenLibrary, onOpenEditor }: Props) {
  return (
    <header className="flex items-center justify-between border-b border-neutral-200 bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenLibrary}
          className="rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50 lg:hidden"
        >
          Sections
        </button>
        <span className="text-sm font-semibold tracking-tight">Mini Website Builder</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50"
        >
          Import
        </button>
        <button
          type="button"
          className="rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50"
        >
          Export
        </button>
        <button
          type="button"
          onClick={onOpenEditor}
          className="rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50 lg:hidden"
        >
          Edit
        </button>
      </div>
    </header>
  );
}
