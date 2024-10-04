"use client";

import { Color } from "@tiptap/extension-color";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import CodeBlock from "@tiptap/extension-code-block";
import Code from "@tiptap/extension-code";
import { BubbleMenuTipTap } from "./bubblemenu";
import { content } from "./defaultcontent";

// TODO needed in future updates
// import { MenuBar } from "./menubar";
// import { FloatingMenuTipTap } from "./floatingmenu";

export function MDEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Paragraph.configure({
        HTMLAttributes: {
          class: "tiptap__para",
        },
      }),
      Heading.configure({
        HTMLAttributes: {
          class: "tiptap__heading",
        },
      }),
      Code,
      CodeBlock.configure({ exitOnArrowDown: true }),
      Color,
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

      {editor && <BubbleMenuTipTap editor={editor} />}

      {/* TODO Implement this  */}
      {/* {editor && <FloatingMenuTipTap editor={editor} />} */}

      {/* TODO Implement this, make this optional os that user can enable this or disable this as they like this to be */}
      {/* {editor && <MenuBar editor={editor} />} */}

      <EditorContent editor={editor} controls contextMenu="default" />
    </div>
  );
}
