import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

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
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-8 px-6 py-3 border rounded-lg dark:border-white border-black 
                   dark:text-white text-black 
                   hover:scale-105 transition-all duration-300"
      >
        Explore →
      </motion.a>

    </section>
  );
};

export default Hero;
