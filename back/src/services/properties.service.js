import Properties from "../models/Property.js";
import HttpError from "../utils/HttpError.util.js";
import { FORBIDDEN, NOT_FOUND } from "../utils/constants.util.js";

class PropertiesService {
  static async getAllProperties(options) {
    const sort = {};
    const filter = {};
    Object.keys(options).forEach((opt) => {
      if (opt === "sort") {
        Object.assign(sort, { "price.value": +options.sort });
      }
      if (opt === "max") {
        Object.assign(filter, { "price.value": { $lte: +options.max } });
      }
      if (opt === "min") {
        Object.assign(filter, { "price.value": { $gte: +options.min } });
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

  static async getPropertyById(pid) {
    const property = await Properties.findById(pid).populate("user_id").lean();
    if (!property) {
      throw new HttpError("Property Not Found", NOT_FOUND);
    }
    delete property.user_id.password;
    return property;
  }

  static async createProperty(payload) {
    const property = await Properties.create(payload);
    if (!property) {
      throw new HttpError();
    }
    return property;
  }

  static async updateProperty(pid, user, payload) {
    const property = await Properties.findById(pid).lean();
    if (!property) {
      throw new HttpError("Property not found", NOT_FOUND);
    }
    if (JSON.stringify(user._id) !== JSON.stringify(property.user_id)) {
      throw new HttpError("Only owner can update property", FORBIDDEN);
    }
    const newProperty = property;
    //General
    if (payload.title) newProperty.title = payload.title;
    if (payload.category) newProperty.category = payload.category;
    if (payload.availability_date) newProperty.availability_date = payload.availability_date;
    if (payload.description) newProperty.description = payload.description;
    if (typeof payload.favourites !== 'undefined') newProperty.favourites = property.favourites + payload.favourites;
    if (payload.status) newProperty.status = payload.status;

    //Price
    if (payload.price) {
      const priceKeys = ["value", "currency"];
      for (const key of priceKeys) {
        if (payload.price[key] !== undefined) {
          newProperty.price = newProperty.price || {};
          newProperty.price[key] = payload.price[key];
        }
      }
    }

    //Location
    if (payload.location) {
      const locationKeys = ["province", "city", "address_street", "address_number", "lat", "lon"];
      for (const key of locationKeys) {
        if (payload.location[key] !== undefined) {
          newProperty.location = newProperty.location || {};
          newProperty.location[key] = payload.location[key];
        }
      }
    }

    //Features
    if (payload.features) {
      const featuresKeys = ["total_area", "covered_area", "rooms", "bedrooms", "bathrooms"];
      for (const key of featuresKeys) {
        if (payload.features[key] !== undefined) {
          newProperty.features = newProperty.features || {};
          newProperty.features[key] = payload.features[key];
        }
      }
    }

    //Services
    if (payload.services) {
      const servicesKeys = ["wifi", "tv", "kitchen", "ac", "free_parking", "paid_parking", "washing_machine", "workspace"];
      for (const key of servicesKeys) {
        if (payload.services[key] !== undefined) {
          newProperty.services = newProperty.services || {};
          newProperty.services[key] = payload.services[key];
        }
      }
    }

    //Amenities
    if (payload.amenities) {
      const amenitiesKeys = ["pool", "jacuzzi", "gym", "bbq", "backyard", "garden", "soccer_field", "terrace", "pets"];
      for (const key of amenitiesKeys) {
        if (payload.amenities[key] !== undefined) {
          newProperty.amenities = newProperty.amenities || {};
          newProperty.amenities[key] = payload.amenities[key];
        }
      }
    }

    //Characteristics
    if (payload.characteristics) {
      const characteristicKeys = ["age", "disposition", "orientation", "condition", "state"];
      for (const key of characteristicKeys) {
        if (payload.characteristics[key] !== undefined) {
          newProperty.characteristics = newProperty.characteristics || {};
          newProperty.characteristics[key] = payload.characteristics[key];
        }
      }
    } 

    const updatedProperty = await Properties.findByIdAndUpdate(pid, { $set: newProperty }, { new: true });
    return updatedProperty;
  }

  static async deleteProperty(pid, user) {
    const property = await Properties.findById(pid).lean();
    if (!property) {
      throw new HttpError("Property Not Found", NOT_FOUND);
    }
    if (JSON.stringify(user._id) !== JSON.stringify(property.user_id)) {
      throw new HttpError("Only owner can delete property", FORBIDDEN);
    }
    const deletedProperty = await Properties.deleteOne({ _id: pid });
    return deletedProperty;
  }
}

export default PropertiesService;
