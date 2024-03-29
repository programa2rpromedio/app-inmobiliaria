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
      url: { type: String, trim: true },
      public_id: { type: String },
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
    favourites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "properties",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", userSchema);

export default Users;
