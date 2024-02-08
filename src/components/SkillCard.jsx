import React, { useState, useEffect } from "react";
import { FastAverageColor } from "fast-average-color";

const SkillCard = ({ skillLogoURL, skillName, idx }) => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    new FastAverageColor()
      .getColorAsync(skillLogoURL)
      .then((color) => {
        const rgba = color.rgb.split(")");
        setBgColor(rgba[0] + ",0.2)");
      })
      .catch((e) => {
        console.log(e);
      });
  }, [skillLogoURL]);

  return (
    <div
      className={`w-[30%] md:w-[20%] flex flex-col justify-center items-center gap-1 p-3 rounded-lg`}
      style={{ backgroundColor: bgColor }}
    >
      <img src={skillLogoURL} className="w-[70%]" alt="" />
      <p className="text-sm md:text-md font-bold text-gray-600 dark:text-gray-100">{skillName}</p>
    </div>
  );
};

export default SkillCard;
