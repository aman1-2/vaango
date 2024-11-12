import React from "react";
import Logo from "../Assets/Vaango_Logo.png";
import Background from "../Assets/Rectangle_16.png";

const Banner = () => {
  return (
    <div className="relative h-[217px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
      {/* Banner Content */}
      <div className="relative flex items-center justify-between h-full px-10 z-20">
        
        {/* Left Section - Logo */}
        <div className="absolute top-[-58px] left-[80px] z-20 flex flex-col items-start space-y-4">
          <img
            src={Logo}
            alt="Logo"
            className="w-80 h-78 object-contain drop-shadow-mdd"
          />
        </div>

        {/* Center Section - Food Images */}
        <div className="flex items-center justify-center">
          <img
            src={""}
            alt="South Indian Dishes"
            className="w-48 h-auto object-contain rounded-full shadow-lg"
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


    // // <div className="relative h-[217px] w-full bg-cover bg-center bg-[url('./Assets/Rectangle_16.png')] flex justify-between items-center p-6">
    // <div className="relative h-[200px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
    //   {/* Left Section */}
    //   <div >
    //   {/* Logo Image - Floating above the background */}
    //   {/* Logo - Positioned to float over both the gradient and navbar */}
    //   <div className="absolute top-[-50px] left-[100px] z-20 flex flex-col items-start space-y-4">
    //     <img src={Logo} alt="Logo" className="w-72 h-70 object-contain drop-shadow-md" />
    //   </div>
    // </div>

    //   {/* Center Section - Placeholder for South Indian dishes */}
    //   {/* <div className="flex space-x-2 items-center">
    //     <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">🍛</div>
    //     <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">🍲</div>
    //     <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">🍚</div>
    //     <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">🥞</div>
    //   </div> */}

    //   {/* Right Section */}
    //   {/* <div className="flex flex-col justify-center items-start text-right space-y-2 bg-opacity-50 backdrop-blur-sm p-4">
    //     <p className="text-2xl font-semibold text-yellow-300">Authentic</p>
    //     <p className="text-lg font-semibold text-yellow-300">Flavors Of</p>
    //     <p className="text-4xl font-bold text-white">South India</p>
    //   </div> */}
    // </div>
  );
};

export default Banner;
