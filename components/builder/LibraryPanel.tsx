'use client';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function LibraryPanel({ isOpen, onClose }: Props) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-20 bg-black/30 lg:hidden"
          aria-hidden
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-72 transform border-r border-neutral-200 bg-white transition-transform lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 lg:hidden">
          <span className="text-sm font-semibold">Sections</span>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-neutral-500 hover:text-neutral-900"
            aria-label="Close section library"
          >
            ✕
          </button>
        </div>
        <div className="p-4 text-sm text-neutral-500">Section library coming in Step 5.</div>
      </aside>
    </>
  );
}
