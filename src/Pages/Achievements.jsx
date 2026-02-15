const achievements = [
  {
    title: "🏆 NABARD Idea Pitch Winner",
    desc: "Winner – Idea Pitching Competition (₹25,000 Cash Prize)",
  },
  {
    title: "🥇 Masters Query Madness – SQL",
    desc: "First Place – TCE College (₹2,000 Cash Prize)",
  },
  {
    title: "🎤 Toastmasters International",
    desc: "Humorous Speech Contest – Club 2nd Place | Area 3rd Place",
  },
  {
    title: "📖 Published Poet",
    desc: "Two poems published in an anthology.",
  },
];

const Achievements = () => {
  return (
    <div className="min-h-screen px-10 py-20 dark:text-white">
      <h1 className="text-4xl font-bold mb-12">The Stars on My Collar</h1>

      <div className="space-y-10">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-8 bg-white dark:bg-gray-900 shadow-md"
          >
            <div className="mb-6 h-40 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              Achievement Image Space
            </div>

            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
