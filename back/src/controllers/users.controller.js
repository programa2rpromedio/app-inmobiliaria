import { CreateUserDTO, GetUserDTO, UpdateUserDTO } from "../dtos/user.dto.js";
import UsersService from "../services/user.service.js";
import { CREATED, SUCCESS } from "../utils/constants.util.js";

const userService = new UsersService();

class UsersController {
  static async getAll(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      const usersDTO = [];
      users.forEach((user) => {
        usersDTO.push(new GetUserDTO(user));
      });
      res.status(SUCCESS).send(usersDTO);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    const { uid } = req.params;
    try {
      const user = await userService.getUserById(uid);
      const userDTO = new GetUserDTO(user);
      res.status(SUCCESS).send(userDTO);
    } catch (error) {
      next(error);
    }
  }

  static async createOne(req, res, next) {
    const payload = req.body;
    try {
      const userDTO = new CreateUserDTO(payload);
      const user = await userService.createUser(userDTO);
      res.status(CREATED).send(user);
    } catch (error) {
      next(error);
    }
  }

  static async updateOne(req, res, next) {
    const { uid } = req.params;
    const payload = req.body;
    try {
      const userDTO = new CreateUserDTO(payload);
      const user = await userService.updateUser(uid, userDTO);
      res.status(SUCCESS).send(user);
    } catch (error) {
      next(error);
    }
  }

  static async deleteOne(req, res, next) {
    const { uid } = req.params;
    try {
      const user = await userService.deleteUser(uid);
      res.status(SUCCESS).send(user);
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
