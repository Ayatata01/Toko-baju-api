const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Order = new Schema(
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", Order);
