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

        <h2 className="heading-font text-5xl font-bold dark:text-white mb-12 text-center">
  Kutty <span className="text-violet-600 dark:text-violet-400">Story</span>
</h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I don’t think it’s a great idea to drop a long essay in a portfolio — so here’s a kutty story about me.
          <br />
          <span className="text-base text-gray-600 dark:text-gray-300 leading-relaxed italic">
          I once called myself a “literature girl.”
          <br />
          Mostly because I was a bookworm and a not-so-great writer who loved words more than numbers.
          Somehow, I ended up publishing two of my poems in the anthology Adulting by Writer’s Pocket — and I thought that was the direction my life would take.
          <br />
          But the universe had other plans.
          It placed me in Engineering.
And not just engineering — Artificial Intelligence and Data Science.
          I’ll admit, In my first year- I didn’t fully understand where I belonged.
But my second year changed everything.

A friend and I had an idea. We presented it once and didn’t win. Instead of letting it fade, we built it properly — turned it into something tangible — and presented it again. This time, we won.
          <br />
          That moment shifted something in me.
          <br />  

I didn’t just like ideas anymore.
<br />
I liked building them.
<br />
I liked structuring them.
<br />
I liked working with data — cleaning it, shaping it, making it meaningful.
<br />
Now, I’m a self-driven data enthusiast, curating real-world projects, learning core data engineering concepts, and building systems that work beyond theory.

And no — I didn’t ditch writing.

I just changed what I write with.

Sometimes it’s poetry.
Most days, it’s pipelines.
<br />
Occasional writer.
Full-time data worker — wiring with data.</span>
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
