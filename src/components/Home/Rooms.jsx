import React from "react";

const Rooms = () => {
  return (
    <div className="w-full h-full py-10">
      <div className=" px-10 py-10 flex flex-col gap-3">
        <h1 className="text-5xl font-semibold text-[#C89342]">Rooms</h1>
        <div className="flex flex-row justify-between  ">
          <h2 className="text-4xl ">Stay With Us</h2>
          <button className=" text-[#C89342] text-2xl font-semibold">
            View all
          </button>
        </div>
        <p>
          Designed for a restful and hassle-free stay. Enjoy a well-appointed
          space <br /> with a warm and inviting ambiance.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-20 p-5">
        <div className="w-full sm:w-1/2 lg:w-1/3 max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <figure className="p-5">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHwy"
              alt="Shoes"
              className="w-full rounded-xl"
            />
          </figure>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Standard Room
            </h2>
            <p className="text-gray-600 mt-2">
              A cozy stay with all essential amenities, perfect for
              budget-friendly comfort.
            </p>
            <div className="mt-4">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <figure className="p-5">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHwy"
              alt="Books"
              className="w-full rounded-xl "
            />
          </figure>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Exclusive Room
            </h2>
            <p className="text-gray-600 mt-2">
              Experience luxury with premium amenities, elegant décor, and
              ultimate comfort.
            </p>
            <div className="mt-4">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
