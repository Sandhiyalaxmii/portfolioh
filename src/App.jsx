import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

const Home = () => <div className="p-20 dark:text-white">Home Page</div>;
const Projects = () => <div className="p-20 dark:text-white">Projects Page</div>;
const Skills = () => <div className="p-20 dark:text-white">Skills Page</div>;
const Achievements = () => <div className="p-20 dark:text-white">Achievements Page</div>;

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </div>
  );
}

export default App;

