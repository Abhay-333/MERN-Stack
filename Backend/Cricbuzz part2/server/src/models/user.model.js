import { Schema, model } from "mongoose";
import { ROLES } from "../constants/model.constant.js";
const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String },
    role: { type: String, enum: Object.values(ROLES), default: ROLES.SCORER },
    isDeleted: { type: Boolean, default: false },
    picture: { type: String, default: "https://px.pixxo.io/test/user.png" },
  },
  { timestamps: true },
);

const UserModel = model("users", userSchema);

export default UserModel;
