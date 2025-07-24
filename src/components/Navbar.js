import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-6 md:px-12 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Appy</div>

        {/* Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          {["Products", "Business Solutions", "Help Center"].map((item) => (
            <li key={item} className="flex items-center cursor-pointer hover:text-blue-600">
              {item}
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.939l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.25 8.27a.75.75 0 0 1-.02-1.06z" />
              </svg>
            </li>
          ))}
          <li className="cursor-pointer hover:text-blue-600">Pricing</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-blue-600 text-sm font-medium hover:underline">Log In</button>
          <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-sm font-medium text-gray-700">
          {["Products", "Business Solutions", "Help Center", "Pricing"].map((item) => (
            <div key={item} className="block px-2 py-2 hover:text-blue-600 border-b">
              {item}
            </div>
          ))}
          <div className="px-2 pt-2">
            <button className="w-full text-blue-600 text-left mb-2 hover:underline">Log In</button>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
