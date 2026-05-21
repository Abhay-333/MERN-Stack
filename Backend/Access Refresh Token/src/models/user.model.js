const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      //   minlength: [6, "Password must be at least 6 characters"],
    },

    mobile: {
      type: String,
      //   required: [true, "Mobile number is required"],
      minlength: 10,
      maxlength: 10,
    },

    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

userSchema.methods.generateJWT = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
