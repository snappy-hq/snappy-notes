"use client";

// import { EditorContent, generateHTML, useEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import React, { useState } from "react";
// import { Button } from "../ui/button";
// import { Bold, Italic, Printer, Redo, Undo } from "lucide-react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "../ui/tooltip";

// const Tiptap = () => {
//   const [markdown, setMarkdown] = useState("");
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: "# Hello World! 🌎️",
//     injectCSS: false,
//     editorProps: {
//       attributes: {
//         class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
//       },
//     },
//     onUpdate: ({ editor }) => {
//       const markdownContent = editor.getHTML();
//       setMarkdown(markdownContent);
//     },
//   });

//   return (
//     <main className="p-4">
//       <nav className="flex gap-3 my-3 px-2 py-1">
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger>
//               <Button
//                 size={"icon"}
//                 onClick={() => editor?.chain().focus().toggleBold().run()}
//               >
//                 <Bold />
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>Make it bold</TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//         <Button
//           size={"icon"}
//           onClick={() => editor?.chain().focus().toggleItalic().run()}
//         >
//           <Italic />
//         </Button>
//         <Button
//           size={"icon"}
//           onClick={() => editor?.chain().focus().undo().run()}
//         >
//           <Undo />
//         </Button>
//         <Button
//           size={"icon"}
//           onClick={() => editor?.chain().focus().redo().run()}
//         >
//           <Redo />
//         </Button>
//         <Button
//           onClick={() => {
//             console.log(editor?.getHTML());
//             console.log(generateHTML(editor?.getJSON()!, [StarterKit]));
//           }}
//         >
//           <Printer /> Print the html
//         </Button>
//       </nav>
//       <EditorContent className="px-2 py-1" editor={editor} controls={true} />
//     </main>
//   );
// };

// export default Tiptap;

import TextAlign from "@tiptap/extension-text-align";
import Text from "@tiptap/extension-text";
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Highlight from "@tiptap/extension-highlight";
import {
  BubbleMenu,
  type Editor,
  EditorContent,
  FloatingMenu,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { Button } from "../ui/button";

const MenuBar = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <div className="button-group">
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          H1
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          H2
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          H3
        </Button>
        <Button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          Paragraph
        </Button>
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
        >
          Strike
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive("highlight") ? "is-active" : ""}
        >
          Highlight
        </Button>
        <Button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          Left
        </Button>
        <Button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          Center
        </Button>
        <Button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          Right
        </Button>
        <Button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
        >
          Justify
        </Button>
      </div>
    </div>
  );
};

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Paragraph,
      Text,
    ],
    content: `
      <h3 style="text-align:center">
        Devs Just Want to Have Fun by Cyndi Lauper
      </h3>
      <p style="text-align:center">
        I come home in the morning light<br>
        My mother says, <mark>“When you gonna live your life right?”</mark><br>
        Oh mother dear we’re not the fortunate ones<br>
        And devs, they wanna have fun<br>
        Oh devs just want to have fun</p>
      <p style="text-align:center">
        The phone rings in the middle of the night<br>
        My father yells, "What you gonna do with your life?"<br>
        Oh daddy dear, you know you’re still number one<br>
        But <s>girls</s>devs, they wanna have fun<br>
        Oh devs just want to have
      </p>
      <p style="text-align:center">
        That’s all they really want<br>
        Some fun<br>
        When the working day is done<br>
        Oh devs, they wanna have fun<br>
        Oh devs just wanna have fun<br>
        (devs, they wanna, wanna have fun, devs wanna have)
      </p>
    `,
  });

  return (
    <>
      {editor && (
        <BubbleMenu
          className="bubble-menu"
          tippyOptions={{ duration: 100 }}
          editor={editor}
        >
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
            // disabled={!editor.isActive("strike")}
          >
            Strike
          </Button>
        </BubbleMenu>
      )}
      {editor && (
        <FloatingMenu
          className="floating-menu"
          tippyOptions={{ duration: 100 }}
          editor={editor}
        >
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            H1
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
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
      )}
      <MenuBar editor={editor!} />
      <EditorContent editor={editor} />
    </>
  );
};
