import mongoose, { mongo } from "mongoose";
// import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    provider: {
      type: String,
      enum: ["google", "facebook"],
    },
    provider_id: { type: String },
  },
  { timestamps: true },
);

// userSchema.pre("save", function () {
//   this.password = bcrypt.hashSync(this.password, 10);
// });

export const UserModel = mongoose.model("users", userSchema);
