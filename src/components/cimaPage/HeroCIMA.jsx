import { CIMA_Hero_img } from '../../assets';

const HeroCIMA = () => (
    <section className="relative flex items-center min-h-[100vh] overflow-hidden">
        {/* Left side - Text content */}
        <div className="relative z-10 w-1/2 pl-24 py-16">
            <div className='mb-6'>
                <h1 className="text-[56px] font-bold m-0 font-nunito text-gray-800 tracking-wide leading-tight">
                    C. I. M. A.
                </h1>
                <p className='text-[20px] mb-10 max-w-2xl text-[#6D6875] leading-relaxed font-semibold'>
                    Campaña Informativa de Menstruación y Autocuidado
                </p>
            </div>
            <p className="text-[28px] mb-10 max-w-xl text-[#6D6875] leading-relaxed font-semibold">
                Con apoyo de la tecnología, transformamos la educación menstrual en una experiencia interactiva que empodera y cuida tu bienestar.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
                <button className="relative px-8 py-3 bg-white text-gray-800 rounded-xl font-semibold text-[24px] hover:bg-gray-50 transition-all duration-300 shadow-lg border-3 border-transparent" style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #FFB5A7 0%, #E8A4C7 30%, #D093D4 70%, #8E7AB5 100%) border-box' }}>
                    Habla con CIMA
                </button>
                <button className="px-8 py-3 bg-[#FFB5A7] text-gray-800 rounded-xl font-semibold text-[24px] shadow-lg">
                    Conoce más
                </button>
            </div>
        </div>

        {/* Right side - Image */}
        <div className="absolute right-0 top-0 w-full h-full flex items-center justify-end pr-0">
            <img
                src={CIMA_Hero_img}
                alt="CIMA Hero"
                className="h-[95vh] w-auto object-contain scale-110"
            />
        </div>
    </section>
);

export default HeroCIMA;