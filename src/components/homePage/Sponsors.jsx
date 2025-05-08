import React from "react";
import BounceCards from "../shared/BouceCards";

export default function Sponsors() {
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  return (
    <section id="sponsors">
      <h2 className="text-2xl text-white font-thin mb-6 text-center">Sponsors</h2>
      <BounceCards
        className="custom-bounceCards mx-auto"
        containerWidth={500}
        containerHeight={250}
        animationDelay={1}
        animationStagger={0.08}
        easeType="elastic.out(1, 0.5)"
        transformStyles={transformStyles}
        enableHover={true}
      />
    </section>
  );
}
