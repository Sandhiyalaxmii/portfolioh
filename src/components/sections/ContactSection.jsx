import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";

const Contact = () => {
  const [message, setMessage] = useState("");

  const isValid = message.trim().toLowerCase() === "hi";

  return (
    <section
  id="contact"
  className="py-32 px-6
                bg-[#f8f7f4] dark:bg-[#0f0f0f]"
>

      <Reveal>
      

<div className="flex flex-wrap justify-center gap-12 mb-20 text-center">

  {/* GitHub */}
  <div className="flex flex-col items-center">
    <a
      href="https://github.com/Sandhiyalaxmii"
      target="_blank"
      rel="noopener noreferrer"
      className="w-24 h-24 rounded-full border flex items-center justify-center 
                 dark:border-white border-black 
                 hover:scale-110 transition-all duration-300"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub"
        className="w-12 h-12"
      />
    </a>
    <p className="mt-4 text-sm dark:text-gray-300">
      GitHub — I work
    </p>
  </div>

  {/* LinkedIn */}
  <div className="flex flex-col items-center">
    <a
      href="https://linkedin.com/in/YOUR_LINKEDIN"
      target="_blank"
      rel="noopener noreferrer"
      className="w-24 h-24 rounded-full border flex items-center justify-center 
                 dark:border-white border-black 
                 hover:scale-110 transition-all duration-300"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        alt="LinkedIn"
        className="w-12 h-12"
      />
    </a>
    <p className="mt-4 text-sm dark:text-gray-300">
      LinkedIn — I flex
    </p>
  </div>

  {/* Resume */}
  <div className="flex flex-col items-center">
    <a
      href="/resume.pdf"
      className="w-24 h-24 rounded-full border flex items-center justify-center 
                 dark:border-white border-black 
                 hover:scale-110 transition-all duration-300 text-3xl"
    >
      📄
    </a>
    <p className="mt-4 text-sm dark:text-gray-300">
      Resume — Open for a real job
    </p>
  </div>

{/* Gmail */}
<div className="flex flex-col items-center">
  <a
    href="mailto:yourmail@gmail.com"
    className="w-24 h-24 rounded-full border flex items-center justify-center 
               dark:border-white border-black 
               hover:scale-110 transition-all duration-300"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
      alt="Gmail"
      className="w-12 h-12"
    />

  
  </a>
  <p className="mt-4 text-sm dark:text-gray-300">
    Mail — Contact me
  </p>
</div>


</div>


      <h2 className="heading-font text-5xl font-bold text-black dark:text-white mb-6 text-center">
  Want to <span className="text-violet-600 dark:text-violet-400">Connect</span>
</h2>

      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
        Type <span className="font-semibold">Hi</span> to start the conversation.
      </p>

      <div className="flex flex-col items-center gap-4">

        <input
          type="text"
          placeholder="Type Hi..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-6 py-3 border rounded-lg text-center 
                     dark:bg-black dark:text-white 
                     border-black dark:border-white outline-none"
        />

        <motion.a
          href={isValid ? "mailto:yourmail@gmail.com" : "#"}
          whileHover={isValid ? { scale: 1.05 } : {}}
          className={`px-6 py-3 rounded-lg border transition-all duration-300 
            ${
              isValid
                ? "border-black dark:border-white dark:text-white text-black cursor-pointer"
                : "border-gray-400 text-gray-400 cursor-not-allowed"
            }`}
        >
          Say Hi 👋
        </motion.a>

      </div>
      </Reveal>
    </section>
  );
};

export default Contact;
