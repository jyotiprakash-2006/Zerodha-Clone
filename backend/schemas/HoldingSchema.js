const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
  name: String,
  qty: {
    type: Number,
    default: 1,
  },
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: {
    type: Boolean,
    default: false,
  },
});

module.exports = { HoldingSchema };

