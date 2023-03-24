const express = require("express");
const controller = require("../controller/admin");
const { body } = require("express-validator");

const router = express.Router();

router.get(
  "/login",
  [
    body("email")
      .isEmail()
      .isLength({ min: 6 })
      .withMessage("Email is required"),
    body("password")
      .isString()
      .isLength({ min: 6 })
      .withMessage("Password is required"),
  ],
  controller.Login
);

router.post(
  "/register",
  [
    body("username")
      .isString()
      .isLength({ min: 6 })
      .withMessage("Username is required"),
    body("email")
      .isEmail()
      .isLength({ min: 6 })
      .withMessage("Email is required"),
    body("nama_toko")
      .isString()
      .isLength({ min: 6 })
      .withMessage("Email is required"),
    body("password")
      .isString()
      .isLength({ min: 6 })
      .withMessage("Password is required"),
  ],
  controller.Register
);

module.exports = router;
