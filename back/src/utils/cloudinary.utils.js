import cloudinary from "../config/cloudinary.config.js";

export async function uploadSingleImage(file, folderName) {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: folderName,
    });
    return { url: result.secure_url, public_id: result.public_id };
  } catch (error) {
    console.error("Error al cargar la imagen:", error);
    throw error;
  }
}
