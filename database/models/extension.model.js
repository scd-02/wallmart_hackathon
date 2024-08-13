import { Schema, model, models } from "mongoose";

const extensionSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productSpecification: {
    type: [String],
    required: true,
  },
  productURL: {
    type: String,
    required: true,
    unique: true,
  },
  productImages: {
    type: [String], // Assuming productImages is an array of image URLs
    required: true,
  },
  customizationQuery: {
    type: String,
    required: false,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const ExtensionData = models?.ExtensionData || model("ExtensionData", extensionSchema);

export default ExtensionData;