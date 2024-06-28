"use client";

import { useEditor, EditorContent, generateHTML } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { Button } from "../ui/button";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    injectCSS: false,
  });

  return (
    <React.Fragment>
      <Button onClick={() => editor?.chain().focus().toggleBold().run()}>
        Bold
      </Button>
      <Button onClick={() => editor?.chain().focus().toggleItalic().run()}>
        Italic
      </Button>
      <Button onClick={() => editor?.chain().focus().undo().run()}>Undo</Button>
      <Button onClick={() => editor?.chain().focus().redo().run()}>Redo</Button>
      <Button
        onClick={() => {
          console.log(editor?.getHTML());
          console.log(generateHTML(editor?.getJSON()!, [StarterKit]));
        }}
      >
        Print the html
      </Button>
      <EditorContent editor={editor} controls={true} />
      {/* <textarea id="editor-input" /> */}
    </React.Fragment>
  );
};

export default Tiptap;
