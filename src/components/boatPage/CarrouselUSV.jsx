import React, { useState } from "react";
import { usvSlides } from "../../data/usvSlidesData";

const CarouselUSV = ({ slides = usvSlides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        setTouchEnd(e.changedTouches[0].clientX);
        handleSwipe();
    };

    const handleSwipe = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    if (!slides || slides.length === 0) {
        return <div className="text-white">No slides available</div>;
    }

    const slide = slides[currentSlide];

    return (
        <div className="w-full bg-gradient-to-r from-gray-800 to-teal-800 ">
            {/* Header Section */}
            <div className="py-8 md:py-16 px-4 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <p className="text-white/70 text-sm md:text-lg font-light mb-2">
                        From Concept to water:
                    </p>
                    <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider">
                        OUR USV JOURNEY
                    </h1>
                </div>
            </div>

            {/* Carousel Section */}
            <div 
                className="w-full pb-8 md:pb-16 px-4 md:px-16"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="relative h-auto md:h-[500px] overflow-hidden rounded-lg">
                        <div
                            className="flex h-full transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(${-currentSlide * 100}%)`,
                            }}
                        >
                            {slides.map((s, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row h-full w-full flex-shrink-0"
                                >
                                    {/* Image - Full width on mobile, Left Half on desktop */}
                                    <div className="w-full md:w-1/2 h-48 md:h-full overflow-hidden">
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content - Full width on mobile, Right Half on desktop */}
                                    <div className="w-full md:w-1/2 flex flex-col justify-between px-4 md:px-12 py-6 md:py-8">
                                        {/* Title */}
                                        <h2 className="text-2xl md:text-5xl font-bold text-white tracking-widest">
                                            {s.title}
                                        </h2>

                                        {/* Bullet Points */}
                                        <ul className="space-y-2 md:space-y-3 flex-1 overflow-y-auto mt-4 md:mt-0">
                                            {s.bullets.map((bullet, bulletIndex) => (
                                                <li key={bulletIndex} className="flex items-start gap-2 md:gap-3">
                                                    <span className="text-white text-lg md:text-xl mt-0.5 flex-shrink-0">•</span>
                                                    <p className="text-white text-xs md:text-xl leading-relaxed">
                                                        {bullet}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mt-8 md:mt-12 gap-4">
                        <button
                            onClick={prevSlide}
                            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex-shrink-0"
                            aria-label="Previous slide"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        {/* Slide Indicators */}
                        <div className="flex gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide
                                        ? "bg-white"
                                        : "bg-white/40 hover:bg-white/60"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex-shrink-0"
                            aria-label="Next slide"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselUSV;
