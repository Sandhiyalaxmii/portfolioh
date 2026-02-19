import Reveal from "../ui/Reveal";

const IdentitySection = () => {
  return (
    <section
        id="identity"
        className="min-h-screen flex items-center px-6 py-24
                    bg-[#f1efe9] dark:bg-[#161616]"
        >

        <Reveal>

        
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

            {/* Left — Avatar */}
            <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gray-200 dark:bg-gray-800 
                            flex items-center justify-center text-6xl">
                👩‍💻
            </div>
            </div>

            {/* Right — Text */}
            <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                வணக்கம்
            </p>

            <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-6">
                I’m Sandhiya Laxmi.
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I transform chaos into clean data pipelines and thoughts into quiet words.
                A Data Engineering enthusiast building intelligent systems from structured complexity —
                and an occasional writer who turns experiences into poetry.
            </p>

            <button
            onClick={() => {
                const section = document.getElementById("story");
                section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl
           border border-zinc-400 dark:border-zinc-600
           text-zinc-800 dark:text-zinc-200
           bg-white/50 dark:bg-white/5
           backdrop-blur-sm
           hover:scale-105 transition-all duration-300"



            >
            Kutty story about me →
            </button>

            </div>

        </div>
        </Reveal>
    </section>
  );
};

export default IdentitySection;
