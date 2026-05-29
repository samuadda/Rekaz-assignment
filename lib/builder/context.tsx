'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';

import type { Section, SectionType } from '@/lib/types';
import { sectionRegistry } from '@/lib/sections/registry';

interface BuilderState {
  sections: Section[];
  selectedId: string | null;
}

type Action =
  | { type: 'add'; sectionType: SectionType }
  | { type: 'update'; id: string; patch: Record<string, unknown> }
  | { type: 'remove'; id: string }
  | { type: 'reorder'; newOrder: string[] }
  | { type: 'replaceAll'; sections: Section[] }
  | { type: 'select'; id: string | null };

const initialState: BuilderState = {
  sections: [],
  selectedId: null,
};

function reducer(state: BuilderState, action: Action): BuilderState {
  switch (action.type) {
    case 'add': {
      const def = sectionRegistry[action.sectionType];
      const newSection = {
        id: crypto.randomUUID(),
        type: action.sectionType,
        data: structuredClone(def.defaults),
      } as Section;
      return { ...state, sections: [...state.sections, newSection] };
    }

    case 'update':
      return {
        ...state,
        sections: state.sections.map((s) =>
          s.id === action.id
            ? ({ ...s, data: { ...s.data, ...action.patch } } as Section)
            : s,
        ),
      };

    case 'remove':
      return {
        sections: state.sections.filter((s) => s.id !== action.id),
        selectedId: state.selectedId === action.id ? null : state.selectedId,
      };

    case 'reorder': {
      const byId = new Map(state.sections.map((s) => [s.id, s]));
      const reordered = action.newOrder
        .map((id) => byId.get(id))
        .filter((s): s is Section => s !== undefined);
      return { ...state, sections: reordered };
    }

    case 'replaceAll':
      return { sections: action.sections, selectedId: null };

    case 'select':
      return { ...state, selectedId: action.id };
  }
}

interface BuilderContextValue {
  sections: Section[];
  selectedId: string | null;
  selectedSection: Section | null;
  addSection: (type: SectionType) => void;
  updateSection: (id: string, patch: Record<string, unknown>) => void;
  removeSection: (id: string) => void;
  reorderSections: (newOrder: string[]) => void;
  replaceAll: (sections: Section[]) => void;
  selectSection: (id: string | null) => void;
}

const BuilderContext = createContext<BuilderContextValue | null>(null);

export function BuilderProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addSection = useCallback(
    (sectionType: SectionType) => dispatch({ type: 'add', sectionType }),
    [],
  );
  const updateSection = useCallback(
    (id: string, patch: Record<string, unknown>) => dispatch({ type: 'update', id, patch }),
    [],
  );
  const removeSection = useCallback(
    (id: string) => dispatch({ type: 'remove', id }),
    [],
  );
  const reorderSections = useCallback(
    (newOrder: string[]) => dispatch({ type: 'reorder', newOrder }),
    [],
  );
  const replaceAll = useCallback(
    (sections: Section[]) => dispatch({ type: 'replaceAll', sections }),
    [],
  );
  const selectSection = useCallback(
    (id: string | null) => dispatch({ type: 'select', id }),
    [],
  );

  const value = useMemo<BuilderContextValue>(
    () => ({
      sections: state.sections,
      selectedId: state.selectedId,
      selectedSection: state.sections.find((s) => s.id === state.selectedId) ?? null,
      addSection,
      updateSection,
      removeSection,
      reorderSections,
      replaceAll,
      selectSection,
    }),
    [
      state,
      addSection,
      updateSection,
      removeSection,
      reorderSections,
      replaceAll,
      selectSection,
    ],
  );

  return <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>;
}

export function useBuilder() {
  const ctx = useContext(BuilderContext);
  if (!ctx) {
    throw new Error('useBuilder must be used inside <BuilderProvider>');
  }
  return ctx;
}
