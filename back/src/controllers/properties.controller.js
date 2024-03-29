import { CreatePropertyDTO, GetPropertyDTO } from "../dtos/property.dto.js";
import MailService from "../services/mail.service.js";
import PropertiesService from "../services/properties.service.js";
import UsersService from "../services/user.service.js";
import { uploadPropertyImage } from "../utils/cloudinary.utils.js";

class PropertiesController {
  static async getAll(req, res, next) {
    const options = req.query;
    try {
      const properties = await PropertiesService.getAllProperties(options);
      const propertiesDTO = [];
      properties.forEach((property) => {
        propertiesDTO.push(new GetPropertyDTO(property));
      });
      res.status(200).send(propertiesDTO);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    const { pid } = req.params;
    try {
      const property = await PropertiesService.getPropertyById(pid);
      const propertyDTO = new GetPropertyDTO(property);
      res.status(200).send(propertyDTO);
    } catch (error) {
      next(error);
    }
  }

  static async createOne(req, res, next) {
    const payload = req.body;
    const { userId } = req
    payload.userId = userId
    try {
      const user = await UsersService.getUserById(userId)
      if (req.files?.length > 0) {
        payload.propertyPictures = [];
        const folderName = `inmobiliaria/propiedades/${userId}`;
        const promises = req.files.map((file) =>
        uploadPropertyImage(file, folderName)
        );
        const uploadedUrls = await Promise.all(promises);
        for (let i = 0; i < uploadedUrls.length; i++) {
          const imageObject = {
            url: uploadedUrls[i].url,
            public_id: uploadedUrls[i].public_id,
          };
          payload.propertyPictures.push(imageObject);
        }
      }
      const createPropertyDTO = new CreatePropertyDTO(payload);
      const property = await PropertiesService.createProperty(createPropertyDTO);
      const getPropertyDTO = new GetPropertyDTO(property)
      await MailService.newProperty(property, user)
      res.status(201).send(getPropertyDTO);
    } catch (error) {
      next(error);
    }
  }

  static async updateOne(req, res, next) {
    const { pid } = req.params;
    const { userId } = req
    const payload = req.body;
    try {
      const createPropertyDTO = new CreatePropertyDTO(payload);
      const user = await UsersService.getUserById(userId)
      const property = await PropertiesService.updateProperty(pid, user, createPropertyDTO);
      const getPropertyDTO = new GetPropertyDTO(property)
      res.status(200).send(getPropertyDTO);
    } catch (error) {
      next(error);
    }
  }

  static async deleteOne(req, res, next) {
    const { pid } = req.params;
    const { userId } = req
    try {
      const user = await UsersService.getUserById(userId)
      const property = await PropertiesService.deleteProperty(pid, user);
      res.status(200).send(property);
    } catch (error) {
      next(error);
    }
  }
}

export default PropertiesController;
