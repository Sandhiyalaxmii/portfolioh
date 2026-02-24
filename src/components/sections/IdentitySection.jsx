import Reveal from "../ui/Reveal";

const IdentitySection = () => {
  return (
    <section
        id="identity"
        className="min-h-screen px-6 py-24 
           bg-gradient-to-b 
           from-[#f8f7f4] 
           to-[#f1efe9] 
           dark:from-[#0f0f0f] 
           dark:to-[#161616]"
        >

        <Reveal>

        
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

            {/* Left — Avatar */}
            <div className="relative flex justify-center items-center">

  {/* OUTER PURPLE RING */}
  <div className="absolute w-72 h-72 rounded-full border-4 border-violet-300 opacity-70"></div>

  {/* INNER PURPLE RING */}
  <div className="absolute w-68 h-68 rounded-full border-4 border-violet-500"></div>

  {/* IMAGE */}
  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-black shadow-xl z-10">
    <img
      src="/images/sandhiya.jpeg"
      alt="Sandhiya"
      className="w-full h-full object-cover"
    />
  </div>

  {/* DOODLE 1 – STAR */}
  <div className="absolute -top-4 right-6 text-violet-400 text-xl opacity-70">
    ✦
  </div>

  {/* DOODLE 2 – CURVE */}
  <div className="absolute bottom-4 -left-6 text-violet-400 text-2xl opacity-60 rotate-12">
    〰
  </div>

  {/* DOODLE 3 – SMALL DOT */}
  <div className="absolute top-12 -left-4 w-3 h-3 bg-violet-400 rounded-full opacity-60"></div>

</div>

            {/* Right — Text */}
            <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                வணக்கம்
            </p>

            <h2 className="heading-font text-5xl font-bold dark:text-white mb-6 text-center md:text-left">
  I'm <span className="text-violet-600 dark:text-violet-400">Sandhiya Laxmi</span>
</h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Hi people👋
                <br />  

I’m currently pursuing Artificial Intelligence and Data Science. Over time, I’ve found myself drawn toward working with data — understanding how it flows, how it can be structured, and how small changes can make systems work better.

Writing has always stayed with me too. It shaped the way I think and express ideas.

Somewhere between logic and language, I’m building my space — learning, experimenting, and figuring things out one project at a time.
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
