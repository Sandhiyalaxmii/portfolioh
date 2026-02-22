import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SignatureBoxes = () => {
  const [activeSection, setActiveSection] = useState(null);

  const boxStyle =
    "group relative cursor-pointer p-8 rounded-2xl border " +
    "bg-white/60 dark:bg-white/5 backdrop-blur-lg " +
    "dark:border-white/10 border-black/10 " +
    "transition-all duration-300 " +
    "hover:-translate-y-2 hover:shadow-xl " +
    "hover:shadow-purple-200/40 dark:hover:shadow-purple-500/20";

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section
      id="explore"
      className="min-h-screen px-6 py-8 
      bg-gradient-to-b 
      from-[#f8f7f4] 
      to-[#f1efe9] 
      dark:from-[#0f0f0f] 
      dark:to-[#161616]"
    >
      <h2 className="heading-font text-5xl font-bold dark:text-white mb-12 text-center">
        What do you want to{" "}
        <span className="text-violet-600 dark:text-violet-400">
          explore?
        </span>
      </h2>

      {/* TOP GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full mx-auto">
        
        <motion.div
          whileHover={{ y: -8 }}
          className={boxStyle}
          onClick={() => toggleSection("projects")}
        >
          <h3 className="relative inline-block text-3xl font-bold dark:text-white">
            What I Cooked
            <span className="block w-16 h-1 bg-violet-400 mt-3 rounded-full"></span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Self-Curated Projects !!!
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className={boxStyle}
          onClick={() => toggleSection("skills")}
        >
          <h3 className="relative inline-block text-3xl font-bold dark:text-white">
            My Formulations
            <span className="block w-16 h-1 bg-violet-400 mt-3 rounded-full"></span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Tech stack and tools !!!
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className={boxStyle}
          onClick={() => toggleSection("achievements")}
        >
          <h3 className="relative inline-block text-3xl font-bold dark:text-white">
            The Stars on My Collar
            <span className="block w-16 h-1 bg-violet-400 mt-3 rounded-full"></span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Achievements !!!
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className={boxStyle}
          onClick={() => toggleSection("experience")}
        >
          <h3 className="relative inline-block text-3xl font-bold dark:text-white">
            The Highways
            <span className="block w-16 h-1 bg-violet-400 mt-3 rounded-full"></span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Real world experience !!!
          </p>
        </motion.div>
      </div>

      {/* HORIZONTAL EXPAND PANEL */}
      <AnimatePresence>
        {activeSection && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            {/* YOUR SAME PURPLE LINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.6 }}
              className="h-[2px] bg-violet-400 mb-6"
            />

            {/* HORIZONTAL CONTENT */}
            <div className="flex gap-8 overflow-x-auto pb-2">
              
              {activeSection === "projects" && (
  <>
    <ProjectCard
      image="/images/autocleanr.png"
      title="AutoCleanr"
      description="A structured data cleaning engine designed for schema validation, malformed data handling and automated ETL transformation workflows."
      github="https://github.com/YOUR_AUTOCLEANR_LINK"
    />

    <ProjectCard
      image="/images/autocleanr-scale.png"
      title="AutoCleanr – Large Scale Version"
      description="Production-ready version capable of handling larger datasets with modular ETL pipelines and scalable architecture patterns."
      github="https://github.com/YOUR_AUTOCLEANR_SCALE_LINK"
    />

    <ProjectCard
      image="/images/counseling.png"
      title="Student Counseling System"
      description="A structured platform to manage student counseling sessions, track progress and assist with data-driven academic guidance."
      github="https://github.com/YOUR_COUNSELING_LINK"
    />
  </>
)}

              {activeSection === "skills" && (
  <>
    <SkillCard
      title="Data Engineering"
      skills={["ETL Pipelines", "Data Cleaning", "Data Validation", "Data Ingestion"]}
    />

    <SkillCard
      title="Big Data & Processing"
      skills={["PySpark", "Parquet"]}
    />

    <SkillCard
      title="Programming Languages"
      skills={["Python", "SQL", "C"]}
    />

    <SkillCard
      title="Frontend & Web"
      skills={["HTML", "JavaScript", "React", "Tailwind CSS"]}
    />

    <SkillCard
      title="Data Visualization"
      skills={["Power BI"]}
    />

    <SkillCard
      title="Tools & Platforms"
      skills={["Git", "GitHub", "VS Code"]}
    />

    <SkillCard
      title="Soft Skills"
      skills={["Creative Thinking", "Public Speaking", "Leadership", "Collaboration"]}
    />
  </>
)}

              {activeSection === "achievements" && (
  <>
    {/* NABARD Idea Pitch */}
    <AchievementCard
      image="/images/nabard.jpeg"
      title="NABARD – Idea Pitch"
      description="Presented an agribusiness innovation model under MABIF, focusing on scalable sustainable engineering solutions."
    />

    {/* NABARD Winner */}
    <AchievementCard
      image="/images/nabard-win.jpeg"
      title="NABARD Winner – ₹25,000"
      description="Secured 1st place and won ₹25,000, validating the feasibility and innovation of the project."
    />

    {/* Toastmasters Club */}
    <AchievementCard
      image="/images/toastmasters-club.jpeg"
      title="Toastmasters – Club Level Winner"
      description="Won first place at the club-level contest, showcasing structured storytelling and confident delivery."
    />

    {/* Toastmasters Area */}
    <AchievementCard
      image="/images/toastmasters-area.jpeg"
      title="Toastmasters – Area Level Selection"
      description="Represented the club at area level, refining leadership, articulation, and stage presence."
    />

    {/* Madness SQL */}
    <AchievementCard
      image="/images/sql-win.jpeg"
      title="TCE – Madness SQL | 1st Prize"
      description="Secured 1st place in Madness SQL competition, demonstrating advanced ER modeling and SQL querying expertise."
    />
  </>
)}

              {activeSection === "experience" && (
  <>
    <ExperienceCard
      image="/images/eyantra.jpeg"   // add your image here
      title="IoT Intern – eYantra"
      description="Worked on IoT system integration, embedded systems development and real-time hardware-software interfacing under the eYantra initiative."
    />
  </>
)}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTACT CTA */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => {
            const section = document.getElementById("contact");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-4 py-2 rounded-xl
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

const HorizontalCard = ({ title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="min-w-[280px] p-6 rounded-2xl
      bg-white/60 dark:bg-white/5 backdrop-blur-lg
      border border-black/10 dark:border-white/10"
    >
      <h3 className="text-xl font-semibold dark:text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
        Short description here.
      </p>
    </motion.div>
  );
};
const AchievementCard = ({ image, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="min-w-[420px] flex gap-6 p-6 rounded-2xl
      bg-white/60 dark:bg-white/5 backdrop-blur-lg
      border border-black/10 dark:border-white/10"
    >
      {/* IMAGE */}
      <div className="w-40 h-28 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div>
        <h3 className="text-lg font-semibold dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
const SkillCard = ({ title, skills }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="min-w-[380px] p-6 rounded-2xl
      bg-white/60 dark:bg-white/5 backdrop-blur-lg
      border border-black/10 dark:border-white/10"
    >
      <h3 className="text-lg font-semibold dark:text-white mb-4">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-3 py-1 text-sm rounded-full
            bg-white dark:bg-zinc-900
            border border-gray-300 dark:border-gray-700
            text-gray-700 dark:text-gray-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
const ProjectCard = ({ image, title, description, github }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="min-w-[480px] flex gap-6 p-6 rounded-2xl
      bg-white/60 dark:bg-white/5 backdrop-blur-lg
      border border-black/10 dark:border-white/10"
    >
      {/* SMALL IMAGE BOX (Same as Achievements style) */}
      <div className="w-36 h-28 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold dark:text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-xs underline 
          border border-gray-300 dark:border-gray-700 
          rounded-md px-2 py-1 
          bg-white dark:bg-zinc-900
          text-zinc-800 dark:text-white
          hover:opacity-70 transition-colors duration-300"
        >
          Go to GitHub →
        </a>
      </div>
    </motion.div>
  );
};
const ExperienceCard = ({ image, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="min-w-[480px] flex gap-6 p-6 rounded-2xl
      bg-white/60 dark:bg-white/5 backdrop-blur-lg
      border border-black/10 dark:border-white/10"
    >
      {/* SMALL IMAGE LEFT */}
      <div className="w-36 h-28 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT RIGHT */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold dark:text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
export default SignatureBoxes;