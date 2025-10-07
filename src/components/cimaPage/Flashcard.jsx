import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

const Flashcard = ({ mito, esVerdad, explicacion, detalles }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="relative w-80 h-96 mx-4 perspective-1000">
            <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''
                    }`}
                onClick={handleFlip}
            >
                {/* Carta Frontal - Mito */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-200">
                    <div className="text-center">
                        <div className="text-6xl mb-4">🤔</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                            {mito}
                        </h3>
                        <p className="text-sm text-gray-600 mt-auto">
                            Toca para revelar la respuesta
                        </p>
                    </div>
                </div>

                {/* Carta Trasera - Respuesta */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center ${esVerdad
                    ? 'bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-300'
                    : 'bg-gradient-to-br from-red-100 to-pink-100 border-2 border-red-300'
                    }`}>
                    <div className="text-center h-full flex flex-col justify-center">
                        <div className="text-6xl mb-4">
                            {esVerdad ? '✅' : '❌'}
                        </div>
                        <h3 className={`text-2xl font-bold mb-4 ${esVerdad ? 'text-green-700' : 'text-red-700'
                            }`}>
                            {esVerdad ? 'VERDAD' : 'MENTIRA'}
                        </h3>
                        <p className="text-lg font-semibold text-gray-800 mb-3">
                            {explicacion}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {detalles}
                        </p>
                        <div className="mt-4 p-2 rounded-full">
                            <RefreshCw className="w-8 h-8 text-gray-500 mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;