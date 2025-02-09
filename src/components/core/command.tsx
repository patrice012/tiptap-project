import { Mark, mergeAttributes, Command } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    Highlighter: {
      toggleHighlighter: () => ReturnType;
      setHighlighter: (attributes: { color: string }) => ReturnType;
    };
  }
}

export const Highlighter = Mark.create({
  name: "Highlighter",

  addAttributes() {
    return {
      color: {
        default: "#ffff00",
        parseHTML: (element: HTMLElement) =>
          element.style.backgroundColor || "#ffff00",
        renderHTML: (attributes: { color: string }) => {
          return { style: `background-color: ${attributes.color}` };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span[data-highlighter]",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes({ "data-highlighter": "" }, HTMLAttributes),
      0,
    ];
  },

  addCommands() {
    return {
      // Toggle the highlighter mark (without parameters)
      toggleHighlighter:
        () =>
        ({ commands }): boolean => {
          return commands.toggleMark(this.name);
        },
      // Command to update the highlighter's color on selected text.
      setHighlighter:
        (attributes: { color: string }): Command =>
        ({ commands }) => {
          return commands.setMark(this.name, attributes);
        },
    };
  },

  addKeyboardShortcuts() {
    return {
      "Mod-Shift-c": () => this.editor.commands.toggleHighlighter(),
    };
  },
});
