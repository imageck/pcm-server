const express = require("express"),
      router  = express.Router(),
      items   = require("./items");

const {
  addCollection,
  getCollection,
  listCollections,
  editCollection,
  rmCollection
} = require("../controllers/collections");

router.get("/", listCollections);

router.post("/", addCollection);

router.get("/:collectionId", getCollection);

router.patch("/:collectionId", editCollection);

router.delete("/:collectionId", rmCollection);

router.use("/:collectionId/items", items);

module.exports = router;
