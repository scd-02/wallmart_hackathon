"use server";

import { connectToDatabase } from "@/database/mongoose";
import { handleError } from "../utils";
import Product from "@/database/models/product.model";

export async function addProductData({
  brand,
  productName,
  productDescription,
  productSpecification,
  productImageURL,
}) {
  try {
    await connectToDatabase();

    const newProduct = await Product.create({
      brand,
      productName,
      productDescription,
      productSpecification,
      productImageURL,
    });

    return JSON.parse(JSON.stringify(newProduct));
  } catch (error) {
    handleError(error);
  }
}

export async function getAllProductData() {
  try {
    await connectToDatabase();
    const allProducts = await Product.find({});
    return JSON.parse(JSON.stringify(allProducts));
  } catch (error) {
    handleError(error);
  }
}

export async function getProductDataById(id) {
  try {
    await connectToDatabase();
    const product = await Product.findById(id);
    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    handleError(error);
  }
}

export async function getProductDataByURL(url) {
  try {
    await connectToDatabase();
    const product = await Product.findOne({ productImageURL: url });
    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    handleError(error);
  }
}

export async function updateProductDataById(
  id,
  {
    brand,
    productName,
    productDescription,
    productSpecification,
    productImageURL,
    likeCount,
    generatedURL
  }
) {
  try {
    await connectToDatabase();

    const existingProduct = await Product.findById(id);

    if (!existingProduct) {
      throw new Error("Product not found");
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        brand,
        productName,
        productDescription,
        productSpecification,
        productImageURL,
        likeCount,
        generatedURL
      },
      { new: true }
    );


    return JSON.parse(JSON.stringify(updatedProduct));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteProductDataById(id) {
  try {
    await connectToDatabase();

    const existingProduct = await Product.findById(id);

    if (!existingProduct) {
      throw new Error("Product not found");
    }

    await Product.findByIdAndDelete(id);

    return JSON.parse("Product deleted successfully");
  } catch (error) {
    handleError(error);
  }
}
