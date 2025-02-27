import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-full min-h-screen px-6 md:px-20 py-23 flex flex-col md:flex-row items-center gap-8 justify-between">
        {/* Text Section */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-semibold text-[#C89342]">About</h1>
          <p className="text-gray-800 mt-4 leading-relaxed">
            Welcome to Wardiere Hotel, an elegant retreat designed for both
            business travelers and tourists. Established in 2012, our hotel
            offers a perfect blend of comfort, luxury, and convenience. Located
            in Maple Avenue, Greenfield City, we provide easy access to major
            business hubs, shopping centers, and popular tourist attractions.
            <br />
            <br />
            Whether you're here for work or leisure, Wardiere Hotel ensures a
            seamless stay with modern amenities, exceptional hospitality, and a
            relaxing ambiance. Explore the city's rich heritage, vibrant
            culture, and iconic landmarks while enjoying a premium stay
            experience.
          </p>
          <p>
            We are dedicated to making your visit truly memorable, comfortable,
            and hassle-free. Book your stay with us today!
          </p>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 flex justify-center md:justify-end">
          {/* Main Building Image */}
          <img
            src="https://media.istockphoto.com/id/187363337/photo/modern-hotel-building-in-summer.jpg?s=612x612&w=0&k=20&c=eRVDcadZTKs5t2K-CEeXT6DiJQ68Fnbs6u9F-0S_v8Q="
            alt="Hotel The Pride"
            className="w-full max-w-md h-auto shadow-lg"
          />

          {/* Overlapping Small Image */}
          <img
            src="https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=612x612&w=0&k=20&c=NyPC_c-wE3W_CImA4t57FpyGy6f428CYROd80jxVC4A="
            alt="Hotel Entrance"
            className="absolute bottom-[-50px] -left-8 md:left-60 lg:bottom-[-70px] lg:right-16 w-32 md:w-50 lg:w-48 h-auto object-cover shadow-lg border-4 border-white "
          />
        </div>
      </div>
      {/* Second Section - Grid Layout */}

      <div className="w-full min-h-screen py-10 bg-amber-100 flex items-center justify-center px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl">
          {/* Image Block (Always Full Height) */}
          <div className="md:row-span-6 bg-blue-300 flex items-center justify-center text-white text-xl font-bold rounded-lg shadow-md h-full">
            <img
              src="https://images.unsplash.com/photo-1690314749019-2754cc7bfac9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8Mg%3D%3D"
              alt="Hotel Sign"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Grid Items (Maintain Aspect Ratio) */}
          <div className="md:row-span-3 bg-red-300 flex items-center justify-center text-white text-xl font-bold rounded-lg shadow-md aspect-square">
            <img
              src="https://images.unsplash.com/photo-1689729738817-fb1f4256769d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjB2aWV3fGVufDB8fDB8fHwy"
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="md:row-span-3 md:col-start-2 md:row-start-4 bg-green-300 flex items-center justify-center text-white text-xl font-bold rounded-lg shadow-md aspect-square">
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHwy"
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="md:row-span-3 md:col-start-3 md:row-start-1 bg-purple-300 flex items-center justify-center text-white text-xl font-bold rounded-lg shadow-md aspect-square">
            <img
              src="https://media.istockphoto.com/id/2152035300/photo/modern-bathroom-with-beige-tiles.webp?a=1&s=612x612&w=0&k=20&c=lUqqX5AIqfBzarYT4wVKUbKyM-_koYu3msebYthNxi8="
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="md:row-span-3 md:col-start-3 md:row-start-4 bg-yellow-300 flex items-center justify-center text-white text-xl font-bold rounded-lg shadow-md aspect-square">
            <img
              src="https://images.unsplash.com/photo-1538220856186-0be0e085984d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnJlYWtmYXN0fGVufDB8fDB8fHwy"
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
