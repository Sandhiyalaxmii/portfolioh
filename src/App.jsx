import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import WiperIntro from "./components/intro/WiperIntro";
import Explore from "./Pages/Explore.jsx";


import Hero from "./components/home/Hero";
import About from "./components/home/About";
import SignatureBoxes from "./components/home/SignatureBoxes";
import Contact from "./components/sections/ContactSection.jsx";

import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Achievements from "./Pages/Achievements";
import Experience from "./Pages/Experience";
import IdentitySection from "./components/sections/IdentitySection";
import StorySection from "./components/sections/StorySection";
import Divider from "./components/ui/Divider";


const Home = () => (
  <>
    <Hero />
    <Divider />
    <IdentitySection />
    <Divider />
    <StorySection />
    <Divider />
    <SignatureBoxes />
    <Divider />
    <Contact />
  </>
);



function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-[#f8f7f4] dark:bg-[#0f0f0f] transition-colors duration-500">


      {/* Background Glow */}
      {/* Subtle Doodle Background */}
<div className="pointer-events-none fixed inset-0 -z-10 opacity-10 dark:opacity-5">

  {/* Floating Dev Words */}
  <div className="absolute top-20 left-10 rotate-[-10deg] text-sm font-mono text-zinc-700 dark:text-zinc-300">
    &lt;code/&gt;
  </div>

  <div className="absolute top-1/3 right-20 rotate-[8deg] text-sm font-mono text-zinc-700 dark:text-zinc-300">
    function();
  </div>

  <div className="absolute bottom-40 left-1/4 rotate-[15deg] text-sm font-mono text-zinc-700 dark:text-zinc-300">
    SQL
  </div>

  <div className="absolute bottom-20 right-10 rotate-[-8deg] text-sm font-mono text-zinc-700 dark:text-zinc-300">
    ETL
  </div>

  <div className="absolute top-1/2 left-1/2 rotate-[5deg] text-sm font-mono text-zinc-700 dark:text-zinc-300">
    poetry
  </div>

  {/* Hand-drawn shapes */}
  <div className="absolute top-10 right-1/3 w-32 h-32 border border-zinc-400 rounded-full" />
  <div className="absolute bottom-10 left-20 w-40 h-40 border border-zinc-400 rotate-12" />

</div>


      {showIntro && (
        <WiperIntro onComplete={() => setShowIntro(false)} />
      )}

      {!showIntro && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
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


