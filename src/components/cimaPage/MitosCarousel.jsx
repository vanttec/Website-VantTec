import React, { useState } from 'react';
import Flashcard from './Flashcard';
import mitosData from '../../data/mitosData.json';

const MitosCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { mitos } = mitosData;

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mitos.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + mitos.length) % mitos.length);
    };

    const goToCard = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full max-h-[80vh] max-w-6xl mx-auto px-4">
            {/* Navigation buttons */}
            <button
                onClick={prevCard}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200"
                aria-label="Tarjeta anterior"
            >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextCard}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200"
                aria-label="Siguiente tarjeta"
            >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Cards Menu */}
            <div className="overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {mitos.map((mito) => (
                        <div key={mito.id} className="w-full flex-shrink-0 flex justify-center py-8">
                            <Flashcard
                                mito={mito.mito}
                                esVerdad={mito.esVerdad}
                                explicacion={mito.explicacion}
                                detalles={mito.detalles}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
                {mitos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToCard(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                            ? 'bg-purple-500 scale-110'
                            : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Ir a tarjeta ${index + 1}`}
                    />
                ))}
            </div>

            {/* Card counter */}
            <div className="text-center mt-4 text-gray-600">
                <span className="text-sm">
                    {currentIndex + 1} de {mitos.length}
                </span>
            </div>
        </div>
    );
};

export default MitosCarousel;