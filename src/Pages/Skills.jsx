const Skills = () => {
  return (
    <div className="min-h-screen px-10 py-20 dark:text-white">
      <h1 className="text-4xl font-bold mb-12">My Formulations</h1>

      <div className="grid md:grid-cols-2 gap-10 text-lg">

        <div>
          <h2 className="text-2xl font-semibold mb-4">💻 Technical Skills</h2>
          <ul className="space-y-2">
            <li>🐍 Python (Pandas)</li>
            <li>🗄 SQL</li>
            <li>⚙ ETL Pipelines</li>
            <li>📊 Data Cleaning & Validation</li>
            <li>🔥 PySpark & Parquet</li>
            <li>🧠 ML & CNN Basics</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">✨ Soft Skills</h2>
          <ul className="space-y-2">
            <li>🎤 Public Speaking</li>
            <li>✍ Creative Writing</li>
            <li>🤝 Leadership</li>
            <li>📢 Communication</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Skills;
