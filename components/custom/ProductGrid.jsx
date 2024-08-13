"use client";

import { addProductData } from "@/lib/actions/product.action";

const ProductGrid = ({ title, products }) => {
  const handleClick = () => {
    // for testing purpose customize as you need
    console.log("Button clicked");
    // const product = addProductData({
    //   brand: "samsung",
    //   productName: "samsung galaxy s21",
    //   productDescription: "The best android ever",
    //   productSpecification: ["6.7-inch", "Super Retina", "XDR display"],
    //   productImageURL: "https://via.placeholder.com 200",
    // });

    // alert("Product added successfully" + product);
  };

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow min-w-[200px]"
            onClick={() => handleClick()}
          >
            <img src={product.image} alt={product.name} className="w-full" />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <div className="flex justify-between mt-2">
              <button className="text-blue-500 hover:underline">Like</button>
              <button className="text-blue-500 hover:underline">
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
