const mongoose = require("mongoose"),
      Comment  = require("../models/item");

async function addComment(req, res) {
  let { itemId, commentBody } = req.params;
  try {
    let comment = await Comment.create(commentBody);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  addComment
};
