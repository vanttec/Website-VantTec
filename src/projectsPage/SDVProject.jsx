import React from 'react';
import {home_aboutus_images, tabsDataSDV, carrousel2sdv} from "../constants/index.js";
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

const FirstCarouselSDV = () => (
  <Carousel images={home_aboutus_images} slidesToShow={1} height={"500px"} arrows={false} autoplay={true} autoplaySpeed={3000} speed={400} isHoverable={true} objectFit={true}></Carousel>
);

const SecondCarouselSDV = () => (
  <Carousel images={carrousel2sdv} slidesToShow={2} height={"400px"} arrows={false} autoplay={true} autoplaySpeed={3000} speed={400} isHoverable={true} objectFit={true}></Carousel>
);

const SDVProject = () => {
  return (
    <div className="min-h-screen bg-black text-white p-9 md:p-20">
    <FirstCarouselSDV />
    <div className="max-w-7xl mx-auto">
      <div className="space-y-12">
        <h1 className="py-8 text-5xl md:text-6xl font-bold">SDV</h1>
          <p className="text-gray-300 leading-relaxed text-justify">
          We proudly present a fully electric, Level 3 autonomous vehicle, designed and programmed by talented students at Tec de Monterrey. This cutting-edge project integrates advanced control algorithms and a sensor system, including Lidar and cameras, to detect obstacles and navigate precisely within lanes. Built for autonomous tours around campus, it showcases the potential of our students in developing smart and sustainable mobility technologies, turning ideas into real-world solutions.

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
       <SecondCarouselSDV />
      <TabsComponent tabs={tabsDataSDV} />
    
       
    
  </div>
</div>
</div>

)
};


export default SDVProject;