import HttpError from "../utils/HttpError.util.js"
import jwt from 'jsonwebtoken'
import { UNAUTHORIZED } from "../utils/constants.util.js"
import dotenv from 'dotenv'

dotenv.config()

export default function verifyToken(req, res, next) {
  try {
    const token = req.header('Authorization')
    if (!token) {
      throw new HttpError('Access denied', UNAUTHORIZED)
    }
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = decoded.userId
    next()
  } catch (error) {
    next(error)
  }
}