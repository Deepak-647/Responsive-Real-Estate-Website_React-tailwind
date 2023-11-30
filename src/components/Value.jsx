import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../utils/accordion";
import { useState } from "react";
const Value = () => {
  return (
    <section>
      <div id="our-value" className="paddings innerWidth flexCenter">
        {/* left side */}
        <div className="sm:flex-1 flex items-center justify-center">
          <div className="sm:w-[30rem] sm:h-[35rem] w-[18rem] h-[22rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-rgb(232,232,232)">
            <img src="./value.png" alt="value" className="w-[100%] h-[100%]" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart flex-1 gap-2 mt-8">
          <span className="text-orange-500 sm:text-[1.5rem] text-[1.2rem] font-[600]">
            Our Value
          </span>
          <span className="text-primary sm:text-[2rem]  text-[1.5rem] font-bold">
            Value We Give to You
          </span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>
          <Accordion allowMultipleExpanded={false} preExpanded={[0]} className="mt-[2rem] border-none">
            {data.map((item, i) => {
                const [className,setClassName] =useState(null);
               return (
              <AccordionItem key={i} uuid={i} className={`bg-white border-[0.8px] border-solid border-rgba(128,128,128,0.143) rounded-md overflow-hidden mb-5 ${className}`}>
                <AccordionItemHeading>
                   <AccordionItemButton className="flex items-center gap-x-[2rem]  bg-white p-4 w-[100%] justify-between cursor-pointer">
                    <AccordionItemState>
                       {({expanded}) => 
                       expanded 
                       ? setClassName("expanded") 
                       : setClassName("collapsed") 
                       } 
                    </AccordionItemState>

                    <div className="flexCenter bg-[#eeeeff] p-3 rounded-md text-blue">{item.icon}</div>
                    <span className="text-[#1f3e72] font-bold text-[1.1rem]">{item.heading}</span>
                    <div className="flexCenter bg-[#eeeeff] p-3 rounded-md text-blue">
                        <MdOutlineArrowDropDown size={20}/>
                    </div>
                    </AccordionItemButton> 
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            )})}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
