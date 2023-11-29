import React from "react";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section  className="text-white relative pb-[2rem] bg-black ">
      <div className="padddings innerWidth flex flex-col sm:flex-row items-center justify-around gap-[2rem] w-[70%] z-0">
        {/* left side */}
        <div className="flex flex-col  justify-center gap-[3rem] p-[1.5rem]">
          <div className="relative z-[1] bottom-[10%]">
            <div className="sm:h-[4rem] h-[2rem] sm:w-[4rem] w-[2rem] bg-orange-400 rounded-full absolute sm:right-[32%] right-[58%] sm:top-[-10%] top-[4%] z-[-1]"></div>
            <h1 className="font-bold md:text-6xl  text-4xl leading-[4rem]">
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flex flex-col justify-center items-start secondaryText"> 
             
              <span>Find a variety of properties that suit you very easilty</span>
              <span>Forget all difficulties in finding a residence for you</span>
            
          </div>
          <div className="flex bg-white rounded-md border-3 border-solid border-rgba(120, 120, 120, 0.37) px-4 py-2 justify-between items-center w-[100%]">
            <HiLocationMarker color="blue" size={25}/>
            <input type='text' className="border-none outline-none"/>
            <button className="button">Search</button>
          </div>
          <div className="flex ">
            <div className="p-4">
            <CountUp start={8800} end={9000} duration={3} className="text-[2rem]"/>
              <span className="text-[2rem] text-orange-400">+</span>
              <br/>
              <span className="secondaryText">
                Premium Product
              </span>
            </div>
            <div className="p-4">
            <CountUp start={1880} end={2000} duration={3} className="text-[2rem]"/>
              <span className="text-[2rem] text-orange-400">+</span>
              <br/>
              <span className="secondaryText">
                Happy Customers
              </span>
            </div>
            <div className="p-4">
            <CountUp start={25} end={30} duration={3} className="text-[2rem]"/>
              <span className="text-[2rem] text-orange-400">+</span>
              <br/>
              <span className="secondaryText">
                Award Winning
              </span>
            </div>
          </div>
        </div>
        {/* right side */}
        
          <div className="md:w-[30rem] md:h-[35rem] w-[25rem] h-[30rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-imageradius">
            <img src="./hero-image.png" className="w-[100%] h-[100%]" />
          </div>
        
      </div>
    </section>
  );
};

export default Hero;
