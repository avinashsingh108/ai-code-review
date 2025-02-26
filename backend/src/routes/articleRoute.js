const express = require("express");
const { getTopArticles } = require("../controllers/articlesController");
const router = express.Router();

router.get("/default", getTopArticles);

module.exports = router;
