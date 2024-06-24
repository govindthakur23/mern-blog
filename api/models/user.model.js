import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      password: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;    