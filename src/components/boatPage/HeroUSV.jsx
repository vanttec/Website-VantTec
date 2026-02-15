import { boat_backdrop1, boat_backdrop2 } from "../../assets";

const HeroUSV = () => (
  <>
    {/* Hero Section */}
    <section
      className="relative w-full min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${boat_backdrop1})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col justify-between h-full min-h-screen px-8 md:px-16 py-12 md:py-20">
        {/* Main heading */}
        <div className="max-w-8xl mt-12 md:mt-24">
          <h1 className="font-quicksand text-white text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
            Introducing our
            <br />
            Unmanned Surface Vehicle
          </h1>
        </div>

        {/* "for roboboat" */}
        <div className="self-end flex items-end gap-3 mb-8">
          <span className="text-white text-3xl md:text-5xl italic font-quicksand font-light">
            for
          </span>
          <span className="text-white text-3xl md:text-5xl font-nunito font-bold tracking-wider uppercase">
            RoboBoat
          </span>
        </div>
      </div>
    </section>

    {/* Team Introduction Video Banner TODO*/}
    <section
      className="relative w-full py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${boat_backdrop2})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center">
        <h2 className="font-quicksand text-[#d4a017] text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] text-center uppercase">
          Team Introduction Video
        </h2>
      </div>
    </section>
  </>
);

export default HeroUSV;
