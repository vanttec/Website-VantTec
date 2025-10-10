import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { DateRangePicker } from "react-date-range";
import es from "date-fns/locale/es";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Calculadora.css";

const Calculadora = () => {
  const [fechaInicial, setFechaInicial] = useState("");
  const [rangoDias, setRangoDias] = useState(0);
  const [cicloDias, setCicloDias] = useState(0);

 
  let startDate = fechaInicial ? new Date(fechaInicial) : new Date();
  startDate = new Date(startDate.getTime() + cicloDias * 24 * 60 * 60 * 1000);
  let endDate = new Date(startDate.getTime() + rangoDias * 24 * 60 * 60 * 1000);

  const range = [
    {
      startDate,
      endDate,
      key: "selection",
    },
  ];

  return (
  <section className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
    <h2 className="text-3xl font-nunito font-bold text-[#6D6875] mb-4">Calculadora Menstrual</h2>
    <p className="text-lg max-w-2xl text-[#6D6875] mb-6">
      La menstruación llega normalmente una vez al mes (cada 28-30 días), pero para muchas mujeres no es una ciencia exacta. Con esta calculadora puedes estimar de forma aproximada la fecha de tu próximo periodo. Solo ingresa algunos datos de tu ciclo y obten una predicción personalizada.
    </p>
    {/* Componente de la calculadora menstrual pendiente */}
    <div className="apartado">
      <h2 className="text-[#6D6875]">Llena la información</h2>
      <div className="text-[#6D6875]">
        <label className="text-[#6D6875]">
          Fecha inicial:
          <input
            type="date"
            value={fechaInicial}
            onChange={e => setFechaInicial(e.target.value)}
            className="input-fecha"
          />
        </label>
        <label>
          Rango de días:
          <input
            type="number"
            value={rangoDias}
            onChange={e => setRangoDias(Number(e.target.value))}
            className="input-fecha"
            min={0}
          />
        </label>
        <label>
          Ciclo de días:
          <input
            type="number"
            value={cicloDias}
            onChange={e => setCicloDias(Number(e.target.value))}
            className="input-fecha"
            min={0}
          />
        </label>
      </div>
      
      <DateRangePicker
        editableDateInputs={false}
        moveRangeOnFirstSelection={false}
        ranges={range}
        locale={es}
        staticRanges={[]}    
        inputRanges={[]}
      />

      <p className="rat">
        Rango resaltado: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
      </p>
    </div>
  </section>
  );
};

export default Calculadora;
