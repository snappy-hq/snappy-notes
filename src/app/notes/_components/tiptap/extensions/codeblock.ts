import CodeBlock from "@tiptap/extension-code-block";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { lowlight as highlighter } from "../utils/lowlight";

export const CustomCodeBlock = CodeBlock.configure({
  exitOnArrowDown: true,
  exitOnTripleEnter: true,
  languageClassPrefix: "language-",
}).extend({
  addKeyboardShortcuts() {
    return {
      Tab: () => {
        const { editor } = this;
        if (editor.isActive("codeBlock")) {
          editor.commands.insertContent("\t");
          return true;
        }
        return false;
      },
    };
  },
});

export const HighlightedCodeBlock = CodeBlockLowlight.configure({
  lowlight: highlighter,
}).extend({
  addKeyboardShortcuts() {
    return {
      Tab: () => {
        const { editor } = this;
        if (editor.isActive("codeBlock")) {
          editor.commands.insertContent("\t");
          return true;
        }
        return false;
      },
    };
  },
});
