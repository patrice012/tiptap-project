import { BubbleMenu } from "@tiptap/react";
import { MenuProps } from "../declaration";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
} from "lucide-react";
import { HistoryMenu } from "./HistoryMenu";
import { HighlighterMenu } from "./HighlighterMenu";

const BubbleMenuBar: React.FC<MenuProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <BubbleMenu
      className="w-full"
      editor={editor}
      tippyOptions={{ duration: 100 }}
    >
      <div className="bg-white border p-2 rounded shadow-lg">
        <div className="flex items-center space-x-1 mr-2">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={`p-2 rounded-md hover:bg-gray-100 transition-colors ${
              editor.isActive("bold")
                ? "bg-gray-100 text-blue-600"
                : "text-gray-600"
            }`}
            title="Bold (Ctrl+B)"
          >
            <BoldIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={`p-2 rounded-md hover:bg-gray-100 transition-colors ${
              editor.isActive("italic")
                ? "bg-gray-100 text-blue-600"
                : "text-gray-600"
            }`}
            title="Italic (Ctrl+I)"
          >
            <ItalicIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-2 rounded-md hover:bg-gray-100 transition-colors ${
              editor.isActive("underline")
                ? "bg-gray-100 text-blue-600"
                : "text-gray-600"
            }`}
            title="Underline (Ctrl+U)"
          >
            <UnderlineIcon className="w-5 h-5" />
          </button>
        </div>
        {/* Heading buttons */}
        <div className="flex items-center space-x-1 mr-2">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={`p-2 rounded-md hover:bg-gray-100 transition-colors ${
              editor.isActive("heading", { level: 1 })
                ? "bg-gray-100 text-blue-600"
                : "text-gray-600"
            }`}
            title="Heading 1"
          >
            <Heading1 className="w-5 h-5" />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={`p-2 rounded-md hover:bg-gray-100 transition-colors ${
              editor.isActive("heading", { level: 2 })
                ? "bg-gray-100 text-blue-600"
                : "text-gray-600"
            }`}
            title="Heading 2"
          >
            <Heading2 className="w-5 h-5" />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={`p-2 rounded-md hover:bg-gray-100 transition-colors ${
              editor.isActive("heading", { level: 3 })
                ? "bg-gray-100 text-blue-600"
                : "text-gray-600"
            }`}
            title="Heading 3"
          >
            <Heading3 className="w-5 h-5" />
          </button>
        </div>

        {/* List buttons */}
        <div className="flex items-center space-x-1 mr-2">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded-md hover:bg-gray-100 transition-colors ${
              editor.isActive("bulletList")
                ? "bg-gray-100 text-blue-600"
                : "text-gray-600"
            }`}
            title="Bullet List"
          >
            <List className="w-5 h-5" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded-md hover:bg-gray-100 transition-colors ${
              editor.isActive("orderedList")
                ? "bg-gray-100 text-blue-600"
                : "text-gray-600"
            }`}
            title="Numbered List"
          >
            <ListOrdered className="w-5 h-5" />
          </button>
        </div>

        {/* Highlighter button */}
        <HighlighterMenu editor={editor} />

        {/* Actions buttons */}
        <HistoryMenu editor={editor} />
      </div>
    </BubbleMenu>
  );
};

export { BubbleMenuBar };
