import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import { Heading } from "./core/Heading";
import { MenuBar } from "./MenuBar";
import { Storage } from "../dataFetcher/Storage";
import { Highlighter } from "../extensions/Highlighter";

const Tiptap: React.FC = () => {
  const store = new Storage();
  const savedData = store.get();

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph.configure({
        HTMLAttributes: {
          class: "mb-3",
        },
      }),
      Text,
      Bold.configure({
        HTMLAttributes: { class: "font-bold" },
      }),
      Italic.configure({
        HTMLAttributes: { class: "italic" },
      }),
      Underline.configure({
        HTMLAttributes: { class: "underline" },
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      BulletList.configure({
        HTMLAttributes: { class: "list-disc ml-4 mb-4" },
      }),
      OrderedList.configure({
        HTMLAttributes: { class: "list-decimal ml-4 mb-4" },
      }),
      ListItem,
      Highlighter,
    ],
    content: savedData || "",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg max-w-none focus:outline-none p-4",
      },
    },
    autofocus: true,
  });

  const editorJsonValue = editor?.getJSON() || {};
  store.save(editorJsonValue);

  return (
    <div className="relative border rounded-lg shadow-lg bg-white overflow h-auto">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
