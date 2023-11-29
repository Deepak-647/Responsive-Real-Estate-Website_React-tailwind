import React from "react";
import { navLinks } from "../constants";
import { useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="bg-black text-white">
      <div className="flex items-center justify-between  py-[2rem] md:px-[8rem] px-[2rem] flex-wrap w-[100%]  text-secondary">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="sm:flex items-center gap-[2rem] hover:cursor-pointer hidden">
          {navLinks.map((data, i) => (
            <a href={`#${data.id}`} key={i}>
              {data.title}
            </a>
          ))}

          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? "./close.svg" : "./menu.svg"}
            alt=""
            className="w-[28px] h-[28px] object-contain hover:cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar z-10`}
        >
          <ul className="list-none flex  flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
                
              </li>
            ))}
            <button className="button mt-3">
            <a href="">Contact</a>
          </button>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
