'use client';

import { BreakpointToggle, type PreviewBreakpoint } from './BreakpointToggle';
import { ImportExportButtons } from './ImportExportButtons';

interface Props {
  onOpenLibrary: () => void;
  onOpenEditor: () => void;
  previewBreakpoint: PreviewBreakpoint;
  onChangeBreakpoint: (value: PreviewBreakpoint) => void;
}

export function Toolbar({
  onOpenLibrary,
  onOpenEditor,
  previewBreakpoint,
  onChangeBreakpoint,
}: Props) {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-neutral-200 bg-white px-4 py-3">
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

      <BreakpointToggle value={previewBreakpoint} onChange={onChangeBreakpoint} />

      <div className="flex items-center justify-end gap-2">
        <ImportExportButtons />
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
