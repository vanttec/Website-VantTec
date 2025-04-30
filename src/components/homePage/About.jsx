import React from 'react';
import { motion } from 'framer-motion';
import {home_aboutus_images, home_about_us_companies_images} from "../../constants/index.js";
import { Trophy, Users, FileText, Award } from 'lucide-react';
import Carousel from "../shared/Carousel.jsx";
import arrow from "../../assets/arrow.svg";
import DecryptedText from '../shared/DecryptedText.jsx';

const BigStats = () => {

   
    const stats = [
        {
            icon: <Award className="w-8 h-8 text-blue-600 opacity-80" />,
            number: "7",
            label: "International Competitions"
        },
        {
            icon: <Trophy className="w-8 h-8 text-blue-600 opacity-80" />,
            number: "18",
            label: "International Awards"
        },
        {
            icon: <Users className="w-8 h-8 text-blue-600 opacity-80" />,
            number: "73",
            label: "Members"
        },
        {
            icon: <FileText className="w-8 h-8 text-blue-600 opacity-80" />,
            number: "12",
            label: "Papers Published"
        },

    ];

    return (
        <div className="grid grid-cols-2 gap-4 mt-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="bg-white/5 rounded-xl p-4 flex items-center space-x-4 border border-white/10"
                >
                    {stat.icon}
                    <div>
                        <p className="text-2xl font-semibold tracking-tight text-white">{stat.number}</p>
                        <p className="text-sm text-gray-400 font-light">{stat.label}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const FirstCarousel = () => (
    <Carousel images={home_aboutus_images} slidesToShow={1} height={"500px"} arrows={false} autoplay={true} autoplaySpeed={3000} speed={400} isHoverable={true} objectFit={true}></Carousel>
);

const SecondCarousel = () => (
    <div className="flex-row">
        <h1 className="text-4xl md:text-3xl tracking-tight mb-5">
            Previous Members Whereabouts
        </h1>
        <Carousel images={home_about_us_companies_images} isHoverable={true} arrows={false} autoplay={true} autoplaySpeed={0} speed={7000} slidesToShow={7}
                  height={"80px"} objectFit={false} cssEase={"linear"}></Carousel>
    </div>
);

const Achievements = () => {
    const achievementData = [
        {
            title: "Mission",
            description: "Participate annually in RoboNation competitions, developing research projects that promote science and technology in autonomous vehicles."
        },
        {
            title: "Vision",
            description: "To be a leading innovator in autonomous vehicles in Mexico, inspiring young researchers and showcasing national technological capabilities."
        },
        {
            title: "Values",
            description: [
                "Respect and collaboration",
                "Unlimited creativity",
                "Knowledge sharing",
                "Passion and inspiration",
                "Commitment to excellence"
            ]
        }
    ];

    return (
        <div className="space-y-6">
            {achievementData.map((achievement, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                    <h3 className="text-2xl font-semibold text-white mb-3">{achievement.title}</h3>
                    {Array.isArray(achievement.description) ? (
                        <ul className="list-disc pl-5 text-gray-300 space-y-1">
                            {achievement.description.map((item, idx) => (
                                <li key={idx} className="text-sm font-light">{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-300 font-light">{achievement.description}</p>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

const scrollToSection = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const targetScroll = currentScroll + 1000; 

    window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
    });
};
const About = () => {
    return (
        <> 
        <section id="about"> 
        <div className="min-h-screen text-white flex flex-row justify-center items-center w-full">
            <div className="container mx-auto px-4 py-12 space-y-16">
                {/* First Row: Text (Mobile First - Stacked) */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center">
                        <div className="text-4xl md:text-3xl tracking-tight mb-4">
                        <DecryptedText text="About Us!" animateOn="view" revealDirection="center" speed={200}/>
                        </div>
                        <div className="text-xl text-gray-300 font-light mb-6 leading-relaxed">
                        <DecryptedText text=" Pioneering autonomous vehicle technology with innovation, research, and passion. We're not just building vehicles; we're shaping the future of transportation." 
                        animateOn="view" revealDirection="center" speed={200}/>
                        </div>

                        <BigStats />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <FirstCarousel />
                    </motion.div>
                </div>

                {/* Second Row: Achievements */}
                {/*<motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Achievements />
                </motion.div>*/}

                {/* Third Row: Second Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <SecondCarousel />
                </motion.div>
            <div className="flex justify-center"> 
                <a onClick={scrollToSection}>
                    <div className='w-[48px] h-[48px] rounded-[10px] 
                        bg-gradient-to-r from-blue-500 via-indigo-500 
                        to-cyan-500 flex justify-center items-start p-[2px] 
                        hover:shadow-lg hover:shadow-purple-600/30'>
                        <div className='flex h-full w-full items-center 
                        justify-center rounded-[10px] bg-primary'>
                        <motion.div 
                            animate={{
                            y: [0, -10, 0],
                            }}
                            transition={{
                            duration: 3, 
                            repeat: Infinity, 
                            repeatType: "loop",
                            }}
                        >
                            <img src={arrow} alt="Flecha hacia abajo" className="" />
                        </motion.div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
        </section>

        
                </>
    );
};

export default About;