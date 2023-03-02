const mongoose = require("mongoose");
module.exports = mongoose.model("Comment", new mongoose.Schema({
  author: String,
  item: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
  body: {
    type: String,
    required,
    maxLength: 255
  }
}));
