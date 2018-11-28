const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//init app
const app = express();
app.use(express.json());
app.use(cors());

//init db
mongoose.connect(
  "mongodb://localhost:27017/nodeapi",
  { useNewUrlParser: true }
);
requireDir("./src/models");

//routes
app.use("/api", require("./src/routes"));

//port
app.listen(3001);
