import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, BookOpen, Users } from "lucide-react";
import aboutImg from "../../assets/AboutCIMA.png";
import gyoImg from "../../assets/GYO.jpeg";

const AboutCIMA = () => (
  <>
    <section className="flex flex-col md:flex-row min-h-[60vh] p-6 md:p-8 pb-0 text-center md:text-left items-center">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
        <img src={aboutImg} alt="CIMA Logo" className="max-w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
        <h2 className="font-nunito text-3xl font-bold text-[#8E7AB5] mb-4">¿Por qué lo Hacemos?</h2>
        {/* Lista con iconos */}
        <ul className="text-base md:text-lg max-w-2xl text-[#6D6875] space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 mt-1 text-[#8E7AB5]" />
            <span>
              Información confiable y accesible sobre el ciclo menstrual, pensada para niñas y jóvenes.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 mt-1 text-[#8E7AB5]" />
            <span>
              Romper tabúes y fomentar el diálogo abierto en escuelas y comunidades.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <Users className="w-5 h-5 mt-1 text-[#8E7AB5]" />
            <span>
              Empoderamiento para tomar decisiones informadas y confianza en el autocuidado.
            </span>
          </li>
        </ul>
      </div>
    </section>

    {/* Sección de la asociación estudiantil */}
    <section className="flex flex-col md:flex-row min-h-[40vh] p-6 md:p-8 pt-0 items-center">
      <div className="w-full md:w-1/2 md:pl-24 flex flex-col justify-center text-left">
        <h2 className="font-nunito text-3xl font-bold text-[#8E7AB5] mb-4">En asociación con la Asociación estudiantil de Ginecología y Obstetricia</h2>
        <p className="text-lg max-w-2xl text-[#6D6875]">
          La Asociación estudiantil de Ginecología y Obstetricia tiene como objetivo formar futuros profesionales de la salud del ITESM que promuevan la salud integral de la mujer y garanticen los derechos de las mujeres durante todas sus etapas reproductivas, además, informamos y educamos a las mujeres de la comunidad acerca de su salud sexual y reproductiva para garantizar su pleno desarrollo a través de actividades académicas.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
        <div className="w-3/4 md:w-1/2 bg-gray-100 rounded-md flex items-center justify-center">
          <img src={gyoImg} alt="Logo" className="max-w-full max-h-full object-contain" />
        </div>
      </div>
    </section>
  </>
);

export default AboutCIMA;
