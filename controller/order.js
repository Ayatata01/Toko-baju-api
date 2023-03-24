const Order = require("../models/order");
const Cart = require("../models/cart");

exports.get = async (req, res, next) => {
  Cart.find({ is_paid: true, id_user: req.user.id }).then((result) => {
    res.json(result);
  });
};
exports.create = (req, res, next) => {};
exports.edit = (req, res, next) => {};
exports.delete = (req, res, next) => {};
