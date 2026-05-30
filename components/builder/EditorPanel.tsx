'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { useBuilder } from '@/lib/builder/context';
import { sectionRegistry } from '@/lib/sections/registry';

import { FieldRenderer } from './editor/FieldRenderer';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function EditorPanel({ isOpen, onClose }: Props) {
  const { selectedSection, updateSection } = useBuilder();

  const def = selectedSection ? sectionRegistry[selectedSection.type] : null;

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
        className={`fixed inset-y-0 right-0 z-30 flex w-80 transform flex-col border-l border-neutral-200 bg-white transition-transform lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
          <span className="text-sm font-semibold">{def ? def.label : 'Edit'}</span>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-neutral-500 hover:text-neutral-900 lg:hidden"
            aria-label="Close editor"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedSection?.id ?? 'empty'}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              {!selectedSection || !def ? (
                <p className="text-sm text-neutral-500">Select a section to edit.</p>
              ) : (
                <div className="space-y-4">
                  {def.schema.map((field) => (
                    <FieldRenderer
                      key={field.key}
                      field={field}
                      value={(selectedSection.data as Record<string, unknown>)[field.key]}
                      onChange={(newValue) =>
                        updateSection(selectedSection.id, { [field.key]: newValue })
                      }
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </aside>
    </>
  );
}
