"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { content as defaultContent } from "./utils/defaultcontent";
import { CustomCodeBlock, HighlightedCodeBlock } from "./extensions";
import { TypographyExtensions } from "./extensions";
import { ExternalElements } from "./extensions";

// TODO needed in future updates
// import { MenuBar } from "./menu/menubar";
// import { FloatingMenuTipTap } from "./menu/floatingmenu";
// import { BubbleMenuTipTap } from "./menu/bubblemenu";

export function MDEditor({ content = defaultContent }: { content?: string }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CustomCodeBlock,
      HighlightedCodeBlock,
      ...TypographyExtensions,
      ...ExternalElements,
    ],
    content,
    enableCoreExtensions: true,
    autofocus: true,
    coreExtensionOptions: {
      clipboardTextSerializer: {
        blockSeparator: "\n",
      },
    },
  });

  return (
    <div className="mx-auto py-4 w-[min(90%,60rem)]">
      {/* {editor && <BubbleMenuTipTap editor={editor} />} */}

      {/* // TODO Implement this  */}
      {/* {editor && <FloatingMenuTipTap editor={editor} />} */}

      {/* // TODO Implement this, make this optional os that user can enable this or disable this as they like this to be */}
      {/* {editor && <MenuBar editor={editor} />} */}

      <EditorContent editor={editor} controls contextMenu="default" />
    </div>
  );
}
