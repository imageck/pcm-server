require("dotenv").config();
const express  = require("express"),
      mongoose = require("mongoose"),
      routes   = require("./routes"),
      app      = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path, req.protocol);
  next();
});

app.use("/api", routes);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("App listening on port", process.env.PORT);
    });
  },
  err => {
    process.exitCode = 1;
    console.error(err.message);
  });
