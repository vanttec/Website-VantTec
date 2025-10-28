import React from "react";
import { Code } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = () => (
  <section className="flex flex-row items-center justify-center min-h-[60vh] bg-[#F8EDE8] p-8 text-center">
    <div className="w-1/2 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl max-w-sm mx-auto font-nunito font-bold text-[#8E7AB5] mb-4">
        Aprende y Crea tu Propia Herramienta
      </h2>
      <p className="text-lg text-[#6D6875] px-6 mb-6">
        Este taller te guía paso a paso para construir tu propia calculadora menstrual en Python. Una forma divertida de aprender programación mientras creas una herramienta útil para tu vida.
      </p>
      <a href="https://github.com/vanttec" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-800 rounded-xl font-semibold text-[18px] hover:bg-gray-50 transition-all duration-300 shadow-lg border-3 border-transparent" style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #FFB5A7 0%, #E8A4C7 30%, #D093D4 70%, #8E7AB5 100%) border-box' }}>
        <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
        <span>Ver código en GitHub</span>
      </a>
    </div>
    <div className="w-1/2">
      <img src="src/assets/logo.svg" alt="Calculadora Menstrual" className="relative px-8 py-3 bg-white text-gray-800 rounded-xl font-semibold text-[24px] hover:bg-gray-50 transition-all duration-300 shadow-lg border-8 border-transparent" style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #FFB5A7 0%, #E8A4C7 30%, #D093D4 70%, #8E7AB5 100%) border-box' }} />
    </div>
  </section>
);

export default Project;
