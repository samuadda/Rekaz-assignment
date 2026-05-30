import { sectionTypes } from '@/lib/sections/registry';
import type { Section } from '@/lib/types';

const PROJECT_VERSION = 1;

interface ProjectFile {
  version: number;
  sections: Section[];
}

export function serializeProject(sections: Section[]): string {
  const project: ProjectFile = { version: PROJECT_VERSION, sections };
  return JSON.stringify(project, null, 2);
}

export type ParseResult =
  | { ok: true; sections: Section[] }
  | { ok: false; error: string };

const NOT_OUR_FILE = "This file doesn't look like a Mini Website Builder export.";

export function parseProject(text: string): ParseResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch (e) {
    console.error('Import failed: JSON parse error', e);
    return { ok: false, error: "Couldn't read this file — make sure it's a valid JSON file." };
  }

  if (!isRecord(parsed) || parsed.version !== PROJECT_VERSION || !Array.isArray(parsed.sections)) {
    console.error('Import failed: wrong top-level shape', parsed);
    return { ok: false, error: NOT_OUR_FILE };
  }

  const knownTypes = new Set<string>(sectionTypes);
  const validated: Section[] = [];

  for (let i = 0; i < parsed.sections.length; i++) {
    const item = parsed.sections[i];
    const position = i + 1;

    if (!isRecord(item)) {
      console.error(`Import failed: section ${position} is not an object`, item);
      return { ok: false, error: `Section ${position} looks corrupted.` };
    }
    if (typeof item.id !== 'string' || item.id === '') {
      console.error(`Import failed: section ${position} missing id`, item);
      return { ok: false, error: `Section ${position} is missing an identifier.` };
    }
    if (typeof item.type !== 'string' || !knownTypes.has(item.type)) {
      console.error(`Import failed: section ${position} unknown type`, item.type);
      return {
        ok: false,
        error: `Section ${position} has an unknown type${typeof item.type === 'string' ? ` ("${item.type}")` : ''}.`,
      };
    }
    if (!isRecord(item.data)) {
      console.error(`Import failed: section ${position} missing data`, item);
      return { ok: false, error: `Section ${position} has no content.` };
    }
    validated.push(item as unknown as Section);
  }

  return { ok: true, sections: validated };
}

export function downloadJson(text: string, filename: string): void {
  const blob = new Blob([text], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
