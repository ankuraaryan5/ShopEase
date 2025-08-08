import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Links */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#shop" className="hover:text-gray-300">Shop</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Center - Logo */}
        <div className="text-white text-2xl font-bold">ShopEase</div>

        {/* Right - Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-1 border border-white rounded text-white hover:bg-white hover:text-black transition">
            Login
          </button>
          <button className="hidden md:block px-4 py-1 border border-white rounded text-white hover:bg-white hover:text-black transition">
            Signup
          </button>
          <button className="text-white text-xl">
            <FaShoppingCart />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white p-4 space-y-4">
          <a href="#home" className="block" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#shop" className="block" onClick={() => setIsMenuOpen(false)}>Shop</a>
          <a href="#about" className="block" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" className="block" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <button className="w-full px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition">
            Login
          </button>
          <button className="w-full px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition">
            Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
