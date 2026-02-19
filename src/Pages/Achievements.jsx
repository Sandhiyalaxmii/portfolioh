const Achievements = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-24 relative">

      <h1 className="text-4xl font-bold text-center mb-24 dark:text-white">
        The Stars on My Collar ⭐
      </h1>

      <div className="space-y-40 max-w-6xl mx-auto relative">

        {/* ================= NABARD JOURNEY ================= */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-20 top-20 h-[320px] w-[2px] 
                          bg-gradient-to-b from-black to-transparent 
                          dark:from-white opacity-40" />

          {/* Idea Pitch */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="w-40 h-40 rounded-full border-2 border-black dark:border-white 
                            flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-900">
              <img src="/images/nabard.png" alt="NABARD Idea Pitch"
                   className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold dark:text-white">
                NABARD – Idea Pitch
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Presented an agribusiness innovation model under MABIF,
                focusing on scalable sustainable engineering solutions.
              </p>
            </div>
          </div>

          {/* Winner */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-40 h-40 rounded-full border-2 border-black dark:border-white 
                            flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-900">
              <img src="/images/nabard-win.png" alt="NABARD Winner"
                   className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold dark:text-white">
                NABARD Winner – ₹25,000
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Secured 1st place and won ₹25,000, validating the
                feasibility and innovation of the project.
              </p>
            </div>
          </div>

        </div>


        {/* ================= TOASTMASTERS JOURNEY ================= */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute right-20 top-20 h-[320px] w-[2px] 
                          bg-gradient-to-b from-black to-transparent 
                          dark:from-white opacity-40" />

          {/* Club Level */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="w-40 h-40 rounded-full border-2 border-black dark:border-white 
                            flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-900">
              <img src="/images/toastmasters-club.png"
                   alt="Toastmasters Club"
                   className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 text-right md:text-left">
              <h2 className="text-2xl font-semibold dark:text-white">
                Toastmasters – Club Level Winner
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Won first place at the club-level contest,
                showcasing structured storytelling and confident delivery.
              </p>
            </div>
          </div>

          {/* Area Level */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-40 h-40 rounded-full border-2 border-black dark:border-white 
                            flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-900">
              <img src="/images/toastmasters-area.png"
                   alt="Toastmasters Area"
                   className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 text-right md:text-left">
              <h2 className="text-2xl font-semibold dark:text-white">
                Toastmasters – Area Level Selection
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Represented the club at area level, refining leadership,
                articulation, and stage presence.
              </p>
            </div>
          </div>

        </div>


        {/* ================= TCE SQL WIN ================= */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image LEFT */}
          <div className="w-40 h-40 rounded-full border-2 border-black dark:border-white 
                          flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-900">
            <img src="/images/sql-win.png"
                 alt="TCE SQL Win"
                 className="w-full h-full object-cover" />
          </div>

          {/* Text RIGHT */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold dark:text-white">
              TCE – Madness SQL | 1st Prize
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Secured 1st place in Madness SQL competition,
              demonstrating advanced ER modeling and SQL querying expertise.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
