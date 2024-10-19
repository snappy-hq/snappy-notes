export enum ItemType {
  Note = "note",
  Directory = "directory",
}

export interface NoteItem {
  id: string;
  name: string;
  type: ItemType;
  children?: NoteItem[];
}