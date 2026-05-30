'use client';

import { useState } from 'react';

import { BuilderProvider } from '@/lib/builder/context';

import type { PreviewBreakpoint } from './BreakpointToggle';
import { EditorPanel } from './EditorPanel';
import { LibraryPanel } from './LibraryPanel';
import { PreviewPane } from './PreviewPane';
import { Toolbar } from './Toolbar';

export function Builder() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [previewBreakpoint, setPreviewBreakpoint] = useState<PreviewBreakpoint>('desktop');

  return (
    <BuilderProvider>
      <div className="flex h-screen flex-col bg-neutral-100">
        <Toolbar
          onOpenLibrary={() => setIsLibraryOpen(true)}
          onOpenEditor={() => setIsEditorOpen(true)}
          previewBreakpoint={previewBreakpoint}
          onChangeBreakpoint={setPreviewBreakpoint}
        />
        <div className="relative flex flex-1 overflow-hidden">
          <LibraryPanel
            isOpen={isLibraryOpen}
            onClose={() => setIsLibraryOpen(false)}
          />
          <PreviewPane previewBreakpoint={previewBreakpoint} />
          <EditorPanel
            isOpen={isEditorOpen}
            onClose={() => setIsEditorOpen(false)}
          />
        </div>
      </div>
    </BuilderProvider>
  );
}
