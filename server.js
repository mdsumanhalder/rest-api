require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const postRoute = require("./route/post.route");

const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("database is connected"))
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(express.json());
app.use("/api/heating-characteristic", postRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is running on port:${PORT}`);
});
