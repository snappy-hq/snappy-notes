import { BubbleMenu, Editor } from "@tiptap/react";
import { Button } from "~/components/ui/button";

export const BubbleMenuTipTap = ({ editor }: { editor: Editor }) => (
  <BubbleMenu tippyOptions={{ duration: 3 }} editor={editor}>
    <Button
      onClick={() => editor.chain().focus().toggleBold().run()}
      className={editor.isActive("bold") ? "is-active" : ""}
    >
      Bold
    </Button>
    <Button
      onClick={() => editor.chain().focus().toggleItalic().run()}
      className={editor.isActive("italic") ? "is-active" : ""}
    >
      Italic
    </Button>
    <Button
      onClick={() => editor.chain().focus().toggleStrike().run()}
      className={editor.isActive("strike") ? "is-active" : ""}
      // disabled={editor.isActive("strike")}
    >
      Strike
    </Button>
  </BubbleMenu>
);
