import Properties from "../models/Property.js";
import HttpError from "../utils/HttpError.util.js";

class PropertiesService {
  async getAllProperties() {
    const properties = await Properties.find({}).populate("user_id").lean();
    return properties;
  }

  async getPropertyById(pid) {
    const property = await Properties.findById(pid).populate("user_id").lean();
    if (!property) {
      throw new HttpError("Property Not Found", 404);
    }
    delete property.user_id.password;
    return property;
  }

  async createProperty(payload) {
    const property = await Properties.create(payload);
    if (!property) {
      throw new HttpError();
    }
    return property;
  }

  async updateProperty(pid, payload) {
    const property = await Properties.findByIdAndUpdate(pid, payload);
    if (!property) {
      throw new HttpError();
    }
    return property;
  }

  async deleteProperty(pid) {
    const property = await Properties.deleteOne({ _id: pid });
    if (!property) {
      throw new HttpError();
    }
    return property;
  }
}

export default PropertiesService;
