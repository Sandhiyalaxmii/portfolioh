import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import WiperIntro from "./components/intro/WiperIntro";
import Identity from "./Pages/Identity";
import Explore from "./Pages/Explore.jsx";


import Hero from "./components/home/Hero";
import About from "./components/home/About";
import SignatureBoxes from "./components/home/SignatureBoxes";
import Contact from "./components/sections/Contact";

import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Achievements from "./Pages/Achievements";
import Experience from "./Pages/Experience";

const Home = () => (
  <>
    <Hero />
    <About />
    <SignatureBoxes />
    <Contact />
  </>
);

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),transparent_40%)]
dark:bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.15),transparent_40%)]
">

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] 
                        bg-purple-300 dark:bg-purple-600 
                        rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] 
                        bg-blue-300 dark:bg-blue-600 
                        rounded-full blur-[150px] opacity-20" />
      </div>

      {showIntro && (
        <WiperIntro onComplete={() => setShowIntro(false)} />
      )}

      {!showIntro && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/identity" element={<Identity />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/achievements" element={<Achievements />} />
           <Route path="/experience" element={<Experience />} />
          </Routes>

        </>
      )}
    </div>
  );
}

export default App;


