const mongoose = require("mongoose");
module.exports = mongoose.model("Tag", new mongoose.Schema({
  label: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 3,
    maxLength: 35
  },
  item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true }
}));
