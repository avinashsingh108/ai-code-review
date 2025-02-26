import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const OutputDisplay = ({ output, active }) => {
  const [activeTab, setActiveTab] = useState(active);

  const tabs = [
    { id: "review", label: "Code Review", content: output.review },
    {
      id: "simple",
      label: "Quick Summary",
      content: output.explanationSimple,
    },
    {
      id: "technical",
      label: "Deep Dive",
      content: output.explanationTechnical,
    },
  ];

  const availableTabs = tabs.filter((tab) => tab.content);

  return (
    <div className="text-white h-fit">
      <div className="max-w-5xl">
        <div className="flex space-x-0.5">
          {availableTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm flex-1 cursor-pointer  ${
                activeTab === tab.id
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-800 text-gray-200 hover:bg-neutral-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {availableTabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id}>
                
                <MDEditor.Markdown
                  source={tab.content}
                  className="bg-gray-700 p-4 sm:p-8 markdown-output"
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default OutputDisplay;
