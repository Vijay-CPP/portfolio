import React, { useState } from "react";
import profilePic from "../assets/profile-pic.jpg";
import { useScroll } from "framer-motion";

const AboutMe = () => {
  let EDUCATION = [
    {
      year: "2020 - 2024",
      instituteName: "Haldia Institute of Technology",
      courseName: "B.Tech (Hons) in Electrical Engg",
      score: "CGPA - 9.41",
    },
    {
      year: "2018 - 2020",
      instituteName: "D A V Public School",
      courseName: "CBSE - Class 12th",
      score: "Percentage - 93.8 %",
    },
    {
      year: "2015 - 2018",
      instituteName: "Vivekananda Mission School",
      courseName: "CISCE - Class 10th",
      score: "CGPA - 9.41",
    },
  ];

  const [eduLength, setEduLength] = useState(2);

  function handleEduClick() {
    if(eduLength === 2){
      setEduLength(EDUCATION.length);
    }
    else{
      setEduLength(2);
    }
  }

  return (
    <div
      className="container mx-auto min-h-[100vh] md:min-h-fit py-10"
      id="About"
    >
      <h2 className="text-4xl text-center font-robotoMono dark:text-white">
        About Me
      </h2>

      <div className="w-full lg:w-11/12 2xl:w-4/5 mt-6 lg:mt-8 mx-auto flex flex-col md:gap-4 lg:flex-row justify-center">
        <div className="p-3 h-fit w-56 md:w-2/5 lg:w-72 bg-white shadow-md dark:bg-gray-800 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
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
            <p className="text-3xl font-semibold text-gray-800 dark:text-white">
              T Vijay Kumar
            </p>
            <p className="text-violet-800 w-fit rounded py-1 px-2 text-sm dark:text-violet-400 bg-violet-50 dark:bg-violet-900/10">
              Full Stack Developer
            </p>
            <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300 text-justify">
              I'm passionate about creating beautiful, functional, and
              user-friendly websites and applications. Beyond technical skills,
              I bring a dynamic and collaborative problem-solving approach.
              Connect with me on LinkedIn or explore my coding profiles on
              LeetCode, GitHub, and GFG Practice for a closer look at my
              passion, skills, and achievements.
            </p>

            <div class="py-2">
              <h1 class="text-xl text-violet-700 dark:text-violet-400 font-robotoMono pb-4">
                Education
              </h1>
              <div class="flex flex-wrap gap-5">
                {EDUCATION.slice(0, eduLength).map((data, idx) => {
                  return (
                    <div
                      class="flex-shrink-0 flex-grow-0 w-full md:min-w-[40%] md:w-fit"
                      key={idx}
                    >
                      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg py-4 px-5 border dark:border-gray-900 hover:shadow-md transition duration-300 ease-in-out shadow-sm">
                        <p class="text-gray-700 dark:text-gray-300 text-md font-semibold">
                          {data.year}
                        </p>
                        <p class="text-gray-700 dark:text-gray-300 text-lg">
                          {data.instituteName}
                        </p>
                        <p class="text-gray-700 text-sm dark:text-gray-300">
                          {data.courseName}
                        </p>
                        <p class="text-gray-700 dark:text-gray-300">
                          {data.score}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                  <button className=" text-gray-700 border border-gray-400 px-3 py-1 rounded-md mt-4 dark:text-gray-400 dark:border-gray-700" onClick={() => handleEduClick()}>
                    {eduLength === 2 ? "Show All" : "Ok I got it!"}
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
