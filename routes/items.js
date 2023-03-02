const express = require("express"),
      router  = express.Router({ mergeParams: true });

const {
  addItem,
  getItem,
  getCollectionItems
} = require("../controllers/items");

const {
  addTags,
} = require("../controllers/tags");

router.post("/", addItem, addTags);

router.get("/:itemId", getItem);
//
router.get("/", getCollectionItems);
//
//router.patch("/:id", edit);
//
//router.delete("/:id", rm);
//
module.exports = router;
