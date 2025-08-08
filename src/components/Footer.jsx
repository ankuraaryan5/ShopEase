import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Column 1 - Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ShopEase</h2>
          <p className="text-sm leading-6">
            ShopEase brings you the best products at unbeatable prices. We’re committed to quality, convenience, and customer satisfaction.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Column 3 - Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Electronics</a></li>
            <li><a href="#" className="hover:text-white">Fashion</a></li>
            <li><a href="#" className="hover:text-white">Home & Kitchen</a></li>
            <li><a href="#" className="hover:text-white">Sports</a></li>
            <li><a href="#" className="hover:text-white">Beauty</a></li>
          </ul>
        </div>

        {/* Column 4 - Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Track Order</a></li>
            <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white">Return Policy</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 5 - Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>123 Market Street, New Delhi, India</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 9876543210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <span>support@shopease.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShopEase. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
