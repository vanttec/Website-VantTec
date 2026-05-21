import React from 'react';

const WorkshopCard = ({ type, title, topic, instructor, date, time, location }) => (
  <div className="bg-gradient-to-br from-[#23447F] to-[#01072E] rounded-2xl p-6 shadow-2xl border border-[#0165C5]/30 max-w-sm">
    {/* Card header */}
    <div className="text-left mb-2">
      <p className="text-xs text-[#CCEAFF]/70 uppercase tracking-wider" style={{fontFamily: 'Montserrat, sans-serif'}}>{type || 'Taller'}</p>
    </div>

    {/* Title */}
    <h4 className="text-3xl md:text-4xl font-bold text-white mb-1" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 800}}>
      {title}
    </h4>
    <p className="text-xl text-[#CCEAFF] font-bold mb-4" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 700}}>
      Express
    </p>

    {/* Topic */}
    <h5 className="text-sm text-[#E5E8EF] uppercase tracking-widest mb-2" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 700}}>
      {topic}
    </h5>

    {/* Divider */}
    <div className="h-px bg-gradient-to-r from-transparent via-[#0165C5] to-transparent my-4"></div>

    {/* Details */}
    <div className="text-xs text-[#E5E8EF] space-y-2" style={{fontFamily: 'Roboto, sans-serif'}}>
      <p>por: {instructor}</p>
      <p className="flex items-center gap-2">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        {date}
      </p>
      <p className="flex items-center gap-2">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        {time}
      </p>
      <p className="flex items-center gap-2">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        {location}
      </p>
    </div>

    {/* Footer logo placeholder */}
    <div className="mt-4 pt-4 border-t border-[#0165C5]/20">
      <p className="text-xs text-[#0165C5]" style={{fontFamily: 'Montserrat, sans-serif'}}>SMALC</p>
    </div>
  </div>
);

export default WorkshopCard;
