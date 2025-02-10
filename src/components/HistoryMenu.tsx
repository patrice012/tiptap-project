import { Redo, Undo } from "lucide-react";
import { MenuProps } from "../declaration";

export const HistoryMenu: React.FC<MenuProps> = ({ editor }) => {
  const handleUndo = () => {
    if (editor) {
      editor.chain().focus().undo().run();
    }
  };

  const handleRedo = () => {
    if (editor) {
      editor.chain().focus().redo().run();
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center space-x-1 mr-2">
      <button
        onClick={handleUndo}
        disabled={!editor.can().undo()}
        className={`p-2 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50`}
        title="Undo"
      >
        <Undo className="w-5 h-5" />
      </button>
      <button
        onClick={handleRedo}
        disabled={!editor.can().redo()}
        className={`p-2 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50 `}
        title="Redo"
      >
        <Redo className="w-5 h-5" />
      </button>
    </div>
  );
};
