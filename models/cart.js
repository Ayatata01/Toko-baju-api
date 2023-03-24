const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Cart = new Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    id_product: {
      type: String,
      required: true,
    },
    is_paid: {
      type: Boolean,
      required: true,
    },
    jumlah: {
      type: Number,
      required: true,
    },
    total_harga: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", Cart);
