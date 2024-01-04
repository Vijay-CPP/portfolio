import React from "react";
import profilePic from "../assets/profile-pic.jpg";

const AboutMe = () => {
  return (
    <div className="container mx-auto min-h-[100vh] md:min-h-[70vh] pt-12" id="About">
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
            <p className="text-3xl font-semibold text-gray-800 dark:text-white">T Vijay Kumar</p>
            <p className="text-violet-800 w-fit rounded py-1 px-2 text-sm dark:text-violet-600 bg-violet-50 dark:bg-violet-900/10">
              Full Stack Developer
            </p>
            <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300 text-justify">
            Final year undergrad pursuing a B.Tech (Hons.) in Electrical Engg. at Haldia Institute of Technology, maintaining a consistent CGPA of 9.41. I'm Proficient in C/C++, JavaScript, and Python, my expertise spans both frontend and backend technologies. I'm passionate about creating beautiful, functional, and user-friendly websites and applications. Beyond technical skills, I bring a dynamic and collaborative problem-solving approach. Connect with me on LinkedIn or explore my coding profiles on LeetCode, GitHub, and GFG Practice for a closer look at my passion, skills, and achievements.
            </p>
            <div className="flex items-center gap-4 md:mt-4">
              {/* {resumeUrl.trim() && ( */}
                <a
                  href={""}
                  target="_blank"
                  className="md:text-base bg-violet-600 dark:bg-violet-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow"
                >
                  Resume
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
