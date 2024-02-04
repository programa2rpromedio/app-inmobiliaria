export class GetUserDTO {
  constructor(payload) {
    this._id = payload._id;
    this.firstName = payload.first_name;
    this.lastName = payload.last_name;
    this.email = payload.email;
    this.profilePicture = payload.profile_picture;
    this.role = payload.role;
    this.city = payload.location.city;
    this.address = payload.location.address;
    this.phone = payload.phone;
  }
}

export class CreateUserDTO {
  constructor(payload) {
    this.first_name = payload.firstName;
    this.last_name = payload.lastName;
    this.email = payload.email;
    this.password = payload.password;
    this.profile_picture = payload.profilePicture;
    this.role = payload.role;
    this.location = {};
    this.location.city = payload.city;
    this.location.address = payload.address;
    this.phone = payload.phone;
  }
}

export class UpdateUserDTO {
  constructor(payload) {
    this.first_name = payload.firstName;
    this.last_name = payload.lastName;
    this.email = payload.email;
    this.password = payload.password;
    this.profile_picture = payload.profilePicture;
    this.role = payload.role;
    if (payload.address || payload.city) {
      this.location = {};
      this.location.address = payload.address;
      this.location.city = payload.city;
    }
    this.phone = payload.phone;
  }
}
