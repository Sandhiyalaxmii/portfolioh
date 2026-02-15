import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import WiperIntro from "./components/intro/WiperIntro";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import SignatureBoxes from "./components/home/SignatureBoxes";

const Home = () => (
  <>
    <Hero />
    <About />
    <SignatureBoxes />
  </>
);
const Projects = () => <div className="p-20 dark:text-white">Projects Page</div>;
const Skills = () => <div className="p-20 dark:text-white">Skills Page</div>;
const Achievements = () => <div className="p-20 dark:text-white">Achievements Page</div>;

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      
      {showIntro && <WiperIntro onComplete={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </>
      )}

    </div>
  );
}

export default App;

