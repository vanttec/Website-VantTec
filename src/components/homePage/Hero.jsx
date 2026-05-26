import { useEffect, useState } from "react";
import { heroCollage } from "../../assets";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full min-h-[60vh] sm:min-h-screen flex items-start sm:items-center justify-center pt-24 sm:pt-0"
      style={{ backgroundColor: "#020B2D" }}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-full"
        viewBox="0 0 1440 1297"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYTop slice"
        style={{ zIndex: 0, height: "160%" }}
      >
        <path
          d="M-134.068 -146.448C-400.784 242.665 -258.303 803.971 184.172 1107.26C626.648 1410.56 1201.56 1340.99 1468.28 951.873C1734.99 562.76 1592.51 1.45394 1150.04 -301.839C707.562 -605.132 132.649 -535.561 -134.068 -146.448Z"
          fill="url(#ellipseGradient)"
        />
        <defs>
          <linearGradient
            id="ellipseGradient"
            x1="292.725"
            y1="155.796"
            x2="1252.67"
            y2="813.786"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3125" stopColor="#03165C" stopOpacity="0.84" />
            <stop offset="0.605769" stopColor="#03165C" stopOpacity="0.29" />
            <stop offset="1" stopColor="#000733" stopOpacity="0.51" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className={`relative z-10 w-full max-w-[95vw] sm:max-w-5xl lg:max-w-7xl px-0 sm:px-8 transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={heroCollage}
          alt="VANTTEC — Navigating the Future"
          className="w-full h-auto object-contain"
          style={{ mixBlendMode: "screen" }}
        />
      </div>
    </section>
  );
};

export default Hero;