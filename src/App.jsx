import "./App.css";
import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useTheme } from "./context/themeContext";
import FloatIcons from "./components/FloatIcons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "dark" : "light"}`}>
      <FloatIcons/>

      <div className="dark:bg-gray-900 transition-colors ease-in-out duration-500">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        {/* <Projects/> */}
        {/* <Experience/> */}
        <Contact/>
        <Footer/>
      </div>

      <ToastContainer/>
    </div>
  );
}

export default App;
