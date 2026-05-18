import React, { useState } from "react";

const VideoCarousel = ({ videos = [], width = "100%", height = "400px" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (videos.length === 0) {
    return <p className="text-center text-gray-500">No videos available.</p>;
  }

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative"
      style={{ width: width, height: height }}
    >
      {/* Video Player */}
      <video
        src={videos[currentIndex].src}
        poster={videos[currentIndex].poster}
        controls
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
        onClick={prevVideo}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
        onClick={nextVideo}
      >
        &#8250;
      </button>

      {/* Video Title */}
      <div className="absolute bottom-5 left-5 text-white text-lg font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
        {videos[currentIndex].title}
      </div>
    </div>
  );
};

export default VideoCarousel;
