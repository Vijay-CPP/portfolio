import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";

const Links = () => {
  return (
    <div className="flex gap-2 flex-wrap transition-all ease-in-out">
      <a
        href="https://www.linkedin.com/in/vijaytamada/"
        className="text-lg p-3 hover:-translate-y-1 transition-all ease-in-out bg-gray-500 rounded-full text-white hover:bg-violet-500 shadow-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Vijay-CPP"
        className="text-lg p-3 hover:-translate-y-1 transition-all ease-in-out bg-gray-500 rounded-full text-white hover:bg-violet-500 shadow-2xl"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:vijaytamada02@gmail.com"
        className="text-lg p-3 hover:-translate-y-1 transition-all ease-in-out bg-gray-500 rounded-full text-white hover:bg-violet-500 shadow-2xl"
      >
        <FiMail />
      </a>
      <a
        href="https://www.instagram.com/yours_truly_vijay_/"
        className="text-lg p-3 hover:-translate-y-1 transition-all ease-in-out bg-gray-500 rounded-full text-white hover:bg-violet-500"
      >
        <FaInstagram />
      </a>
      <a
        href="https://drive.google.com/file/d/1IwQ3RwL8_X9j2AncmmA65oUez8t6x1PM/view?usp=drive_link"
        className="flex gap-2 items-center justify-center  bg-gray-500 text-white rounded-md px-3 hover:bg-violet-500 transition-all ease-in-out"
      >
        <IoDocumentOutline />
        Resume
      </a>
    </div>
  );
};

export default Links;
