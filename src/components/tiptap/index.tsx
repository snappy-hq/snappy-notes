"use client";

import { EditorContent, generateHTML, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { Button } from "../ui/button";
import { Bold, Italic, Printer, Redo, Undo } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    injectCSS: false,
  });

  return (
    <main className="p-4">
      <nav className="flex gap-3 my-3 px-2 py-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                size={"icon"}
                onClick={() => editor?.chain().focus().toggleBold().run()}
              >
                <Bold />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Make it bold</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button
          size={"icon"}
          onClick={() => editor?.chain().focus().toggleItalic().run()}
        >
          <Italic />
        </Button>
        <Button
          size={"icon"}
          onClick={() => editor?.chain().focus().undo().run()}
        >
          <Undo />
        </Button>
        <Button
          size={"icon"}
          onClick={() => editor?.chain().focus().redo().run()}
        >
          <Redo />
        </Button>
        <Button
          onClick={() => {
            console.log(editor?.getHTML());
            console.log(generateHTML(editor?.getJSON()!, [StarterKit]));
          }}
        >
          <Printer /> Print the html
        </Button>
      </nav>
      <EditorContent className="px-2 py-1" editor={editor} controls={true} />
    </main>
  );
};

export default Tiptap;
