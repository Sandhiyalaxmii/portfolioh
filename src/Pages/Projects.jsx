const Projects = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-24">

      <h1 className="text-4xl font-bold text-center mb-20 dark:text-white">
        What I've Cooked 🍳
      </h1>


      {/* ================= AUTO CLEANR ================= */}
      <div className="flex flex-col gap-24">


        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* LEFT - IMAGE CIRCLE */}
          <div className="w-48 h-48 rounded-full border-2 border-black dark:border-white flex items-center justify-center overflow-hidden">
            {/* Replace with your image */}
            <img
              src="/images/autocleanr.png"
              alt="AutoCleanr"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT - CONTENT */}
          <div className="max-w-xl">

            <h2 className="text-2xl font-semibold dark:text-white">
              AutoCleanr
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              A structured data cleaning engine designed for schema validation,
              malformed data handling and automated ETL transformation workflows.
              Built with scalability and clean architecture in mind.
            </p>

            <a
              href="https://github.com/YOUR_AUTOCLEANR_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm underline hover:opacity-70"
            >
              Go to GitHub →
            </a>

          </div>
        </div>


        {/* Divider Line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />


        {/* Project 2 - Scaled Version */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* LEFT */}
          <div className="w-48 h-48 rounded-full border-2 border-black dark:border-white flex items-center justify-center overflow-hidden">
            <img
              src="/images/autocleanr-scale.png"
              alt="AutoCleanr Scale"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT */}
          <div className="max-w-xl">

            <h2 className="text-2xl font-semibold dark:text-white">
              AutoCleanr – Large Scale Version
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              An extended production-ready version capable of handling larger
              datasets with modular ETL pipelines and scalable architecture
              patterns for enterprise-level workflows.
            </p>

            <a
              href="https://github.com/YOUR_AUTOCLEANR_SCALE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm underline hover:opacity-70"
            >
              Go to GitHub →
            </a>

          </div>
        </div>


        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />


        {/* ================= STUDENT COUNSELING ================= */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* LEFT */}
          <div className="w-48 h-48 rounded-full border-2 border-black dark:border-white flex items-center justify-center overflow-hidden">
            <img
              src="/images/counseling.png"
              alt="Student Counseling System"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT */}
          <div className="max-w-xl">

            <h2 className="text-2xl font-semibold dark:text-white">
              Student Counseling System
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              A structured platform built to manage student counseling sessions,
              track progress and assist with data-driven academic guidance.
              Designed with clarity and usability in focus.
            </p>

            <a
              href="https://github.com/YOUR_COUNSELING_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm underline hover:opacity-70"
            >
              Go to GitHub →
            </a>

          </div>
        </div>


      </div>
    </section>
  );
};

export default Projects;

