import React from 'react';

const TestimonialCard = ({ rating, text, name }) => (
  <div className="bg-[#23447F]/60 backdrop-blur-sm rounded-2xl p-5 min-w-[240px] max-w-[280px] flex-shrink-0 border border-[#0165C5]/30">
    {/* Quote icon */}
    <div className="text-[#CCEAFF] text-2xl mb-2 font-bold">"</div>
    
    {/* Star rating */}
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-lg ${i < rating ? 'text-[#CCEAFF]' : 'text-[#23447F]'}`}>
          ★
        </span>
      ))}
    </div>
    
    {/* Testimonial text */}
    <p className="text-[#E5E8EF] text-sm mb-4 leading-relaxed" style={{fontFamily: 'Roboto, sans-serif'}}>
      {text}
    </p>
    
    {/* Author */}
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-[#0165C5] rounded-full flex items-center justify-center">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-[#E5E8EF] text-sm font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>
        {name}
      </span>
    </div>
  </div>
);

export default TestimonialCard;
