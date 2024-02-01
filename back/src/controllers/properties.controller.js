import PropertiesService from "../services/properties.service.js";

const propertyService = new PropertiesService();

class PropertiesController {
  static async getAll(req, res, next) {
    try {
      const properties = await propertyService.getAllProperties();
      res.status(200).send(properties);
    } catch (error) {
      next(error);
    }
  }
}

export default PropertiesController;
