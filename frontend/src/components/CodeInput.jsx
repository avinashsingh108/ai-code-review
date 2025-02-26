import { useState } from "react";
import Editor from "@monaco-editor/react";
import { FaCode } from "react-icons/fa";
import { MdOutlineFormatSize, MdWrapText } from "react-icons/md";
import { VscSymbolColor } from "react-icons/vsc";
import { SiCodefactor } from "react-icons/si";

const themes = ["vs-dark", "light"];
const languages = [
  "javascript",
  "typescript",
  "python",
  "java",
  "cpp",
  "c", 
  "csharp",
  "html",
  "css",
  "json",
  "sql",
  "markdown",
  "xml",
  "php",
  "go",
  "rust",
  "swift",
  "dart",
  "ruby",
  "kotlin",
  "shell", 
];
const fontSizes = [12, 14, 16, 18, 20, 22];

const CodeInput = ({ code, setCode }) => {
  const [options, setOptions] = useState({
    fontSize: 16,
    minimap: { enabled: true },
    wordWrap: "off",
    theme: "vs-dark",
    language: "javascript",
  });

  const handleToggle = (key, value) => {
    setOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="bg-gray-900 min-h-[60vh] w-full mx-auto">
      <div className="hidden bg-gray-800 sm:flex sm:flex-row w-full flex-wrap items-center justify-around text-white text-xs border-b border-gray-900">
        <div className="flex flex-1 w-full items-center justify-center gap-2 bg-gray-900 py-2 cursor-pointer group">
          <VscSymbolColor />
          <select
            className="cursor-pointer outline-none bg-gray-900"
            value={options.theme}
            onChange={(e) => handleToggle("theme", e.target.value)}
          >
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-1 w-full items-center justify-center gap-2 bg-gray-900 py-2 cursor-pointer group">
          <FaCode />
          <select
            className="cursor-pointer outline-none bg-gray-900"
            value={options.language}
            onChange={(e) => handleToggle("language", e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-1 w-full items-center justify-center gap-2 bg-gray-900 py-2 cursor-pointer group">
          <MdOutlineFormatSize />
          <select
            className="cursor-pointer outline-none bg-gray-900"
            value={options.fontSize}
            onChange={(e) => handleToggle("fontSize", parseInt(e.target.value))}
          >
            {fontSizes.map((size) => (
              <option key={size} value={size}>
                {size}px
              </option>
            ))}
          </select>
        </div>

        <button
          className="py-2 flex-1 w-full transition-colors cursor-pointer bg-gray-900"
          onClick={() =>
            handleToggle("wordWrap", options.wordWrap === "on" ? "off" : "on")
          }
        >
          <MdWrapText className="inline mr-1" /> Word Wrap: {options.wordWrap}
        </button>

        <button
          className="py-2 flex-1 w-full transition-colors cursor-pointer bg-gray-900"
          onClick={() =>
            handleToggle("minimap", { enabled: !options.minimap.enabled })
          }
        >
          <SiCodefactor className="inline mr-1" /> Minimap:{" "}
          {options.minimap.enabled ? "On" : "Off"}
        </button>
      </div>

      <Editor
        height="70vh"
        width="100%"
        language={options.language}
        theme={options.theme}
        value={code}
        onChange={setCode}
        options={{
          fontSize: options.fontSize,
          minimap: { enabled: options.minimap.enabled },
          lineNumbers: "on",
          wordWrap: options.wordWrap,
          scrollBeyondLastLine: true,
          automaticLayout: true,
          autoIndent: true,
          codeLens: true,
          colorDecorators: true,
          cursorBlinking: "smooth",
          cursorStyle: "block",
          folding: true,
          foldingStrategy: "indentation",
          fontLigatures: true,
          formatOnPaste: true,
          formatOnType: true,
          highlightActiveIndentGuide: true,
          links: true,
          mouseWheelZoom: true,
          multiCursorModifier: "ctrlCmd",
          overviewRulerBorder: false,
          quickSuggestions: true,
          quickSuggestionsDelay: 50,
          renderIndentGuides: true,
          selectOnLineNumbers: true,
          showFoldingControls: "always",
          smoothScrolling: true,
          suggestOnTriggerCharacters: true,
          wordBasedSuggestions: true,
          wrappingIndent: "same",
        }}
      />
    </div>
  );
};

export default CodeInput;
