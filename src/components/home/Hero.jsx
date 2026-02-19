import { motion } from "framer-motion";

const Hero = () => {
    // ✅ ADD THIS

  return (
    <section className="min-h-screen flex flex-col items-center justify-center 
                   px-6 bg-[#f8f7f4] dark:bg-[#0f0f0f]">


      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold dark:text-white"
      >
        Hi 👋 Welcome to my Hippocampus
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
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
           hover:scale-105 transition-all duration-300"

      >
        Explore →
      </motion.button>


    </section>
  );
};

export default Hero;
