import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { required: true, type: String },
    url: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const LinkModel = mongoose.model("Link", linkSchema);

export default LinkModel;
