import { Routes, Route } from "react-router-dom";

import { About, Projects, Hero, Navbar, Research, Awards, Sponsors, Footer } from "./components";
import BoatProject from "./projectsPage/BoatProject"; // Adjust path based on your folder structure
import DroneProject from "./projectsPage/DroneProject";
import SubmarineProject from "./projectsPage/SubmarineProject";
import SDVProject from "./projectsPage/SDVProject";
import InfiniteMenu from "./components/shared/InfiniteMenu";
import ContactUs from "./components/homePage/ContactUs";

import {
  sdv,
  drone,
  boat,
  submarine,
  juanito,
  maria,
  pedro,
  ana,
} from "./assets";
 

const App = () => {

  const items = [
    {
      image: sdv,
      link: "/Submarine",
      title: 'SDV',
      description: 'Automotive excellence meets self-driving technology.'
     },
      {
        image: drone,
        link: "/Drone",
        title: 'SWARM & UAV',
        description: "Coordinated flight, unparalleled precision."
      },
      {
        image: boat, 
        link: '/Drone',
        title: 'USV',
        description: 'Ready for the most unforgiving waters.'
      },
      {
        image:   submarine,
        link: '/Drone',
        title: 'UUV',
        description: 'Conquer the greatest depths with style and SUB-stance.'
      }
    ];

  return (
    <div className="relative z-0 bg-black">
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div>
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <div
                  className="
                    relative
                    h-[100vh]               /* fallback for desktop */
                    h-[calc(var(--vh)*100)] /* perfect 100% of visible height on mobile */
                  "
                >
                  <InfiniteMenu items={items}/>
                </div>
              </div>
              <About />
              <Projects />
              <Awards />
              <Research />

              <Sponsors />
              <ContactUs />
              <Footer />

              
            </div>
          }
        />
        {/* Boat Project Route */}
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
        {/* Drone Project Route */}
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
        {/* Submarine Project Route */}
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
        {/* SDV Project Route */}
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
      </Routes>
    </div>
  );
};

export default App;
