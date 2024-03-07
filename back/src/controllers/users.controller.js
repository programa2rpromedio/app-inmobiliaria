import { CreateUserDTO, GetUserDTO, UpdateUserDTO } from "../dtos/user.dto.js";
import UsersService from "../services/user.service.js";
import { deleteImage, uploadProfileImage } from "../utils/cloudinary.utils.js";
import { CREATED, SUCCESS } from "../utils/constants.util.js";

class UsersController {
  static async getAll(req, res, next) {
    try {
      const users = await UsersService.getAllUsers();
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
      const user = await UsersService.getUserById(uid);
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
      const user = await UsersService.createUser(userDTO);
      res.status(CREATED).send(user);
    } catch (error) {
      next(error);
    }
  }

  static async updateOne(req, res, next) {
    const { uid } = req.params;
    const payload = req.body;
    try {
      const userDTO = new UpdateUserDTO(payload);
      const user = await UsersService.updateUser(uid, userDTO);
      res.status(SUCCESS).send(user);
    } catch (error) {
      next(error);
    }
  }

  static async updateImage(req, res, next) {
    const { uid } = req.params;
    try {
      const user = await UsersService.getUserById(uid);
      if(user.profile_picture.public_id){
        await deleteImage(user.profile_picture.public_id)
      }
      const folderName = `inmobiliaria/perfil`;
      const uploadedUrl = await uploadProfileImage(req.file, folderName)
      const imageObject = {
        url: uploadedUrl.url,
        public_id: uploadedUrl.public_id,
      };
      user.profile_picture = imageObject
      const updatedUser = await UsersService.updateProfilePicture(uid, user)
      res.status(SUCCESS).send(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  static async addFavouriteProperty(req, res, next) {
    const { uid, pid } = req.params;
    try {
      const user = await UsersService.addFavourite(uid, pid);
      res.status(SUCCESS).send(user);
    } catch (error) {
      next(error);
    }
  }

  static async deleteOne(req, res, next) {
    const { uid } = req.params;
    try {
      const user = await UsersService.deleteUser(uid);
      res.status(SUCCESS).send(user);
    } catch (error) {
      next(error);
    }
  }


}

export default UsersController;
