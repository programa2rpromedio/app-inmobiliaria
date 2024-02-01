import Properties from "../models/Property.js";

class PropertiesService {
  async getAllProperties() {
    const properties = await Properties.find({});
    return properties;
  }
}

export default PropertiesService;
