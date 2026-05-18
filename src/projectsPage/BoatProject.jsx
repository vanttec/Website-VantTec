import React from 'react';
import Carousel from '../components/shared/Carousel';
import {home_aboutus_images, tabsDataBoat} from "../constants/index.js";
import HeroUSV from '../components/boatPage/HeroUSV.jsx';
import TeamUSV from '../components/boatPage/TeamUSV.jsx';
import SponsorsUSV from '../components/boatPage/SponsorsUSV.jsx';
import TabsComponent from '../components/shared/Tabs.jsx';
import VideoCarousel from '../components/shared/VideoCarousel.jsx';

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


const FirstCarousel = () => (
  <Carousel images={home_aboutus_images} slidesToShow={1} height={"500px"} arrows={false} autoplay={true} autoplaySpeed={3000} speed={400} isHoverable={true} objectFit={true}></Carousel>
);

const BoatProject = () => {
  return (
     <div className="min-h-screen bg-black text-white">
        <HeroUSV />
        <TeamUSV />
        <SponsorsUSV />
  </div>

    )
};

export default BoatProject;