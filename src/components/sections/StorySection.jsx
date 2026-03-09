import Reveal from "../ui/Reveal";

const StorySection = () => {
  return (
    <section
      id="story"
      className="py-6 px-2
                bg-[#f8f7f4] dark:bg-[#0f0f0f]"
    >


        <Reveal>
    
      
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="heading-font text-3xl font-bold dark:text-white mb-8 text-center">
  Kutty <span className="text-violet-600 dark:text-violet-400">Story</span>
</h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I don’t think it’s a great idea to drop a long essay in a portfolio — so here’s a kutty story about me.
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
I don’t think a portfolio needs a long essay — so here’s a small story about me.

<br />

<span className="text-base italic">
I once called myself a “literature girl.”


<br />

Mostly because I was a bookworm — and a not-so-great writer who loved words more than numbers.  
Somewhere along the way, two of my poems found their place in the anthology <span className="italic">Adulting</span> by Writer’s Pocket. For a while, I thought writing might be the path my life would follow.

<br />

But the universe had other plans.

<br />

It placed me in engineering — and not just engineering, but <span className="font-medium">Artificial Intelligence and Data Science</span>.  
In my first year, I wasn’t sure where I belonged.


That changed in my second year.

A friend and I had an idea.  
We presented it once — and didn’t win.

Instead of letting it disappear, we rebuilt it. We worked on it properly, turned it into something tangible, and presented it again.

This time, we WON.

Something shifted after that.


I realized I didn’t just enjoy ideas.

I enjoyed building them.  
Structuring them.  
Working with data — cleaning it, shaping it, and turning it into something meaningful.

<br />

Today, I’m an aspiring <span className="font-medium">AI/ML engineer</span> exploring how data flows through systems — from raw information to working models and practical solutions. I’m constantly building projects, experimenting, and learning how real systems come together.

<br />

And no — I didn’t stop writing.

<br />

I just changed what I write with.

<br />

Sometimes it’s poetry.  
Most days, it’s pipelines.

<br />

Occasional writer.  
Full-time builder — wiring ideas with data.
</span>
</p>
        </p>     
      </div>
      <div className="mt-8 flex justify-center">
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
