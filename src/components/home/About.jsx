import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-12
             bg-gradient-to-b from-transparent to-gray-100 
             dark:to-gray-900"
    >
      <Reveal>
        {"PEEK A BOO!"}
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-48 h-48 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-4xl"
      >
        👩‍💻
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-6">
          I'm Sandhiya Laxmi
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I transform chaos into clean data pipelines and thoughts into quiet words.
          A Data Engineering enthusiast building intelligent systems from structured
          complexity — and an occasional writer who turns experiences into poetry and blogs.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/resume.pdf"
            className="px-6 py-3 border rounded-lg dark:border-white border-black 
                       dark:text-white text-black hover:scale-105 transition-all"
          >
            Resume
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="px-6 py-3 border rounded-lg dark:border-white border-black 
                       dark:text-white text-black hover:scale-105 transition-all"
          >
            Contact
          </a>
        </div>
      </motion.div>
      </Reveal>
    </section>
  );
};

export default About;

