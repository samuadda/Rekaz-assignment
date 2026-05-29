'use client';

import { useBuilder } from '@/lib/builder/context';

import { SectionFrame } from './SectionFrame';

export function PreviewPane() {
  const { sections, selectedId, selectSection, removeSection } = useBuilder();

  return (
    <main
      onClick={() => selectSection(null)}
      className="flex-1 overflow-auto bg-neutral-100 p-4 sm:p-6"
    >
      {sections.length === 0 ? (
        <div className="flex h-full items-center justify-center p-8 text-center">
          <p className="max-w-sm text-sm text-neutral-500">
            Your page is empty. Open <span className="font-medium">Sections</span> and add a block to begin.
          </p>
        </div>
      ) : (
        <div
          onClick={(e) => e.stopPropagation()}
          className="mx-auto overflow-hidden rounded-lg bg-white shadow-sm"
        >
          {sections.map((section) => (
            <SectionFrame
              key={section.id}
              section={section}
              isSelected={section.id === selectedId}
              onSelect={selectSection}
              onDelete={removeSection}
            />
          ))}
        </div>
      )}
    </main>
  );
}
