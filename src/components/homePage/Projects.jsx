import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';
import { styles } from "../../styles";
import { DronesCanvas, BoatsCanvas, SdvsCanvas, SubmarinesCanvas } from "../canvas";
import { cardsData } from "../../constants";
import { Slide, Fade } from "react-awesome-reveal";
import { slideIn, fadeIn } from "../../utils/motion";

const AnimatedCard = ({ index, title, img, desc, onViewClick }) => {
  return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div 
          variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
          initial="hidden"
          animate="show" 
          className="w-full p-[1.5px] rounded-lg bg-gradient-to-r 
          from-blue-500 via-indigo-500 to-cyan-500 shadow-card"
        >
          <div 
            className="bg-tertiary rounded-lg overflow-hidden 
            relative group"
          >
            <img src={img} alt={title} className="w-full h-[250px] 
            rounded-lg object-cover" />
              <div className="absolute left-0 top-[-100%] opacity-0 
              group-hover:opacity-100 group-hover:top-0 p-3 w-full 
              h-full bg-black/60 divide-neutral-500 
              group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-2">
                  <Slide cascade>
                    <h1 className="text-2xl font-bold text-white">
                      {title}</h1>
                    <Fade cascade damping={0.05}>
                      <p className="text-sm text-white">{desc}</p>
                    </Fade>
                    <div>
                      <button 
                        onClick={onViewClick}
                        className="text-white border border-white-100 
                        px-3 py-1 rounded-lg hover:bg-black/20 
                        duration-300 text-sm">View</button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </motion.div>
        </Tilt>
      );
};

const Projects = () => {
  const [selectedCanvas, setSelectedCanvas] = useState('drones');
  const [animationKey, setAnimationKey] = useState(0);

  const handleViewClick = (canvasType) => {
    setSelectedCanvas(canvasType);
    setAnimationKey(prevKey => prevKey + 1);
  };

  return (
    <> 
    
    <section id="projects" className="container mx-auto px-4 py-12 space-y-16">
    
    <h1 className="text-2xl text-white font-thin mb-6 text-center">
      Projects
      </h1>
  
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Cards Section */}
        <div className="flex-1 flex flex-wrap justify-center gap-7">
          {cardsData.map((cardData, index) => (
            <AnimatedCard 
              key={cardData.title} 
              index={index} 
              {...cardData} 
              onViewClick={() => handleViewClick(cardData.canvasType)}
            />
          ))}
        </div>
  
        {/* Canvas Section */}
        <div className="flex-1 flex flex-col items-center xl:h-full md:h-[550px] h-[350px]">
          <motion.div 
            key={animationKey}
            variants={slideIn('right', 'tween', 0.2, 1)}
            initial="hidden"
            animate="show"
            className="w-full h-full"
          >
            {selectedCanvas === 'drone' && <DronesCanvas />}
            {selectedCanvas === 'boat' && <BoatsCanvas />}
            {selectedCanvas === 'sdv' &&  <p className="text-white text-center text-lg"> Under construction </p>}
            {selectedCanvas === 'submarine' && <SubmarinesCanvas />}
          </motion.div>
  
          {/* Description Section */}
          <motion.div 
            variants={slideIn('up', 'tween', 0.2, 1)} 
            initial="hidden" 
            animate="show" 
            className="mt-4 text-white text-center flex flex-col gap-4 items-center"
          >
            <p>
              {cardsData.find(card => card.canvasType === selectedCanvas)?.desc}
            </p>
            <div className="w-[100px] h-[48px] rounded-[10px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 flex justify-center items-center p-[2px] hover:shadow-lg hover:shadow-purple-600/30">
              <Link
                to={cardsData.find(card => card.canvasType === selectedCanvas)?.page}
                rel="noopener noreferrer"
                className="text-white h-full w-full flex items-center justify-center rounded-[10px] bg-primary"
              >
                View More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>

  );
}  

export default Projects;