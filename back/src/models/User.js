import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile_picture: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "tenant", "owner"],
      default: "tenant",
    },
    location: {
      city: {
        type: String,
      },
      address: {
        type: String,
      },
    },
    phone: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", userSchema);

export default Users;
