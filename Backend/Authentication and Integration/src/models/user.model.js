const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: { type: String, required: [true, "email is required"] },
    password: { type: String, required: [true, "password is required"] },
    mobile: { type: String, minLength: 10, maxLength: 10 },
  },
  { timestamps: true },
);

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
