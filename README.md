# Tiptap Rich Text Editor

A modern, customizable rich text editor built with React and [Tiptap](https://tiptap.dev/). This editor includes basic formatting (bold, italic, underline, headings, lists) along with custom extensions such as a Highlighter mark with a color picker. It also provides functionality to export and import the editor’s content as JSON.

## Table of Contents

-   [Features](#features)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Running the Application](#running-the-application)
-   [Project Structure](#project-structure)
-   [Usage](#usage)
-   [License](#license)

## Features

-   **Rich Text Editing:** Bold, Italic, Underline, Headings, Bullet and Ordered Lists.
-   **Custom Extensions:**
    -   **Highlighter Extension:** Highlight text with a customizable color using a popup color picker.
-   **Import/Export:** Export your content as JSON and import content via a modal.
-   **Keyboard Shortcuts:** Built-in keyboard shortcuts for quick formatting.

## Prerequisites

-   [Node.js](https://nodejs.org/) (version 18 or later)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
-   A modern browser

## Installation

1.  **Clone the Repository:**
    
    ```bash
    git clone https://github.com/patrice012/tiptap-project.git
    cd tiptap-project
    ```
    
2.  **Install Dependencies:**
    
    Using npm:
    
    ```bash
    npm install
    ```
    
    Or with Yarn:
    
    ```bash
    yarn install
    ```
    

## Running the Application

After installation, start the development server:

Using npm:

```bash
npm run dev
```

Using Yarn:

```bash
yarn dev
```

The application will be available at [http://localhost:5173](http://localhost:5173/) (or the port specified by your development setup).


## Project Structure

Here's a brief overview of the project structure:

```
tiptap-project/
├── public/                # Static assets (images, fonts, etc.)
├── src/
│   ├── components/
│   │   ├── Tiptap.tsx     # Main editor component integrating Tiptap
│   │   ├── Settings.tsx   # Editor settings component (import/export functionality)
│   │   └── MenuBar.tsx    # Toolbar with formatting buttons
│	├── core/
│   │   └── Heading.tsx	   # Custom heading with default style
│   ├── extensions/
│   │   └── Highlighter.ts # Highlighter mark extension with color support
│   ├── utils/
│   │   └── jsonExport.ts  # Utility to export JSON content
│   ├── dataFetcher
│   │   └── Storage.ts	   # Local storage to save content in progress
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── package.json           # Project configuration and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file

```
## Usage

-   **Formatting:** Use the toolbar buttons to apply formatting like Bold, Italic, Underline, and different Heading levels.
-   **Custom Extensions:**
    -   **Highlighter:** Click the "Highlighter" button to open a color picker. Choose a color to apply as a background on the highlighted text.
-   **Import/Export:**
    -   **Export:** Click the "Export as JSON" button in the settings menu to download the current editor content.
    -   **Import:** Click the "Import as JSON" button to open a modal where you can paste JSON content. After validating the input, the content will be imported and used as editor content

## License

This project is licensed under the MIT License.
