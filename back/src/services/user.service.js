import Users from "../models/User.js";
import jwt from "jsonwebtoken"

class UsersService {
  static async getAllUsers() {
    const users = await Users.find({});
    return users;
  }

  static async createUser({ user }) {
    try {
      // hashed password
      const newUser = new Users({ ...user, password: hashedPassword })
      await newUser.save()
      return { error: false, message: 'User register successfully' }

    } catch (error) {
      return { error: true, message: 'Registration failed' }
    }
  }

  static async login({ username, password }) {

    try {
      const user = await Users.findOne({ username })
      if (!user) return { error: true, message: 'Autentication failed' }
      // des-hashed password

      const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY', {
        expiresIn: '2h'
      })
      return { error: false, token }
    } catch (error) {
      return { error: true, message: 'Login failed' }
    }
  }
}

export default UsersService;
