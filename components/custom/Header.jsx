import React from "react";

const Header = () => {
  return (
    <section className="bg-blue-500 text-white p-20 text-center">
      <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
      <p className="mt-4">Find the best products at the best prices</p>
      <img
        src="https://via.placeholder.com/600x400"
        alt="Hero"
        className="mx-auto mt-8"
      />
    </section>
  );
};

export default Header;
