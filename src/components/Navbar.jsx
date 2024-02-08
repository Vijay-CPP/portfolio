import React, { useState } from "react";
import { LuMoon } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { useTheme } from "../context/themeContext";
import { Link as ScrollLink } from "react-scroll";
import { RiMenuFoldLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useEffect } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [menu, setMenu] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const BRAND_NAME = "VIJAY";
  const NAV_LINKS = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <div
      className={`fixed w-[100vw] backdrop-blur-md  ${
        scroll ? "border-b bg-opacity-40" : "border-b-0"
      } dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-50 transition-all ease-in-out`}
    >
      <div className="flex justify-between lg:container p-5 lg:py-3 lg:px-10 items-center mx-auto">
        <div className="text-xl text-gray-700 flex gap-1 font-robotoMono">
          {[...BRAND_NAME].map((ele, idx) => (
            <h1
              key={idx}
              className="border-[2px] px-2 py-[0.2rem] bg-white hover:bg-violet-400 hover:text-white hover:border-purple-300 dark:hover:border-purple-300 transition-all hover:-translate-y-1 ease-in-out select-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            >
              {ele}
            </h1>
          ))}
        </div>

        <div className="hidden md:flex md:gap-4 lg:gap-6 text-md text-gray-700 items-center justify-between font-robotoMono">
          {NAV_LINKS.map((ele, idx) => {
            return (
              <ScrollLink
                to={ele}
                offset={-60}
                smooth={true}
                duration={500}
                isDynamic={true}
                key={idx}
              >
                <h1 className="hover:text-violet-600 cursor-pointer transition-colors dark:text-gray-100 dark:hover:text-violet-500">
                  {ele}
                </h1>
              </ScrollLink>
            );
          })}

          <div
            className={`p-2 rounded-full ${
              theme === "dark"
                ? "hover:bg-violet-500 text-white bg-gray-700 border-gray-800"
                : "bg-white hover:shadow-gray-200"
            } transition-all ease-in-out shadow-lg border`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <LuMoon className="hover:animate-pulse"/> : <FiSun className="hover:animate-pulse"/>}
          </div>
        </div>

        <div className="md:hidden flex items-center justify-center gap-5">
          <div
            className={`p-2 rounded-full  ${
              theme === "dark"
                ? "hover:bg-violet-500 text-white bg-gray-700"
                : "bg-white hover:shadow-gray-200 border"
            } transition-all shadow-lg`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <LuMoon /> : <FiSun />}
          </div>
          <RiMenuFoldLine
            className="text-2xl text-gray-700 dark:text-gray-100"
            onClick={() => setMenu(true)}
          />
        </div>

        <div
          className={`md:hidden flex absolute top-0 w-screen h-screen ${
            menu ? "right-0" : "right-[-100%]"
          } ease-in-out duration-300`}
        >
          <div className="w-[40%]" onClick={() => setMenu(false)}></div>
          <div className="flex w-full flex-col backdrop-filter backdrop-blur-sm gap-6 text-md text-gray-700 items-start font-robotoMono bg-gray-100 border-l dark:border-none dark:bg-gray-700 dark:text-gray-50 top-10 left-5 pl-10">
            <MdClose
              className="text-2xl ml-auto mt-7 mr-7"
              onClick={() => setMenu(false)}
            />
            {NAV_LINKS.map((ele, idx) => {
              return (
                <ScrollLink
                  to={ele}
                  offset={-60}
                  smooth={true}
                  duration={500}
                  isDynamic={true}
                  key={idx}
                  onClick={() => setMenu(false)}
                  className="w-3/4"
                >
                  <h1 className="hover:text-violet-500 transition-colors">
                    {ele}
                  </h1>
                </ScrollLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
