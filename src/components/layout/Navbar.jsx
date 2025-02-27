import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for Hamburger Menu
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] bg-white rounded-2xl shadow-lg z-20">
      <div className="py-3 px-5 flex justify-between items-center">
        {/* Logo (For Mobile & Tablet) */}
        <a href="/" className="lg:hidden">
          <img src={logo} alt="Logo" className="w-14 sm:w-16 h-auto" />
        </a>

        {/* Full Desktop Navbar (Centered) */}
        <ul className="hidden lg:flex items-center justify-between w-full max-w-5xl mx-auto text-black font-semibold gap-20">
          <li>
            <a href="/" className="hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-500">
              About
            </a>
          </li>
          {/* Centered Logo */}
          <li className="flex justify-center w-20">
            <a href="/">
              <img src={logo} alt="Logo" className="w-14 sm:w-16 h-auto" />
            </a>
          </li>
          <li>
            <a href="/rooms" className="hover:text-gray-500">
              Rooms
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-gray-500">
              Services
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white rounded-b-2xl shadow-md transition-all">
          <ul className="flex flex-col items-center py-3 space-y-3 text-black font-semibold">
            <li>
              <a
                href="/"
                className="hover:text-gray-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-gray-500"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/rooms"
                className="hover:text-gray-500"
                onClick={() => setMenuOpen(false)}
              >
                Rooms
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-gray-500"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
