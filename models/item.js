const mongoose = require("mongoose"),
      {Schema} = mongoose;

module.exports = mongoose.model("Item", new Schema({
  collectionId: {
    type: Schema.Types.ObjectId,
    ref: "Collection",
    required: true
  },
  name: {
    type: String,
    required: true,
    maxLength: 100
  },
  comments: [{
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    body: { type: String, required: true }
  }],
  tags: {
    type: [String],
    validate: {
      validator: a => a.length <= 10
    }
  },
  likes: {
    type: [Schema.Types.ObjectId],
    get: a => a.length
  },
  num1: {
    type: Schema.Types.Decimal128,
    get: n => n ? n.toString() : ''
  },
  num2: {
    type: Schema.Types.Decimal128,
    get: n => n ? n.toString() : ''
  },
  num3: {
    type: Schema.Types.Decimal128,
    get: n => n ? n.toString() : ''
  },
  str1: { type: String, maxLength: 100 },
  str2: { type: String, maxLength: 100 },
  str3: { type: String, maxLength: 100 },
  text1: { type: String, maxLength: 255 },
  text2: { type: String, maxLength: 255 },
  text3: { type: String, maxLength: 255 },
  date1: Date,
  date2: Date,
  date3: Date,
  check1: Boolean,
  check2: Boolean,
  check3: Boolean
}, { timestamps: true, toJSON: { getters: true } }));
