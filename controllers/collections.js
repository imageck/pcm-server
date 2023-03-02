const mongoose   = require("mongoose"),
      Collection = require("../models/collection");

async function addCollection(req, res) {
  try {
    let collection = await Collection.create(req.body);
    res.status(201).json(collection);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getCollection(req, res) {
  let { collectionId: id } = req.params;
  if (!mongoose.isObjectIdOrHexString(id))
    return res.sendStatus(404);
  let collection = await Collection.findById(id).lean();
  if (!collection) return res.sendStatus(404);
  res.status(200).json(collection);
}

async function listCollections(req, res) {
  //let { l=6, p } = req.query;
  try {
    let collections = await Collection.find()
      .sort({ createdAt: -1 })
      //.skip(p * l)
      //.limit(l)
      .exec();
    res.status(200).json(collections);
  } catch(err) {
    res.sendStatus(500);
  }
}

async function editCollection(req, res) {
  let { collectionId: id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.sendStatus(404);
  let collection = await Collection.findByIdAndUpdate(id,
    { ...req.body }, { new: true }).exec();
  if (!collection) return res.sendStatus(404);
  return res.status(200).json(collection);
}

async function rmCollection(req, res) {
  let { collectionId: id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.sendStatus(404);
  let collection = await Collection.findByIdAndDelete(id).exec();
  if (!collection) return res.sendStatus(404);
  return res.status(200).json(collection);
}

module.exports = {
  addCollection,
  getCollection,
  listCollections,
  editCollection,
  rmCollection
};
