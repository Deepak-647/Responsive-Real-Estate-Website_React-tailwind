import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section>
      <div id="contact-us" className="paddings innerWidth flexCenter">
        {/* left side */}
        <div className="sm:flexColStart flexColCenter flex-1 gap-2">
          <span className="text-orange-500 sm:text-[1.5rem] text-[1.2rem] font-[600]">
            Our Contact Us
          </span>
          <span className="text-primary sm:text-[2rem] text-[1.5rem]  font-bold">
            Easy to contact us
          </span>
          <span className="secondaryText px-[2.5rem] sm:px-0">
            We always ready to help by providijng the best services for you. We
            beleive a good
            <br />
            blace to live can make your life better
          </span>

          <div className="flexColStart mt-[2rem] gap-4">
            {/* first row */}
            <div className="flex sm:flex-row flex-col items-center justify-center gap-6">
              <div className="flexColCenter sm:w-[16rem] w-[14rem] p-4 border-[0.8px] border-solid border-rgba(128,128,128,0.143) rounded-md gap-4 transition-all duration-300 ease-in hover:scale-110 hover:shadow">
                <div className="flexStart w-[100%] gap-6">
                  <div className="flexStart bg-[#eeeeff] p-3 rounded-md text-blue ">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart">
                    <span className="text-[#1f3e72] text-[1.1rem] font-[600]">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter w-[100%] bg-lightBlue text-blue text-[1rem] font-[600] py-2 hover:bg-blue hover:text-white hover:cursor-pointer">
                    Call Now
                </div>
              </div>
              <div className="flexColCenter sm:w-[16rem] w-[14rem] p-4 border-[0.8px] border-solid border-rgba(128,128,128,0.143) rounded-md gap-4 transition-all duration-300 ease-in hover:scale-110 hover:shadow">
                <div className="flexStart w-[100%] gap-6">
                  <div className="flexStart bg-[#eeeeff] p-3 rounded-md text-blue ">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart">
                    <span className="text-[#1f3e72] text-[1.1rem] font-[600]">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter w-[100%] bg-lightBlue text-blue text-[1rem] font-[600] py-2 hover:bg-blue hover:text-white hover:cursor-pointer">
                    Chat Now
                </div>
              </div>
            </div>
            {/* second row */}
            <div className="flex sm:flex-row flex-col items-center justify-center gap-6">
              <div className="flexColCenter sm:w-[16rem] w-[14rem] p-4 border-[0.8px] border-solid border-rgba(128,128,128,0.143) rounded-md gap-4 transition-all duration-300 ease-in hover:scale-110 hover:shadow">
                <div className="flexStart w-[100%] gap-6">
                  <div className="flexStart bg-[#eeeeff] p-3 rounded-md text-blue ">
                    <FaVideo size={25} />
                  </div>
                  <div className="flexColStart">
                    <span className="text-[#1f3e72] text-[1.1rem] font-[600]">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter w-[100%] bg-lightBlue text-blue text-[1rem] font-[600] py-2 hover:bg-blue hover:text-white hover:cursor-pointer">
                    Video Call Now
                </div>
              </div>
              <div className="flexColCenter sm:w-[16rem] w-[14rem] p-4 border-[0.8px] border-solid border-rgba(128,128,128,0.143) rounded-md gap-4 transition-all duration-300 ease-in hover:scale-110 hover:shadow">
                <div className="flexStart w-[100%] gap-6">
                  <div className="flexStart bg-[#eeeeff] p-3 rounded-md text-blue ">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart">
                    <span className="text-[#1f3e72] text-[1.1rem] font-[600]">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter w-[100%] bg-lightBlue text-blue text-[1rem] font-[600] py-2 hover:bg-blue hover:text-white hover:cursor-pointer">
                    Message Now
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="sm:flex-1 flex items-center justify-center">
          <div className="sm:w-[30rem] sm:h-[35rem] w-[20rem] h-[25rem] overflow-hidden rounded-t-[15rem]">
            <img
              src="./contact.jpg"
              alt="contact"
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
