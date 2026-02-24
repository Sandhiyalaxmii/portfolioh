import { useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#f8f7f4] dark:bg-[#0f0f0f]"
    >
      <Reveal>

        {/* Top Icons Section */}
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
              {/* Light Mode Logo */}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-12 h-12 dark:hidden"
              />
              {/* Dark Mode White Logo */}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                alt="GitHub"
                className="w-12 h-12 hidden dark:block invert"
              />
            </a>
            <p className="mt-4 text-sm dark:text-gray-300">
              GitHub — I build
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <a
              href="https://linkedin.com/in/sandhiya-laxmi"
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
              target="_blank"
              rel="noopener noreferrer"
              className="w-24 h-24 rounded-full border flex items-center justify-center 
                         dark:border-white border-black 
                         hover:scale-110 transition-all duration-300 text-3xl"
            >
              📄
            </a>
            <p className="mt-4 text-sm dark:text-gray-300">
              Resume — Open for a Real job
            </p>
          </div>

          {/* Gmail */}
          <div className="flex flex-col items-center">
            <a
              href="mailto:sandhiyamuniappan955@gmail.com"
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
              Email — contact me?
            </p>
          </div>

        </div>

        {/* Contact Heading */}
        <h2 className="heading-font text-5xl font-bold text-black dark:text-white mb-6 text-center">
          Want to <span className="text-violet-600 dark:text-violet-400">Connect</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center">
          Send a message directly — it lands straight in my inbox.
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center gap-4"
        >

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="px-6 py-3 border rounded-lg w-72 text-center 
                       dark:bg-black dark:text-white 
                       border-black dark:border-white outline-none"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="px-6 py-3 border rounded-lg w-72 text-center 
                       dark:bg-black dark:text-white 
                       border-black dark:border-white outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="2"
            className="px-2 py-2 border rounded-lg w-72 text-center 
                       dark:bg-black dark:text-white 
                       border-black dark:border-white outline-none"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-lg border 
                       border-black dark:border-white 
                       dark:text-white text-black
                       transition-all duration-300"
          >
            Send Message ✉️
          </motion.button>

        </form>

      </Reveal>
    </section>
  );
};

export default Contact;
