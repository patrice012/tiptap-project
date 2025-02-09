import { Settings2 } from "lucide-react";
import { LegacyRef, useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { exportAsJson } from "../utils/jsonExport";
import { MenuProps } from "../declaration";

export const Settings: React.FC<MenuProps> = ({ editor }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [importJson, setImportJson] = useState("");
  const [importError, setImportError] = useState<string | null>(null);

  // Hide settings when clicking outside
  const settingsRef = useClickAway(() => {
    setShowSettings(false);
  });

  if (!editor) {
    return null;
  }

  // Get the current editor content as JSON
  const editorJsonValue = editor.getJSON();

  const handleJsonExport = () => {
    exportAsJson({ data: editorJsonValue, fileName: "text.json" });
  };

  // Validate and "save" the imported JSON
  const handleImportSave = () => {
    try {
      const parsed = JSON.parse(importJson);
      // Set parsed data as a current editor text
      editor.commands.setContent(parsed);

      // Close modal
      setShowImportModal(false);
      setImportJson("");
      setImportError(null);
    } catch (error) {
      console.log(error, "error importing data");
      setImportError("Invalid JSON. Please check your input.");
    }
  };

  return (
    <div>
      <div
        className="group"
        ref={settingsRef as LegacyRef<HTMLDivElement> | undefined}
      >
        <button
          data-ripple-light="true"
          data-popover-target="popover"
          onClick={() => setShowSettings((prev) => !prev)}
          className={`p-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-1 peer-hover:bg-gray-100 group-hover:bg-gray-100 group-hover:text-blue-600 group-focus:bg-gray-100 group-focus:text-blue-600 text-gray-600`}
          title="Settings"
        >
          <Settings2 className="w-5 h-5" />
        </button>
        {showSettings ? (
          <div
            data-popover="popover"
            className="flex flex-col items-center space-y-3 absolute p-4 font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg w-max border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none"
          >
            <button
              onClick={handleJsonExport}
              className="flex items-center justify-between"
            >
              Export as JSON
            </button>
            <button
              onClick={() => {
                setShowImportModal(true);
                setShowSettings(false);
              }}
              className="flex items-center justify-between"
            >
              Import as JSON
            </button>
          </div>
        ) : null}
      </div>

      {showImportModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded-lg z-50 w-8/12 min-w-md">
            <h2 className="text-lg font-bold mb-4">Import JSON Content</h2>
            <textarea
              value={importJson}
              onChange={(e) => setImportJson(e.target.value)}
              placeholder="Paste JSON here"
              rows={5}
              className="w-full p-2 border rounded mb-2"
            />
            {importError && <p className="text-red-500 mb-2">{importError}</p>}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowImportModal(false);
                  setImportJson("");
                  setImportError(null);
                }}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleImportSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Import
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
