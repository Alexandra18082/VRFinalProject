import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount, wishlistCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="h-[50px] flex items-center justify-between px-3 md:px-6 bg-blue-100 text-black shadow-md relative z-10">
      {/* Logo */}
      <h2 className="text-sm md:text-base">
        <Link to="/" className="hover:text-blue-500 transition font-bold">
          VOIDSHIFT
        </Link>
      </h2>

      {/* Navigation Links for Desktop */}
      <ul className="hidden md:flex space-x-4">
        <li className="relative">
          <Link
            to="/cart"
            className="bg-blue-100 px-3 py-1 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300 hover:scale-105 transform font-medium text-black"
          >
            CART
          </Link>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </li>
        <li>
          <Link
            to="/"
            className="bg-blue-100 px-3 py-1 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300 hover:scale-105 transform font-medium text-black"
          >
            Home
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/wish-list"
            className="bg-blue-100 px-3 py-1 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300 hover:scale-105 transform font-medium text-black"
          >
            Wish List
          </Link>
          {wishlistCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </li>
        <li>
          <Link
            to="/faq"
            className="bg-blue-100 px-3 py-1 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300 hover:scale-105 transform font-medium text-black"
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="bg-blue-100 px-3 py-1 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300 hover:scale-105 transform font-medium text-black"
          >
            About Us
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-lg hover:text-blue-500 transition transform hover:scale-110"
        onClick={toggleMobileMenu}
      >
        ☰
      </button>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-[50px] left-0 w-full bg-blue-100 shadow-md md:hidden flex flex-col items-center space-y-3 py-4 z-20">
          <li>
            <Link
              to="/cart"
              className="bg-blue-100 px-3 py-1 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300 hover:scale-105 transform font-medium text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CART
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="bg-blue-100 px-3 py-1 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300 hover:scale-105 transform font-medium text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/wish-list"
              className="bg-blue-100 px-3 py-1 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300 hover:scale-105 transform font-medium text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Wish List
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="bg-blue-100 px-3 py-1 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300 hover:scale-105 transform font-medium text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="bg-blue-100 px-3 py-1 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300 hover:scale-105 transform font-medium text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
