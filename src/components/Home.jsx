import React from "react";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Link as ScrollLink } from "react-scroll";
import { IoIosArrowForward } from "react-icons/io";
import { IoDocumentOutline } from "react-icons/io5";

import wavingHand from "../assets/waving-hand.gif";
// Import all avatar images
import avatar01 from "../assets/avatar-01.jpg";
import avatar02 from "../assets/avatar-02.jpg";
import avatar03 from "../assets/avatar-03.jpg";
import avatar04 from "../assets/avatar-04.jpg";
import avatar05 from "../assets/avatar-05.jpg";
import avatar06 from "../assets/avatar-06.jpg";
import avatar07 from "../assets/avatar-07.jpg";

const Home = () => {
  const titles = [
    "Frontend Development",
    "Backend Development",
    "Cloud",
    "Web Designing",
  ];

  const avatars = [
    avatar01,
    avatar02,
    avatar03,
    avatar04,
    avatar05,
    avatar06,
    avatar07,
  ];

  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);
  const cycleAvatars = () => {
    setCurrentAvatarIndex((prevIndex) =>
      prevIndex === avatars.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const avatarInterval = setInterval(cycleAvatars, 2000);
    return () => clearInterval(avatarInterval);
  }, []);

  return (
    <div
      className="flex flex-col-reverse container mx-auto min-h-screen lg:flex-row lg:justify-around justify-center items-center gap-8 lg:gap-0 py-20 "
      id="Home" 
    >
      <div className="flex flex-col lg:w-[45%] w-[85%]">
        <div className="flex items-center gap-2 mb-1">
          <img src={wavingHand} className="w-8 h-8" alt="👋" />
          <h2 className="lg:text-lg transition-colors ease-in-out duration-500 dark:text-gray-200">Hey There!</h2>
        </div>
        <h1 className=" text-4xl lg:text-7xl font-bold text-gray-800 dark:text-white transition-colors ease-in-out duration-500">
          I'm Vijay
        </h1>
        <div className="flex items-baseline my-6 gap-2 dark:text-gray-50 transition-colors ease-in-out duration-500">
          <h2 className="text-xl">I am into </h2>
          <Typewriter
            options={{
              strings: titles,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 50,
              wrapperClassName:
                "text-violet-700 dark:text-violet-500 text-xl md:text-3xl font-medium transition-colors ease-in-out duration-500",
              cursorClassName:
                "text-violet-700 dark:text-violet-500 text-xl md:text-3xl transition-colors ease-in-out duration-500",
            }}
          />
        </div>
        <p className="text-gray-600 dark:text-gray-400 transition-colors ease-in-out duration-500 ">
          I create easy-to-use websites that match client needs, paying close
          attention to details, scalability, and speed. Whether you need a
          brand-new web application built from scratch or an existing one
          optimized, I have the skills and experience to help you achieve your
          goals.
        </p>

        <div className="flex justify-start items-center gap-3 mt-5">
          <ScrollLink
            className="w-fit text-sm md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-violet-600 hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 transition-colors ease-in-out duration-500 group text-white"
            to={"About"}
            offset={-60}
            smooth={true}
            duration={500}
            isDynamic={true}
          >
            About Me
            <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
          </ScrollLink>

          <a
            href={"https://drive.google.com/file/d/1IwQ3RwL8_X9j2AncmmA65oUez8t6x1PM/view?usp=drive_link"}
            target="_blank"
            className="md:text-base font-semibold text-violet-600 dark:bg-gray-700 border-violet-600 border w-fit rounded-md py-2 hover:bg-violet-600 hover:text-white px-4 transition-colors ease-in-out duration-500 flex gap-1 items-center justify-around dark:text-white dark:border-gray-600 dark:hover:bg-gray-800"
          >
            <IoDocumentOutline className="text-lg" />
            Resume
          </a>
        </div>
      </div>
      <div>
        <img
          src={avatars[currentAvatarIndex]}
          className="rounded-full w-56 shadow-lg shadow-violet-200 dark:shadow-gray-800 lg:w-72"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Home;
