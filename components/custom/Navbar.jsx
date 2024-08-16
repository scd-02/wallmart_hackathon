"use client";

import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-gray-900 text-white p-4 shadow-md z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-400 transition-colors duration-300">Marty-Mate</a>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 p-2 rounded-lg bg-gray-800 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
          <a href="/" className="hover:text-gray-400 transition-colors duration-300">
            Home
          </a>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="hover:text-gray-400 transition-colors duration-300 flex items-center"
            >
              Categories
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-48">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300">
                  Mobile
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300">
                  Women Clothing
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300">
                  Men Clothing
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300">
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
