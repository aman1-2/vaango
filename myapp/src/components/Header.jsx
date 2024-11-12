import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Header = ({ onMenuClick, onDealsClick, onRestaurantsClick, onContactClick }) => {
  return (
    <header className="bg-green-700 text-white  w-full">
      {/* Top Row: Email, Phone, and Social Media Icons */}
      <div className="flex justify-between items-center px-10 py-2">
        <div className="flex space-x-6 items-center">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <MdEmail className="text-black" />
            <a href="mailto:info@dil-ricorp.com" className="text-sm">info@dil-ricorp.com</a>
          </div>
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <FaPhone className="text-black" />
            <a href="tel:0124-4566300" className="text-sm">0124-4566300</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

      {/* Bottom Row: Navigation Links */}
      <nav className="flex justify-center bg-white py-3 space-x-8 leading-6 text-xl font-semibold ">
        <button onClick={onMenuClick} className="text-black">Menu</button>
        <button onClick={onDealsClick} className="text-black">Deals</button>
        <button onClick={onRestaurantsClick} className="text-black">Restaurants</button>
        <button onClick={onContactClick} className="text-black">Contact Us</button>
      </nav>
    </header>
  );
};

export default Header;
