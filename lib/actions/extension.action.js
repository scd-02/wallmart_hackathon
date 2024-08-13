"use server";

import { connectToDatabase } from "@/database/mongoose";
import { handleError } from "../utils";
import ExtensionData from "@/database/models/extension.model";

export async function addExtensionData({
  brand,
  productName,
  productDescription,
  productSpecification,
  productURL,
  productImages,
  customizationQuery,
}) {
  try {
    await connectToDatabase();

    const data = await ExtensionData.create({
      brand,
      productName,
      productDescription,
      productSpecification,
      productURL,
      productImages,
      customizationQuery,
    });

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    handleError(error);
  }
}
