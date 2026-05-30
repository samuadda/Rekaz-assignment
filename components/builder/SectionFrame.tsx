'use client';

import { memo, type ComponentType, type MouseEvent } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { sectionRegistry } from '@/lib/sections/registry';
import type { Section } from '@/lib/types';

interface Props {
  section: Section;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

function SectionFrameImpl({ section, isSelected, onSelect, onDelete }: Props) {
  const def = sectionRegistry[section.type];
  const Renderer = def.Renderer as ComponentType<{ data: unknown }>;

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: section.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  const handleClick = () => onSelect(section.id);

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDelete(section.id);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={handleClick}
      className={`group relative cursor-pointer ${
        isSelected
          ? 'outline outline-2 -outline-offset-2 outline-blue-500'
          : 'hover:outline hover:outline-2 hover:-outline-offset-2 hover:outline-neutral-300'
      }`}
    >
      <Renderer data={section.data} />

      <div
        className={`pointer-events-none absolute right-3 top-3 z-10 flex gap-1 transition ${
          isSelected ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'
        }`}
      >
        <span
          {...attributes}
          {...listeners}
          onClick={(e) => e.stopPropagation()}
          className="pointer-events-auto cursor-grab select-none rounded-md bg-white/90 px-2 py-1 text-sm leading-none text-neutral-500 shadow-sm ring-1 ring-neutral-200 hover:text-neutral-900 active:cursor-grabbing"
          aria-label="Drag to reorder"
        >
          ⋮⋮
        </span>
        <span className="pointer-events-auto rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-neutral-700 shadow-sm ring-1 ring-neutral-200">
          {def.label}
        </span>
        <button
          type="button"
          onClick={handleDelete}
          className="pointer-events-auto rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-red-600 shadow-sm ring-1 ring-neutral-200 hover:bg-red-50"
          aria-label="Delete section"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export const SectionFrame = memo(SectionFrameImpl);
