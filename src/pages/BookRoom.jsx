import React from "react";
import { FaRegCalendarAlt, FaUser, FaChild } from "react-icons/fa"; // Icons

const BookRoom = () => {
  return (
    <div className="w-full flex justify-center py-10 ">
      <div className="bg-[#EEE0A9] rounded-3xl p-8 w-[80%] max-w-10xl shadow-md">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">Book a Room</h1>
          <p className="text-gray-700">Discover the perfect space for you!</p>
        </div>

        {/* Booking Options */}
        <div className="flex justify-between items-center mt-6 gap-1">
          {/* Date Section */}
          <div>
            <p className="font-semibold mb-1">Date</p>
            <button className="flex items-center gap-2 bg-white p-3 rounded-lg shadow">
              <FaRegCalendarAlt />
              Check Available
            </button>
          </div>

          {/* Person Section */}
          <div>
            <p className="font-semibold mb-1">Person</p>
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow">
              <FaUser />
              <span>Adults</span>
              <select className="border-none outline-none">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <FaChild />
              <span>Children</span>
              <select className="border-none outline-none">
                <option>0</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </div>

          {/* Book Now Button */}
          <button className="bg-[#C89342] text-white font-bold px-6 py-3 rounded-lg shadow">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookRoom;
