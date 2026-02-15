const projects = [
  {
    title: "Autocleanr — Data Cleaning & Validation Pipeline",
    tech: "Python, Pandas, SQL, CSV",
    description:
      "Designed a modular ETL pipeline to clean, validate, and structure raw CSV datasets. Automated handling of missing and inconsistent records and separated clean vs invalid records.",
    github: "https://github.com/Sandhiyalaxmii",
  },
  {
    title: "Autocleanr-scale — Distributed Pipeline (In Progress)",
    tech: "PySpark, Python, Parquet",
    description:
      "Extending Autocleanr to handle large datasets using PySpark and adapting validation logic for distributed execution.",
    github: "https://github.com/Sandhiyalaxmii",
  },
  {
    title: "Layoff Dataset — Data Cleaning & EDA",
    tech: "SQL",
    description:
      "Standardized and cleaned real-world layoff data, handled missing values and duplicates, and generated structured datasets for analysis.",
    github: "https://github.com/Sandhiyalaxmii",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen px-10 py-20 dark:text-white">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-xl p-8 shadow-md bg-white dark:bg-gray-900"
          >
            <div className="mb-6 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              Project Image Space
            </div>

            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Tech Stack: {project.tech}
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2 border rounded-lg dark:border-white border-black hover:scale-105 transition-all"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
