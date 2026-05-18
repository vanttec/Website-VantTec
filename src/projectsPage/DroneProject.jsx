import React from 'react';
import { motion } from 'framer-motion';
import {home_aboutus_images, tabsDataDrone, carrousel2drone} from "../constants/index.js";
import { Trophy, Users, FileText, Award } from 'lucide-react';
import Carousel from '../components/shared/Carousel';
import {home_about_us_companies_images, projects_blog_boat} from "../constants/index.js";
import VideoCarousel from '../components/shared/VideoCarousel.jsx';
import TabsComponent from '../components/shared/Tabs.jsx';  


const videoList = [
  {
    src: "/videos/1_boat.mov",
    poster: "/videos/17sept2.jpg",
    title: "Back to Basics",
  },
  {
    src: "/videos/2_boat.mov",
    poster: "/videos/18sept1.jpg",
    title: "An Unexpected Surprise",
  },
  {
    src: "/videos/3_boat.mov",
    poster: "/videos/20sept1.jpg",
    title: " Mapping New Possibilities",
  },
  {
    src: "/videos/4_boat.mov",
    poster: "/videos/5sept2.jpg",
    title: "The Hull—A Fresh Start",
  }, {
    src: "/videos/5_boat.mov",
    poster: "/videos/27nov1.jpg",
    title: " Reinforcing for Resilience",
  }, {
    src: "/videos/7_boat.mov",
    poster: "/videos/11dic1.jpg",
    title: "Testing and Triumphs",
  }
];

const FirstCarouselDrone = () => (
  <Carousel images={home_aboutus_images} slidesToShow={1} height={"500px"} arrows={false} autoplay={true} autoplaySpeed={3000} speed={400} isHoverable={true} objectFit={true}></Carousel>
);

const SecondCarouselDrone = () => (
  <Carousel images={carrousel2drone} slidesToShow={2} height={"400px"} arrows={false} autoplay={true} autoplaySpeed={3000} speed={400} isHoverable={true} objectFit={true}></Carousel>
);


const DroneProject = () => {
  return (
    <div className="min-h-screen bg-black text-white p-9 md:p-20">
    <FirstCarouselDrone />
    <div className="max-w-7xl mx-auto">
      <div className="space-y-12">
        <h1 className="py-8 text-5xl md:text-6xl font-bold">Drone</h1>
          <p className="text-gray-300 leading-relaxed text-justify">
          The drone project focuses on creating solutions based on autonomous drones, such as package delivery, and participating in competitions like the Mexican Robotics Tournament.
          </p>
      </div>
    <div className="mt-16 space-y-8">
    {/*
      <h2 className="text-3xl font-bold">History</h2>
        <CardProject
          projects={projects_blog_boat}
          height="250px"
          isHoverable={true}
          objectFit="cover"
          cssEase="ease-in-out"
        />
    */}
      
      <SecondCarouselDrone />
       
      <TabsComponent tabs={tabsDataDrone} />
    
       
    
  </div>
</div>
</div>

)
};


export default DroneProject;