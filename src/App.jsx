import { Routes, Route } from "react-router-dom";

import { About, Navbar, Research, Awards, Sponsors, Footer } from "./components";
import BoatProject from "./projectsPage/BoatProject";
import DroneProject from "./projectsPage/DroneProject";
import SubmarineProject from "./projectsPage/SubmarineProject";
import SDVProject from "./projectsPage/SDVProject";
import ContactUs from "./components/homePage/ContactUs";
import FooterCIMA from "./components/cimaPage/FooterCIMA";
import Hero from "./components/homePage/Hero";
import Projects from "./components/homePage/Projects";
import HeroCIMA from "./components/cimaPage/HeroCIMA";
import AboutCIMA from "./components/cimaPage/AboutCIMA";
import Calculadora from "./components/cimaPage/Calculadora";
import MitosRealidades from "./components/cimaPage/MitosRealidades";
import Project from "./components/cimaPage/Project";
import HeroSMALC from "./components/smalcPage/HeroSMALC";
import AboutSMALC from "./components/smalcPage/AboutSMALC";
import TestimonialsSMALC from "./components/smalcPage/TestimonialsSMALC";
import WorkshopSMALC from "./components/smalcPage/WorkshopSMALC";

const App = () => {
  return (
    <div className="relative z-0" style={{ backgroundColor: "#020B2D" }}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              
              <Navbar />
              <Hero />
              <Projects />
              <About />
              <Awards />
              <Research />
              <Sponsors />
              <ContactUs />
            </div>
          }
        />
        <Route
          path="/Boat"
          element={
            <div>
              <Navbar />
              <BoatProject />
              <Footer />
            </div>
          }
        />
        <Route
          path="/Drone"
          element={
            <div>
              <Navbar />
              <DroneProject />
              <Footer />
            </div>
          }
        />
        <Route
          path="/Submarine"
          element={
            <div>
              <Navbar />
              <SubmarineProject />
              <Footer />
            </div>
          }
        />
        <Route
          path="/SDV"
          element={
            <div>
              <Navbar />
              <SDVProject />
              <Footer />
            </div>
          }
        />
        <Route
          path="/CIMA"
          element={
            <div className="bg-[#F8EDE8]">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar background={"bg-primary"} />
              </div>
              <HeroCIMA />
              <AboutCIMA />
              <Calculadora />
              <MitosRealidades />
              <Project />
              <FooterCIMA />
            </div>
          }
        />
        <Route
          path="/SMALC"
          element={
            <div style={{
              background: 'radial-gradient(circle at 50% 50%, #0165C5 0%, #01072E 50%, #01072E 100%)',
              backgroundAttachment: 'fixed',
              minHeight: '100vh'
            }}>
              <Navbar background={"bg-slate-900/95"} />
              <HeroSMALC />
              <AboutSMALC />
              <TestimonialsSMALC />
              <WorkshopSMALC />
              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;