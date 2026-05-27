const stats = [
  { number: "2026",  label: "Competition Year"      },
  { number: "6 DoF", label: "Full vehicle control"  },
  { number: "FSM",   label: "Modular mission logic" },
];

const StatHighlight = ({ number, label }) => (
  <div>
    <p className="font-urbanist text-4xl font-medium text-uuv-cyan">{number}</p>
    <p className="font-quicksand text-white/50 text-xs uppercase tracking-widest mt-1">{label}</p>
  </div>
);

const UUVStrategy = () => (
  <section className="w-full bg-uuv-dark px-6 md:px-16 py-12 md:py-16">
    <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto text-center md:text-left">

      {/* ── Left: text block ── */}
      <div className="flex-1">
        <p className="font-quicksand text-uuv-orange text-xs uppercase tracking-widest mb-3">
          Competition Strategy
        </p>
        <h2 className="font-urbanist text-3xl md:text-4xl text-white font-medium mb-4">
          Reliability First
        </h2>
        <p className="font-nunito text-white/70 text-base leading-relaxed max-w-prose mx-auto md:mx-0">
          As first-time physical participants in RoboSub, VantTec&apos;s primary
          objective is to validate the reliability of our vehicle architecture,
          autonomous navigation system, and underwater control algorithms under
          real competition conditions. Our strategy prioritizes consistent,
          stable execution of fundamental tasks over aggressive scoring.
        </p>
      </div>

      {/* ── Vertical divider (desktop only) ── */}
      <div className="w-px bg-uuv-cyan/20 self-stretch mx-8 hidden md:block" />

      {/* ── Right: stat highlights ── */}
      <div className="flex-1 flex flex-col gap-6 mt-8 md:mt-0 md:pl-16 items-center md:items-start">
        {stats.map((s) => (
          <StatHighlight key={s.number} {...s} />
        ))}
      </div>

    </div>
  </section>
);

export default UUVStrategy;
