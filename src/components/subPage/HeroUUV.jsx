import uuvImage from "../../assets/uuv.png";
// TODO: replace roboboatLogo with the official RoboSub 2026 logo when available
import roboboatLogo from "../../assets/roboboat logo.png";

const HeroUUV = () => (
    <>
        <section className="relative w-full h-[1150px] flex flex-col justify-between">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={uuvImage}
                    alt="VantTec UUV vehicle"
                    className="w-full h-full object-cover object-bottom" />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 max-w-7xl mx-48 pt-28">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-left">
                    Introducing our<br />
                    autonomous underwater vehicle
                </h1>
            </div>

            {/* Bottom Right — logo */}
            <div className="relative z-10 mx-auto md:pl-44 pb-20 w-full flex justify-end">
                <div className="flex flex-col items-start">
                    <span className="text-2xl md:text-7xl font-semibold text-white italic">
                        for
                    </span>
                    {/* TODO: replace with RoboSub 2026 official logo when available */}
                    <img
                        className="h-44 md:h-72 -mt-16 md:-mt-24"
                        src={roboboatLogo}
                        alt="RoboSub 2026" />
                </div>
            </div>
        </section>

        {/* Stat Chips Row */}
        <div className="w-full flex justify-center gap-4 py-8 bg-[#062a35]">
            {["6 Thrusters", "ROS 2 Humble", "1 Hr Mission"].map((label) => (
                <span
                    key={label}
                    className="border border-[#49C1D2]/30 bg-[#49C1D2]/10 text-[#49C1D2] font-quicksand text-xs uppercase tracking-wide px-4 py-2 rounded-full"
                >
                    {label}
                </span>
            ))}
        </div>

        {/* TODO: add YouTube embed here once the UUV video URL is available */}
    </>
);

export default HeroUUV;
