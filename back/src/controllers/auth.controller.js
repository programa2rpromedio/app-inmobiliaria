import { CreateUserDTO, GetUserDTO } from "../dtos/user.dto.js";
import MailService from "../services/mail.service.js";
import UsersService from "../services/user.service.js";
import HttpError from "../utils/HttpError.util.js";
import { isValidPassword } from "../utils/bcrypt.util.js";
import { generateAccessToken } from "../utils/jwt.util.js";

class AuthController {
  static async register(req, res, next) {
    const payload = req.body;
    try {
      const userDTO = new CreateUserDTO(payload);
      const user = await UsersService.createUser(userDTO);
      await MailService.sendWelcome(user)
      res.status(201).send(user);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    const payload = req.body;
    try {
      const user = await UsersService.getUserByEmail(payload.email);
      if (!isValidPassword(user, payload.password)) {
        throw new HttpError("User or password wrong", 401);
      }
      const userDTO = new GetUserDTO(user);
      const token = generateAccessToken(userDTO._id);

      res.status(200).json([userDTO, token]);
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
