import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Model = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full border border-gray-400">
        <div className="w-full sm:w-1/2 flex items-center justify-center flex-col py-10 sm:py-0 text-[#414141]">
          <div className="flex items-center gap-2 text-left">
            <p className="bg-black h-0.5 w-8"></p>
            <h2 className="font-medium">OUR BESTSELLERS</h2>
          </div>

          <div className="text-3xl sm:py-3 lg:text-5xl prata-regular text-left">
            Latest Arrivals
          </div>

          <div className="flex items-center gap-2 text-left">
            <h2 className="font-medium">SHOP NOW</h2>
            <p className="bg-black h-0.5 w-8"></p>
          </div>
        </div>

        <img src={assets.hero_img} className="w-full sm:w-1/2" />
      </div>
    </>
  );
};

export default Model;
