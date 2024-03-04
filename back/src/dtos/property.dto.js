export class GetPropertyDTO {
  constructor(payload) {
    this.propertyId = payload._id;

    this.userOwner = {};
    this.userOwner.userId = payload.user_id._id;
    this.userOwner.firstName = payload.user_id.first_name;
    this.userOwner.lastName = payload.user_id.last_name;
    this.userOwner.email = payload.user_id.email;
    this.userOwner.role = payload.user_id.role;
    this.userOwner.phone = payload.user_id.phone;

    this.title = payload.title;
    this.category = payload.category;
    this.type = payload.type;
    this.availabilityDate = payload.availability_date;
    this.desciption = payload.description;
    this.propertyPictures = payload.property_pictures;

    this.value = payload.price.value;
    this.currency = payload.price.currency;

    this.province = payload.location.province;
    this.city = payload.location.city;
    this.addressStreet = payload.location.address_street;
    this.addressNumber = payload.location.address_number;
    this.lat = payload.location.lat;
    this.lon = payload.location.lon;

    this.totalArea = payload.features.total_area;
    this.coveredArea = payload.features.covered_area;
    this.rooms = payload.features.rooms;
    this.bathrooms = payload.features.bathrooms;
    this.bedrooms = payload.features.bedrooms;

    this.wifi = payload.services.wifi;
    this.tv = payload.services.tv;
    this.kitchen = payload.services.kitchen;
    this.ac = payload.services.ac;
    this.freeParking = payload.services.free_parking;
    this.paidParking = payload.services.paid_parking;
    this.washingMachine = payload.services.washing_machine;
    this.workspace = payload.services.workspace;

    this.pool = payload.amenities.pool;
    this.jacuzzi = payload.amenities.jacuzzi;
    this.gym = payload.amenities.gym;
    this.bbq = payload.amenities.bbq;
    this.backyard = payload.amenities.backyard;
    this.garden = payload.amenities.garden;
    this.soccerField = payload.amenities.terrace;
    this.terrace = payload.amenities.terrace;
    this.pets = payload.amenities.pets;

    this.age = payload.characteristics.age;
    this.disposition = payload.characteristics.disposition;
    this.orientation = payload.characteristics.orientation;
    this.condition = payload.characteristics.condition;
    this.state = payload.characteristics.state;

    this.status = payload.status;
  }
}

export class CreatePropertyDTO {
  constructor(payload) {
    this.user_id = payload.userId;

    this.title = payload.title;
    this.category = payload.category;
    this.type = payload.type;
    this.price = payload.price;
    this.availability_date = payload.availabilityDate;
    this.description = payload.description;
    this.property_pictures = payload.propertyPictures;

    this.price = {};
    this.price.value = payload.value;
    this.price.currency = payload.currency;

    this.location = {};
    this.location.province = payload.province;
    this.location.city = payload.city;
    this.location.address_street = payload.addressStreet;
    this.location.address_number = payload.addressNumber;
    this.location.lat = payload.lat;
    this.location.lon = payload.lon;

    this.features = {};
    this.features.total_area = payload.totalArea;
    this.features.covered_area = payload.coveredArea;
    this.features.rooms = payload.rooms;
    this.features.bathrooms = payload.bathrooms;
    this.features.bedrooms = payload.bedrooms;

    this.services = {};
    this.services.wifi = payload.wifi;
    this.services.tv = payload.tv;
    this.services.kitchen = payload.kitchen;
    this.services.ac = payload.ac;
    this.services.free_parking = payload.freeParking;
    this.services.paid_parking = payload.paidParking;
    this.services.washing_machine = payload.washingMachine;
    this.services.workspace = payload.workspace;

    this.amenities = {};
    this.amenities.pool = payload.pool;
    this.amenities.jacuzzi = payload.jacuzzi;
    this.amenities.gym = payload.gym;
    this.amenities.bbq = payload.bbq;
    this.amenities.backyard = payload.backyard;
    this.amenities.garden = payload.garden;
    this.amenities.soccer_field = payload.soccerField;
    this.amenities.terrace = payload.terrace;
    this.amenities.pets = payload.pets;

    this.characteristics = {};
    this.characteristics.age = payload.age;
    this.characteristics.disposition = payload.disposition;
    this.characteristics.orientation = payload.orientation;
    this.characteristics.condition = payload.condition;
    this.characteristics.state = payload.state;

    this.status = payload.status;
  }
}
