import Users from "../models/User.js";
import UsersService from "../services/user.service.js";

const userService = new UsersService();

class UsersController {
  static async getAll(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
    }
  }
}

export default UsersController;
