import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-[80%] bg-white rounded-2xl shadow-lg z-20 ">
      <div className="py-3 px-5 ">
        <ul className="flex items-center justify-between text-black font-semibold m-1">
          <li>
            <a href="#/" className="hover:text-gray-500 p-5">
              Home
            </a>
          </li>
          <li>
            <a href="#/" className="hover:text-gray-500 p-5">
              About
            </a>
          </li>
          <li>
            <a href="#/">
              <img src="/logo.png" alt="Logo" className="" />
            </a>
          </li>
          <li>
            <a href="#/" className="hover:text-gray-500 p-5">
              Rooms
            </a>
          </li>
          <li>
            <a href="#/" className="hover:text-gray-500 p-5">
              Services
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
