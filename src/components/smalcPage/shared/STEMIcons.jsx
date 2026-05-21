import React from 'react';
import science from '../../../assets/icons/science.png';
import technology from '../../../assets/icons/technology.png';
import engineering from '../../../assets/icons/engineering.png';
import mathematics from '../../../assets/icons/mathematics.png';

const STEMIcons = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="flex flex-col items-center gap-2">
      <img src={science} alt="Science" className="w-20 h-20  object-contain" />
      <p className="text-xs md:text-sm text-[#E5E8EF] text-center font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>Science</p>
    </div>
    <div className="flex flex-col items-center gap-2">
      <img src={technology} alt="Technology" className="w-20 h-20  object-contain" />
      <p className="text-xs md:text-sm text-[#E5E8EF] text-center font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>Technology</p>
    </div>
    <div className="flex flex-col items-center gap-2">
      <img src={engineering} alt="Engineering" className="w-20 h-20  object-contain" />
      <p className="text-xs md:text-sm text-[#E5E8EF] text-center font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>Engineering</p>
    </div>
    <div className="flex flex-col items-center gap-2">
      <img src={mathematics} alt="Mathematics" className="w-20 h-20  object-contain" />
      <p className="text-xs md:text-sm text-[#E5E8EF] text-center font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>Mathematics</p>
    </div>
  </div>
);

export default STEMIcons;
