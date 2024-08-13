"use client";

import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-gray-800 text-white p-4 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Logo</div>
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="hover:underline"
            >
              Categories
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-gray-700 text-white mt-2 rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                  Mobile
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                  Women Clothing
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                  Men Clothing
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                  Bedsheets
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
