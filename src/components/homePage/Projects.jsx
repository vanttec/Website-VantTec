import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { boat, submarine, sdv, swarm, uav } from "../../assets";

const projects = [
  {
    img: boat,
    title: "USV",
    subtitle: "Unmanned Surface Vehicle",
    desc: "We don't just program routes, we design the electronic architecture and control algorithms that allow our USV to process its environment and make real-time decisions. A surface vehicle built for total independence and precision on the water.",
    page: "/Boat",
    showButton: true,
  },
  {
    img: submarine,
    title: "UUV",
    subtitle: "Unmanned Underwater Vehicle",
    desc: "The unmanned underwater vehicle represents one of the hardest challenges we are facing. The nature of the environment enforces the dictates the development of the vehicle. We develop the logic around the limitations we have. There is no gps, no dvl, no easy test, just clever engineering.",
    page: "/uuv",

    showButton: true,
  },
  {
    img: sdv,
    title: "SDV",
    subtitle: "Self Driving Vehicle",
    desc: "We built a vehicle that thinks. One that reacts, navigates, and moves people on its own. Powered by AI, built with purpose, and designed to transform how campus moves. Safer. Smarter. Cleaner.",
    page: "/SDV",
    showButton: false,
  },
  {
    img: swarm,
    title: "SWARM",
    subtitle: null,
    desc: "We turned the night sky into a canvas. A fleet of 24 drones, choreographed in perfect sync, tracing spheres, logos, and letters across the dark. Already witnessed by 150+ people across two live shows. Built by students. Flown for real.",
    page: "/Drone",
    showButton: false,
  },
  {
    img: uav,
    title: "UAV",
    subtitle: "Unmanned Aerial Vehicle",
    desc: "We built a drone that reads the world as it flies. Powered by LiDAR technology and autonomous navigation, it doesn't just follow waypoints—it understands its environment to safely execute aerial deliveries. Faster. Smarter. Unbound.",
    page: "/Drone",
    showButton: false,
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative rounded-[30px] overflow-hidden w-full"
    >
      {/* Watermark background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 scale-110"
        style={{ backgroundImage: `url(${project.img})`, filter: "blur(6px)" }}
      />
      <div
        className="absolute inset-0 rounded-[30px]"
        style={{ background: "rgba(109,175,231,0.22)" }}
      />

      {/* Mobile layout — image on top full width, text below */}
      <div className="relative z-10 flex flex-col md:hidden">
        <div className="w-full h-[240px] overflow-hidden rounded-t-[30px]">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 p-6">
          <div>
            <h2
              className="text-white font-bold text-4xl leading-none"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {project.title}
            </h2>
            {project.subtitle && (
              <p
                className="text-white/60 text-sm mt-2"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {project.subtitle}
              </p>
            )}
          </div>
          <p
            className="text-white/80 text-sm leading-relaxed"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {project.desc}
          </p>
          {project.showButton && (
            <Link
              to={project.page}
              className="mt-2 self-center px-10 py-3 rounded-full text-base font-medium text-white transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Visit our site
            </Link>
          )}
        </div>
      </div>

      {/* Desktop layout — square image left, text right */}
      <div className="relative z-10 hidden md:flex flex-row md:aspect-video items-center">
        <div className="flex-shrink-0 p-10 flex items-center justify-center">
          <div className="w-[420px] h-[420px] rounded-2xl overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 p-10 flex-1">
          <div>
            <h2
              className="text-white font-bold text-5xl lg:text-6xl leading-none"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {project.title}
            </h2>
            {project.subtitle && (
              <p
                className="text-white/60 text-base mt-2"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {project.subtitle}
              </p>
            )}
          </div>

          <p
            className="text-white/80 text-base leading-relaxed"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {project.desc}
          </p>

          {project.showButton && (
            <Link
              to={project.page}
              className="mt-4 self-center px-10 py-3 rounded-full text-base font-medium text-white transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                fontFamily: "'Raleway', sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
            >
              Visit our site
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-10 w-full pt-0 pb-16 md:py-24 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2
            className="text-white font-extrabold uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            What we are up to
          </h2>
          <p
            className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Autonomous systems are reshaping industries from logistics to defense
            to exploration. At VantTEC, we&apos;re not waiting to graduate to make
            an impact,{" "}
            <span className="text-white font-semibold italic">
              we&apos;re doing it now, one vehicle at a time.
            </span>
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;