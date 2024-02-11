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
    console.log(payload);
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

  static async login(req, res, next) {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ message: 'Failed login, invalid data' })

    try {
      const user = req.body
      const { error, message, token } = await userService.login(user)
      if (!error) return res.status(500).json(message)

      return res.status(200).json(token)

    } catch (error) {
      next(error)
    }
  }

}

export default UsersController;
