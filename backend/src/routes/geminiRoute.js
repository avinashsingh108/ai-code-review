const express = require("express");
const {
  getReview,
  getExplanationSimple,
  getExplanationTechnical,
  getExplanationError,
} = require("../controllers/geminiController");
const validateInput = require("../middleware/validateInput");
const router = express.Router();

router.post("/get-review", validateInput, getReview);
router.post("/get-explanation-simple", validateInput, getExplanationSimple);
router.post(
  "/get-explanation-technical",
  validateInput,
  getExplanationTechnical
);
router.post("/get-explanation-error", validateInput, getExplanationError);

module.exports = router;
