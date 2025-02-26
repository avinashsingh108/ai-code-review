const Joi = require("joi");

const inputSchema = Joi.object({
  input: Joi.string().trim().min(1).max(25000).required(),
});

const validateInput = (req, res, next) => {
  const { error } = inputSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = validateInput;
