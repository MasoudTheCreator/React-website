import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Clear the email state and error when the route changes
    setEmail("");
    setEmailError(false);
  }, [location]);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
      console.log("Email is valid, proceed with subscription...");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError(false); // Clear error when typing starts
    }
  };

  return (
    <footer className="bg-white text-gray-700 relative">
      {/* Subscription Section */}
      <div className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Subscribe now & get 20% off
          </h2>
          <p className="text-gray-500 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="mt-6 flex justify-center w-full">
            <div className="flex flex-col w-1/2">
              <div className="flex w-full">
                <input
                  type="email"
                  className="flex-grow px-6 py-3 border border-gray-300 rounded-l-md focus:outline-none"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange} // Handle input change
                  required
                />
                <button
                  onClick={handleSubscribe}
                  className="px-6 py-3 bg-black text-white rounded-r-md"
                >
                  SUBSCRIBE
                </button>
              </div>

              {/* Validation message */}
              {emailError && (
                <div className="mt-2 border border-gray-300 rounded-md shadow-lg p-3 flex items-start w-full bg-yellow-300">
                  <div className="bg-orange-500 text-white rounded-full p-2 mr-2"></div>
                  <p className="text-lg text-gray-700">Not a valid email</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="py-16 px-6 border-t border-gray-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img className="w-32 mb-6" src={assets.logo} alt="Company Logo" />
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">COMPANY</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-600 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">GET IN TOUCH</h4>
            <ul className="space-y-3">
              <li className="text-gray-600">+1-000-000-0000</li>
              <li className="text-gray-600">greatstackdev@gmail.com</li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-50 py-6 border-t border-gray-200 text-center">
        <p className="text-gray-500">
          &copy; 2024 greatstack.dev – All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;