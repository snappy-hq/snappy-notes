import Color from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Paragraph from "@tiptap/extension-paragraph";
import Strike from "@tiptap/extension-strike";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";

export const TypographyExtensions = [
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
  Color,
  Strike,
  Typography,
];
