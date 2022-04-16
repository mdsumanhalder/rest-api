const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    x1: {
      type: Number,
      required: true,
    },
    y1: {
      type: Number,
      required: true,
    },
    x2: {
      type: Number,
      required: true,
    },
    y2: {
      type: Number,
      required: true,
    },
    nightEnd: {
      type: Number,
      required: true,
    },
    nightStart: {
      type: Number,
      required: true,
    },
    nightlyOscilation: {
      type: Number,
      required: true,
    },
    dailyOscilation: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
