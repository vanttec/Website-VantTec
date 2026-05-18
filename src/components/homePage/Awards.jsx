import React from 'react'; // Import React for component creation
import { awards_us_images } from '../../constants/index.js'; // Import image data from constants file
import Carousel from '../shared/Carousel.jsx'; // Import the custom Carousel component
import { motion } from 'framer-motion';
import { Medal } from 'lucide-react';

/**
 * Awards Component
 * Displays a carousel of Vanntec participants
 * Uses predefined images from constants to showcase research papers
 * @returns {JSX.Element} Rendered Research component with carousel
 */
const FirstCarousel = () => (
  <Carousel images={awards_us_images} slidesToShow={1} height={"700px"} arrows={false} autoplay={true} autoplaySpeed={3000} speed={400} isHoverable={true} objectFit={true}></Carousel>
);
const Awards = () => {
  return (
    <> 
    <section id="awards"> 
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-white font-thin mb-6 text-center">
            Awards
      </h2>
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          {/* Carousel on the left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <FirstCarousel />
          </motion.div>

          {/* Text content on the right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Award Section */}
            <div className="space-y-4">
                <Medal className="w-9 h-9 text-yellow-600 opacity-80 mr-2" /> 
                <p className="text-lg text-gray-300 font-light">
                  <strong className="font-extrabold text-xl">2021:</strong> Award for professional students in the Rómulo Garza ceremony.
                </p>
                <p className="text-lg text-gray-300 font-light">
                <strong className="font-extrabold text-xl">2020:</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>1st place in the competition with a $3,000 prize.</li>
                  <li>1st place in the technical report design.</li>
                  <li>1st place in the introduction video.</li>
                  <li>1st place in the website.</li>
                  <li>Special award in the Testing on the Horizon category.</li>
                </ul>
              </p>
              <p className="text-lg text-gray-300 font-light">
                <strong className="font-extrabold text-xl">2018:</strong> Special Award for Engineering Integrity.
              </p>
              <p className="text-lg text-gray-300 font-light">
                <strong className="font-extrabold text-xl">2017:</strong> Special Award for Drone Award.
              </p>
                <Medal className="w-9 h-9 text-gray-600 opacity-80 mr-2" />
                <p className="text-lg text-gray-300 font-light">
                  <strong className="font-extrabold text-xl">2024:</strong> Special Persistence Award from RoboNation.
                </p>

                <Medal className="w-9 h-9 text-white opacity-40 mr-2" />
                <p className="text-lg text-gray-300 font-light">
                  <strong className="font-extrabold text-xl">2024:</strong> VantTec had the honor of being finalists in the 24-hour Xignux Challenge.
                </p>
              <p className="text-lg text-gray-300 font-light">
                <strong className="font-extrabold text-xl">2019:</strong> 5th place in the Robonations competition.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
};


export default Awards; // Export the Awards component
