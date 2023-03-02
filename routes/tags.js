const express = require("express"),
      router  = express.Router();

const {
  queryTag,
} = require("../controllers/tags");

router.get("/", queryTag);

module.exports = router;
