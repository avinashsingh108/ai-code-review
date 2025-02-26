import { createContext, useState, useContext } from "react";

const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return (
    <ArticlesContext.Provider
      value={{ articles, setArticles, loading, setLoading, error, setError }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => useContext(ArticlesContext);
