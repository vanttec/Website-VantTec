import React from 'react';
import { PrimaryButton, OutlineButton, smalcGradient } from './shared';

const HeroSMALC = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0" style={{
      background: 'transparent'
    }}>
      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center order-2 md:order-1">
          <div className="w-full max-w-md h-auto">
            {/* Placeholder SVG - replace with actual SMALC illustration */}
            <img src="src/assets/SMALChero.png" alt="" />
          </div>
        </div>

        {/* Right side - Text and CTA */}
        <div className="w-full md:w-1/2 text-center order-1 md:order-2">
          <h1 className="text-5xl md:text-[56px] font-extrabold text-white mb-2 leading-tight tracking-tight" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 800}}>
            SMALC
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 italic" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 700}}>
            Sin Miedo A La Corriente
          </h2>
          <p className="text-base md:text-lg text-[#E5E8EF] leading-relaxed mb-8 max-w-lg mx-auto md:mx-0" style={{fontFamily: 'Roboto, sans-serif'}}>
            Fomentando el aprendizaje, la creatividad y la confianza a través de la robótica.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton>Conoce más</PrimaryButton>
            <OutlineButton>Ver Próximos Talleres</OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSMALC;
