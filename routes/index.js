const express     = require("express"),
      router      = express.Router(),
      collections = require("./collections"),
      items       = require("./items"),
      tags        = require("./tags");
      //comments    = require("./comments");

router.use("/collections", collections);
router.use("/items", items);
router.use("/tags", tags);
//router.use("comments", comments);

module.exports = router;
