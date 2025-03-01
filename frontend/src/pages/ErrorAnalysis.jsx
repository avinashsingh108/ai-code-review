import CodeEditor from "@uiw/react-textarea-code-editor";
import axios from "axios";
import { useState, useEffect } from "react";
import ErrorOutput from "../components/ErrorOutput";
import "../App.css";
import { BASE_URL, MAX_LENGTH } from "../constant";

const ErrorAnalysis = () => {
  const [errorText, setErrorText] = useState("");
  const [errorData, setErrorData] = useState(null);
  const [stackOverflowArticles, setStackOverflowArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleAnalyze = async () => {
    if (loading) return;
    const trimmedCode = errorText.trim();
    if (trimmedCode == "") {
      setErrorMessage(
        "Error description cannot be empty. Please enter the error details."
      );
      return;
    }
    if (trimmedCode.length > MAX_LENGTH) {
      setErrorMessage("The input is too long. Please shorten it.");
      return;
    }
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        BASE_URL + "/ai/get-explanation-error",
        { input: errorText }
      );

      if (response.data.error) {
        setErrorMessage(
          "We couldn't recognize this as an error. Please enter a real error message from your code."
        );
        setErrorData(null);
        setStackOverflowArticles([]);
      } else {
        setErrorData(response.data.explanation);
        setStackOverflowArticles(response.data.stackOverflowResult.slice(0, 5));
      }
    } catch (error) {
      setErrorMessage(
        "Unable to analyze the input. Please make sure you're entering a valid error message."
      );
    } finally {
      setLoading(false);
    }
  };
  const handleScroll = () => {
    window.scrollBy({ top: 200, behavior: "smooth" });
  };

  useEffect(() => {
    if (errorData || stackOverflowArticles.length > 0) {
      handleScroll();
    }
  }, [errorData, stackOverflowArticles]);
  return (
    <>
      <div className="max-w-5xl mx-auto text-white  bg-[#1e1e1e] max-h-[70vh] overflow-auto  p-4">
        <CodeEditor
          value={errorText}
          language="json"
          placeholder="Paste your error here..."
          onChange={(e) => setErrorText(e.target.value)}
          style={{
            backgroundColor: "#1e1e1e",
            color: "#f8f8f8",
            fontSize: 14,
            minHeight: 500,
            borderRadius: 8,
            overflow: "auto",
          }}
        />
      </div>
      <button
        disabled={errorMessage || loading}
        onClick={handleAnalyze}
        className={`${
          loading && "animate-pulse"
        } text-white flex-1 py-3 bg-neutral-900 hover:bg-neutral-950 w-full cursor-pointer disabled:cursor-not-allowed`}
      >
        {loading ? (
          "🔍 Analyzing..."
        ) : errorMessage ? (
          <span className="text-sm text-red-600">{errorMessage} </span>
        ) : (
          "Analyze"
        )}
      </button>

      {!errorMessage && (errorData || stackOverflowArticles.length > 0) && (
        <ErrorOutput
          errorData={errorData}
          stackOverflowArticles={stackOverflowArticles}
        />
      )}
    </>
  );
};

export default ErrorAnalysis;
