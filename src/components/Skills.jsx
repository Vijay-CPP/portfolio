import React, { useState } from "react";

const Skills = () => {
  const SKILLS = {
    Frontend: ["HTML", "CSS", "JavaScript"],
    Backend: ["Node.js", "Express.js"],
    Others: ["Git", "GitHub"]
  };

  const SKILL_CATEGORY = Object.keys(SKILLS);
  const SKILLS_NAMES = Object.values(SKILLS);

  const [index, setIndex] = useState(0);

  return (
    <div className="container mx-auto min-h-screen pt-6 md:pt-12" id="Skills">
      <h2 className="text-4xl text-center font-robotoMono">Tech Stack</h2>

      <div className="flex gap-2 justify-center">
        {SKILL_CATEGORY.map((element, idx) => {
          return <div onClick={()=> setIndex(idx)} className={` ${index === idx ? "bg-purple-500" : ""} `}> 
            {element}
          </div>;
        })}
      </div>

      <div>
        {SKILLS_NAMES[index].map((element, idx)=>{
            return <div>
            {element}
          </div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
