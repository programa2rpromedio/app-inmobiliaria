import Properties from "../models/Property.js";
import HttpError from "../utils/HttpError.util.js";
import { NOT_FOUND } from "../utils/constants.util.js";

class PropertiesService {
  static async getAllProperties(options) {
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

  static async updateProperty(pid, payload) {
    const property = await Properties.findById(pid).lean();
    if (!property) {
      throw new HttpError("Property not found", NOT_FOUND);
    }
    const newProperty = {
      title: payload.title ?? property.title,
      category: payload.category ?? property.category,
      type: payload.type ?? property.type,
      price: payload.price ?? property.price,
      availability_date:
        payload.availability_date ?? property.availability_date,
      description: payload.description ?? property.description,
      status: payload.status ?? property.status,
    };
    //Location
    if (payload.location.province)
      newProperty.location.province = payload.location.province;
    if (payload.location.city)
      newProperty.location.city = payload.location.city;
    if (payload.location.address_street)
      newProperty.location.address_street = payload.location.address_street;
    if (payload.location.address_number)
      newProperty.location.address_number = payload.location.address_number;
    //Features
    if (payload.features.area)
      newProperty.features.area = payload.features.area;
    if (payload.features.rooms)
      newProperty.features.rooms = payload.features.rooms;
    if (payload.features.bedrooms)
      newProperty.features.bedrooms = payload.features.bedrooms;
    if (payload.features.bathrooms)
      newProperty.features.bathrooms = payload.features.bathrooms;
    //Services
    if (payload.services.wifi)
      newProperty.services.wifi = payload.services.wifi;
    if (payload.services.tv) newProperty.services.tv = payload.services.tv;
    if (payload.services.kitchen)
      newProperty.services.kitchen = payload.services.kitchen;
    if (payload.services.ac) newProperty.services.ac = payload.services.ac;
    if (payload.services.free_parking)
      newProperty.services.free_parking = payload.services.free_parking;
    if (payload.services.paid_parking)
      newProperty.services.paid_parking = payload.services.paid_parking;
    if (payload.services.washing_machine)
      newProperty.services.washing_machine = payload.services.washing_machine;
    if (payload.services.workspace)
      newProperty.services.workspace = payload.services.workspace;
    //Amenities
    if (payload.amenities.pool)
      newProperty.amenities.pool = payload.amenities.pool;
    if (payload.amenities.jacuzzi)
      newProperty.amenities.jacuzzi = payload.amenities.jacuzzi;
    if (payload.amenities.gym)
      newProperty.amenities.gym = payload.amenities.gym;
    if (payload.amenities.bbq)
      newProperty.amenities.bbq = payload.amenities.bbq;
    if (payload.amenities.backyard)
      newProperty.amenities.backyard = payload.amenities.backyard;
    if (payload.amenities.garden)
      newProperty.amenities.garden = payload.amenities.garden;
    if (payload.amenities.soccer_field)
      newProperty.amenities.soccer_field = payload.amenities.soccer_field;
    if (payload.amenities.terrace)
      newProperty.amenities.terrace = payload.amenities.terrace;
    //Characteristics
    if (payload.characteristics.age)
      newProperty.amenities.age = payload.amenities.age;
    if (payload.characteristics.disposition)
      newProperty.amenities.disposition = payload.amenities.disposition;
    if (payload.characteristics.orientation)
      newProperty.amenities.orientation = payload.amenities.orientation;
    if (payload.characteristics.condition)
      newProperty.amenities.condition = payload.amenities.condition;
    if (payload.characteristics.state)
      newProperty.amenities.state = payload.amenities.state;

    console.log(newProperty);
    // const propertyUpdated = await Properties.findByIdAndUpdate(pid, newProperty);
    return propertyUpdated;
  }

  static async deleteProperty(pid) {
    const property = await Properties.deleteOne({ _id: pid });
    if (!property) {
      throw new HttpError("Property Not Found", NOT_FOUND);
    }
    return property;
  }
}

export default PropertiesService;
