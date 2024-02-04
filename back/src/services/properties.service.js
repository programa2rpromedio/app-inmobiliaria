import Properties from "../models/Property.js";
import HttpError from "../utils/HttpError.util.js";

class PropertiesService {
  async getAllProperties(options) {
    const sort = {};
    const filter = {};
    Object.keys(options).forEach((opt) => {
      if (opt === "sort") {
        Object.assign(sort, { "price.value": +options.sort });
      }
      if (opt === "user") {
        Object.assign(filter, { user_id: options.user });
      }
      if (opt === "status") {
        Object.assign(filter, { status: options.status });
      }
      if (opt === "city") {
        Object.assign(filter, { "location.city": options.city });
      }
      if (opt === "neighborhood") {
        Object.assign(filter, {
          "location.neighborhood": options.neighborhood,
        });
      }
      if (opt === "rooms") {
        Object.assign(filter, {
          "features.rooms": +options.rooms,
        });
      }
      if (opt === "bedrooms") {
        Object.assign(filter, {
          "features.bedrooms": +options.bedrooms,
        });
      }
      if (opt === "bathrooms") {
        Object.assign(filter, {
          "features.bathrooms": +options.bathrooms,
        });
      }
    });
    const properties = await Properties.find(filter)
      .populate("user_id")
      .sort(sort);
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
