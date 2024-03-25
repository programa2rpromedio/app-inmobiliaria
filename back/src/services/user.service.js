import Properties from "../models/Property.js";
import Users from "../models/User.js";
import HttpError from "../utils/HttpError.util.js";
import { createHash } from "../utils/bcrypt.util.js";
import { deleteImage } from "../utils/cloudinary.utils.js";
import { BAD_REQUEST, FORBIDDEN, NOT_FOUND } from "../utils/constants.util.js";

class UsersService {
  static async getAllUsers() {
    const users = await Users.find({});
    return users;
  }

  static async getUserById(uid) {
    const user = await Users.findById(uid);
    if (!user) {
      console.log('je');
      throw new HttpError("User not found", NOT_FOUND);
    }
    return user;
  }

  static async getUserByEmail(email) {
    const user = await Users.findOne({ email: email });
    if (!user) {
      throw new HttpError("User not found", NOT_FOUND);
    }
    return user;
  }

  static async createUser(userDTO) {
    const existingUser = await Users.findOne({ email: userDTO.email }).lean()
    if(existingUser){
      throw new HttpError("Email addess already in use", BAD_REQUEST);
    }
    const newPass = createHash(userDTO.password);
    const newUser = {
      ...userDTO,
      password: newPass,
    };
    const user = await Users.create(newUser);
    if (!user) {
      throw new HttpError();
    }
    return user;
  }

  static async updateUser(uid, payload) {
    const user = await Users.findById(uid).lean();
    if (!user) {
      throw new HttpError("User not found", NOT_FOUND);
    }
    const newUser = user

    //General
    if (payload.first_name) newUser.first_name = payload.first_name;
    if (payload.last_name) newUser.last_name = payload.last_name;
    if (payload.phone) newUser.phone = payload.phone;

    //Location
    if (payload.location) {
      const locationKeys = ["city", "address"];
      for (const key of locationKeys) {
        if (payload.location[key] !== undefined) {
          newUser.location = newUser.location || {};
          newUser.location[key] = payload.location[key];
        }
      }
    }
    const userUpdated = await Users.findByIdAndUpdate(uid, user);
    return userUpdated;
  }

  static async updateProfilePicture(uid, payload) {
    const userUpdated = await Users.findByIdAndUpdate(uid, payload, {returnDocument: 'after'});
    return userUpdated;
  }

  static async toggleFavourite(uid, pid) {
    const user = await Users.findById(uid).lean();
    if (!user) {
      throw new HttpError("User not found", NOT_FOUND);
    }
    const property = await Properties.findById(pid).lean();
    if (!property) {
      throw new HttpError("Property not found", NOT_FOUND);
    }
    const stringPropertyIds = user.favourites?.map(propertyId => JSON.stringify(propertyId))

    let updatedUser
    if(stringPropertyIds.includes(JSON.stringify(pid))){
      updatedUser = await Users.findByIdAndUpdate(
        uid,
        { $pull: { favourites: pid } },
        { new: true }
      );
      return -1
    }else{
      updatedUser = await Users.findByIdAndUpdate(
        uid,
        { $push: { favourites: pid } },
        { new: true }
      )
      return 1
    }
  }

  static async deleteUser(uid) {
    const properties = await Properties.find({user_id: uid})
    for(let i = 0; i < properties.length; i++){
      if(properties[i].property_pictures && properties[i].property_pictures.length){
        for(let j = 0; j < properties[i].property_pictures.length; j++){
          await deleteImage(properties[i].property_pictures[j].public_id)
        }
      }
      await Properties.deleteOne({ _id: properties[i]._id });
    }
    const user = await Users.findById(uid);
    if (!user) {
      throw new HttpError("User not found", NOT_FOUND);
    }
    if(user.profile_picture && user.profile_picture.url){
      await deleteImage(user.profile_picture.public_id)
    }
    const deletedUser = await Users.deleteOne({ _id: uid });
    return deletedUser;
  }
}

export default UsersService;
