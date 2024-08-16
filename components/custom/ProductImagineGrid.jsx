'use client';

import { useState} from "react";
import { FaHeart } from "react-icons/fa"; // Import heart icon from react-icons
import Link from 'next/link'
import { useRouter } from 'next/router';

import {updateProductDataById} from '@/lib/actions/product.action';
import Product from '@/database/models/product.model'


const ProductImagineGrid = ({ title, products }) => {
 
  const product = JSON.parse(products);
    

return (
    <section className="p-8">
        <h2 className="text-2xl font-bold p-4">{title}</h2>
        <div className="flex overflow-x-auto gap-x-4 pb-4">
            {Array.from({ length: product.generatedURL.length }).map((_, index) => (
                <div
                    key={index}
                    className="bg-white p-4 rounded shadow min-w-[200px] cursor-pointer flex flex-col justify-between items-center"
                >
                    <img
                        src={product.generatedURL[index]}
                        height="200px"
                        width="200px"
                        alt={product.productName}
                        className="rounded"
                    />

                    <div className="w-full">
                        <div className="flex flex-row-reverse justify-between mt-2 items-start">
                            <button
                                className={`flex items-center text-gray-500 hover:text-red-500 transition-colors`}
                            >
                                <FaHeart className={`mr-1 justify-center`} />
                                {
                                    <span className={`font-semibold text-gray-500}`}>
                                        {product.likeCount}
                                    </span>
                                }
                            </button>
                            <Link href={`/product/${product._id}`}>
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

export default ProductImagineGrid;
