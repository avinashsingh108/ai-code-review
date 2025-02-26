import { useState } from "react";
import { BiCommentDetail, BiUpvote } from "react-icons/bi";

const ArticleCard = ({ article }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageSrc =
    article.cover_image || article.social_image;

  return (
    <div className="bg-neutral-800/70 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-40 mb-3">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-neutral-800 animate-pulse rounded-lg" />
          )}
          <img
            src={imageSrc}
            alt={article.title || "Article"}
            className="w-full h-40 object-cover rounded-lg"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </a>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-blue-300 hover:underline"
      >
        {article.title || "Untitled"}
      </a>
      <p className="text-gray-400 text-sm mt-1">
        {article.description || "No description available."}
      </p>
      {article.tag_list && article.tag_list.length > 0 && (
        <div className="flex flex-wrap mt-2 gap-2">
          {article.tag_list.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-700 px-2 py-1 rounded-md text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center mt-3 text-sm text-gray-400">
        <img
          src={article.user?.profile_image_90 || "default-profile.jpg"}
          alt={article.user?.name || "User"}
          className="w-8 h-8 rounded-full mr-2"
          loading="lazy"
        />
        <span>{article.user?.name || "Anonymous"}</span>
        <span className="ml-auto">
          {article.readable_publish_date || "N/A"},{" "}
          {article.reading_time_minutes || "?"} min read
        </span>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-500">
        <span className="flex justify-center items-center gap-1 bg-neutral-800 rounded-lg px-3 py-1.5">
          <BiUpvote className="text-lg" /> {article.public_reactions_count || 0} Reactions
        </span>
        <span className="flex justify-center items-center gap-1 bg-neutral-800 rounded-lg px-3 py-1.5">
          <BiCommentDetail className="text-lg" /> {article.comments_count || 0} Comments
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
