import uuvImage from "../../assets/uuv.png";
import robosubLogo from "../../assets/robosub-logo_vert.png";

const HeroUUV = () => (
    <>
        <section className="relative w-full h-[1150px] flex flex-col justify-between">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={uuvImage}
                    alt="VantTec UUV vehicle"
                    className="w-full h-full object-cover object-[50%_68%]" />
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
                    <img
                        className="h-44 md:h-72 -mt-16 md:-mt-24"
                        src={robosubLogo}
                        alt="RoboSub 2026" />
                </div>
            </div>
        </section>

        <div className="w-full px-8 md:px-16 py-16 bg-black/20">
            <div className="flex justify-center">
                <iframe
                    width="1500"
                    height="615"
                    src="https://www.youtube.com/embed/3iM_kpgSQis?si=7s5Sz2x0mStI8fRS"
                    title="UUV video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg"
                ></iframe>
            </div>
        </div>
    </>
);

export default HeroUUV;
