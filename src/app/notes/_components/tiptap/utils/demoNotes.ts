import { ItemType, NoteItem } from "~/lib/types/sidebar-types";

export const initialNotes: NoteItem[] = [
  {
    id: "1",
    name: "Work",
    type: ItemType.Directory,
    children: [
      { id: "2", name: "Project A", type: ItemType.Note },
      { id: "3", name: "Project B", type: ItemType.Note },
    ],
  },
  {
    id: "4",
    name: "Personal",
    type: ItemType.Directory,
    children: [
      { id: "5", name: "Travel Plans", type: ItemType.Note },
      {
        id: "6",
        name: "Recipes",
        type: ItemType.Directory,
        children: [
          { id: "7", name: "Pasta", type: ItemType.Note },
          { id: "8", name: "Smoothies", type: ItemType.Note },
        ],
      },
    ],
  },
  { id: "9", name: "Shopping List", type: ItemType.Note },
];
