require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postRoute = require("./route/post.route");
const MONGODB_URI =
  "mongodb+srv://suman:3215093su@neomonitor-api.ksr8h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("database is connected"))
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(express.json());
app.use("/api/heating-characteristic", postRoute);
app.get("/", async (req, res) => {
  try {
    res.status(200).json("Hello NeoMonitor");
  } catch (error) {
    res.status(500).json(error);
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is running on port:${PORT}`);
});
