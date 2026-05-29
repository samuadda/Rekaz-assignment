'use client';

import { useBuilder } from '@/lib/builder/context';
import { sectionRegistry, sectionTypes } from '@/lib/sections/registry';
import type { SectionType } from '@/lib/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function LibraryPanel({ isOpen, onClose }: Props) {
  const { addSection } = useBuilder();

  const handleAdd = (type: SectionType) => {
    addSection(type);
    onClose();
  };

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
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
          <span className="text-sm font-semibold">Sections</span>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-neutral-500 hover:text-neutral-900 lg:hidden"
            aria-label="Close section library"
          >
            ✕
          </button>
        </div>

        <div className="space-y-1 p-3">
          {sectionTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleAdd(type)}
              className="group flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition hover:bg-neutral-100"
            >
              <span className="font-medium text-neutral-900">{sectionRegistry[type].label}</span>
              <span className="text-base text-neutral-300 transition group-hover:text-neutral-600">
                +
              </span>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
