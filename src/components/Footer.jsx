import React from "react";
import { ImHeart } from "react-icons/im";
import { Link as ScrollLink } from "react-scroll";
import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {
  return (
    <div className="transition-all duration-500 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex gap-2 items-center justify-between h-16">
        <a href="https://icons8.com" className="md:text-xs text-xs w-12 mx-4 md:w-fit text-gray-400">
          Icons by Icons8
        </a>
        <h3 className="flex gap-2 items-center justify-center hover:text-violet-500 transition-all ease-in-out duration-500 dark:text-gray-400 dark:hover:text-violet-400 text-gray-700  font-robotoMono text-xs">
          Made with <ImHeart className="hover:animate-pulse duration-200"/> by Vijay
        </h3>

        <ScrollLink
          to={"Home"}
          offset={-60}
          smooth={true}
          duration={500}
          isDynamic={true}
          className="cursor-pointer"
        >
          <IoIosArrowDropup className="text-4xl w-12 mx-4 md:w-fit text-gray-500" />
        </ScrollLink>
      </div>
    </div>
  );
};

export default Footer;
