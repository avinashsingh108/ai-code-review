const ActionButtons = ({ onReview, onExplain, loading, error }) => {
  if (error)
    return (
      <div className="text-sm text-red-600 text-center py-3 w-full bg-neutral-900 cursor-not-allowed">
        {error}
      </div>
    );
  return (
    <div className="flex bg-neutral-900">
      <button
        disabled={loading.reviewLoading}
        onClick={onReview}
        className={` ${
          loading.reviewLoading && "animate-pulse"
        } text-white py-3 flex-1 cursor-pointer disabled:cursor-not-allowed hover:bg-neutral-950`}
      >
        {loading.reviewLoading ? "🔍 Analyzing..." : "Review"}
      </button>
      <button
        disabled={loading.explainationLoading}
        onClick={onExplain}
        className={` ${
          loading.explainationLoading && "animate-pulse"
        } text-white flex-1 border-l border-gray-600 cursor-pointer disabled:cursor-not-allowe hover:bg-neutral-950`}
      >
        {loading.explainationLoading ? "🔍 Analyzing..." : "Explain"}
      </button>
    </div>
  );
};

export default ActionButtons;
