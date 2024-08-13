import { Schema, model, models } from "mongoose";

const extensionSchema = new Schema(
  {
    brand: {
      type: String,
    },
    productName: {
      type: String,
    },
    productDescription: {
      type: String,
    },
    productSpecification: {
      type: [String],
    },
    productURL: {
      type: String,
      required: true,
      unique: true,
    },
    productImages: {
      type: [String], // Assuming productImages is an array of image URLs
    },
    customizationQuery: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const ExtensionData =
  models?.ExtensionData || model("ExtensionData", extensionSchema);

export default ExtensionData;
