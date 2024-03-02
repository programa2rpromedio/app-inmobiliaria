import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { TOKEN_SECRET } from "../config/env.config.js";

dotenv.config();

export function generateAccessToken(userId) {
  return jwt.sign({ userId }, TOKEN_SECRET, { expiresIn: "1h" });
}
