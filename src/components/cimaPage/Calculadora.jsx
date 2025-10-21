import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import es from "date-fns/locale/es";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Calculadora.css";

const Calculadora = () => {
  const [fechaInicial, setFechaInicial] = useState("");
  const [rangoDias, setRangoDias] = useState(0);
  const [cicloDias, setCicloDias] = useState(0);

  const computeRange = (f, r, c) => {
    let start = f ? new Date(f) : new Date();
    start = new Date(start.getTime() + c * 24 * 60 * 60 * 1000);
    let end = new Date(start.getTime() + r * 24 * 60 * 60 * 1000);
    return [{ startDate: start, endDate: end, key: "selection" }];
  };


  const [displayRange, setDisplayRange] = useState(() =>
    computeRange(fechaInicial, rangoDias, cicloDias)
  );

  return (
    <section className="calculadora-container">
      <h2 className="titulo">Calculadora Menstrual C. I. M. A.</h2>

      <p className="descripcion">
        La menstruación llega normalmente una vez al mes (cada 28-30 días), pero
        para muchas mujeres no es una ciencia exacta. Con esta calculadora
        puedes estimar de forma aproximada la fecha de tu próximo periodo. Solo
        ingresa algunos datos de tu ciclo y obtén una predicción personalizada.
      </p>

      <div className="inputs-container">
  <div className="input-box">
    <label>¿Cuándo inició tu último <br />periodo?</label>
    <div className="input-wrapper">
      <input
        type="date"
        value={fechaInicial}
        onChange={(e) => setFechaInicial(e.target.value)}
        className="input-fecha"
      />
    </div>
  </div>

  <div className="input-box">
  <label>¿Cuánto dura tu periodo <br />normalmente?</label>
  <div className="input-wrapper">
    <select
      value={rangoDias}
      onChange={(e) => setRangoDias(Number(e.target.value))}
      className="input-numero"
    >
      {[...Array(10)].map((_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
  </div>
</div>

<div className="input-box">
  <label>¿Cuánto dura tu ciclo?</label>
  <div className="input-wrapper">
    <select
      value={cicloDias}
      onChange={(e) => setCicloDias(Number(e.target.value))}
      className="input-numero"
    >
      {[...Array(40)].map((_, i) => (
        <option key={i + 10} value={i + 10}>
          {i + 10}
        </option>
      ))}
    </select>

  </div>
</div>

</div>


      <button
        className="boton-calcular"
        onClick={() => {
          setDisplayRange(computeRange(fechaInicial, rangoDias, cicloDias));
        }}
      >
        Calcula tu próximo periodo
      </button>

            
            <DateRangePicker
              editableDateInputs={false}
              moveRangeOnFirstSelection={false}
              ranges={displayRange}
              locale={es}
              staticRanges={[]}
              inputRanges={[]}
              color="#6D6875"
              onChange={() => {}}
              showDateDisplay={false}
            />
     

      <p className="nota">
        Nota: Esta estimación no sustituye la orientación médica profesional.
      </p>
    </section>
  );
};

export default Calculadora;
