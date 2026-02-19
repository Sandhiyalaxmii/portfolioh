import Reveal from "../ui/Reveal";

const StorySection = () => {
  return (
    <section
      id="story"
      className="py-32 px-6
                bg-[#f8f7f4] dark:bg-[#0f0f0f]"
    >


        <Reveal>
    
      
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-8">
          Kutty Story.
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          My journey began with curiosity — breaking problems apart just to
          understand how they breathe. Over time, chaos became patterns,
          patterns became pipelines, and pipelines became systems.
          <br /><br />
          From building data validation engines to experimenting with AI models,
          I learned that engineering is not just about tools — it’s about clarity.
          <br /><br />
          I build with structure. I learn with intention. I ship with purpose.
        </p>

      </div>
      <div className="mt-16 flex justify-center">
  <button
    onClick={() => {
      const section = document.getElementById("explore");
      section?.scrollIntoView({ behavior: "smooth" });
    }}
    className="px-6 py-3 rounded-xl
           border border-zinc-400 dark:border-zinc-600
           text-zinc-800 dark:text-zinc-200
           bg-white/50 dark:bg-white/5
           backdrop-blur-sm
           hover:scale-105 transition-all duration-300"



  >
    Explore more →
  </button>
</div>

      </Reveal>
    
    </section>
  );
};

export default StorySection;
