import Properties from "../models/Property.js";
import HttpError from "../utils/HttpError.util.js";
import { NOT_FOUND } from "../utils/constants.util.js";

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
      throw new HttpError("Property Not Found", NOT_FOUND);
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
    const property = await Properties.findById(pid).lean();
    if (!property) {
      throw new HttpError("Property not found", NOT_FOUND);
    }
    property.title = payload.title ?? property.title;
    property.description = payload.description ?? property.description;
    property.status = payload.status ?? property.status;
    if (payload.price.value) {
      property.price.value = payload.price.value;
    }
    if (payload.price.term) {
      property.price.term = payload.price.term;
    }
    if (payload.location.city) {
      property.location.city = payload.location.city;
    }
    if (payload.location.neighborhood) {
      property.location.neighborhood = payload.location.neighborhood;
    }
    if (payload.location.address) {
      property.location.address = payload.location.address;
    }
    if (payload.features.area) {
      property.features.area = payload.features.area;
    }
    if (payload.features.rooms) {
      property.features.rooms = payload.features.rooms;
    }
    if (payload.features.bedrooms) {
      property.features.bedrooms = payload.features.bedrooms;
    }
    if (payload.features.bathrooms) {
      property.features.bathrooms = payload.features.bathrooms;
    }
    const propertyUpdated = await Properties.findByIdAndUpdate(pid, property);
    return propertyUpdated;
  }

  async deleteProperty(pid) {
    const property = await Properties.deleteOne({ _id: pid });
    if (!property) {
      throw new HttpError("Property Not Found", NOT_FOUND);
    }
    return property;
  }
}

export default PropertiesService;
