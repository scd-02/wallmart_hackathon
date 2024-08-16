'use client';

import { useState} from "react";
import { FaHeart } from "react-icons/fa"; // Import heart icon from react-icons
import Link from 'next/link'
import { useRouter } from 'next/router';

import {updateProductDataById} from '@/lib/actions/product.action';
import Product from '@/database/models/product.model'


const ProductGrid = ({ title, products }) => {
  // State to keep track of liked products
  const [likedProducts, setLikedProducts] = useState(products.map(() => false));

  // Function to handle like button click
  const handleLikeClick = async (product, index) => {
    // Check if the product is already liked
    if (!likedProducts[index]) {
      // Set the product as liked
      setLikedProducts((prevLikes) =>
        prevLikes.map((liked, i) => (i === index ? true : liked))
      );
      product.likeCount += 1;
      likedProducts[index] = true;

      if (product._id) {
        console.log(product._id, product.likeCount);
        await updateProductDataById(product._id, {likeCount: product.likeCount})
        .then((response) => {
          console.log("Successfully updated the like count", response);
        })
      } else {
        console.error("Product not found");
      }
    }
  };

  
  const sortedProducts = [...products].sort((a, b) => b.likeCount - a.likeCount);

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold p-4">{title}</h2>
      <div className="flex overflow-x-auto gap-x-4 pb-4">
        {sortedProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow min-w-[200px] cursor-pointer flex flex-col justify-between items-center "
          >
            <img
              src={product.productImageURL}
              height="200px"
              width="200px"
              alt={product.productName}
              className="rounded"
            />

            <div className="w-full">
              <h3 className="text-lg font-bold mt-2">
                {product.productName?.substring(0, 50) + "..."}
              </h3>
              <div className="flex flex-row-reverse justify-between mt-2 items-start">
                <button
                  onClick={() => handleLikeClick(product, index)}
                  className={`flex items-center text-gray-500 hover:text-red-500 transition-colors`}
                >
                  <FaHeart
                    className={`mr-1 justify-center ${
                      likedProducts[index] ? "text-red-500" : ""
                    }`}
                  />
                  {
                    <span
                      className={`font-semibold ${
                        likedProducts[index] ? "text-red-500" : "text-gray-500"
                      }`}
                    >
                      {product.likeCount}
                    </span>
                  }
                </button>
                <Link href={`/product/${sortedProducts[index]._id}`}>
                  <button className="text-blue-500 hover:underline">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
