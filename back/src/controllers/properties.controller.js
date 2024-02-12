import { CreatePropertyDTO, GetPropertyDTO } from "../dtos/property.dto.js";
import PropertiesService from "../services/properties.service.js";

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
    try {
      const propertyDTO = new CreatePropertyDTO(payload);
      const property = await PropertiesService.createProperty(propertyDTO);
      res.status(201).send(property);
    } catch (error) {
      next(error);
    }
  }

  static async updateOne(req, res, next) {
    const { pid } = req.params;
    const payload = req.body;
    try {
      const propertyDTO = new CreatePropertyDTO(payload);
      const property = await PropertiesService.updateProperty(pid, propertyDTO);
      res.status(200).send(property);
    } catch (error) {
      next(error);
    }
  }

  static async deleteOne(req, res, next) {
    const { pid } = req.params;
    try {
      const property = await PropertiesService.deleteProperty(pid);
      res.status(200).send(property);
    } catch (error) {
      next(error);
    }
  }
}

export default PropertiesController;
