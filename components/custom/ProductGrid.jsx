"use client";

import { useState } from "react";
import { FaHeart } from "react-icons/fa"; // Import heart icon from react-icons

const ProductGrid = ({ title, products }) => {
  // State to keep track of liked products
  const [likedProducts, setLikedProducts] = useState(
    products.map(() => false) // Initialize with false for each product
  );

  // Function to handle like button click
  const handleLikeClick = (index) => {
    // Check if the product is already liked
    if (!likedProducts[index]) {
      // Set the product as liked
      setLikedProducts((prevLikes) =>
        prevLikes.map((liked, i) => (i === index ? true : liked))
      );
    }
  };

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow min-w-[200px] cursor-pointer"
          >
            <img src={product.image} alt={product.name} className="w-full rounded" />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <div className="flex justify-between mt-2 items-center">
              <button
                onClick={() => handleLikeClick(index)}
                className={`flex items-center ${
                  likedProducts[index] ? "text-red-500" : "text-gray-500"
                } hover:text-red-700 transition-colors`}
              >
                <FaHeart
                  className={`mr-1 ${
                    likedProducts[index] ? "text-red-500" : "border-2 border-gray-500"
                  }`}
                />
                {likedProducts[index] && <span>1</span>}
              </button>
              <button
                className="text-blue-500 hover:underline"
              >
                More Suggestions
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
