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
    this.value = payload.price.value;
    this.term = payload.price.term;
    this.desciption = payload.description;
    this.propertyPictures = payload.property_pictures;
    this.city = payload.location.city;
    this.neighborhood = payload.location.neighborhood;
    this.address = payload.location.address;
    this.area = payload.features.area;
    this.rooms = payload.features.rooms;
    this.bathrooms = payload.features.bathrooms;
    this.bedrooms = payload.features.bedrooms;
    this.status = payload.status;
  }
}

export class CreatePropertyDTO {
  constructor(payload) {
    this.user_id = payload.userId;
    this.title = payload.title;
    this.price = {};
    this.price.value = payload.value;
    this.price.term = payload.term;
    this.description = payload.description;
    this.property_pictures = payload.propertyPictures;
    this.location = {};
    this.location.city = payload.city;
    this.location.neighborhood = payload.neighborhood;
    this.location.address = payload.address;
    this.features = {};
    this.features.area = payload.area;
    this.features.rooms = payload.rooms;
    this.features.bathrooms = payload.bathrooms;
    this.features.bedrooms = payload.bedrooms;
    this.status = payload.status;
  }
}
