import React, { useState, useEffect } from "react";
import {
    usvVideo1,
    usvVideo2,
    usvVideo3,
    usvVideo4,
    usvVideo5,
    usvImage1,
    usvImage2,
    usvImage3,
} from "../../assets";

// Media array - videos and images from assets
const mediaItems = [
    { type: "video", src: usvVideo1 },
    { type: "image", src: usvImage1, duration: 3000 },
    { type: "video", src: usvVideo2 },
    { type: "image", src: usvImage2, duration: 3000 },
    { type: "video", src: usvVideo3 },
    { type: "image", src: usvImage3, duration: 3000 },
    { type: "video", src: usvVideo4 },
    { type: "video", src: usvVideo5 },
];

const VideosUSV = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [blur, setBlur] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const videoRef = React.useRef(null);

    useEffect(() => {
        const currentMedia = mediaItems[currentIndex];

        if (currentMedia.type === "image") {
            // For images, set a timer to move to next slide after duration
            const timer = setTimeout(() => {
                handleNext();
            }, currentMedia.duration);

            return () => clearTimeout(timer);
        } else {
            // For videos, move to next slide when video ends
            const video = videoRef.current;
            if (!video) return;

            const handleVideoEnd = () => {
                handleNext();
            };

            video.addEventListener("ended", handleVideoEnd);
            video.play();

            return () => video.removeEventListener("ended", handleVideoEnd);
        }
    }, [currentIndex]);

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
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
    };

    const handleNext = () => {
        setBlur(10);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
            setBlur(0);
        }, 300);
    };

    const handlePrev = () => {
        setBlur(10);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
            setBlur(0);
        }, 300);
    };

    const currentMedia = mediaItems[currentIndex];

    return (
        <section className="w-full bg-black py-8 md:py-16 px-4 md:px-16">
            <div className="mx-auto">
                {/* Media Container */}
                <div
                    className="relative h-64 md:h-[600px] lg:h-[600px] overflow-hidden rounded-lg bg-black"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Media Display with Blur Transition */}
                    <div
                        className="w-full h-full transition-all duration-300"
                        style={{
                            filter: `blur(${blur}px)`,
                        }}
                    >
                        {currentMedia.type === "video" ? (
                            <video
                                ref={videoRef}
                                src={currentMedia.src}
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <img
                                src={currentMedia.src}
                                alt="USV Media"
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex items-center justify-center gap-2 mt-6">
                    {mediaItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setBlur(10);
                                setTimeout(() => {
                                    setCurrentIndex(index);
                                    setBlur(0);
                                }, 300);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
                                }`}
                            aria-label={`Go to media ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideosUSV;
