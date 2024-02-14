import { useScroll } from "framer-motion";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

import fileOrbitImg from "../assets/file-orbit.png";
import graphQLImg from "../assets/graphQL.png";
import restAPIImg from "../assets/restAPI.png";
import tictactoeImg from "../assets/tictactoe.png";

const Projects = () => {
  const PROJECTS = [
    {
      name: "File Orbit",
      desc: "It is a Google Drive Clone.",
      image: fileOrbitImg,
      techStack: ["React.js", "Firebase", "Redux", "Tailwind CSS", "Vercel"],
      githubLink: "https://github.com/Vijay-CPP/file-orbit",
      liveLink: "https://file-orbit.vercel.app/",
    },
    {
      name: "GraphQL API",
      image: graphQLImg,
      desc: "Combined both REST API & GraphQL.",
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Apollo GraphQL",
        "Vercel",
      ],
      githubLink: "https://github.com/Vijay-CPP/express-graphql-api",
      liveLink: "https://express-graphql-api.vercel.app/graphql",
    },
    {
      name: "REST API - MVC",
      image: restAPIImg,
      desc: "REST API for User Management",
      techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Vercel"],
      githubLink: "https://github.com/Vijay-CPP/user-management-rest-api",
      liveLink: "https://user-management-rest-api.vercel.app/",
    },
    {
      name: "Tic Tac Toe",
      image: tictactoeImg,
      desc: "Tic Tac Toe Game",
      techStack: ["HTML", "CSS", "BootStrap","JavaScript", "Github Pages"],
      githubLink: "https://github.com/Vijay-CPP/Tic-Tac-Toe",
      liveLink: "https://vijay-cpp.github.io/Tic-Tac-Toe/",
    },
  ];



  const [length, setLength] = useState(3);
  function handleClick(e) {
    e.preventDefault();
    if (length === 3) {
      setLength(PROJECTS.length);
    } else {
      setLength(3);
    }
  }

  return (
    <div id="Projects">
      <div className="mx-auto container py-10">
        <h1 className="text-3xl md:text-4xl text-center font-robotoMono text-gray-800 dark:text-white mb-10 transition-colors ease-in-out duration-500">
          Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto w-[85%] lg:w-[80%]">
          {PROJECTS.slice(0, length).map((element, idx) => {
            return <ProjectCard key={idx} element={element} />;
          })}
        </div>

        <div className="flex justify-center pt-6">
          <button
            className="text-gray-700 border border-gray-400 px-3 py-1 rounded-md mt-4 dark:text-gray-400 dark:border-gray-700 transition-colors ease-in-out duration-500"
            onClick={(e) => handleClick(e)}
          >
            {length === 3 ? "Show All" : "Ok I got it!"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
