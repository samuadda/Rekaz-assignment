'use client';

import { useBuilder } from '@/lib/builder/context';

export function PreviewPane() {
  const { sections } = useBuilder();

  return (
    <main className="flex-1 overflow-auto bg-neutral-50">
      {sections.length === 0 ? (
        <div className="flex h-full items-center justify-center p-8 text-center">
          <p className="max-w-sm text-sm text-neutral-500">
            Your page is empty. Open <span className="font-medium">Sections</span> and add a block to begin.
          </p>
        </div>
      ) : (
        <div className="mx-auto bg-white shadow-sm">
          {/* sections will render here in Step 6 */}
          <p className="p-8 text-sm text-neutral-500">{sections.length} section(s) — preview wiring lands in Step 6.</p>
        </div>
      )}
    </main>
  );
}
