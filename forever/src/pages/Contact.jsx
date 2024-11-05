import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <>
      <div className="text-center py-5">
        <div className="flex items-center gap-2 text-3xl justify-center">
          <h1 className="text-gray-500">CONTACT</h1>
          <h1 className="text-gray-700">US</h1>
          <p className="bg-gray-700 h-0.5 w-12"></p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-center justify-center  p-10 bg-white">
        {/* Left Side - Image */}
        <div className="md:w-1/4">
          <img
            src={assets.contact_img}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10 gap-3">
          <h2 className="text-2xl font-semibold mb-4">Our Store</h2>
          <p className="text-gray-600">
            54709 Willms Station
            <br />
            Suite 350, Washington, USA
          </p>
          <p className="mt-2 text-gray-600">Tel: (415) 555-0132</p>
          <p className="text-gray-600">Email: admin@forever.com</p>

          <h3 className="text-lg font-semibold mt-8">Careers at Forever</h3>
          <p className="text-gray-600 mb-4">
            Learn more about our teams and job openings.
          </p>

          <button className="px-6 py-2 text-black border border-black py-3 hover:bg-gray-200">
            Explore Jobs
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
