import React from 'react';

const ProjectCard = ({ image, title, description, participants, year }) => (
  <div className="bg-gradient-to-br from-[#E5E8EF] to-[#CCEAFF] rounded-2xl overflow-hidden shadow-xl max-w-sm">
    {/* Image */}
    <div className="w-full h-48 md:h-56 bg-gradient-to-br from-[#1042A2]/20 to-[#0165C5]/20 flex items-center justify-center">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      ) : (
        <div className="text-center">
          <p className="text-[#23447F] font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>Proyecto SMALC</p>
          <p className="text-sm text-[#23447F]/70">(Imagen/Foto)</p>
        </div>
      )}
    </div>

    {/* Card content */}
    <div className="p-6 bg-white/80">
      <h3 className="text-xl md:text-2xl font-bold text-[#01072E] mb-2" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 700}}>
        {title}
      </h3>
      <p className="text-sm md:text-base text-[#23447F] mb-4 leading-relaxed" style={{fontFamily: 'Roboto, sans-serif'}}>
        {description}
      </p>

      {/* Metadata */}
      <div className="flex gap-6 text-[#23447F]">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <span className="text-sm font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>{participants}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>{year}</span>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
