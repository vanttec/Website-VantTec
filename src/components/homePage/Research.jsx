import React from 'react'; // Import React for component creation
import { images } from '../../constants/index.js'; // Import image data from constants file
import Carousel from '../shared/Carousel.jsx'; // Import the custom Carousel component
import CircularGallery from '../shared/CircularGallery.jsx';
/**
 * Research Component
 * Displays a carousel of research publication images
 * Uses predefined images from constants to showcase research papers
 * @returns {JSX.Element} Rendered Research component with carousel
 */
const Research = () => {
    return (
        // Container with responsive padding and centered content
        <> 
        <section id="research"> 
        <div className="container mx-auto px-4 py-8">
            {/* Section title */}
            <h2 className="text-2xl text-white font-thin mb-6 text-center">
                Research Publications on Unmanned Surface Vehicles
            </h2>
            
            <div style={{ height: '600px', position: 'relative' }}>
                  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
            </div>

            {/* Carousel component with custom configuration */}
        
        </div>
        </section>
        </>
    );
};

export default Research; // Export the Research component
