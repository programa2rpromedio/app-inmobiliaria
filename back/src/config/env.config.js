import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 8080;
export const MONGOBD_USER = process.env.MONGOBD_USER;
export const MONGODB_PASS = process.env.MONGODB_PASS;
export const MONGODB_URI = process.env.MONGODB_URI;
