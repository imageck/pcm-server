const mongoose = require("mongoose"),
      Tag      = require("../models/tag");

async function addTags(req, res) {
  let tags = req.item._doc.tags.map(tag => {
    return { label: tag, item: req.item._doc._id }
  });
  try {
    let result = await Tag.insertMany(tags);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function queryTag(req, res) {
  try {
    let tags = await Tag.aggregate()
      .search({
        regex: {
          query: `.*${req.query.q}.*`,
          path: "label"
        },
        returnStoredSource: true
      })
      .sortByCount("label")
      .exec();
    res.status(200).json(tags);
  } catch(err) {
    res.sendStatus(400);
  }
}

module.exports = {
  addTags,
  queryTag,
};
