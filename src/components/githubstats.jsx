import React from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const GithubStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-[320px] md:w-[500px] bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] text-white"
    >
      <h2 className="text-xl font-bold mb-4 text-center text-cyan-300">GitHub Contributions</h2>
      <div className="overflow-auto">
        <GitHubCalendar
          username="my-lord1"
          blockSize={14}
          blockMargin={5}
          color="#0EA5E9" // Tailwind sky-500
          fontSize={14}
        />
      </div>
    </motion.div>
  );
};

export default GithubStats;
