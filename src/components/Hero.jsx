import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="text-white relative pb-[2rem] bg-black">
      <div className="padddings innerWidth flex flex-col sm:flex-row items-center justify-around gap-[2rem] w-[100%] z-0 overflow-hidden">
        {/* left side */}
        <div className="flex flex-col   gap-[3rem] p-[1.5rem]">
          <div className="relative z-[1] bottom-[10%] flex sm:items-start sm:justify-start items-center justify-center">
            <div className="sm:h-[4rem] h-[2rem] sm:w-[4rem] w-[2rem] bg-orange-400 rounded-full absolute sm:right-[32%] right-[35%] sm:top-[-10%] top-[4%] z-[-1]"></div>
            <h1 className="font-bold md:text-6xl  text-4xl leading-[4rem]">
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flex flex-col sm:items-start items-center secondaryText text-center">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="sm:flex bg-white rounded-md border-3 border-solid border-rgba(120, 120, 120, 0.37) px-4 py-2 justify-between items-center w-[100%] hidden">
            <HiLocationMarker color="blue" size={25} />
            <input type="text" className="border-none outline-none" />
            <button className="button">Search</button>
          </div>
          <div className="flex bg-white rounded-md border-3 border-solid border-rgba(120, 120, 120, 0.37) px-2 py-1 justify-between items-center w-[100%] sm:hidden">
            <HiLocationMarker color="blue" size={20} />
            <input type="text" className="border-none outline-none" />
            <button className="button-sm text-[0.8rem]">Search</button>
          </div>
          <div className="flex">
            <div className="p-4">
              <CountUp
                start={8800}
                end={9000}
                duration={3}
                className="sm:text-[2rem] text-[1.5rem]"
              />
              <span className="sm:text-[2rem] text-[1.5rem] text-orange-400">
                +
              </span>
              <br />
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="p-4">
              <CountUp
                start={1880}
                end={2000}
                duration={3}
                className="sm:text-[2rem] text-[1.5rem]"
              />
              <span className="sm:text-[2rem] text-[1.5rem] text-orange-400">
                +
              </span>
              <br />
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="p-4">
              <CountUp
                start={25}
                end={30}
                duration={3}
                className="sm:text-[2rem] text-[1.5rem]"
              />
              <span className="sm:text-[2rem] text-[1.5rem] text-orange-400">
                +
              </span>
              <br />
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        {/* right side */}

        <div className="md:w-[30rem] md:h-[35rem] w-[18rem] h-[22rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-imageradius">
          <img
            src="./hero-image.png"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
