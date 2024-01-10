import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useTheme } from "./context/themeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 transition-all ease-in-out">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
