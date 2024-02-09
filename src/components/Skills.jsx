import React, { useState } from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const SKILLS = {
    Frontend: [
      {
        skillName: "HTML",
        skillLogo: "https://img.icons8.com/color/300/html-5--v1.png",
      },
      {
        skillName: "CSS",
        skillLogo: "https://img.icons8.com/color/300/css3.png",
      },
      {
        skillName: "JavaScript",
        skillLogo: "https://img.icons8.com/color/300/javascript--v1.png",
      },
      {
        skillName: "Tailwind CSS",
        skillLogo: "https://img.icons8.com/color/300/tailwindcss.png",
      },
      {
        skillName: "BootStrap",
        skillLogo: "https://img.icons8.com/color/300/bootstrap.png",
      },
      {
        skillName: "React.Js",
        skillLogo: "https://img.icons8.com/color/300/react-native.png",
      },
      {
        skillName: "Redux",
        skillLogo: "https://img.icons8.com/color/300/redux.png",
      },
    ],
    Backend: [
      {
        skillName: "Node.js",
        skillLogo: "https://img.icons8.com/color/300/nodejs.png",
      },
      {
        skillName: "Express.js",
        skillLogo: "https://img.icons8.com/color/300/express-js.png",
      },
      {
        skillName: "Firebase",
        skillLogo: "https://img.icons8.com/color/300/firebase.png",
      },
      {
        skillName: "MongoDB",
        skillLogo:
          "https://img.icons8.com/external-tal-revivo-color-tal-revivo/300/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
      },
      {
        skillName: "SQL",
        skillLogo: "https://img.icons8.com/color/300/mysql.png",
      },
      {
        skillName: "GraphQL",
        skillLogo: "https://img.icons8.com/color/300/graphql.png",
      },
    ],
    Others: [
      {
        skillName: "C/C++",
        skillLogo: "https://img.icons8.com/color/300/c-plus-plus-logo.png",
      },
      {
        skillName: "Python",
        skillLogo: "https://img.icons8.com/color/300/python.png",
      },
      {
        skillName: "Git",
        skillLogo: "https://img.icons8.com/color/300/git.png",
      },
      {
        skillName: "GitHub",
        skillLogo: "https://img.icons8.com/material-outlined/300/github.png",
      },
      {
        skillName: "Googling",
        skillLogo: "https://img.icons8.com/color/300/google-logo.png",
      },
      {
        skillName: "Vercel",
        skillLogo:
          "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
      },
      {
        skillName: "Netlify",
        skillLogo:
          "https://img.icons8.com/external-tal-revivo-color-tal-revivo/300/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo.png",
      },
      {
        skillName: "Heroku",
        skillLogo: "https://img.icons8.com/color/300/heroku.png",
      },
    ],
  };

  const SKILL_CATEGORY = Object.keys(SKILLS);
  const SKILLS_NAMES = Object.values(SKILLS);

  const [index, setIndex] = useState(0);

  return (
    <div className="container mx-auto min-h-fit py-20" id="Skills">
      <h2 className="text-3xl md:text-4xl text-center text-gray-800 dark:text-white font-robotoMono transition-colors ease-in-out duration-500">
        Tech Stack
      </h2>

      <div className="flex gap-2 justify-between mt-8 mb-8 bg-gray-100 dark:bg-gray-800  w-[90vw] md:w-[50vw] lg:w-[30vw] mx-auto p-2 rounded-md transition-colors ease-in-out duration-500">
        {SKILL_CATEGORY.map((element, idx) => {
          return (
            <div
              key={idx}
              onClick={() => setIndex(idx)}
              className={` ${
                index === idx
                  ? "bg-violet-500 text-white hover:bg-violet-500"
                  : "hover:bg-gray-200 dark:hover:bg-slate-900 text-gray-800 dark:text-white  cursor-pointer"
              } px-5 py-2 rounded-md  transition-all ease-in-out w-full text-center md:text-lg font-semibold`}
            >
              {element}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap w-[90%] md:w-[70%] lg:w-[50%] mx-auto mt-6 gap-3 justify-center md:gap-4 xl:gap-5">
        {SKILLS_NAMES[index].map((element, idx) => {
          return (
            <SkillCard
              key={idx}
              skillLogoURL={element.skillLogo}
              skillName={element.skillName}
              idx={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
