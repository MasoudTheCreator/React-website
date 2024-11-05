import React from "react";
import Model from "../components/model";
import LatestCollections from "../components/latestCollections";
import Card from "../components/card";
import BestSeller from "../components/bestSeller";
import { assets } from "../assets/frontend_assets/assets";

const Home = () => {
  return (
    <div>
      <Model />
      <LatestCollections />
      <BestSeller />
      <div className="flex flex-col md:flex-row justify-between py-10 md:py-20">
        <div className="flex flex-col items-center justify-center text-center flex-1 mb-6 md:mb-0">
          <img
            className="w-12 mb-2"
            src={assets.exchange_icon}
            alt="Exchange Icon"
          />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center flex-1 mb-6 md:mb-0">
          <img
            className="w-12 mb-2"
            src={assets.quality_icon}
            alt="Quality Icon"
          />
          <p className="font-semibold">7 Days Return Policy</p>
          <p className="text-gray-400">We provide 7 days free return policy</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center flex-1">
          <img
            className="w-12 mb-2"
            src={assets.support_img}
            alt="Support Icon"
          />
          <p className="font-semibold">Best Customer Support</p>
          <p className="text-gray-400">We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
