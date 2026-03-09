import { motion } from "framer-motion";

const Hero = () => {
    // ✅ ADD THIS

  return (
    <section className="min-h-screen flex flex-col items-center justify-center 
                   px-6 bg-[#f8f7f4] dark:bg-[#0f0f0f]">

      <div className="fixed top-6 left-6 flex gap-3 z-50">

  {/* Kutty Story */}
  <button
    onClick={() => {
      const section = document.getElementById("story");
      section?.scrollIntoView({ behavior: "smooth" });
    }}
    className="px-4 py-1.5 text-sm font-medium
    rounded-full
    bg-white/70 dark:bg-white/10
    backdrop-blur-md
    border border-black/10 dark:border-white/20
    text-zinc-700 dark:text-zinc-200
    shadow-sm
    hover:shadow-md
    hover:text-violet-600 dark:hover:text-violet-400
    hover:border-violet-400/40
    transition-all duration-300"
  >
    Kutty Story
  </button>

  {/* Explore */}
  <button
    onClick={() => {
      const section = document.getElementById("explore");
      section?.scrollIntoView({ behavior: "smooth" });
    }}
    className="px-4 py-1.5 text-sm font-medium
    rounded-full
    bg-white/70 dark:bg-white/10
    backdrop-blur-md
    border border-black/10 dark:border-white/20
    text-zinc-700 dark:text-zinc-200
    shadow-sm
    hover:shadow-md
    hover:text-violet-600 dark:hover:text-violet-400
    hover:border-violet-400/40
    transition-all duration-300"
  >
    Explore
  </button>

  {/* Contact */}
  <button
    onClick={() => {
      const section = document.getElementById("contact");
      section?.scrollIntoView({ behavior: "smooth" });
    }}
    className="px-4 py-1.5 text-sm font-medium
    rounded-full
    bg-white/70 dark:bg-white/10
    backdrop-blur-md
    border border-black/10 dark:border-white/20
    text-zinc-700 dark:text-zinc-200
    shadow-sm
    hover:shadow-md
    hover:text-violet-600 dark:hover:text-violet-400
    hover:border-violet-400/40
    transition-all duration-300"
  >
    Contact
  </button>

</div>
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="heading-font text-5xl font-bold dark:text-white text-center">
  HI !! WELCOME TO MY <span className="text-violet-600 dark:text-violet-400">HIPPOCAMPUS</span>
      </motion.h1>
      
      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl text-center"
      >
        The experiences that refined, transformed and engineered my intelligence.
      </motion.p>

      {/* PS */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic"
      >
        P.S. The hippocampus is the part of the brain responsible for memory and learning.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={() => {
          const section = document.getElementById("identity");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
        className="px-6 py-3 rounded-xl
           border border-zinc-400 dark:border-zinc-600
           text-zinc-800 dark:text-zinc-200
           bg-white/50 dark:bg-white/5
           backdrop-blur-sm
           hover:scale-105 transition-all duration-300 center mt-10"

      >
        Explore →
      </motion.button>


    </section>
  );
};

export default Hero;
