import Users from "../models/User.js";
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
    const user = await Users.findById(uid).lean();
    if (!user) {
      throw new HttpError("User not found", NOT_FOUND);
    }
    user.first_name = payload.first_name ?? user.first_name;
    user.last_name = payload.last_name ?? user.last_name;
    user.first_name = payload.first_name ?? user.first_name;
    user.role = payload.role ?? user.role;
    if (payload.location.city) {
      user.location.city = payload.location.city;
    }
    if (payload.location.address) {
      user.location.address = payload.location.address;
    }
    const userUpdated = await Users.findByIdAndUpdate(uid, user);
    return userUpdated;
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
