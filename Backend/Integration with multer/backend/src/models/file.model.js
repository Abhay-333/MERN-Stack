const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: String,
  },
  { timestamps: true },
);

const FileModel = mongoose.model("files", fileSchema);

module.exports = FileModel;
