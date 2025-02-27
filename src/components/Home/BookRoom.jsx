import React from "react";
import { FaRegCalendarAlt, FaUser, FaChild } from "react-icons/fa"; // Icons

const BookRoom = () => {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="bg-[#EEE0A9] rounded-3xl p-6 sm:p-8 w-full max-w-5xl shadow-md">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">Book a Room</h1>
          <p className="text-gray-700">Discover the perfect space for you!</p>
        </div>

        {/* Booking Options */}
        <div className="flex flex-wrap justify-center sm:justify-between items-center mt-6 gap-4">
          {/* Date Section */}
          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
            <p className="font-semibold mb-1">Date</p>
            <button className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow w-full sm:w-auto">
              <FaRegCalendarAlt />
              Check Available
            </button>
          </div>

          {/* Person Selection Section */}
          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
            <p className="font-semibold mb-1">Person</p>
            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow w-full sm:w-auto">
              <FaUser />
              <span>Adults</span>
              <select className="border-none outline-none bg-transparent">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <FaChild />
              <span>Children</span>
              <select className="border-none outline-none bg-transparent">
                <option>0</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="w-full sm:w-auto flex justify-center">
            <button className="bg-[#C89342] text-white font-bold px-6 py-3 rounded-lg shadow w-full sm:w-auto">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRoom;
