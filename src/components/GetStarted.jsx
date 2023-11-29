import React from "react";

const GetStarted = () => {
  return (
    <section>
      <div id="get-started" className="paddings innerWidth">
        <div className="flexColCenter sm:gap-[1.5rem] gap-[1rem] bg-[#4161df] p-[2rem] rounded-xl border-6 border-solid border-[#5d77d6] text-center">
          <span className="text-white font-bold sm:text-[2rem] text-[1.5rem]">Get started with Homyz</span>
          <span className="text-[rgba(255,255,255,0.587)] sm:text-[1rem] text-[0.8rem]">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
           <button className="button getstartedbtn">
            <a href="mailto:dbehera647@gmail.com">Get Started</a>
           </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
