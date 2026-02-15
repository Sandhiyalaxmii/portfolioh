const Experience = () => {
  return (
    <div className="min-h-screen px-10 py-20 dark:text-white">
      <h1 className="text-4xl font-bold mb-12">Experience</h1>

      <div className="flex flex-col items-center space-y-12">

        <div className="border p-8 rounded-xl bg-white dark:bg-gray-900 shadow-md w-full md:w-2/3">
          <h2 className="text-2xl font-semibold">
            IoT Intern – e-YANTRA (June 2023 – July 2023)
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Processed real-time IoT sensor data using Python and improved
            data validation accuracy.
          </p>
        </div>

        <div className="h-16 w-1 bg-black dark:bg-white"></div>

        <div className="border p-8 rounded-xl bg-white dark:bg-gray-900 shadow-md w-full md:w-2/3">
          <div className="mb-4 h-40 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            Flowchart Image Space
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Journey from IoT Data Processing → ETL Systems → Distributed Data Engineering.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Experience;
