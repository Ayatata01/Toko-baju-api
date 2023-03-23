const { validationResult } = require("express-validator");

exports.Handler = (req, errorMessage, statusCode) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error(errorMessage || "Invalid value");
    err.errorStatus = statusCode || 400;
    err.message = errors;

    throw err;
  }
};
