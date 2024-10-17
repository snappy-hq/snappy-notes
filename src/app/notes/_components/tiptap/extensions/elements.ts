import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Link from "@tiptap/extension-link";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import Placeholder from "@tiptap/extension-placeholder";

const HRBreak = HorizontalRule.configure({
  HTMLAttributes: {
    class: "tiptap__hr",
  },
});

const AutoLink = Link.configure({
  openOnClick: true,
  autolink: true,
  defaultProtocol: "https",
});

const SUP = Superscript.configure({});

const SUB = Subscript.configure({});

const placeholder = Placeholder.configure({
  placeholder: ({ node }) => {
    if (node.type.name === "heading") {
      return "What's the title?";
    }
    return "Can you add some further context?";
  },
});

// const setLink = useCallback(() => {
//   const previousUrl = editor.getAttributes("link").href
//   const url = window.prompt("URL", previousUrl)

//
//   if (url === null) {
//     return
//   }

//
//   if (url === "") {
//     editor.chain().focus().extendMarkRange("link").unsetLink()
//       .run()

//     return
//   }

//
//   editor.chain().focus().extendMarkRange("link").setLink({ href: url })
//     .run()
// }, [editor])

export const ExternalElements = [HRBreak, AutoLink, SUP, SUB, placeholder];
