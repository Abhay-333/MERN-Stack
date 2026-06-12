import { Schema, model } from "mongoose";

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
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(ROLES), default: ROLES.SCORER },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const UserModel = model("users", userSchema);

export default UserModel;
