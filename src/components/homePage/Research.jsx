import React from "react";
import { papers1, papers2, papers3, papers4, vanttecarrow } from "../../assets";

const papers = [
  {
    title: "What Happens When an Autonomous Boat Faces the Unexpected?",
    date: "23 March 2021",
    image: papers1,
    link: "https://ieeexplore.ieee.org/document/9383425?fbclid=PAVERFWAR94ltleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaemuqfdBeRjN_N3FF1WkHGMENkO-YxbyTe4o6QrSKO1S5UubmaFoWX8roRB_A_aem_m4D8CpOOJk9apMKu-l1H0A",
  },
  {
    title: "Crean Primer barco robot mexicano",
    subtitle: "Artículo de CONECTA",
    date: "29 November 2017",
    image: papers2,
    link: "https://conecta.tec.mx/es/noticias/nacional/investigacion/crean-primer-barco-robot-mexicano",
  },
  {
    title: "Capacidad y talento para vencer",
    subtitle: "Artículo de MILENIO",
    date: "23 Febrero 2018",
    image: papers3,
    link: "https://www.milenio.com/negocios/capacidad-y-talento-para-vencer",
  },
  {
    title: "Ivana Collado: impulsa el desarrollo social a través de la robótica",
    subtitle: "Artículo de CONECTA",
    date: "10 Marzo 2020",
    image: papers4,
    link: "https://conecta.tec.mx/es/noticias/monterrey/educacion/ivana-collado-impulsa-el-desarrollo-social-traves-de-la-robotica",
  },
];

const Research = () => {
  return (
    <section id="research" className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_center,#01165C_0%,#010C3D_45%,#01072E_75%,#010521_100%)] pt-24 pb-32">

      <div className="absolute top-[100px] right-[2000px] h-[500px] w-[5000px] rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative z-10 mb-24 px-10 md:px-20">
        <div className="mb-8 flex items-center gap-[0px]">
          <img src={vanttecarrow} alt="vanttecarrow" className="w-[120px] opacity-100" />
          <p className="font-raleway font-light text-lg text-white/80 md:text-xl">Research Publications</p>
        </div>
        <div className="leading-[0.9] pl-6">
          <p className="font-urbanist text-3xl font-light text-[#B8CDE9]/80 md:text-5xl tracking-[0.02em]">The ideas that move</p>
          <h2 className="mt-2 font-urbanist font-extrabold text-6xl text-white md:text-8xl">OUR FUTURE</h2>
          <h2 className="font-urbanist text-6xl font-extrabold text-white md:text-8xl">FORWARD</h2>
        </div>
      </div>

      <div className="scrollbar-hide relative z-10 flex gap-6 overflow-x-auto px-16 pb-10">
        {papers.map((paper, index) => (
          <a key={index} href={paper.link} target="_blank" rel="noopener noreferrer" className="group relative w-[500px] flex-shrink-0 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md transition duration-500 hover:scale-[1.02] hover:border-white/20">
            <div className="relative h-[420px] w-full overflow-hidden bg-[#020B2D]">
              <img src={paper.image} alt={paper.title} className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 z-20 p-16">
                <p className="mb-3 font-raleway text-sm text-white/70">{paper.date}</p>
                <h3 className="font-urbanist text-2xl font-light leading-tight text-white">{paper.title}</h3>
                {paper.subtitle && (
                  <p className="mt-2 font-raleway text-sm text-white/60">{paper.subtitle}</p>
                )}
                <p className="mt-4 font-raleway text-sm text-[#B8CDE9] transition duration-300 group-hover:text-white">Click to read →</p>
              </div>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default Research;