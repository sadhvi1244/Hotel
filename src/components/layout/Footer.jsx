import logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-100 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start md:flex-row md:justify-between text-center md:text-left p-10">
        {/* Logo & Description */}
        <div className="md:w-2/5 flex flex-col items-center md:items-start">
          <img src={logo} alt="Hotel Logo" className="w-24 mb-4" />
          <p className="text-sm leading-6">
            Welcome to Wardiere Hotel, an elegant retreat designed for both
            business travelers and tourists. Established in 2012, our hotel
            offers a perfect blend of comfort, luxury, and convenience. Located
            in Maple Avenue, Greenfield City, we provide easy access to major
            business hubs, shopping centers, and popular tourist attractions.
          </p>
        </div>

        {/* Links */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-gold font-semibold mb-2">Links</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/rooms" className="hover:text-gray-400">
                Rooms
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="/book" className="hover:text-gray-400">
                Book
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-gold font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">
            Maple Avenue, Greenfield City <br /> Newyork{" "}
          </p>
          <p className="text-sm mt-2">reservationhotelthepride@gmail.com</p>
          <p className="text-sm mt-2">+91 xxx-xxx-xxxx</p>
          <p className="text-sm">+91 xxx-xxx-xxxx</p>
        </div>

        {/* Follow Us */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-gold font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={40} />
            </a>
            <a
              href="https://wa.me/+919602679997"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={40} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
        © 2025 Hotel The Wardiere. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
