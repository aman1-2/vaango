import React from "react";
import Logo from "../Assets/Vaango_Logo.png";
import Background from "../Assets/Rectangle_16.png";
import FoodPhoto from "../Assets/pic-removebg-preview.png";

const Banner = () => {
  return (
    <div
      className="relative h-[300px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Banner Content */}
      <div className="relative flex items-center justify-between h-full px-10 z-20">
        
        {/* Left Section - Logo */}
        <div className="absolute top-[-70px] left-[30px] z-20 items-start space-y-4">
          <img
            src={Logo}
            alt="Logo"
            className="w-90 h-80 object-contain drop-shadow-md"
          />
        </div>

        {/* Center Section - Food Images */}
        <div className="flex flex-1 items-center justify-center">
          <img
            src={FoodPhoto}
            alt="South Indian Dishes"
            className="w-80 h-auto object-contain rounded-full shadow-lg"
          />
        </div>

        {/* Right Section - Authentic Text */}
        <div className="text-right text-white space-y-2">
          <p className="text-3xl font-bold text-yellow-300 leading-10">Authentic</p>
          <p className="text-xl font-semibold text-yellow-300">Flavors Of</p>
          <p className="text-4xl font-bold text-white">South India</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
