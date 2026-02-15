import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-12"
    >
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
          A Data Engineering enthusiast building intelligent systems from structured chaos.
          I design ETL pipelines, experiment with AI models, and transform ideas into scalable architectures.
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
    </section>
  );
};

export default About;

