import { Card, CardHeader, Image } from "@nextui-org/react";
import { Link } from "react-router-dom"; // Importing Link for navigation

const CardProject = ({
  projects = [], // Array of project objects with { date, info, image }
  height = "300px", // Card height
  isHoverable = false, // Whether the card has a hover effect
  objectFit = "cover", // Image fitting style
  cssEase = "ease-in-out", // Default easing for animations
}) => {
  const hoverClasses = isHoverable
    ? "hover:scale-105 hover:shadow-xl transition-all duration-300"
    : "";

  return (
    <div
      className={`grid gap-4 px-8 ${hoverClasses}`}
      style={{ gridTemplateColumns: `repeat(${projects.length}, 1fr)`, transitionTimingFunction: cssEase }}
    >
      {projects.map((project, index) => (
        <Link to={project.Link} key={index}>  {/* Add a link around each card */}
          <Card
            key={index}
            className={`h-[${height}] w-full`}
            style={{ height }}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {project.date || "Unknown Date"}
              </p>
              <h4 className="text-white font-medium text-large">
                {project.info || "Project Information"}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt={`Project ${index + 1}`}
              className="z-0 w-full h-full"
              style={{ objectFit }}
              src={project.image || "https://via.placeholder.com/300"}
            />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardProject;
