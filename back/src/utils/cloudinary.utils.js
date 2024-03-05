import cloudinary from "../config/cloudinary.config.js";
import HttpError from "./HttpError.util.js";
import { INTERNAL_SERVER_ERROR } from "./constants.util.js";

export async function uploadPropertyImage(file, folderName) {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: folderName,
    });
    return { url: result.secure_url, public_id: result.public_id };
  } catch (error) {
    throw new HttpError("Error al cargar imágenes", INTERNAL_SERVER_ERROR);
  }
}

export async function uploadProfileImage(file, folderName) {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: folderName,
      transformation: [
        { width: 600, height: 600, gravity: "face", crop: "thumb", quality: "auto", zoom: 0.6}
      ]
    });
    return { url: result.secure_url, public_id: result.public_id };
  } catch (error) {
    throw new HttpError("Error al cargar imagen", INTERNAL_SERVER_ERROR);
  }
}

export async function deleteImage(publicId) {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    throw new HttpError("Error al eliminar imagen", INTERNAL_SERVER_ERROR);
  }
}