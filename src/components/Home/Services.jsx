import { MdOutlineLiveTv } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiVacuumCleaner } from "react-icons/gi";
import { GiBathtub } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

const Services = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-cente px-4 py-23">
      <h2 className="text-3xl font-bold text-center mb-8">Services</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Service 1 */}
        <div className="text-sm leading-6">
          <figure className="relative flex flex-col-reverse bg-[#F0E4B4] rounded-lg p-6 ">
            <figcaption className="flex items-center space-x-7">
              <IoIosWifi size={40} />
              <div className="flex-auto">
                <div className="text-base bg-[#F0E4B4] font-semibold">
                  Free Wifi
                </div>
                <div className="mt-0.5 bg-[#F0E4B4] leading-none">
                  Stay connected with free WiFi while you relax.
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        {/* Service 2 */}
        <div className="text-sm leading-6">
          <figure className="relative flex flex-col-reverse bg-[#F0E4B4] rounded-lg p-6 ">
            <figcaption className="flex items-center space-x-7">
              <MdOutlineLiveTv size={40} />
              <div className="flex-auto">
                <div className="text-base bg-[#F0E4B4] font-semibold">
                  Cable TV
                </div>
                <div className="mt-0.5 bg-[#F0E4B4] leading-none">
                  You can enjoy shows as per you required.
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="text-sm leading-6">
          <figure className="relative flex flex-col-reverse bg-[#F0E4B4] rounded-lg p-6 ">
            <figcaption className="flex items-center space-x-7">
              <IoFastFoodOutline size={40} />
              <div className="flex-auto">
                <div className="text-base bg-[#F0E4B4] font-semibold">
                  Room Service
                </div>
                <div className="mt-0.5 bg-[#F0E4B4] leading-none">
                  A hotel service delivering food and drinks to guests' rooms.
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        {/* Service 4 */}
        <div className="text-sm leading-6">
          <figure className="relative flex flex-col-reverse bg-[#F0E4B4] rounded-lg p-6 ">
            <figcaption className="flex items-center space-x-7">
              <GiVacuumCleaner size={40} />
              <div className="flex-auto">
                <div className="text-base bg-[#F0E4B4] font-semibold">
                  Daily Cleaning
                </div>
                <div className="mt-0.5 bg-[#F0E4B4] leading-none">
                  The housekeeping team ensures daily cleaning.
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        {/* Service 5 */}
        <div className="text-sm leading-6">
          <figure className="relative flex flex-col-reverse bg-[#F0E4B4] rounded-lg p-6 ">
            <figcaption className="flex items-center space-x-7">
              <GiBathtub size={40} />
              <div className="flex-auto">
                <div className="text-base bg-[#F0E4B4] font-semibold">
                  Bathroom
                </div>
                <div className="mt-0.5 bg-[#F0E4B4] leading-none">
                  We have large bathroom with shower.
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        {/* Service 6 */}
        <div className="text-sm leading-6">
          <figure className="relative flex flex-col-reverse bg-[#F0E4B4] rounded-lg p-6 ">
            <figcaption className="flex items-center space-x-7">
              <CiParking1 size={45} />
              <div className="flex-auto">
                <div className="text-base bg-[#F0E4B4] font-semibold">
                  Free Parking
                </div>
                <div className="mt-0.5 bg-[#F0E4B4] leading-none">
                  Hassle-Free Complimentary Parking for Your Convenience.
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Services;
