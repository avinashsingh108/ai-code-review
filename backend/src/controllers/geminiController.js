const gemini = require("../services/gemini");
const STACK_EXCHANGE_KEY = process.env.STACK_EXCHANGE_API;
const getReview = async (req, res) => {
  try {
    const input = req.body.input;
    const response = await gemini(input, "review");
    res.json({ review: response });
  } catch (error) {
    console.error("Error in getReview:", error);
    res.status(500).json({ error: "Failed to get review" });
  }
};

const getExplanationSimple = async (req, res) => {
  try {
    const input = req.body.input;
    const response = await gemini(input, "simple");
    res.json({ explanationSimple: response });
  } catch (error) {
    console.error("Error in getExplanationSimple:", error);
    res.status(500).json({ error: "Failed to get simple explanation" });
  }
};

const getExplanationTechnical = async (req, res) => {
  try {
    const input = req.body.input;
    const response = await gemini(input, "technical");
    res.json({ explanationTechnical: response });
  } catch (error) {
    console.error("Error in getExplanationTechnical:", error);
    res.status(500).json({ error: "Failed to get technical explanation" });
  }
};

const getExplanationError = async (req, res) => {
  try {
    const input = req.body.input;
    const geminiResponse = await gemini(input, "error");

    const geminiResponseStr = geminiResponse
      .replace(/^```json\s*/, "")
      .replace(/```\s*$/, "");

    let parsedResponse;

    try {
      parsedResponse = JSON.parse(geminiResponseStr);

      if (!parsedResponse || !parsedResponse.error_type) {
        throw new Error("Invalid error format from Gemini");
      }
    } catch (jsonError) {
      return res.status(400).json({
        error:
          "Invalid or unrecognized error format. Please enter a valid error message.",
      });
    }

    const searchQuery = parsedResponse.summary_title || input;
    const stackOverflowResponse = await fetch(
      `https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=${encodeURIComponent(
        searchQuery
      )}&accepted=true&site=stackoverflow&key=${STACK_EXCHANGE_KEY}`
    );
    const stackOverflowData = await stackOverflowResponse.json();

    res.json({
      explanation: parsedResponse,
      stackOverflowResult: stackOverflowData.items,
    });
  } catch (error) {
    console.error("Error in getExplanationError:", error);
    res.status(500).json({ error: "Failed to get error explanation" });
  }
};

module.exports = {
  getReview,
  getExplanationSimple,
  getExplanationTechnical,
  getExplanationError,
};
