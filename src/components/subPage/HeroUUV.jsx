import submarineImage from "../../assets/uuv.png";

// TODO: Replace with the official RoboSub logo once available
// Place the logo file in src/assets/ and update the import below
// import robosubLogo from "../../assets/robosub logo.png";

const HeroUUV = () => (
    <>
        <section className="relative w-full h-[1150px] flex flex-col justify-between">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={submarineImage}
                    alt="UUV Background"
                    className="w-full h-full object-cover object-center" />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Top-left Text */}
            <div className="relative z-10 max-w-7xl mx-48 pt-28">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-left">
                    Introducing our<br />unmanned underwater vehicle
                </h1>
            </div>

            {/* Bottom Right: competition name + logo placeholder */}
            <div className="relative z-10 mx-auto md:pl-44 pb-20 w-full flex justify-end">
                <div className="flex flex-col items-start">
                    <span className="text-2xl md:text-5xl font-semibold text-white italic mr-16">
                        for
                    </span>
                    {/*
                      TODO: Replace the text below with the actual RoboSub logo image.
                      Example:
                        <img className="h-44 md:h-72 -mt-16 md:-mt-24 mr-16" src={robosubLogo} alt="robosub" />
                    */}
                    <span className="text-4xl md:text-7xl font-bold text-white mr-16 -mt-2">
                        RoboSub
                    </span>
                </div>
            </div>
        </section>

        {/* YouTube embed — replace the src URL with the UUV video */}
        {/* TODO: Replace the YouTube embed ID with the actual UUV competition/promo video */}
        <div className="w-full px-8 md:px-16 py-16 bg-black/20">
            <div className="flex justify-center">
                <iframe
                    width="1500"
                    height="615"
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

export default HeroUUV;
