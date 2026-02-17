import { useNavigate } from "react-router-dom";


const Identity = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-20 dark:text-white">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        வணக்கம் — I’m Sandhiya Laxmi.
      </h1>

      <p className="text-center max-w-2xl text-gray-600 dark:text-gray-300 mb-12">
        I transform chaos into clean data pipelines and thoughts into quiet words.
        A Data Engineering enthusiast building intelligent systems from structured complexity —
        and an occasional writer who turns experiences into poetry.
      </p>

      {/* Subtle Tamil divider */}
      <div className="my-10 w-40 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent dark:via-amber-500" />

      {/* Circles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

        {/* Book */}
        <a href="/about-me" className="group">
          <div className="w-32 h-32 rounded-full border flex items-center justify-center
                          dark:border-white border-black transition-all duration-300
                          group-hover:scale-110">
            <span className="text-4xl">📖</span>
          </div>
          <p className="mt-4">Kutty story about me</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Sandhiyalaxmii"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="w-32 h-32 rounded-full border flex items-center justify-center
                          dark:border-white border-black transition-all duration-300
                          group-hover:scale-110">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-12 h-12"
            />
          </div>
          <p className="mt-4">I learn.</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/Sandhiyalaxmii"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="w-32 h-32 rounded-full border flex items-center justify-center
                          dark:border-white border-black transition-all duration-300
                          group-hover:scale-110">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-12 h-12"
            />
          </div>
          <p className="mt-4">I flex.</p>
        </a>

        {/* Resume */}
        <a href="/resume.pdf" className="group">
          <div className="w-32 h-32 rounded-full border flex items-center justify-center
                          dark:border-white border-black transition-all duration-300
                          group-hover:scale-110">
            <span className="text-4xl">📄</span>
          </div>
          <p className="mt-4">
            Open for a real job.
          </p>
        </a>

      </div>
      
      <button
        onClick={() => {
        navigate("/explore");
        setTimeout(() => {
        const section = document.getElementById("explore");
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }}
          className="mt-16 px-8 py-3 border rounded-lg 
             dark:border-white border-black 
             dark:text-white text-black 
             hover:scale-105 transition-all duration-300"
>
         Explore more →
      </button>
     {/* Footer Identity Line */}
      <p className="mt-20 text-sm text-gray-400 dark:text-gray-500 italic text-center">
        Rooted in Tamil Nadu. Building for the world.
      </p>

    </div>
  );
};

export default Identity;
