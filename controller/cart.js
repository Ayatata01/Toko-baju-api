const Cart = require("../models/cart");
const Product = require("../models/product");
const Order = require("../models/product");
const ERROR = require("../helper/error");

exports.get = async (req, res, next) => {
  ERROR.Handler(req, res, next);

  const data = await Cart.find({ id_user: req.user.id });

  if (data.length > 0) {
    res.status(200).json({ data });
  } else {
    res.status(404).json({ message: "data not found" });
  }
};

exports.create = async (req, res, next) => {
  ERROR.Handler(req, res, next);

  const data = await Product.findById(req.body.id_product);
  const cartData = await Cart.find({ id_product: req.body.id_product });

  const DATA = new Cart({
    id_user: req.user.id,
    id_product: req.body.id_product,
    is_paid: req.body.is_paid,
    jumlah: parseInt(req.body.jumlah),
    total_harga: parseFloat(data.harga_satuan * req.body.jumlah),
  });

  if (data) {
    if (cartData.length <= 0) {
      DATA.save()
        .then((result) => {
          res.status(201).json({ result });
        })
        .catch((error) => res.json({ error }));
    } else {
      res.json({
        message: "Product is already available in cart",
      });
    }
  } else {
    res.json({
      message: "Data not found",
    });
  }
};

exports.edit = async (req, res, next) => {
  ERROR.Handler(req, res, next);

  const id_cart = req.params.id;
  const dataCart = await Cart.findById({ _id: id_cart, id_user: req.user.id });
  const data = await Product.findById(dataCart.id_product);

  Cart.findByIdAndUpdate(
    { _id: id_cart, id_user: req.user.id },
    {
      is_paid: req.body.is_paid,
      jumlah: req.body.jumlah,
      total_harga: parseFloat(data.harga_satuan * req.body.jumlah),
    },
    { new: true }
  )
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((error) => res.json({ error }));
};

exports.delete = async (req, res, next) => {
  ERROR.Handler(req, res, next);
  const id_cart = req.params.id;

  const data = await Cart.findById({
    _id: id_cart,
    id_user: req.user.id,
  });

  if (data) {
    Cart.findByIdAndRemove({
      _id: id_cart,
      id_user: req.user.id,
    }).then(() => {
      res.json({
        message: "data deleted",
      });
    });
  } else {
    res.json({
      message: "data not found",
    });
  }
};
