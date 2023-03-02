const mongoose   = require("mongoose"),
      Item       = require("../models/item");

async function addItem(req, res, next) {
  let { collectionId } = req.query;
  let newItem = Object.assign({ collectionId }, req.body);
  try {
    req.item = await Item.create(newItem);
    if (req.body.tags.length) next();
    else res.sendStatus(201);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getItem(req, res) {
  let { collectionId, itemId } = req.params;
  try {
    let item = await Item.findById(itemId).populate('collectionId').exec();
    res.status(200).json(item);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function rmItem(req, res, next) {
  let { collectionId, itemId } = req.params;
  //try {
  //  await Item.findByIdAndDelete(itemId).exec();
  //  next();
  //} catch {
  //  ;
  //}
}

async function getCollectionItems(req, res) {
  let { collectionId } = req.params;
  try {
    let items = await Item.find()
      .where('collectionId').equals(collectionId)
      .exec();
    res.status(200).json(items);
  } catch(err) {
    res.sendStatus(500);
  }
}

module.exports = {
  addItem,
  getItem,
  rmItem,
  getCollectionItems
};
