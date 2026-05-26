import React from 'react';
import teamGroup from '../../assets/whatmovesus.jpeg';
import vantecSymbol from '../../assets/vantec_symbol.png';

const pillars = [
  {
    title: 'Student Powered',
    subtitle: 'BY US, FOR THE WORLD',
    description: 'Real students. Real machines. No waiting to graduate to make an impact.',
  },
  {
    title: 'Research Driven',
    subtitle: 'SCIENCE FIRST',
    description: 'Every line of code and every bolt starts with serious research behind it.',
  },
  {
    title: 'Autonomously Built',
    subtitle: 'FULL AUTONOMY',
    description: 'Drones, cars, subs & boats, built to think, navigate, and act on their own.',
  },
];

export default function WhatDrivesUs() {
  return (
    <section
      id="whatdrivesus"
      className="relative w-full min-h-screen overflow-x-hidden flex items-center"
      style={{ background: 'radial-gradient(65.79% 65.79% at 50% 34.21%, #01165C 0%, #010C3D 55%, #01072E 85%, #010521 100%)' }}
    >
      {/* Content — outer padding container */}
      <div className="relative z-10 w-full px-6 md:px-16 py-16 md:py-24">

        {/* Card with team photo background */}
        <div
          className="rounded-3xl px-8 md:px-12 py-10 md:py-14 relative overflow-hidden max-w-4xl mx-auto"
          style={{ backgroundImage: `url(${teamGroup})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Dark overlay on card only */}
          <div className="absolute inset-0 bg-black/60 z-0 rounded-3xl" />

          {/* Card content */}
          <div className="relative z-10">

            {/* Title row */}
            <div className="flex flex-row items-start justify-between mb-8 md:mb-10">
              <h1 className="text-white font-montserrat font-black text-5xl md:text-6xl uppercase leading-none">
                WHAT<br />DRIVES US
              </h1>
              <img
                src={vantecSymbol}
                alt="VantTec symbol"
                className="w-16 h-16 md:w-52 md:h-52 object-contain opacity-80"
              />
            </div>

            {/* Bottom row — description + pillars */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:divide-x md:divide-white/20">

              {/* Left — description text */}
              <div className="md:w-1/2 flex flex-col gap-4">
                <p className="text-white/90 font-urbanist text-sm md:text-base leading-relaxed text-center md:text-right">
                  VantTEC is a student-driven research and development team from Tecnológico de Monterrey.
                  We are engineers, designers, and problem-solvers united by one goal: pushing the
                  boundaries of autonomous vehicle technology.
                </p>
                <p className="text-white/90 font-urbanist text-sm md:text-base leading-relaxed text-center md:text-right">
                  We research, design, and build fully autonomous vehicles across four disciplines:
                  drones, ground vehicles, submarines, and boats. Every project starts in the lab and
                  ends in the real world, competing on an international stage against the best
                  university teams globally.
                </p>
              </div>

              {/* Right — pillars */}
              <div className="md:w-1/2 flex flex-col gap-4 md:pl-12">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="flex flex-col">
                    <h3 className="text-white font-montserrat font-bold text-sm md:text-base">
                      {pillar.title}
                    </h3>
                    <p className="text-[#B8CDE9] font-leagueSpartan text-xs tracking-widest uppercase mb-1">
                      {pillar.subtitle}
                    </p>
                    <p className="text-white/70 font-urbanist text-xs md:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}