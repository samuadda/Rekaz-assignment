'use client';

import { useRef, useState, type ChangeEvent } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { useBuilder } from '@/lib/builder/context';
import { downloadJson, parseProject, serializeProject } from '@/lib/serializer';

export function ImportExportButtons() {
  const { sections, replaceAll } = useBuilder();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const flashSuccess = (message: string) => {
    setError(null);
    setSuccess(message);
    setTimeout(() => setSuccess(null), 2000);
  };

  const flashError = (message: string) => {
    setSuccess(null);
    setError(message);
    setTimeout(() => setError(null), 4000);
  };

  const handleExport = () => {
    if (sections.length === 0) return;
    downloadJson(serializeProject(sections), 'mini-website-builder.json');
    flashSuccess('Exported');
  };

  const handleImportClick = () => fileInputRef.current?.click();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    const result = parseProject(text);

    if (result.ok) {
      replaceAll(result.sections);
      flashSuccess(
        `Imported ${result.sections.length} section${result.sections.length === 1 ? '' : 's'}`,
      );
    } else {
      flashError(result.error);
    }

    e.target.value = '';
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept=".json,application/json"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        type="button"
        onClick={handleImportClick}
        className="rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50"
      >
        Import
      </button>
      <button
        type="button"
        onClick={handleExport}
        disabled={sections.length === 0}
        className="rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Export
      </button>

      <AnimatePresence>
        {(error || success) && (
          <motion.div
            key="banner"
            role="status"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className={`fixed left-1/2 top-16 z-50 -translate-x-1/2 rounded-md px-4 py-2 text-sm shadow-md ring-1 ${
              error
                ? 'bg-red-50 text-red-800 ring-red-200'
                : 'bg-green-50 text-green-800 ring-green-200'
            }`}
          >
            {error || success}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
