import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [message, setMessage] = useState("");

  const isValid = message.trim().toLowerCase() === "hi";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

      <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-6">
        Want to connect?
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
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

    </section>
  );
};

export default Contact;
