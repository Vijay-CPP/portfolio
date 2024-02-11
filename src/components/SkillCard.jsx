import React, { useState, useEffect } from "react";
import { FastAverageColor } from "fast-average-color";
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

const SkillCard = ({ skillLogoURL, skillName, idx }) => {
  const [bgColor, setBgColor] = useState("");
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

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
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`flex flex-col justify-center items-center gap-1 p-3 rounded-lg`}
      style={{ backgroundColor: bgColor }}
    >
      <img src={skillLogoURL} className="w-[70%]" alt="" />
      <p className="text-sm md:text-md font-bold text-gray-600 dark:text-gray-100">{skillName}</p>
    </motion.div>
  );
};

export default SkillCard;
