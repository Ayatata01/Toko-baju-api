const express = require("express");
const controller = require("../controller/product");
const { body } = require("express-validator");
const authentication = require("../helper/authentication");

const router = express.Router();

router.get("/", authentication.VerifyToken, controller.get);
router.get("/all", controller.getAll);
router.post("/", authentication.VerifyToken, controller.create);
router.put("/:id", authentication.VerifyToken, controller.edit);
router.delete("/:id", authentication.VerifyToken, controller.delete);

module.exports = router;
