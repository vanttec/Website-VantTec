import {
  boat_backdrop2,
  siemens,
  anmark3d,
  always_sunny,
  meca_labs,
} from "../../assets";

const sponsors = [
  { name: "Siemens", logo: siemens },
  { name: "MecaLabs", logo: meca_labs },
  { name: "Anmark 3D", logo: anmark3d },
  { name: "All Ways Sunny", logo: always_sunny },
];

const SponsorsUSV = () => (
  <section
    className="relative w-full py-20 md:py-32 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${boat_backdrop2})` }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

    <div className="relative z-10 px-8 md:px-16 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="font-quicksand text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] uppercase mb-4">
          Navigating the Future
        </h2>
        <p className="font-quicksand text-gray-300 text-lg md:text-xl">
          Made possible by our sponsors
        </p>
      </div>

      {/* Sponsor logos grid */}
      <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="flex items-center justify-center bg-white/10 rounded-xl p-6 md:p-10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-h-16 md:max-h-24 w-auto object-contain brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SponsorsUSV;
