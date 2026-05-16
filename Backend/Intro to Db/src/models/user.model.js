const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: Number,
    phone: Number,
  },
  { timestamps: true },
);

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
