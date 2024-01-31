import mongoose from "mongoose";
import { MONGODB_URI } from "./env.config.js";

export const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB successfully connected");
  } catch (error) {
    console.log("There's been an error connecting to the database => ", error);
  }
};
