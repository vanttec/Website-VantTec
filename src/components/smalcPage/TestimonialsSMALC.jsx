import React from 'react';
import { BorderedContainer, TestimonialCard, PillButton } from './shared';

const TestimonialsSMALC = () => {
  const testimonials = [
    { rating: 4, text: "me encantó esta experiencia. Espero que se repita", name: "Victoria Álvarez" },
    { rating: 3, text: "me encantó esta experiencia. Espero que se repita", name: "Victoria Álvarez" },
    { rating: 4, text: "me encantó esta experiencia. Espero que se repita", name: "Victoria Álvarez" },
    { rating: 4, text: "me encantó esta experiencia. Espero que se repita", name: "Victoria Álvarez" },
    { rating: 3, text: "me encantó esta experiencia. Espero que se repita", name: "Victoria Álvarez" },
    { rating: 3, text: "me encantó esta experiencia. Espero que se repita", name: "Victoria Álvarez" },
    { rating: 4, text: "me encantó esta experiencia. Espero que se repita", name: "Victoria Álvarez" },
    { rating: 4, text: "me encantó esta experiencia. Espero que se repita", name: "Victoria Álvarez" },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{
      background: 'transparent'
    }}>
      <div className="max-w-7xl mx-auto">
        <BorderedContainer className="w-full" title="Historias de Impacto" titlePosition="center">
          {/* Description */}
          <div className="text-center mx-auto mb-4">
            <p className="text-[#E5E8EF] text-sm md:text-base leading-relaxed" style={{fontFamily: 'Roboto, sans-serif'}}>
              Cada historia en SMALC refleja más que aprendizaje: es la chispa que enciende la pasión por crear, explorar y descubrir. A través de nuestros talleres, niñas, niños y jóvenes han encontrado la confianza para transformar sus ideas en soluciones reales.
            </p>
          </div>

          <p className="text-center text-[#CCEAFF] text-sm mb-10" style={{fontFamily: 'Roboto, sans-serif'}}>
            Conoce cómo la curiosidad puede cambiar el futuro.
          </p>

          {/* Testimonials Row 1 - scrolling left */}
          <div className="relative mb-6 overflow-hidden">
            <div className="flex gap-4 animate-scroll-left">
              {[...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard key={`row1-${i}`} {...t} />
              ))}
            </div>
          </div>

          {/* Testimonials Row 2 - scrolling right */}
          <div className="relative mb-10 overflow-hidden">
            <div className="flex gap-4 animate-scroll-right">
              {[...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard key={`row2-${i}`} {...t} />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <PillButton>Comparte tu Experiencia</PillButton>
          </div>
        </BorderedContainer>
      </div>

      {/* CSS for animations - continuous, never stops */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSMALC;
