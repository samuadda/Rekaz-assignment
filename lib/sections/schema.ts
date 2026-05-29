export type LeafFieldKind = "text" | "textarea" | "url" | "image";

export interface LeafField {
	key: string;
	label: string;
	kind: LeafFieldKind;
	placeholder?: string;
}

export interface ArrayField {
	key: string;
	label: string;
	kind: "array";
	itemFields: SchemaField[];
	itemDefaults: Record<string, unknown>;
	itemLabel: (item: Record<string, unknown>, index: number) => string;
}

export type SchemaField = LeafField | ArrayField;

export type Schema = SchemaField[];
