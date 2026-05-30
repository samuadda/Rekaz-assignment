'use client';

import { useMemo } from 'react';

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { AnimatePresence, motion } from 'framer-motion';

import { useBuilder } from '@/lib/builder/context';

import type { PreviewBreakpoint } from './BreakpointToggle';
import { SectionFrame } from './SectionFrame';

const containerWidth: Record<PreviewBreakpoint, string> = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px',
};

interface Props {
  previewBreakpoint: PreviewBreakpoint;
}

export function PreviewPane({ previewBreakpoint }: Props) {
  const { sections, selectedId, selectSection, removeSection, reorderSections } = useBuilder();

  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = sections.findIndex((s) => s.id === active.id);
    const newIndex = sections.findIndex((s) => s.id === over.id);
    if (oldIndex < 0 || newIndex < 0) return;

    const newOrder = arrayMove(sections, oldIndex, newIndex).map((s) => s.id);
    reorderSections(newOrder);
  };

  return (
    <main
      onClick={() => selectSection(null)}
      className="flex-1 overflow-auto bg-neutral-100 p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: containerWidth[previewBreakpoint] }}
        className="@container mx-auto overflow-hidden rounded-lg bg-white shadow-sm transition-[max-width] duration-200"
      >
        {sections.length === 0 ? (
          <div className="flex h-[60vh] items-center justify-center p-8 text-center">
            <p className="max-w-sm text-sm text-neutral-500">
              Your page is empty. Open <span className="font-medium">Sections</span> and add a block to begin.
            </p>
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={sectionIds} strategy={verticalListSortingStrategy}>
              <AnimatePresence initial={false}>
                {sections.map((section) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <SectionFrame
                      section={section}
                      isSelected={section.id === selectedId}
                      onSelect={selectSection}
                      onDelete={removeSection}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </SortableContext>
          </DndContext>
        )}
      </div>
    </main>
  );
}
