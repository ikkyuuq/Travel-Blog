import Image from "next/image";
import TravelBG from "../public/assets/travel-bg.jpg";

const Hero = () => {
  return (
    <div id="hero-container" className="relative w-full h-[30vh] md:h-[75vh]">
      <div className="absolute inset-0 -z-10 brightness-50 object-cover overflow-hidden">
        <Image src={TravelBG} alt="hero" />
      </div>
      <div className="h-full w-full flex pl-10 pt-10 md:justify-center md:items-center">
        <div className="flex flex-col w-[50vw]">
          <h1 className="text-white text-[30px] md:text-[50px] font-semibold">
            We Take Care
          </h1>
          <h1 className="text-white text-[30px] md:text-[50px] font-semibold ">
            Of Your Trip
          </h1>
          <div className="flex pt-5 md:pt-10">
            <button className="text-white bg-gradient-to-r from-transparent to-green-700 px-4 py-2 font-semibold w-36 md:w-48 text-[13px] md:text-base hover:bg-green-700 border border-white hover:border-transparent transition-all duration-300">
              EXPLORE MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
