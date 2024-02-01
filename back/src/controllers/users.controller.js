import UsersService from "../services/user.service.js";

const userService = new UsersService();

class UsersController {
  static async getAll(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
