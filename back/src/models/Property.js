import mongoose from "mongoose";

const propertySchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      value: {
        type: Number,
        required: true,
      },
      term: {
        type: String,
        enum: ["day", "week", "month"],
        required: true,
        default: "month",
      },
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      address: {
        type: String,
      },
    },
    features: {
      area: {
        type: Number,
      },
      bathrooms: {
        type: Number,
      },
      rooms: {
        type: Number,
      },
      bedrooms: {
        type: Number,
      },
    },
    status: {
      type: String,
      enum: ["active", "rented", "paused"],
    },
  },
  {
    timestamps: true,
  }
);

const Properties = mongoose.model("properties", propertySchema);

export default Properties;
