"use client";

import { Color } from "@tiptap/extension-color";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import CodeBlock from "@tiptap/extension-code-block";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { content as defaultContent } from "./utils/defaultcontent";
import { lowlight as highlighter } from "./utils/lowlight";

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
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({
        multicolor: true,
      }),
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
      CodeBlock.configure({
        exitOnArrowDown: true,
        exitOnTripleEnter: true,
        languageClassPrefix: "language-",
      }),
      CodeBlockLowlight.configure({
        lowlight: highlighter,
      }),
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
      {/* {editor && <BubbleMenuTipTap editor={editor} />} */}

      {/* // TODO Implement this  */}
      {/* {editor && <FloatingMenuTipTap editor={editor} />} */}

      {/* // TODO Implement this, make this optional os that user can enable this or disable this as they like this to be */}
      {/* {editor && <MenuBar editor={editor} />} */}

      <EditorContent editor={editor} controls contextMenu="default" />
    </div>
  );
}
