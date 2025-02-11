import { Highlighter } from "lucide-react";
import { LegacyRef, useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useClickAway, useDebounce } from "@uidotdev/usehooks";
import { MenuProps } from "../declaration";

export const HighlighterMenu: React.FC<MenuProps> = ({ editor }) => {
  const [selectedColor, setSelectedColor] = useState("#FFFF00");
  const debouncedColor = useDebounce(selectedColor, 400);
  const [canHighlightText, setcanHighlightText] = useState(false);

  const [showColorPicker, setShowColorPicker] = useState(false);
  const ref = useClickAway(() => {
    setShowColorPicker(false);
  });

  const handleHighlightClick = () => {
    if (!editor) return;
    setcanHighlightText(true);

    if (editor.isActive("Highlighter")) {
      // Remove highlight if already active
      editor.chain().focus().toggleHighlighter().run();
    } else {
      // Show selectedColor picker if not already highlighted
      setShowColorPicker(true);
    }
  };

  useEffect(() => {
    if (!editor) return;
    if (!canHighlightText) return;

    editor.chain().focus().setHighlighter({ color: debouncedColor }).run();
  }, [editor, debouncedColor, canHighlightText]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center space-x-1 mr-2">
      <button
        onClick={handleHighlightClick}
        className={`p-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-1 ${
          editor.isActive("Highlighter")
            ? "bg-gray-100 text-blue-600"
            : "text-gray-600"
        }`}
        title="Highlight Text"
      >
        <Highlighter className="w-5 h-5" />
      </button>
      {showColorPicker && (
        <div
          ref={ref as LegacyRef<HTMLDivElement> | undefined}
          className="absolute top-2 right-4 z-90 shadow-lg p-2 bg-white border rounded"
        >
          <HexColorPicker
            color={selectedColor}
            onChange={(newColor) => {
              setSelectedColor(newColor);
            }}
          />
        </div>
      )}
    </div>
  );
};
