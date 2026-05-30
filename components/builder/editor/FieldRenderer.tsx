'use client';

import type { ArrayField, LeafField, SchemaField } from '@/lib/sections/schema';

interface Props {
  field: SchemaField;
  value: unknown;
  onChange: (newValue: unknown) => void;
}

export function FieldRenderer({ field, value, onChange }: Props) {
  if (field.kind === 'array') {
    return <ArrayFieldEditor field={field} value={value} onChange={onChange} />;
  }
  return <LeafFieldEditor field={field} value={value} onChange={onChange} />;
}

const inputBase =
  'mt-1 w-full rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900';

function LeafFieldEditor({ field, value, onChange }: { field: LeafField; value: unknown; onChange: (v: unknown) => void }) {
  const stringValue = typeof value === 'string' ? value : '';

  if (field.kind === 'textarea') {
    return (
      <label className="block">
        <span className="text-xs font-medium text-neutral-700">{field.label}</span>
        <textarea
          value={stringValue}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className={`${inputBase} resize-y`}
        />
      </label>
    );
  }

  if (field.kind === 'image') {
    return (
      <label className="block">
        <span className="text-xs font-medium text-neutral-700">{field.label}</span>
        <input
          type="url"
          value={stringValue}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={inputBase}
        />
        {stringValue && (
          <img
            src={stringValue}
            alt=""
            className="mt-2 h-24 w-full rounded-md border border-neutral-200 object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
      </label>
    );
  }

  const inputType = field.kind === 'url' ? 'url' : 'text';
  return (
    <label className="block">
      <span className="text-xs font-medium text-neutral-700">{field.label}</span>
      <input
        type={inputType}
        value={stringValue}
        placeholder={field.placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={inputBase}
      />
    </label>
  );
}

function ArrayFieldEditor({ field, value, onChange }: { field: ArrayField; value: unknown; onChange: (v: unknown) => void }) {
  const items = Array.isArray(value) ? (value as Array<Record<string, unknown>>) : [];

  const replaceItem = (i: number, newItem: Record<string, unknown>) => {
    onChange(items.map((item, idx) => (idx === i ? newItem : item)));
  };

  const addItem = () => {
    onChange([...items, structuredClone(field.itemDefaults)]);
  };

  const removeItem = (i: number) => {
    onChange(items.filter((_, idx) => idx !== i));
  };

  const swapItems = (i: number, j: number) => {
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <div className="mb-2 text-xs font-medium text-neutral-700">{field.label}</div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="rounded-md border border-neutral-200 bg-neutral-50 p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="truncate text-xs font-medium text-neutral-700">
                {field.itemLabel(item, i)}
              </span>
              <div className="flex shrink-0 gap-1">
                <ItemButton
                  onClick={() => swapItems(i, i - 1)}
                  disabled={i === 0}
                  label="Move up"
                >
                  ↑
                </ItemButton>
                <ItemButton
                  onClick={() => swapItems(i, i + 1)}
                  disabled={i === items.length - 1}
                  label="Move down"
                >
                  ↓
                </ItemButton>
                <ItemButton onClick={() => removeItem(i)} label="Remove" tone="danger">
                  ✕
                </ItemButton>
              </div>
            </div>

            <div className="space-y-3">
              {field.itemFields.map((itemField) => (
                <FieldRenderer
                  key={itemField.key}
                  field={itemField}
                  value={item[itemField.key]}
                  onChange={(newValue) =>
                    replaceItem(i, { ...item, [itemField.key]: newValue })
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addItem}
        className="mt-3 w-full rounded-md border border-dashed border-neutral-300 px-3 py-2 text-xs font-medium text-neutral-600 transition hover:border-neutral-400 hover:bg-neutral-50"
      >
        + Add {field.label.replace(/s$/i, '').toLowerCase()}
      </button>
    </div>
  );
}

interface ItemButtonProps {
  onClick: () => void;
  disabled?: boolean;
  label: string;
  tone?: 'default' | 'danger';
  children: React.ReactNode;
}

function ItemButton({ onClick, disabled, label, tone = 'default', children }: ItemButtonProps) {
  const toneClasses =
    tone === 'danger'
      ? 'text-red-600 hover:bg-red-50'
      : 'text-neutral-600 hover:bg-neutral-200';
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`rounded px-1.5 py-0.5 text-xs transition disabled:cursor-not-allowed disabled:opacity-30 ${toneClasses}`}
    >
      {children}
    </button>
  );
}
