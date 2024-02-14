import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const ProjectCard = ({ element }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="p-5 bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col gap-2 transition-colors ease-in-out duration-500 shadow-md"
    >
      <div className="relative group">
        <div className="bg-opacity-50  bg-gray-500 absolute w-full h-full rounded-lg flex items-center justify-center gap-4 text-gray-800 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom ease-in-out">
          <a href={element.liveLink}>
            <FaExternalLinkAlt className="bg-gray-50 hover:bg-gray-700 hover:text-gray-200 rounded-lg h-10 w-10 p-2 transition-colors duration-300 ease-in-out" />
          </a>
          <a href={element.githubLink}>
            <FaGithub className="bg-gray-50 hover:bg-gray-700 hover:text-gray-200 rounded-full h-10 w-10 p-2 transition-colors duration-300 ease-in-out" />
          </a>
        </div>

        {/* Image */}
        <img
          src={element.image}
          alt={element.name + "-img"}
          className="w-[100%] rounded-lg dark:bg-gray-700 bg-white mx-auto transition-colors ease-in-out duration-500"
        />
      </div>

      {/* Project Name */}
      <h2 className="font-bold text-gray-700 dark:text-gray-300 text-lg transition-colors ease-in-out duration-500">
        {element.name}
      </h2>
      <h3 className="text-xs my-1 text-gray-700 dark:text-gray-300 transition-colors ease-in-out duration-500">{element.desc}</h3>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {element.techStack.slice(0, 10).map((tech, i) => {
          return (
            <div
              className="bg-gray-50 dark:bg-gray-600 px-2 py-1 shadow-sm rounded-md text-xs md:text-sm text-gray-700 dark:text-gray-200 font-robotoMono transition-colors ease-in-out duration-500"
              key={i}
            >
              {tech}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
