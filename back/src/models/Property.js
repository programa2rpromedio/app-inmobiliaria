import mongoose from "mongoose";

const propertySchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
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
    property_pictures: [
      {
        url: {
          type: String,
          trim: true,
          required: true,
        },
        public_id: {
          type: String,
          required: true,
        },
      },
    ],
    location: {
      city: {
        type: String,
        required: true,
      },
      neighborhood: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
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
