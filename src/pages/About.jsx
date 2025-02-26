import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-full min-h-screen px-6 md:px-20 py-5 flex flex-col md:flex-row items-center gap-8 justify-between">
        {/* Text Section */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-semibold text-[#C89342]">About</h1>
          <p className="text-gray-800 mt-4 leading-relaxed">
            Hotel The Pride is an elegant property built in 2012, designed to
            cater to business travelers and tourists with contemporary comforts.
            Located in Rajeev Gandhi Nagar, the heart of Kota’s coaching hub,
            the hotel offers easy access to renowned educational institutes like
            Allen, Bansal Classes , Resonance, and more. Kota, known for its
            rich heritage, industrial significance, and army headquarters,
            boasts impressive forts, palaces, and temples that reflect its
            historical grandeur.
            <br />
            <br />
            At Hotel The Pride, we guarantee exceptional value with modern
            amenities, excellent hospitality, and a comfortable stay. Our
            mission is to create a memorable experience by combining
            convenience, luxury, and sophistication.
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
      {/* Second Section */}

      <div className="w-full min-h-screen py-10 bg-amber-100 flex items-center justify-center">
        <div className="grid grid-cols-3 grid-rows-6 gap-5 w-11/12 max-w-5xl grid-auto-rows-[1fr]">
          {/* Image Block */}
          <div className="row-span-6 bg-blue-300 flex items-center justify-center text-white text-xl font-bold rounded-lg shadow-md">
            <img
              src="https://media.istockphoto.com/id/487042276/photo/hotel-sign.jpg?s=612x612&w=0&k=20&c=DjEVAoFnjB2cWwX28cxSKWkxsbze7o9jgkYrhyfmq9E="
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          {/* Grid Items */}
          <div className="row-span-3 bg-red-300 flex items-center justify-center text-white text-xl font-bold rounded-lg shadow-md aspect-square">
            2
          </div>
          <div className="row-span-3 col-start-2 row-start-4 bg-green-300 flex items-center justify-center text-white text-xl font-bold rounded-lg shadow-md aspect-square">
            3
          </div>
          <div className="row-span-3 col-start-3 row-start-1 bg-purple-300 flex items-center justify-center text-white text-xl font-bold rounded-lg shadow-md aspect-square">
            4
          </div>
          <div className="row-span-3 col-start-3 row-start-4 bg-yellow-300 flex items-center justify-center text-white text-xl font-bold rounded-lg shadow-md aspect-square">
            5
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
