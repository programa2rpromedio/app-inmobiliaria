import { CreateUserDTO, GetUserDTO } from "../dtos/user.dto.js";
import UsersService from "../services/user.service.js";
import HttpError from "../utils/HttpError.util.js";
import { isValidPassword } from "../utils/bcrypt.util.js";

const userService = new UsersService();

class AuthController {
  static async register(req, res, next) {
    const payload = req.body;
    try {
      const userDTO = new CreateUserDTO(payload);
      const user = await userService.createUser(userDTO);
      res.status(201).send(user);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    const payload = req.body;
    try {
      const user = await userService.getUserByEmail(payload.email);
      if (!isValidPassword(user, payload.password)) {
        throw new HttpError("User or password wrong", 401);
      }
      const userDTO = new GetUserDTO(user);
      res.status(200).send(userDTO);
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
