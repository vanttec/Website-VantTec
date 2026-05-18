import React, { useState } from "react";
import { tecLogo, collab, anmark3d, mecalabs, always_sunny, siemens, proyectosAssemble } from "../../assets";

export default function Sponsors() {
  return (
    <div className="relative w-full min-h-[1800px] bg-[radial-gradient(65.79%_65.79%_at_50%_34.21%,#01165C_0%,#010C3D_55%,#01072E_85%,#010521_100%)]">

      {/* Background Poster */}
      <img
        src={proyectosAssemble}
        className="absolute left-[62px] top-4 w-[1315px] max-w-none opacity-[0.20]"
        alt="Posters Danny De Jorge"
      />

      {/* Title */}
      <h1 className="absolute left-[195px] top-[143px] w-[1120px] text-6xl font-montserrat text-[#E5E8EF]">
        N A V I G A T I N G &nbsp; T H E &nbsp; F U T U R E
      </h1>

      {/* Subtitle */}
      <p className="absolute left-[350px] top-64 w-[755px] text-[50px] font-inter text-[#E5E8EF]">
        Made possible by our sponsors
      </p>

      {/* Sponsors Section */}
      <div className="absolute left-[108px] top-[460px] h-[783px] w-[1196px]">

        {/* TEC Logo */}
        <img
          src={tecLogo}
          className="absolute left-[71px] top-3.5 w-[400px] max-w-none"
          alt="TEC Logo"
        />

        {/* MecaLabs */}
        <img
          src={mecalabs}
          className="absolute left-[700px] top-0 w-[450px] max-w-none"
          alt="MecaLabs Logo"
        />

        {/* Anmark 3D Logo */}
        <img
          src={anmark3d}
          className="absolute left-0 top-[200px] w-[711px] max-w-none"
          alt="Main Sponsor Logo"
        />

        {/* Collab logo */}
        <img
          src={collab}
          className="absolute left-[718px] top-[250px] w-[500px] max-w-none"
          alt="Design Poster"
        />

        {/* Always Sunny logo */}
        <img
          src={always_sunny}
          className="absolute left-[121px] top-[647px] w-[366px] max-w-none"
          alt="Secondary Sponsor Logo"
        />

        {/* SIE Logo */}
        <img
          src={siemens}
          className="absolute left-[647px] top-[733px] w-[500px] max-w-none"
          alt="SIE Logo"
        />
      </div>
    </div>
  );
}