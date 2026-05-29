'use client';

import { useBuilder } from '@/lib/builder/context';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function EditorPanel({ isOpen, onClose }: Props) {
  const { selectedSection } = useBuilder();

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
        className={`fixed inset-y-0 right-0 z-30 w-80 transform border-l border-neutral-200 bg-white transition-transform lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 lg:hidden">
          <span className="text-sm font-semibold">Edit</span>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-neutral-500 hover:text-neutral-900"
            aria-label="Close editor"
          >
            ✕
          </button>
        </div>
        <div className="p-4 text-sm text-neutral-500">
          {selectedSection
            ? `Editing ${selectedSection.type} — fields land in Step 7.`
            : 'Select a section to edit.'}
        </div>
      </aside>
    </>
  );
}
