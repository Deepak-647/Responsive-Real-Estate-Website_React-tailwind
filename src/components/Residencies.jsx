import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/common";

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flexCenter gap-4">
      <button onClick={()=>swiper.slidePrev()} className="text-3xl font-bold px-[0.2rem] py-[0.8rem] text-blue border-none rounded-md bg-white cursor-pointer">&lt;</button>
      <button onClick={()=>swiper.slideNext()} className="text-3xl font-bold px-[0.2rem] py-[0.8rem] text-blue border-none rounded-md bg-white cursor-pointer">&gt;</button>
    </div>
  );
};
const Residencies = () => {
  return (
    <section>
      <div id="residencies" className="paddings innerWidth overflow-hidden">
        <div className="flex flex-col items-center sm:items-start justify-center">
          <span className="text-orange-500 text-[1.5rem] font-[600]">
            Best Choices
          </span>
          <span className="text-primary text-[2rem] font-bold text-center">
            Popular Residencies
          </span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-start justify-center gap-3 p-[1rem] rounded-lg m-auto max-w-max transition-all w-[15rem] r-card">
                <img src={card.image} alt="home" className="w-[100%]" />
                <span className="text-[1.5rem] font-semibold secondaryText">
                  <span className="text-orange-500">$</span>
                  <span>{card.price}</span>
                </span>
                <span className="text-primary text-[1.5rem] font-bold">
                  {card.name}
                </span>
                <span className="text-secondary text-[0.7rem] font-bold">
                  {card.detail}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
