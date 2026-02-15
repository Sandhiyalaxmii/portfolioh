import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-sm px-4 py-2 border rounded-lg transition-all duration-300 
                 dark:border-white border-black 
                 dark:text-white text-black
                 hover:scale-105"
    >
      {darkMode
        ? "Bring some light to life ☀️"
        : "Light attracts bugs 🐞 Prefer dark?"}
    </button>
  );
};

export default ThemeToggle;
