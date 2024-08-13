import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
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
    productImageURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

const Product = models?.Product || model("Product", ProductSchema);

export default Product;
