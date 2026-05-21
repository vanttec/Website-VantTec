import React from 'react';

const SectionTitle = ({ children, className = '', centered = false, noMargin = false }) => (
  <div className={`${noMargin ? '' : 'mb-8 md:mb-12'} ${centered ? 'text-center' : ''}`}>
    <h2 
      className={`inline-block bg-[#E5E8EF] text-[#01165C] px-8 py-6 rounded-xl font-extrabold text-2xl md:text-5xl ${className}` } 
      style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 800}}
    >
      {children}
    </h2>
  </div>
);

export default SectionTitle;
