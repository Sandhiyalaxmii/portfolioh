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

  const renderContent = (section) => {
    switch (section) {
      case "projects":
        return (
          <>
            <ProjectCard
              
              title="Student Counseling System"
              description="Machine learning system that predicts student dropout risk using academic and behavioral data.
Includes an AI-powered counseling assistant to provide interactive guidance.."
              github="https://github.com/Sandhiyalaxmii/student-counseling-system"
            />
            <ProjectCard
              
              title="AutoCleanr"
              description="Structured data cleaning engine with schema validation and automated ETL workflows using pandas."
              github="https://github.com/Sandhiyalaxmii/autocleanr"
            />
            <ProjectCard
              
              title="AutoCleanr – Large Scale Version"
              description="Scalable data validation and preprocessing pipeline for large structured datasets.
Built using PySpark to automate ETL workflows and improve processing efficiency."
              github="https://github.com/YOUR_AUTOCLEANR_SCALE_LINK"
            />
            <ProjectCard
              
              title="Image Captioning Model (CNN + GRU + Attention)"
              description="Deep learning model that generates natural language captions from images.
Uses CNN feature extraction with GRU sequence modeling and an attention mechanism."
              github="https://github.com/Sandhiyalaxmii/CtC"
            />
            <ProjectCard
              title="LinkVer – AI LinkedIn Banner Generator"
              description="AI-powered web tool that generates personalized LinkedIn banner designs.
Uses dynamic prompt generation to create professional profile visuals."
              github="https://github.com/Sandhiyalaxmii/linkver"
            />
          </>
        );

      case "skills":
        return (
          <>
            <SkillCard
      title="AI/ML"
      skills={["Artificial Intelligence", "Machine Learning", "Deep Learning", "NLP","LLMs"]}
    />
            <SkillCard
      title="Programming Languages"
      skills={["Python", "SQL"]}
    />
    <SkillCard
      title="Big Data & Processing"
      skills={["ETL Pipelines","PySpark", "Parquet"]}
    />


    <SkillCard
      title="Frontend & Web"
      skills={["HTML","css","JavaScript"]}
    />

    <SkillCard
      title="Data Visualization"
      skills={["Power BI"]}
    />

    <SkillCard
      title="Tools & Platforms"
      skills={["Git", "GitHub", "VS Code","vercel"]}
    />

    <SkillCard
      title="Soft Skills"
      skills={["Creative Thinking", "Public Speaking", "Leadership", "Collaboration"]}
    />
  </>
);

      case "achievements":
        return (
          <>
                {/* NABARD Idea Pitch */}
    <AchievementCard
      image="/images/nabard.jpeg"
      title="NABARD – Idea Pitch"
      description=" The project focused on transforming agricultural waste 
      into biodegradable plastic alternatives. An AI-based optimization tool 
      dynamically determined material composition and proportion based on the 
      intended storage use."
    />

    {/* NABARD Winner */}
    <AchievementCard
      image="/images/nabard-win.jpeg"
      title="NABARD Winner – ₹25,000"
      description="Presented at TNAU finals and 
      secured 1st place with a cash award of ₹25,000, affirming both innovation and execution strength."
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
);

      case "experience":
        return (
          <>
            <ExperienceCard
              image="/images/eyantra.jpeg"
              title="IoT Intern – eYantra"
              description="Worked on IoT system integration and embedded systems development."
            />
          </>
        );

      default:
        return null;
    }
  };

  const sections = [
    { key: "projects", title: "What I Cooked", desc: "Self-Curated Projects !!!" },
    { key: "skills", title: "My Formulations", desc: "Tech stack and tools !!!" },
    { key: "achievements", title: "The Stars on My Collar", desc: "Achievements !!!" },
    { key: "experience", title: "The Highways", desc: "Real world experience !!!" },
  ];

  return (
    <section
      id="explore"
      className="min-h-screen px-6 py-8 bg-gradient-to-b from-[#f8f7f4] to-[#f1efe9] dark:from-[#0f0f0f] dark:to-[#161616]"
    >
      <h2 className="heading-font text-5xl font-bold dark:text-white mb-6 text-center">
        What do you want to{" "}
        <span className="text-violet-600 dark:text-violet-400">
          explore?
        </span>
      </h2>
      <h6 className="heading-font text-xl font-bold dark:text-white mb-6 text-center italic">
        click on the box you wish to{" "}
        <span className="text-violet-600 dark:text-violet-400 italic">
          explore!!
        </span>
      </h6>
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

        {sections.map((item) => (
          <div key={item.key} className="flex flex-col">

            {/* BOX */}
            <motion.div
              whileHover={{ y: -8 }}
              className={boxStyle}
              onClick={() => toggleSection(item.key)}
            >
              <h3 className="relative inline-block text-3xl font-bold dark:text-white">
                {item.title}
                <span className="block w-16 h-1 bg-violet-400 mt-3 rounded-full"></span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                {item.desc}
              </p>
            </motion.div>

            {/* MOBILE EXPAND */}
            <AnimatePresence>
              {activeSection === item.key && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden mt-6"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="h-[2px] bg-violet-400 mb-6"
                  />
                  <div className="flex gap-6 overflow-x-auto pb-2">
                    {renderContent(item.key)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}

      </div>

      {/* DESKTOP EXPAND */}
      <div className="hidden lg:block">
        <AnimatePresence>
          {activeSection && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                className="h-[2px] bg-violet-400 mb-6"
              />
              <div className="flex gap-8 overflow-x-auto pb-2">
                {renderContent(activeSection)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => {
            const section = document.getElementById("contact");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-4 py-2 rounded-xl border border-zinc-400 dark:border-zinc-600
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

/* ---------------- CARDS ---------------- */
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
      className="min-w-[600px] flex gap-6 p-6 rounded-2xl
      bg-white/60 dark:bg-white/5 backdrop-blur-lg
      border border-black/10 dark:border-white/10"
    >
      {/* IMAGE */}
      <div className="w-96 h-36 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover shrink-0"
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