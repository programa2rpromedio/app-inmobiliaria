import mongoose from "mongoose";

const propertySchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    title: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "house",
        "apartment",
        "cabin",
        "hotel",
        "country-house",
        "camping",
      ],
    },
    type: { type: String, enum: ["permanent", "temporary"], required: true },
    price: {
      value: { type: Number, required: true },
      currency: { type: String, enum: ["ARS", "USD"], default: "ARS" },
    },
    availability_date: { type: Date, required: true, default: new Date() },
    description: { type: String, required: true },
    property_pictures: [
      {
        url: { type: String, trim: true, required: true },
        public_id: { type: String, required: true },
      },
    ],
    location: {
      province: { type: String, required: true },
      city: { type: String, required: true },
      address_street: { type: String, required: true },
      address_number: { type: String, required: true },
      lat: { type: Number },
      lon: { type: Number }
    },
    features: {
      total_area: { type: Number },
      covered_area: { type: Number },
      bathrooms: { type: Number },
      rooms: { type: Number },
      bedrooms: { type: Number },
    },
    services: {
      wifi: { type: Boolean, default: false },
      tv: { type: Boolean, default: false },
      kitchen: { type: Boolean, default: false },
      ac: { type: Boolean, default: false },
      free_parking: { type: Boolean, default: false },
      paid_parking: { type: Boolean, default: false },
      washing_machine: { type: Boolean, default: false },
      workspace: { type: Boolean, default: false },
    },
    amenities: {
      pool: { type: Boolean, default: false },
      jacuzzi: { type: Boolean, default: false },
      gym: { type: Boolean, default: false },
      bbq: { type: Boolean, default: false },
      backyard: { type: Boolean, default: false },
      garden: { type: Boolean, default: false },
      soccer_field: { type: Boolean, default: false },
      terrace: { type: Boolean, default: false },
      pets: { type: Boolean, default: false },
    },
    characteristics: {
      age: { type: String },
      disposition: { type: String },
      orientation: { type: String },
      condition: { type: String },
      state: { type: String },
    },
    favourites: { type: Number, default: 0 },
    status: { type: String, enum: ["active", "rented", "paused"] },
  },
  {
    timestamps: true,
  }
);

const Properties = mongoose.model("properties", propertySchema);

export default Properties;
