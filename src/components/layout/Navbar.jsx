import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b 
                    dark:border-gray-700 border-gray-300 transition-colors duration-500">

      <Link 
        to="/" 
        className="font-bold text-lg dark:text-white text-black"
      >
        NeuroCortex
      </Link>

      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
