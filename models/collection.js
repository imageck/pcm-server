const mongoose = require("mongoose");
module.exports = mongoose.model("Collection", new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 100
  },
  //author: {
  //  type: String,
  //  required: true
  //},
  desc: {
    type: String,
    trim: true,
    maxLength: 255
  },
  cat: {
    type: String,
    enum: [
        "Autographs", "Books", "Bottles", "Cards", "Clocks", "Coins",
        "Comics", "Fantasy", "Games", "Pens", "Stamps", "Toys"
    ],
    required: true
  },
  img: {
    type: String
  },
  itemFields: {}
}, { timestamps: true }));
