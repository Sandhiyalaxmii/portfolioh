import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignatureBoxes = () => {
  const navigate = useNavigate();

  const boxStyle =
    "cursor-pointer p-8 rounded-2xl border dark:border-white border-black transition-all duration-300 hover:scale-105 hover:shadow-xl";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">

      <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-12">
        What do you want to explore?
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl w-full">

        {/* Projects */}
        <motion.div
          whileHover={{ y: -8 }}
          className={boxStyle}
          onClick={() => navigate("/projects")}
        >
          <h3 className="text-xl font-semibold dark:text-white mb-4">
            What I Cooked & Cooking
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            From ETL pipelines to AI systems — explore what I've built and what I'm currently crafting.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          whileHover={{ y: -8 }}
          className={boxStyle}
          onClick={() => navigate("/skills")}
        >
          <h3 className="text-xl font-semibold dark:text-white mb-4">
            My Formulations
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            The technologies, frameworks, and structured approaches behind my systems.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          whileHover={{ y: -8 }}
          className={boxStyle}
          onClick={() => navigate("/achievements")}
        >
          <h3 className="text-xl font-semibold dark:text-white mb-4">
            The Stars on My Collar
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Awards, milestones, and recognitions earned through consistent execution.
          </p>
        </motion.div>
        
        <motion.div
          whileHover={{ y: -8 }}
          className={boxStyle}
          onClick={() => navigate("/experience")}
        >
          <h3 className="text-xl font-semibold dark:text-white mb-4">
            Where I've Been
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            My journey through projects, experiments, and hands-on system building.
          </p>
        </motion.div>


      </div>
    </section>
  );
};

export default SignatureBoxes;
