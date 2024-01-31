import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    full_name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", userSchema);

export default Users;
