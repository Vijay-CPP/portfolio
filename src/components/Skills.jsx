import React, { useState } from "react";

const Skills = () => {
  const SKILLS = {
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "BootStrap",
      "React.Js",
      "Redux",
    ],
    Backend: ["Node.js", "Express.js", "Firebase", "MongoDB", "SQL", "GraphQL"],
    Others: ["C/C++", "Python", "Git", "GitHub", "Googling", "Vercel", "Netlify", "Heroku"],
  };

  const SKILL_CATEGORY = Object.keys(SKILLS);
  const SKILLS_NAMES = Object.values(SKILLS);

  const [index, setIndex] = useState(0);

  return (
    <div className="container mx-auto min-h-fit py-20" id="Skills">
      <h2 className="text-4xl text-center text-gray-800 dark:text-white font-robotoMono">
        Tech Stack
      </h2>

      <div className="flex gap-2 justify-between mt-8 bg-gray-100 dark:bg-gray-800  w-[90vw] md:w-[60vw] lg:w-[35vw] mx-auto p-2 rounded-md">
        {SKILL_CATEGORY.map((element, idx) => {
          return (
            <div
            key={idx}
              onClick={() => setIndex(idx)}
              className={` ${
                index === idx
                  ? "bg-violet-500 text-white hover:bg-violet-600"
                  : "hover:bg-gray-200 dark:hover:bg-slate-900 text-gray-800 dark:text-white"
              } px-5 py-2 rounded-md  transition-all ease-in-out w-full text-center md:text-lg font-semibold`}
            >
              {element}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap w-[90vw] md:w-[60vw] lg:w-[40vw] mx-auto mt-6 gap-2 justify-center">
        {SKILLS_NAMES[index].map((element, idx) => {
          return <div key={idx} className="px-8 py-3 rounded-md hover:bg-violet-500 hover:text-white transition-all ease-in-out dark:hover:bg-violet-500 bg-gray-200 dark:bg-gray-700 dark:text-white hover:-translate-y-[1px] duration-300">{element}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
