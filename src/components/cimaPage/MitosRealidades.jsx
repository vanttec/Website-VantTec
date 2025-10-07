import React from "react";
import MitosCarousel from './MitosCarousel';

const MitosRealidades = () => (
  <section className="flex flex-col items-center justify-center min-h-[80vh] py-16 px-8 bg-gradient-to-b from-pink-50 to-purple-50">
    <div className="text-center mb-4 max-w-4xl">
      <h2 className="text-4xl font-bold font-nunito text-[#8E7AB5] mb-6">
        Mitos y Realidades
      </h2>
      <p className="text-xl text-[#6D6875] font-quicksand leading-relaxed">
        Existen muchos mitos alrededor del ciclo menstrual y el periodo que generan dudas y
        desinformación. Aquí te mostramos cuáles son ciertos y cuales no, con datos claros y
        confiables.
      </p>
    </div>
    <MitosCarousel />
  </section>
);

export default MitosRealidades;
