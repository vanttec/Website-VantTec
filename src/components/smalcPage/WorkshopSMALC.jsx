import React from 'react';
import { BorderedContainer, WorkshopCard, OutlineButton } from './shared';

const WorkshopSMALC = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden" style={{
      background: 'transparent'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Main content container with border and centered overlapping title */}
        <BorderedContainer title="Súmate a la Corriente" titlePosition="center">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Subtitle */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 700}}>
              ¡Descubre, aprende y crea!
            </h3>

            {/* Description */}
            <p className="text-base md:text-lg text-[#E5E8EF] leading-relaxed mb-8 max-w-2xl" style={{fontFamily: 'Roboto, sans-serif'}}>
              Participa en los nuevos talleres SMALC y adéntrate en el mundo de la tecnología, la creatividad y el pensamiento lógico. Aprende construyendo, experimentando y resolviendo desafíos reales.
            </p>

            {/* CTA Button */}
            <div className="mb-10">
              <OutlineButton rounded>Inscríbete</OutlineButton>
            </div>

            {/* Workshop Card */}
            <WorkshopCard 
              title="Taller"
              subtitle="Express"
              topic="Visión Computacional"
              instructor="Frida Cano"
              date="Mar 14 Octubre"
              time="11-13 hrs"
              location="A3-103"
            />
          </div>
        </BorderedContainer>
      </div>
    </section>
  );
};

export default WorkshopSMALC;
