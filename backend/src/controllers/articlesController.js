const axios = require("axios");

const getTopArticles = async (req, res) => {
  try {
    const results = await Promise.allSettled([
      axios.get("https://dev.to/api/articles", { params: { top: 7 } }),
      axios.get("https://dev.to/api/articles", { params: { state: "rising" } }),
    ]);

    const topArticles =
      results[0].status === "fulfilled" ? results[0].value.data : [];
    const risingArticles =
      results[1].status === "fulfilled" ? results[1].value.data : [];

    res.json({
      topArticles,
      risingArticles,
    });
  } catch (error) {
    console.error("Error in getTopArticles:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { getTopArticles };
