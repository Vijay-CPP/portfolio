import React from "react";
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

const EducationCard = ({ data }) => {
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
      className="flex-shrink-0 flex-grow-0 w-full md:min-w-[300px] lg:w-fit"
    >
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg py-4 px-5 border dark:border-gray-900 hover:shadow-md shadow-sm transition-colors ease-in-out duration-500">
        <p className="text-gray-700 dark:text-gray-300 text-md font-semibold transition-colors ease-in-out duration-500">
          {data.year}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg transition-colors ease-in-out duration-500">
          {data.instituteName}
        </p>
        <p className="text-gray-700 text-sm dark:text-gray-300 transition-colors ease-in-out duration-500">
          {data.courseName}
        </p>
        <p className="text-gray-700 dark:text-gray-300 transition-colors ease-in-out duration-500">
          {data.score}
        </p>
      </div>
    </motion.div>
  );
};

export default EducationCard;
