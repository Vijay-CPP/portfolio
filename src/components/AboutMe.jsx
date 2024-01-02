import React from "react";
import profilePic from "../assets/profile-pic.jpg";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="container mx-auto min-h-[100vh] pt-12 " id="About">
      <h2 className="text-4xl text-center font-robotoMono dark:text-white">About Me</h2>
      <div className="w-full lg:w-11/12 2xl:w-4/5 mt-6 lg:mt-14 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">
        <div className="p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white shadow-md dark:bg-gray-800 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
          <img
            src={profilePic}
            alt="profile-pic"
            loading={"lazy"}
            className="w-full h-60 md:h-72 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100"
          />
          <span className="font-medium font-sans dark:text-white">
            {"< I Build Stuff 🚀 />"}
          </span>
        </div>

        <div className="flex-1 text-left mx-6 mt-8 md:mt-0 md:mx-0 md:p-6">
          <div className="flex flex-col gap-2.5">
            <p className="text-3xl font-semibold dark:text-white">T Vijay Kumar</p>
            <p className="text-violet-800 w-fit rounded py-1 px-2 text-sm dark:text-violet-600 bg-violet-50 dark:bg-violet-900/10">
              Full Stack Developer
            </p>
            <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic minima fugit eos alias maiores eius, porro repudiandae laudantium libero ea quas quis vitae quidem blanditiis similique, tenetur esse vel.
            </p>
            <div className="flex items-center gap-4 md:mt-4">
              {/* {resumeUrl.trim() && ( */}
                <a
                  href={""}
                  className="text-sm md:text-base bg-violet-600 dark:bg-violet-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow"
                >
                  Resume
                </a>
              {/* )} */}
              {/* {callUrl.trim() && ( */}
                <a
                  to={""}
                  className="text-violet-600 flex items-center gap-1 hover:bg-violet-50 hover:dark:bg-violet-900/10 py-2 px-4 transition-colors rounded-md"
                >
                </a>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
