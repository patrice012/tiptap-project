import Tiptap from "./components";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-[clamp(1.25rem,3cqw,2rem)]  font-bold text-gray-900 mb-2">
            Rich Text Editor
          </h1>
          <p className="text-gray-600 text-[clamp(.95rem,1.3cqw,1.5rem)]">
            A professional text editor with formatting options, keyboard
            shortcuts, and Highlighters.
          </p>
        </div>
        <Tiptap />
      </div>
    </div>
  );
}

export default App;
