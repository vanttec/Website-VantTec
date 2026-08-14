import React from 'react';
import humansIcon from '../../assets/icons/humans.png';
import trophyIcon from '../../assets/icons/trophy.png';
import documentIcon from '../../assets/icons/document.png';
import medalIcon from '../../assets/icons/medal.png';
import wreathIcon from '../../assets/icons/wreath.png';

const stats = [
  {
    icon: humansIcon,
    value: '73',
    label: 'Members',
    bg: 'bg-[#48658A]',
  },
  {
    icon: trophyIcon,
    value: '20',
    label: 'International Awards',
    bg: 'bg-[#393780]',
  },
  {
    icon: documentIcon,
    value: '12',
    label: 'Papers Published',
    bg: 'bg-[#143D71]',
  },
  {
    icon: medalIcon,
    value: '8',
    label: 'International Competitions',
    bg: 'bg-[#1C4289]',
  },
];

const awards = [
  { category: 'RoboNation', name: 'Special Persistence Award', year: '2024' },
  { category: 'Xignux Challenge', name: 'Finalists - 24-Hour Challenge', year: '2024' },
  { category: 'Rómulo Garza Ceremony', name: 'Award for Professional Students', year: '2021' },
  { category: 'International Competition', name: '1st Place - Overall + $3,000 Prize', year: '2020' },
  { category: 'International Competition', name: '1st Place - Technical Report, Video & Website', year: '2020' },
  { category: 'International Competition', name: 'Special Award - Testing on the Horizon', year: '2020' },
  { category: 'RoboNation', name: '5th Place', year: '2019' },
  { category: 'Engineering Excellence', name: 'Special Award for Engineering Integrity', year: '2018' },
  { category: 'Aerial Robotics', name: 'Special Drone Award', year: '2017' },
];

export default function Awards() {
  return (
    <section
      id="awards"
      className="w-full min-h-screen overflow-x-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#01165C_0%,#010C3D_55%,#01072E_93%,#010521_100%)] px-6 md:px-16 py-16 md:py-24"
    >
      {/* Section header */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-white/60 tracking-widest text-xs md:text-sm uppercase mb-2 font-urbanist">
          Competing Globally
        </p>
        <h2 className="text-white text-4xl md:text-6xl font-black uppercase font-montserrat">
          Awards
        </h2>
        <p className="text-[#B8CDE9] text-sm md:text-base font-urbanist mt-2">
          Recognizing our milestones
        </p>
      </div>
      {/* Stats grid — 2x2 */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-16 md:mb-24">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.bg} rounded-[20px] md:rounded-[30px] flex flex-row items-center gap-3 md:gap-6 px-4 md:px-8 py-4 md:py-6`}
          >
            {/* Icon */}
            <img
              src={stat.icon}
              alt={stat.label}
              className="w-8 h-8 md:w-12 md:h-12 object-contain"
            />
            {/* Text */}
            <div className="flex flex-col">
              <span className="text-white font-leagueSpartan font-semibold text-2xl md:text-4xl leading-none">
                {stat.value}
              </span>
              <span className="text-[#B8CDE9] font-leagueSpartan font-semibold text-xs md:text-base leading-tight mt-1">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section — wreath + awards list */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16 max-w-4xl mx-auto">

        {/* Laurel wreath — hidden on mobile, shown on md+ */}
        <div className="hidden md:flex items-center justify-center md:w-1/3">
          <img
            src={wreathIcon}
            alt="Award wreath"
            className="w-48 md:w-64 object-contain opacity-80"
          />
        </div>

        {/* Awards list */}
        <div className="w-full md:w-2/3 flex flex-col divide-y divide-white/10">
          {awards.map((award) => (
            <div
              key={`${award.name}-${award.year}`}
              className="flex flex-row justify-between items-start py-3 md:py-4 gap-4"
            >
              {/* Left — category + name */}
              <div className="flex flex-col">
                <span className="text-[#B8CDE9] font-leagueSpartan text-xs md:text-sm font-normal">
                  {award.category}
                </span>
                <span className="text-white font-leagueSpartan font-semibold text-sm md:text-base">
                  {award.name}
                </span>
              </div>

              {/* Right — year */}
              <span className="text-[#B8CDE9] font-leagueSpartan text-xs md:text-sm whitespace-nowrap">
                / {award.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}