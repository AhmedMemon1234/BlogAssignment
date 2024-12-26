'use client';

import { useState } from 'react';
import { FaHome, FaInfoCircle, FaShoppingCart, FaEnvelope } from 'react-icons/fa';
import { MdMenu, MdClose } from 'react-icons/md';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold flex items-center space-x-2">
          <span>AhmedBlogs</span>
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
            <FaHome /> <span>Home</span>
          </a>
          <a href="/About" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
            <FaInfoCircle /> <span>About</span>
          </a>
          <a href="/Contact" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
            <FaEnvelope /> <span>Contact</span>
          </a>
        </nav>
        <button
          className="md:hidden focus:outline-none text-2xl text-gray-800"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            <a href="/" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition">
              <FaHome /> <span>Home</span>
            </a>
            <a href="/About" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition">
              <FaInfoCircle /> <span>About</span>
            </a>
            <a href="/Contact" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition">
              <FaEnvelope /> <span>Contact</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
