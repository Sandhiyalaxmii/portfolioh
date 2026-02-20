import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignatureBoxes = () => {
  const navigate = useNavigate();

  const boxStyle =
      "group relative cursor-pointer p-8 rounded-2xl border " +
      "bg-white/60 dark:bg-white/5 backdrop-blur-lg " +
      "dark:border-white/10 border-black/10 " +
      "transition-all duration-300 " +
      "hover:-translate-y-2 hover:shadow-xl " +
      "hover:shadow-purple-200/40 dark:hover:shadow-purple-500/20";
  return (
    <section
      id="explore"
      className="min-h-screen px-6 py-24 
           bg-gradient-to-b 
           from-[#f8f7f4] 
           to-[#f1efe9] 
           dark:from-[#0f0f0f] 
           dark:to-[#161616]"
    >



      <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-12">
        What do you want to explore?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">

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
      {/* Contact CTA */}
<div className="mt-20 flex justify-center">
  <button
    onClick={() => {
      const section = document.getElementById("contact");
      section?.scrollIntoView({ behavior: "smooth" });
    }}
    className="px-6 py-3 rounded-xl
           border border-zinc-400 dark:border-zinc-600
           text-zinc-800 dark:text-zinc-200
           bg-white/50 dark:bg-white/5
           backdrop-blur-sm
           hover:scale-105 transition-all duration-300"


  >
    Let’s connect →
  </button>
</div>

    </section>
  );
};

export default SignatureBoxes;
