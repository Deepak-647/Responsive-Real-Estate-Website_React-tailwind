import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="paddings innerWidth flex sm:flex-row flex-col items-center justify-between">
        {/* left side */}
        <div className="sm:flexColStart flexColCenter gap-[1rem]">
          <img src="./logo2.png" alt="logo" width={120} />
          <span className="secondaryText">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </span>
        </div>

        <div className="sm:flexColStart flexColCenter mt-4 sm:mt-0">
          <span className="primaryText">Information</span>
          <span className="secondaryText">400126 Delhi,FL 4571 , India</span>
          <div className="flexCenter gap-[1.5rem] mt-6 font-semibold">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
