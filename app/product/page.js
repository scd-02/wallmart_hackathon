import React from 'react';
import Footer from "@/components/custom/Footer";

import Navbar from "@/components/custom/Navbar";
import ProductDetails from "@/components/custom/ProductDetails";
import { randomProducts } from "@/demo/demoData";

export default function Home() {
    const product = {
        productName: "Apple iPhone 14 Pro",
        brand: "Apple",
        productDescription: "Latest iPhone model with advanced features.",
        productSpecification: "256 GB, Deep Purple",
        productURL: "https://www.apple.com/iphone-14-pro/",
        customizationQuery: "",
        productImages: [
          "https://example.com/path-to-your-image.jpg"
        ]
      };
  return (
    <>
      <Navbar />
      <main className="product-page">
        
        <div className="product-container">
          <ProductDetails product={product} />
        </div>
      </main>
      <Footer />
    </>
  );
}