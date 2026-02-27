import { barco, roboboatLogo } from "../../assets";

const HeroUSV = () => (
    <>
        <section className="relative w-full h-[1000px] md:h-[1150px] flex flex-col justify-between">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={barco}
                    alt="USV Background"
                    className="w-full h-full object-cover object-bottom" />
                {/* Optional dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 max-w-7xl mx-6 md:mx-48 pt-36 md:pt-28">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-left leading-tight md:leading-normal">
                    Introducing our<br />unmanned surface vehicle
                </h1>
            </div>

            {/* Bottom Right Text */}
            <div className="relative z-10 mx-auto md:pl-44 pb-16 md:pb-20 w-full flex justify-end pr-4 md:pr-0">
                <div className="flex flex-col items-start">
                    <span className="text-lg md:text-7xl font-semibold text-white italic">
                        for
                    </span>
                    <img className="h-20 md:h-72 -mt-6 md:-mt-24" src={roboboatLogo} alt="roboboat" />
                </div>
            </div>
        </section><div className="w-full px-4 md:px-16 py-8 md:py-16 bg-black/20">
            <div className="flex justify-center overflow-x-auto">
                <iframe
                    width="100%"
                    height="auto"
                    style={{ aspectRatio: "16 / 9", minHeight: "200px", maxWidth: "1500px" }}
                    src="https://www.youtube.com/embed/sU8FpylVm00"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg"
                ></iframe>
            </div>
        </div>
    </>
);

export default HeroUSV;
