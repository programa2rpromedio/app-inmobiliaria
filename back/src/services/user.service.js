import Users from "../models/User.js";

class UsersService {
  async getAllUsers() {
    const users = await Users.find({});
    return users;
  }
}

export default UsersService;
