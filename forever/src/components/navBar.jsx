import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-5 bg-white">
        <a href="/" className="w-40">
          <img src={assets.logo} alt="Description of the image" />
        </a>
        <ul className="hidden sm:flex space-x-4">
          <NavLink to="/" className="flex flex-col">
            <h1>Home</h1>
            <div className="h-0.5 bg-gray-800 opacity-50 w-9 mx-auto hidden"></div>
          </NavLink>

          <NavLink to="/collection" className="flex flex-col">
            <h1>Collection</h1>
            <div className="h-0.5 bg-gray-800 opacity-50 w-9 mx-auto hidden"></div>
          </NavLink>

          <NavLink to="/about" className="flex flex-col">
            <h1>About</h1>
            <div className="h-0.5 bg-gray-800 opacity-50 w-1/2 mx-auto hidden"></div>
          </NavLink>

          <NavLink to="/contact" className="flex flex-col">
            <h1>Contact</h1>
            <div className="h-0.5 bg-gray-800 opacity-50 w-9 mx-auto hidden"></div>
          </NavLink>
        </ul>

        <div className="flex items-center gap-5">
          <div className="relative">
            <img
              src={assets.search_icon}
              className="w-5 cursor-pointer"
            />
          </div>
          <img src={assets.profile_icon} className="w-5" />
          <div className="relative">
            <img src={assets.cart_icon} className="w-5" />
            <span
              className="absolute w-4 h-4 text-white bg-black rounded-full flex items-center justify-center -right-1 -bottom-1"
              style={{ fontSize: "11px" }}
            >
              0
            </span>
          </div>
          <img
            src={assets.menu_icon}
            onClick={() => setShow(!show)}
            className="w-5 sm:hidden cursor-pointer"
          />
        </div>

        <div
          className={
            show
              ? "absolute top-16 right-0 bg-white border border-gray-200 rounded-lg w-full sm:hidden transition-all"
              : "hidden"
          }
        >
          <ul className="flex flex-col text-center p-4">
            <NavLink
              to="/"
              className="py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Home
            </NavLink>
            <NavLink
              to="/collection"
              className="py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Collection
            </NavLink>
            <NavLink
              to="/about"
              className="py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;