import { Editor, FloatingMenu } from "@tiptap/react";
import { Button } from "../ui/button";

export const FloatingMenuTipTap = ({ editor }: { editor: Editor }) => (
  <FloatingMenu
    className="floating-menu"
    tippyOptions={{ duration: 100 }}
    editor={editor}
  >
    <Button
      onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
    >
      H1
    </Button>
    <Button
      onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
    >
      H2
    </Button>
    <Button
      onClick={() => editor.chain().focus().toggleBulletList().run()}
      className={editor.isActive("bulletList") ? "is-active" : ""}
    >
      Bullet list
    </Button>
  </FloatingMenu>
);
