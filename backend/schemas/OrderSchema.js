const { Schema } = require("mongoose");

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  mode: {
    type: String,
    default: "BUY",
  },
  status: {
    type: String,
    default: "EXECUTED",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = { OrderSchema };

