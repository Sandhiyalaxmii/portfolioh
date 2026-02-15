import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WiperIntro = ({ onComplete }) => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStart(true), 200);
    const timer2 = setTimeout(() => onComplete(), 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-black overflow-hidden">

      {/* Left wipe */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: start ? "-100%" : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-black dark:bg-white"
      />

      {/* Right wipe */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: start ? "100%" : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-black dark:bg-white"
      />

    </div>
  );
};

export default WiperIntro;
