import React from "react";
import MitosCarousel from './MitosCarousel';

const MitosRealidades = () => (
  <section className="flex flex-col items-center justify-center min-h-[80vh] py-16 px-8">
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
    <p className="text-[#6D6875] text-sm mt-6 max-w-2xl text-center">
      Información autorizada por la Asociación estudiantil de Ginecología y Obstetricia del ITESM.
    </p>
  </section>
);

export default MitosRealidades;
