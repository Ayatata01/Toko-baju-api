const Product = require("../models/product");
const ERROR = require("../helper/error");
const path = require("path");
const fs = require("fs");

exports.get = async (req, res, next) => {
  ERROR.Handler(req, res, next);

  const data = await Product.find({ id_user: req.user.id });
  if (data) {
    res.status(200).json({
      data,
    });
  } else {
    res.status(404).json({
      message: "product not found",
    });
  }
};

exports.getAll = async (req, res, next) => {
  ERROR.Handler(req, res, next);

  let totalItems = await Product.find().countDocuments();
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || totalItems;

  const data = await Product.find()
    .skip((parseInt(currentPage) - 1) * parseInt(perPage))
    .limit(parseInt(perPage));

  if (data) {
    res.status(200).json({
      message: "Get Data Success",
      data: data,
      total_data: totalItems,
      current_page: parseInt(currentPage),
      per_page: parseInt(perPage),
    });
  } else {
    res.status(404).json({
      message: "product not found",
    });
  }
};

exports.create = (req, res, next) => {
  ERROR.Handler(req, res, next);

  if (!req.file) {
    res.status(422).json({
      message: "Image is required",
    });
  }

  const DATA = new Product({
    id_user: req.user.id,
    nama_produk: req.body.nama_produk,
    deskripsi: req.body.deskripsi,
    jumlah: req.body.jumlah,
    foto: req.file.path,
    harga_satuan: req.body.harga_satuan,
  });

  DATA.save()
    .then((result) => {
      res.status(201).json({
        result: result,
      });
    })
    .catch((error) => res.json({ error }));
};

exports.edit = async (req, res, next) => {
  ERROR.Handler(req, res, next);
  const id_product = req.params.id;

  if (!req.file) {
    res.status(422).json({
      message: "Image is required",
    });
  }

  const DATA = {
    nama_produk: req.body.nama_produk,
    deskripsi: req.body.deskripsi,
    jumlah: req.body.jumlah,
    foto: req.file.path,
    harga_satuan: req.body.harga_satuan,
  };

  Product.findByIdAndUpdate({ _id: id_product, id_user: req.user.id }, DATA, {
    new: true,
  })
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((error) => res.json({ error }));
};
exports.delete = async (req, res, next) => {
  ERROR.Handler(req, res, next);

  const id_product = req.params.id;

  const data = await Product.findById({
    _id: id_product,
    id_user: req.user.id,
  });

  if (data) {
    Product.findByIdAndRemove({
      _id: id_product,
      id_user: req.user.id,
    }).then(() => {
      removeImage(data.foto);
      res.json({
        message: "data deleted",
      });
    });
  } else {
    res.json({
      message: "there is no such product",
    });
  }
};

const removeImage = (Filepath) => {
  Filepath = path.join(__dirname, "../..", Filepath);
  fs.unlink(Filepath, (err) => console.log("err :", err));
};
