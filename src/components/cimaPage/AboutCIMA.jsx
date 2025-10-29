import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, BookOpen, Users } from "lucide-react";

const AboutCIMA = () => (
  <>
    <section className="flex flex-row min-h-[60vh] p-8 pb-0 text-center">
      <div className="w-1/2">
        <img
          src="src\assets\AboutCIMA.png"
          alt="CIMA Logo"
        />
      </div>
      <div className="w-1/2 pl-8 flex flex-col justify-center">
        <h2 className="font-nunito text-3xl font-bold text-[#8E7AB5] mb-4">¿Por qué lo Hacemos?</h2>
        {/* Lista con iconos */}
        <ul className="text-lg max-w-2xl text-[#6D6875] space-y-3">
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
    <section className="flex flex-row min-h-[40vh] p-8 pt-0">
      <div className="w-1/2 pl-24 flex flex-col justify-center text-left">
        <h2 className="font-nunito text-3xl font-bold text-[#8E7AB5] mb-4">En asociación con la Asociación estudiantil de Ginecología y Obstetricia</h2>
        <p className="text-lg max-w-2xl text-[#6D6875]">
          La Asociación estudiantil de Ginecología y Obstetricia tiene como objetivo formar futuros profesionales de la salud del ITESM que promuevan la salud integral de la mujer y garanticen los derechos de las mujeres durante todas sus etapas reproductivas, además, informamos y educamos a las mujeres de la comunidad acerca de su salud sexual y reproductiva para garantizar su pleno desarrollo a través de actividades académicas.
        </p>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="w-1/2 bg-gray-100 rounded-md flex items-center justify-center">
          <img src="src/assets/GYO.jpeg" alt="Logo" className="max-w-full max-h-full object-contain" />
        </div>
      </div>
    </section>
  </>
);

export default AboutCIMA;
