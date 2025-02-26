const ErrorOutput = ({ errorData, stackOverflowArticles }) => {
  if (!errorData)
    return (
      <div className="flex justify-center items-center p-4 font-medium text-gray-400 animate-pulse">
        🔍 Analyzing... Please wait
      </div>
    );

  return (
    <>
      <h2 className="font-medium px-4 py-2 mt-10 bg-neutral-900 text-center">
        Error Analysis
      </h2>
      <div className="bg-[#0D1117]  w-full max-w-5xl p-4 sm:p-8 mx-auto max-sm:text-sm">
        <p>
          <span className="text-white font-semibold">Error Type: </span>
          <span className="text-neutral-300">
            {errorData?.error_type ?? "Unknown Error"}
          </span>
        </p>
        <p>
          <span className="text-white font-semibold">Language: </span>
          <span className="text-neutral-300">
            {errorData?.language ?? "Not Specified"}
          </span>
        </p>
        <p>
          <span className="text-white font-semibold">Root Cause: </span>
          <span className="text-neutral-300">
            {errorData?.root_cause ?? "No Details Provided"}
          </span>
        </p>
        {errorData.suggested_fixes && errorData.suggested_fixes.length > 0 && (
          <div className="mt-4">
            <h3 className="text-base sm:text-lg font-semibold underline text-white">
              Suggested Fixes:
            </h3>
            <ul className="max-sm:text-sm list-disc pl-5 space-y-1 text-neutral-300">
              {errorData.suggested_fixes.map((fix, index) => (
                <li key={index} className=" p-2 rounded">
                  {fix}
                </li>
              ))}
            </ul>
          </div>
        )}

        {stackOverflowArticles && stackOverflowArticles.length > 0 && (
          <div className="mt-6">
            <h3 className="text-base sm:text-lg font-medium underline text-white">
              Related Stack Overflow Articles:
            </h3>
            <ul className="mt-2 space-y-2 max-sm:text-sm">
              {stackOverflowArticles.map((article, index) => (
                <li key={index} className="p-3 bg-neutral-800 rounded-lg">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {article.title}
                  </a>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Views: {article.view_count} | Answers:{" "}
                    {article.answer_count}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ErrorOutput;
