import { useScroll } from "framer-motion";
import React, { useState } from "react";

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
              <div key={idx} className="p-5 bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col gap-2 shadow-sm transition-colors ease-in-out duration-500">
                {/* Image */}
                <img
                  src={`https://drive.google.com/uc?export=view&id=${element.imageID}`}
                  alt={element.name + "-img"}
                  className="w-[100%] rounded-lg dark:bg-gray-700 bg-white h-48 mx-auto transition-colors ease-in-out duration-500"
                />
                {/* Project Name */}
                <h2 className="font-bold text-gray-700 dark:text-gray-300 text-lg transition-colors ease-in-out duration-500">{element.name}</h2>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {element.techStack.map((tech, i) => {
                    return <div className="bg-gray-50 dark:bg-gray-600 px-2 py-1 shadow-sm rounded-md text-xs md:text-sm text-gray-700 dark:text-gray-200 font-robotoMono transition-colors ease-in-out duration-500" key={i}>{tech}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
