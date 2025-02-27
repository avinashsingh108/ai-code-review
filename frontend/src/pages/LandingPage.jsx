import { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { PiBugFill } from "react-icons/pi";
import Home from "../components/Home";
import CodeReview from "./CodeReview";
import ErrorAnalysis from "./ErrorAnalysis";

const LandingPage = () => {
  const [component, setComponent] = useState("review");

  return (
    <div className=" text-white">
      <Home />

      <div className="bg-gradient-to-br from-black via-gray-900 to-black mx-auto px-4 py-10 relative">
        <div className="rounded-lg max-w-5xl mx-auto overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-2 border-b border-gray-700/50">
            <button
              onClick={() => setComponent("review")}
              className={`p-4 cursor-pointer flex items-center justify-center gap-3 relative transition-all duration-300
                ${
                  component === "review"
                    ? "text-white bg-gray-800/50"
                    : "text-gray-400 hover:text-gray-200 bg-gray-800/60 hover:bg-gray-800/30"
                }`}
            >
              <FaCode
                className={`text-xl ${
                  component === "review" ? "text-purple-400" : ""
                }`}
              />
              <span className=" font-semibold">Code Review</span>
              {component === "review" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
              )}
            </button>

            <button
              onClick={() => setComponent("error")}
              className={`p-4 cursor-pointer flex items-center justify-center gap-3 relative transition-all duration-300
                ${
                  component === "error"
                    ? "text-white bg-gray-800/50"
                    : "text-gray-400 hover:text-gray-200 bg-gray-800/60 hover:bg-gray-800/30"
                }`}
            >
              <PiBugFill
                className={`text-xl ${
                  component === "error" ? "text-purple-400" : ""
                }`}
              />
              <span className=" font-semibold">Error Analysis</span>
              {component === "error" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
              )}
            </button>
          </div>

          <div className=" relative">
            <div
              className={`transition-opacity duration-300 ${
                component === "review" ? "opacity-100" : "opacity-0"
              }`}
            >
              {component === "review" && <CodeReview />}
            </div>
            <div
              className={`transition-opacity duration-300 ${
                component === "error" ? "opacity-100" : "opacity-0"
              }`}
            >
              {component === "error" && <ErrorAnalysis />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
