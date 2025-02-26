import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {/* Slide 1 */}{" "}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524514419275-fa942a023c92?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDI%3D')",
            }}
          >
            <div class="absolute inset-0 flex flex-col justify-end items-start p-10 bg-black/30">
              <h1 class="text-white text-5xl font-bold">
                Discover Extraordinary <br /> Comfort in Hotels
              </h1>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1565031491910-e57fac031c41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdGVsfGVufDB8fDB8fHwy')",
            }}
          >
            <div class="absolute inset-0 flex flex-col justify-end items-start p-10 bg-black/30">
              <h1 class="text-white text-5xl font-bold">
                Discover Extraordinary <br /> Comfort in Hotels
              </h1>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div class="absolute inset-0 flex flex-col justify-end items-start p-10 bg-black/30">
              <h1 class="text-white text-5xl font-bold">
                Discover Extraordinary <br /> Comfort in Hotels
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
