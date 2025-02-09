import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Keyboard,
  Highlighter,
} from "lucide-react";
import { LegacyRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useClickAway } from "@uidotdev/usehooks";
import { Settings } from "./settings";
import { MenuProps } from "../declaration";

export const MenuBar: React.FC<MenuProps> = ({ editor }) => {
  const [color, setColor] = useState("#ffff00");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const ref = useClickAway(() => {
    setShowColorPicker(false);
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="flex flex-wrap gap-1 items-center">
          {/* Formatting buttons for Bold, Italic, Underline */}
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
          <div className="w-px h-6 bg-gray-200 mx-2" />

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
          <div className="w-px h-6 bg-gray-200 mx-2" />

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
          <div className="w-px h-6 bg-gray-200 mx-2" />

          {/* Highlighter button */}
          <button
            onClick={() => {
              // Toggle the visibility of the color picker
              setShowColorPicker((prev) => !prev);
            }}
            className={`p-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-1 ${
              editor.isActive("Highlighter")
                ? "bg-gray-100 text-blue-600"
                : "text-gray-600"
            }`}
            title="Highlight Text"
          >
            <Highlighter className="w-5 h-5" />
          </button>
        </div>

        {/* Highlighter button */}
        <Settings editor={editor} />
      </div>

      {showColorPicker && (
        <div
          ref={ref as LegacyRef<HTMLDivElement> | undefined}
          className="absolute top-2 right-4 z-90 shadow-lg p-2 bg-white border rounded"
        >
          <HexColorPicker
            color={color}
            onChange={(newColor) => {
              setColor(newColor);
              // Update the highlighter mark on selected text with the chosen color.
              editor?.chain().focus().setHighlighter({ color: newColor }).run();
            }}
          />
        </div>
      )}

      <div className="px-4 py-1 bg-gray-50 border-t border-gray-200 flex items-center text-xs text-gray-500">
        <Keyboard className="w-3 h-3 mr-1" />
        <span>
          Tip: Use keyboard shortcuts - Ctrl+B (Bold), Ctrl+I (Italic), Ctrl+U
          (Underline)
        </span>
      </div>
    </div>
  );
};
