const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    nama_produk: {
      type: String,
      required: true,
    },
    deskripsi: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
      required: true,
    },
    jumlah: {
      type: Number,
      required: true,
    },
    harga_satuan: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
