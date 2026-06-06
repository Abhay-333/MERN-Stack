const { body } = require("express-validator");
const validateRequest = require("../utils/utils");

const registerValidationRules = [
  body("email")
    .toLowerCase()
    .notEmpty()
    .withMessage("Email is Required.")
    .withMessage("Please provide a valid email."),

  body("contact")
    .notEmpty()
    .withMessage("Contact is Required.")
    .isMobilePhone("en-IN")
    .withMessage("Please provide a valid Contact Number."),

  body("password")
    .notEmpty()
    .withMessage("Password is Required.")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long."),
  validateRequest,
];

module.exports = registerValidationRules;
