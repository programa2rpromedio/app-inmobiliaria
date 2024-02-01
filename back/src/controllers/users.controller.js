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

  static async createUser(req, res, next) {
    const { user } = req.body
    if (!user) return res.status(400).json({ message: 'Failed registration, invalid data' })
    try {
      const { error, message } = await userService.createUser(user)
      if (!error) return res.status(500).json(message)
      return res.status(201).json(message)

    } catch (error) {
      next(error)
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
