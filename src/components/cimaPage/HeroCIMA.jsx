import { CIMA_Hero_img } from '../../assets';

const HeroCIMA = () => (
    <section className="relative flex flex-col md:flex-row items-center min-h-[100vh] overflow-hidden pt-16 md:pt-0">
        {/* Left side - Text content */}
        {/* Text block: on mobile this will overlay the image; on md+ it stays in its column */}
    <div className="z-10 absolute md:relative md:w-1/2 inset-0 md:inset-auto flex items-center justify-center md:block px-6 md:pl-24 py-12 md:py-16 text-center md:text-left">
            <div className="max-w-[1000px] w-full">
                <div className="inline-block bg-white/80 md:bg-transparent rounded-md px-4 py-3 md:px-0 md:py-0">
                    <h1 className="text-4xl md:text-[56px] font-bold m-0 font-nunito text-gray-800 tracking-wide leading-tight">
                        C. I. M. A.
                    </h1>
                    <p className='text-base md:text-[20px] max-w-2xl text-[#6D6875] leading-relaxed font-semibold'>
                        Campaña Informativa de Menstruación y Autocuidado
                    </p>
                </div>

                <p className="text-lg md:text-[28px] mt-4 md:mt-6 mb-6 max-w-xl mx-auto md:mx-0 text-[#6D6875] leading-relaxed font-semibold">
                    Con apoyo de la tecnología, transformamos la educación menstrual en una experiencia interactiva que empodera y cuida tu bienestar.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="w-full md:w-auto relative px-6 py-3 bg-white text-gray-800 rounded-xl font-semibold text-base md:text-[24px] hover:bg-gray-50 transition-all duration-300 shadow-lg border-3 border-transparent" style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #FFB5A7 0%, #E8A4C7 30%, #D093D4 70%, #8E7AB5 100%) border-box' }}>
                        Habla con CIMA
                    </button>
                    <button className="w-full md:w-auto px-6 py-3 bg-[#FFB5A7] text-gray-800 rounded-xl font-semibold text-base md:text-[24px] shadow-lg">
                        Conoce más
                    </button>
                </div>
            </div>
        </div>

        {/* Right side - Image */}
        <div className="relative md:absolute right-0 top-0 w-full md:w-auto h-auto md:h-full flex items-center justify-center md:justify-end pr-0 z-8">
            <img
                src={CIMA_Hero_img}
                alt="CIMA Hero"
                className="w-full md:w-auto h-auto md:h-[95vh] object-cover md:object-contain md:scale-110"
            />
        </div>
    </section>
);

export default HeroCIMA;