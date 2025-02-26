import axios from "axios";
import { useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import { useArticles } from "../context/ArticlesContext";
import { BASE_URL } from "../constant";
import { PiArticleNyTimesFill } from "react-icons/pi";

const Blogs = () => {
  const { articles, setArticles, loading, setLoading, error, setError } =
    useArticles();

  useEffect(() => {
    if (articles.length === 0) {
      const getArticles = async () => {
        try {
          const response = await axios.get(BASE_URL + "/articles/default");
          const risingArticles = response.data?.risingArticles || [];
          const topArticles = response.data?.topArticles || [];
          const combinedArticles = [...risingArticles, ...topArticles];
          setArticles(combinedArticles);
        } catch (err) {
          setError("Failed to load articles. Please try again.");
        } finally {
          setLoading(false);
        }
      };

      getArticles();
    } else {
      setLoading(false);
    }
  }, [articles, setArticles, setLoading, setError]);

  return (
    <div className="px-3 sm:px-4 md:px-12 lg:px-32 xl:px-40 pt-28 sm:pt-32 mx-auto p-6 text-white bg-gradient-to-bl from-black via-gray-900 to-black min-h-screen bg-fixed">
      <h1 className="text-3xl font-bold mb-10 text-center flex justify-center items-center gap-1">
        <PiArticleNyTimesFill className="text-[33px]"/>
        <span> Popular Articles</span>
      </h1>
      {loading && (
        <p className="text-gray-400 text-center text-lg pt-28">
          Loading articles...
        </p>
      )}
      {error && <p className="text-red-400 text-center">{error}</p>}
      {!loading && !error && articles.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        !loading &&
        !error && (
          <p className="text-gray-400 text-center text-lg pt-28">
            No articles available at the moment.
          </p>
        )
      )}
    </div>
  );
};

export default Blogs;
