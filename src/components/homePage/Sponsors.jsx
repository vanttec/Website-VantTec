import React from "react";
import { tecLogo, collab, anmark3d, mecalabs, always_sunny, siemens, proyectosAssemble } from "../../assets";

export default function Sponsors() {
  // Sponsor data — links and images in one place, easy to update later
  const sponsors = [
    {
      src: tecLogo,
      alt: "TEC de Monterrey",
      href: "https://tec.mx/es",
      className: "w-full max-w-[180px] md:max-w-[220px] lg:max-w-[280px] object-contain",
    },
    {
      src: mecalabs,
      alt: "MecaLabs",
      href: "https://www.mecalabs.xyz",
      className: "w-full max-w-[180px] md:max-w-[220px] lg:max-w-[280px] object-contain",
    },
    {
      src: anmark3d,
      alt: "Anmark 3D",
      href: "https://anmark3d.com",
      className: "w-full max-w-[220px] md:max-w-[280px] lg:max-w-[360px] object-contain",
    },
    {
      src: collab,
      alt: "Collab",
      href: "https://collabtree.net",
      className: "w-full max-w-[180px] md:max-w-[220px] lg:max-w-[280px] object-contain",
    },
    {
      src: always_sunny,
      alt: "Always Sunny",
      href: "https://allwayssunny.com",
      className: "w-full max-w-[180px] md:max-w-[220px] lg:max-w-[280px] object-contain",
    },
    {
      src: siemens,
      alt: "Siemens",
      href: "https://www.siemens.com/es-mx/",
      className: "w-full max-w-[180px] md:max-w-[220px] lg:max-w-[280px] object-contain",
    },
  ];

  return (
    <div id="sponsors" className="relative w-full min-h-[1800px] bg-[radial-gradient(65.79%_65.79%_at_50%_34.21%,#01165C_0%,#010C3D_55%,#01072E_85%,#010521_100%)]">

      {/* Background Poster — hidden on mobile to avoid overflow */}
      <img
        src={proyectosAssemble}
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none hidden md:block"
        alt=""
        aria-hidden="true"
      />

      {/* Content — sits on top of background */}
      <div className="relative z-10 flex flex-col items-center px-6 md:px-16 py-16 md:py-24">

        {/* Title */}
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-montserrat text-[#E5E8EF] text-center tracking-[0.3em] mb-4 w-full break-normal">
          NAVIGATING THE FUTURE
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl lg:text-5xl text-[#E5E8EF] text-center mb-12 md:mb-20">
          Made possible by our sponsors
        </p>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full max-w-5xl items-center justify-items-center">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.alt}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full transition-opacity duration-300 hover:opacity-70"
            >
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className={sponsor.className}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}