import React from 'react';
import {home_aboutus_images, tabsDataDrone} from "../constants/index.js";
import VideoCarousel from '../components/shared/VideoCarousel.jsx';
import TabsComponent from '../components/shared/Tabs.jsx';  
import Carousel from '../components/shared/Carousel.jsx';


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

const FirstCarouselSubmarine = () => (
  <Carousel images={home_aboutus_images} slidesToShow={1} height={"500px"} arrows={false} autoplay={true} autoplaySpeed={3000} speed={400} isHoverable={true} objectFit={true}></Carousel>
);

const SecondCarouselSubmarine = () => (
  <Carousel images={home_aboutus_images} slidesToShow={2} height={"400px"} arrows={false} autoplay={true} autoplaySpeed={3000} speed={400} isHoverable={true} objectFit={true}></Carousel>
);


const SubmarineProject = () => {
  return (
    <div className="min-h-screen bg-black text-white p-9 md:p-20">
    <FirstCarouselSubmarine />
    <div className="max-w-7xl mx-auto">
      <div className="space-y-12">
        <h1 className="py-8 text-5xl md:text-6xl font-bold">Submarine</h1>
          <p className="text-gray-300 leading-relaxed text-justify">
          The RoboSub UUV project is one of the most challenging and prestigious projects of the student group VantTec at Tecnológico de Monterrey. Its goal is to develop an autonomous underwater vehicle (UUV) capable of competing in the RoboSub competition, organized by RoboNation, which brings together teams from around the world to design autonomous underwater vehicles that must complete a series of tasks underwater.

          This project has been in development for several years, facing complex technological challenges and advancing towards the creation of a high-performance autonomous submarine. The VantTec team has made significant strides in integrating autonomous navigation systems, visual perception, and real-time processing—key elements for success in the competition. The team is currently preparing for the RoboSub 2025 competition, which will take place in August 2025.
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
      <SecondCarouselSubmarine />

      
       
    
  </div>
</div>
</div>

)
};


export default SubmarineProject;