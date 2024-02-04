import mongoose from "mongoose";
import dotenv from 'dotenv'
import { MONGODB_URI } from "./env.config.js";

dotenv.config()

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB successfully connected");
  } catch (error) {
    console.log("There's been an error connecting to the database => ", error);
  }
};
