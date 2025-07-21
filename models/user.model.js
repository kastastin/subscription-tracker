import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minLength: 2,
      maxLength: 50,
      required: [true, "User name is required"],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
      required: [true, "User email is required"],
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, "User password is required"],
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
