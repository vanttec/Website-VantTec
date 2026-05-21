import React from 'react';

const PrimaryButton = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`px-8 py-3 bg-[#23447F] hover:bg-[#1042A2] text-white rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-[#0165C5]/30 ${className}`}
    style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 700}}
  >
    {children}
  </button>
);

const OutlineButton = ({ children, onClick, className = '', rounded = false }) => (
  <button 
    onClick={onClick}
    className={`px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white ${rounded ? 'rounded-full' : 'rounded-lg'} font-bold transition-all duration-300 ${className}`}
    style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 700}}
  >
    {children}
  </button>
);

const PillButton = ({ children, onClick, variant = 'filled', className = '' }) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300";
  const variantStyles = variant === 'filled' 
    ? "bg-white hover:bg-gray-100 text-[#01072E] shadow-lg"
    : "border-2 border-white hover:bg-white/10 text-white";
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 700}}
    >
      {children}
    </button>
  );
};

export { PrimaryButton, OutlineButton, PillButton };
