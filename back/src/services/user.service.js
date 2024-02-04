import Users from "../models/User.js";
import jwt from "jsonwebtoken"
import HttpError from "../utils/HttpError.util.js";
import { createHash } from "../utils/bcrypt.util.js";
import { NOT_FOUND } from "../utils/constants.util.js";

class UsersService {
  async getAllUsers() {
    const users = await Users.find({});
    return users;
  }

  async getUserById(uid) {
    const user = await Users.findById(uid);
    if (!user) {
      throw new HttpError("User not found", NOT_FOUND);
    }
    return user;
  }

  async getUserByEmail(email) {
    const user = await Users.findOne({ email: email });
    if (!user) {
      throw new HttpError("User not found", NOT_FOUND);
    }
    return user;
  }

  async createUser(userDTO) {
    const newPass = createHash(userDTO.password);
    const newUser = {
      ...userDTO,
      password: newPass,
    };
    const user = await Users.create(newUser);
    if (!user) {
      throw new HttpError();
    }
    return user;
  }

  async updateUser(uid, payload) {
    const user = await Users.findByIdAndUpdate(uid, payload);
    if (!user) {
      throw new HttpError();
    }
    return user;
  }

  async deleteUser(uid) {
    const user = await Users.deleteOne({ _id: uid });
    if (!user) {
      throw new HttpError();
    }
    return user;
  }

}

export default UsersService;
