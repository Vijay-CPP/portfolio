import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { useTheme } from "./context/themeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 transition-all ease-in-out">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills/>
      </div>
    </div>
  );
}

export default App;
