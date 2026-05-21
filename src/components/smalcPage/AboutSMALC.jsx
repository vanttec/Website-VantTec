import React from 'react';
import { BorderedContainer, ProjectCard, STEMIcons } from './shared';

const AboutSMALC = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden" style={{
      background: 'transparent'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Main content container with border and overlapping title */}
        <BorderedContainer title="¿Qué es SMALC?" titlePosition="left">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
            {/* Left side - Text and icons */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <p className="text-base md:text-lg text-[#E5E8EF] leading-relaxed mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
                En VantTec, creemos que la curiosidad es la chispa de la innovación. A través de clases sabatinas en colaboración con SEIRS, acercamos la robótica, la programación y la ciencia a jóvenes de 10 a 18 años. Nuestro objetivo es inspirar a una nueva generación de creadores capaces de transformar el mundo con sus ideas.              </p>

              {/* STEM Icons */}
              <STEMIcons />
            </div>

            {/* Right side - Project card */}
            <div className="w-full md:w-1/2 flex flex-col">
              <ProjectCard
                title="Carrito Robot"
                description="Se llevó a cabo el desarrollo de un carrito robot a control remoto."
                participants={62}
                year={2019}
              />
            </div>
          </div>
        </BorderedContainer>
      </div>
    </section>
  );
};

export default AboutSMALC;
