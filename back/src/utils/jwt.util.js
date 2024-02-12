import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function generateAccessToken(userId) {
  return jwt.sign({ userId }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
}
