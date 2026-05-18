const mongoose = require("mongoose");

const listSchema = mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

const ListModel = mongoose.model("lists", listSchema);

module.exports = ListModel;
