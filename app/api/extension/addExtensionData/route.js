import ExtensionData from "@/database/models/extension.model";
import { connectToDatabase } from "@/database/mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectToDatabase();

    const {
      brand,
      productName,
      productDescription,
      productSpecification,
      productURL,
      productImages,
      customizationQuery,
    } = await req.json();

    console.log("over herer");
    // if (!body) {
    //   throw new Error("Request body is empty");
    // }

    const data = await ExtensionData.create({
      brand,
      productName,
      productDescription,
      productSpecification,
      productURL,
      productImages,
      customizationQuery,
    });

    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
