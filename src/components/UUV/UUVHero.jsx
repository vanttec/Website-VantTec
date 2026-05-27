/**
 * UUVHero.jsx
 * Hero section for the /uuv page.
 *
 * TODO – vehicle photo:
 *   When the photo is ready, add it to src/assets/ and swap the placeholder divs:
 *     import vehicleImg from "../../assets/<file>.<ext>";
 *     Replace <ImagePlaceholder /> with:
 *       <img src={vehicleImg} alt="VantTec UUV vehicle" className="w-full h-full object-cover" />
 */

const StatChip = ({ label }) => (
  <span className="border border-uuv-cyan/30 bg-uuv-cyan/10 text-uuv-cyan font-quicksand text-xs uppercase tracking-wide px-3 py-1.5 rounded-full">
    {label}
  </span>
);

const ImagePlaceholder = ({ className = "" }) => (
  <div className={`bg-uuv-dark flex items-center justify-center ${className}`}>
    <span className="text-uuv-cyan/40 font-quicksand text-sm uppercase tracking-widest">
      Vehicle photo coming soon
    </span>
  </div>
);

const stats = ["6 Thrusters", "ROS 2 Humble", "1 Hr Mission"];

const UUVHero = () => (
  <section className="w-full overflow-x-hidden">

    {/* ── MOBILE (default → hidden at md) ── */}
    <div className="md:hidden">
      <ImagePlaceholder className="w-full h-64" />

      <div className="px-6 pt-6 pb-10 bg-uuv-darker">
        {/* Badge */}
        <span className="inline-block bg-uuv-orange text-white font-quicksand text-xs uppercase tracking-widest px-3 py-1 rounded-full">
          RoboSub 2026
        </span>

        {/* Vehicle name */}
        <h1 className="font-urbanist text-4xl font-medium text-white mt-3 leading-tight">
          [UUV NAME]
        </h1>

        {/* Subheading */}
        <p className="font-nunito text-white/60 text-sm mt-2">
          Autonomous Underwater Vehicle — Tecnológico de Monterrey
        </p>

        {/* Stat chips */}
        <div className="flex flex-wrap gap-2 mt-4">
          {stats.map((s) => (
            <StatChip key={s} label={s} />
          ))}
        </div>
      </div>
    </div>

    {/* ── DESKTOP (hidden → flex at md) ── */}
    <div className="hidden md:flex flex-row">
      {/* Left — image placeholder */}
      <ImagePlaceholder className="w-1/2 min-h-[500px]" />

      {/* Right — text panel */}
      <div className="w-1/2 bg-uuv-deep flex flex-col justify-center px-12 py-16">
        {/* Badge */}
        <span className="inline-block self-start bg-uuv-orange text-white font-quicksand text-xs uppercase tracking-widest px-3 py-1 rounded-full">
          RoboSub 2026
        </span>

        {/* Vehicle name */}
        <h1 className="font-urbanist text-5xl lg:text-6xl font-medium text-white mt-3 leading-tight">
          [UUV NAME]
        </h1>

        {/* Subheading */}
        <p className="font-nunito text-white/60 text-sm mt-2">
          Autonomous Underwater Vehicle — Tecnológico de Monterrey
        </p>

        {/* Stat chips */}
        <div className="flex flex-row gap-3 mt-6 flex-wrap">
          {stats.map((s) => (
            <StatChip key={s} label={s} />
          ))}
        </div>
      </div>
    </div>

  </section>
);

export default UUVHero;
