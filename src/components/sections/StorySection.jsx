import Reveal from "../ui/Reveal";

const StorySection = () => {
  return (
    <section className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
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
      </Reveal>
    
    </section>
  );
};

export default StorySection;
