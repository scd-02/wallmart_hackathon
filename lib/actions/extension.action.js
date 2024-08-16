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

    // console.log(data);
    // Save the data to the database
    await data.save();
    console.log("Successfully saved the data");

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    handleError(error);
  }
}

export async function getAllExtensionData() {
  try {
    await connectToDatabase();
    const allData = await ExtensionData.find({});
    return JSON.parse(JSON.stringify(allData));
  } catch (error) {
    handleError(error);
  }
}

export async function getExtensionDataById(id) {
  try {
    await connectToDatabase();
    const data = await ExtensionData.findById(id);
    console.log(JSON.parse(JSON.stringify(data)));
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    handleError(error);
  }
}
