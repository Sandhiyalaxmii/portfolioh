const Skills = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-24">

      <h1 className="text-4xl font-bold text-center mb-20 dark:text-white">
        My Formulations ⚙️
      </h1>

      <div className="space-y-24 max-w-6xl mx-auto">

        <SkillCategory
          title="Data Engineering"
          skills={[
            { icon: "🔄", label: "ETL Pipelines" },
            { icon: "🧹", label: "Data Cleaning" },
            { icon: "✅", label: "Data Validation" },
            { icon: "📥", label: "Data Ingestion" }
          ]}
        />

        <SkillCategory
          title="Big Data & Processing"
          skills={[
            { icon: "⚡", label: "PySpark" },
            { icon: "📦", label: "Parquet" }
          ]}
        />

        <SkillCategory
          title="Programming Languages"
          skills={[
            { icon: "🐍", label: "Python" },
            { icon: "🗄️", label: "SQL" },
            { icon: "💻", label: "C" }
          ]}
        />

        <SkillCategory
          title="Frontend & Web"
          skills={[
            { icon: "🌐", label: "HTML" },
            { icon: "🟨", label: "JavaScript" },
            { icon: "⚛️", label: "React" },
            { icon: "🎨", label: "Tailwind CSS" }
          ]}
        />

        <SkillCategory
          title="Data Visualization"
          skills={[
            { icon: "📊", label: "Power BI" }
          ]}
        />

        <SkillCategory
          title="Tools & Platforms"
          skills={[
            { icon: "🔧", label: "Git" },
            { icon: "🐙", label: "GitHub" },
            { icon: "🖥️", label: "VS Code" }
          ]}
        />

        <SkillCategory
          title="Soft Skills"
          skills={[
            { icon: "💡", label: "Creative Thinking" },
            { icon: "🎤", label: "Public Speaking" },
            { icon: "👑", label: "Leadership" },
            { icon: "🤝", label: "Collaboration" }
          ]}
        />

      </div>
    </section>
  );
};


const SkillCategory = ({ title, skills }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-12 dark:text-white">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">

            {/* Rounded Square */}
            <div className="w-24 h-24 rounded-2xl 
                            bg-white dark:bg-zinc-900 
                            border border-gray-300 dark:border-gray-700
                            flex items-center justify-center 
                            text-3xl
                            shadow-sm
                            hover:scale-105 hover:shadow-lg
                            transition-all duration-300">
              {skill.icon}
            </div>

            {/* Label */}
            <p className="mt-4 text-sm dark:text-gray-300">
              {skill.label}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
