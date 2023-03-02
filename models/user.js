const mongoose = require("mongoose");

module.exports = mongoose.model("Item", new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  },
}, { timestamps: true }));
