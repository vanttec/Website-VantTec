import React, { useState } from "react";
import { ansysInc, grupoSSC, mercalabs, alwayssunny, mecalabs } from "../../assets";
import BounceCards from "../shared/BouceCards";

const SponsorCard = ({ name, logo }) => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };


  return (
    <div
      className="relative flex flex-col justify-center items-center pb-0 cursor-pointer w-32 h-32" // Fixed width and height
      onClick={handleClick}
    >
      <img
        src={logo}
        alt={name}
        className={`w-full h-full object-contain p-4 transition duration-300 ease-in-out ${
          showText ? "brightness-50" : "hover:brightness-50"
        }`}
      />
      <div
        className={`absolute inset-0 flex justify-center items-center bg-black transition-all duration-300 ${
          showText ? "bg-opacity-85" : "bg-opacity-0 hover:bg-opacity-50"
        }`}
      >
        <p
          className={`text-white text-center transition-all duration-300 ${
            showText ? "opacity-100" : "opacity-0 hover:opacity-100"
          }`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

const Sponsors = () => {

  const my_images = [
    ansysInc,
    grupoSSC,
    mercalabs,
    alwayssunny
  ];
  
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  return (
    <>
      <section id="sponsors">
        <div className="flex flex-col">
          <h2 className="text-2xl text-white font-thin mb-6 text-center">Sponsors</h2>
            <BounceCards
              className="custom-bounceCards mx-auto"
              images={my_images}
              containerWidth={500}
              containerHeight={250}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={true}
            />
          </div>
        </section>
    </>
  );
};

export default Sponsors;
