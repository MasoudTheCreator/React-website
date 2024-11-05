import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <>
      <div className="text-center py-5">
        <div className="flex items-center gap-2 text-3xl justify-center">
          <h1 className="text-gray-500">ABOUT</h1>
          <h1 className="text-gray-700">US</h1>
          <p className="bg-gray-700 h-0.5 w-12"></p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 ">
        <img
          className="w-full md:w-1/4"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 text-lg text-gray-800 font-normal md:w-2/4">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className="font-bold">Our Mission</p>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="text-center py-5">
      <div className="flex items-center gap-2 text-2xl justify-start py-4">
        <h1 className="text-gray-500">WHY</h1>
        <h1 className="text-gray-700">CHOOSE US</h1>
        <p className="bg-gray-700 h-0.5 w-12"></p>
      </div>
    </div>
    </>
  );
};

export default About;
