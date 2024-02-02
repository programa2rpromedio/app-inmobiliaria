import Properties from "../models/Property.js";
import HttpError from "../utils/HttpError.util.js";

class PropertiesService {
  async getAllProperties() {
    const properties = await Properties.find({});
    if (properties.length === 0) {
      throw new HttpError("no property", 404);
    }
    return properties;
  }
}

export default PropertiesService;
