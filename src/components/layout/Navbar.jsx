import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center px-6 py-4 border-b 
                    dark:border-gray-700 border-gray-300">
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;

