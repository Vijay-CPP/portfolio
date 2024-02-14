import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


const FloatIcons = () => {
  return (
    <div className="fixed z-[100] hidden lg:flex bottom-4 left-4 flex-col gap-3">
      <a
        href="https://www.linkedin.com/in/vijaytamada/"
        className="text-lg p-3 hover:translate-x-1 transition-all ease-in-out bg-violet-700 rounded-full text-white"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Vijay-CPP"
        className="text-lg p-3 hover:translate-x-1 transition-all ease-in-out bg-violet-700 rounded-full text-white"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:vijaytamada02@gmail.com"
        className="text-lg p-3 hover:translate-x-1 transition-all ease-in-out bg-violet-700 rounded-full text-white"
      >
        <FiMail />
      </a>
      <a
        href="https://www.instagram.com/yours_truly_vijay_/"
        className="text-lg p-3 hover:translate-x-1 transition-all ease-in-out bg-violet-700 rounded-full text-white"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default FloatIcons;
