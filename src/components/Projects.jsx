import { useScroll } from "framer-motion";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const PROJECTS = [
    {
      name: "File Orbit",
      imageID: "vsdvsdvsdv",
      // projectImg: `https://drive.google.com/uc?export=view&id=${imageID}`,
      techStack: ["React.js", "Firebase", "Redux", "Tailwind CSS"],
      githubLink: "sdfsdf",
      liveLink: "sdsdsdf",
    },
    {
      name: "GraphQL API",
      imageID: "vsdvsdvsdv",
      // projectImg: `https://drive.google.com/uc?export=view&id=${imageID}`,
      techStack: ["fsdf", "fssfd"],
      githubLink: "sdfsdf",
      liveLink: "sdsdsdf",
    },
    {
      name: "REST API - MVC",
      imageID: "vsdvsdvsdv",
      // projectImg: `https://drive.google.com/uc?export=view&id=${imageID}`,
      techStack: ["fsdf", "fssfd"],
      githubLink: "sdfsdf",
      liveLink: "sdsdsdf",
    },
    {
      name: "dsds",
      imageID: "vsdvsdvsdv",
      // projectImg: `https://drive.google.com/uc?export=view&id=${imageID}`,
      techStack: ["fsdf", "fssfd"],
      githubLink: "sdfsdf",
      liveLink: "sdsdsdf",
    },
  ];

  const [length, setLength] = useState(3);

  return (
    <div id="Projects">
      <div className="mx-auto container py-10">
        <h1 className="text-3xl md:text-4xl text-center font-robotoMono text-gray-800 dark:text-white mb-10 transition-colors ease-in-out duration-500">
          Projects
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto w-[85%] lg:w-[80%]">
          {PROJECTS.slice(0, length).map((element, idx) => {
            return (
              <ProjectCard key={idx} element={element}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
