import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Subproject } from "../components/subproject1";
import { useState } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function Project() {
  const navigate = useNavigate();
  const handleBackgroundClick = (e) => {
    if (e.target.id === "project-background") navigate("/");
  };

  // List of your projects
  const projects = [
    {
      title: "Instant-eats",
      description:
        "Modern food delivery app using Supabase, PostgreSQL, Node.js, React-TSX, TypeScript, etc.",
      githubLink: "https://github.com/yourusername/instant-eats",
      websiteLink: "https://instant-eats.live",
    },
    {
      title: "Instant-eats",
      description:
        "Modern food delivery app using Supabase, PostgreSQL, Node.js, React-TSX, TypeScript, etc.",
      githubLink: "https://github.com/yourusername/instant-eats",
      websiteLink: "https://instant-eats.live",
    },
    {
      title: "Instant-eats",
      description:
        "Modern food delivery app using Supabase, PostgreSQL, Node.js, React-TSX, TypeScript, etc.",
      githubLink: "https://github.com/yourusername/instant-eats",
      websiteLink: "https://instant-eats.live",
    },
    {
      title: "Instant-eats",
      description:
        "Modern food delivery app using Supabase, PostgreSQL, Node.js, React-TSX, TypeScript, etc.",
      githubLink: "https://github.com/yourusername/instant-eats",
      websiteLink: "https://instant-eats.live",
    },
    {
      title: "Chat App",
      description:
        "Real-time chat app with WebSocket, Node.js backend, React frontend, and MongoDB database.Real-time chat app with WebSocket, Node.js backend, React frontend, and MongoDB database",
      githubLink: "https://github.com/yourusername/chat-app",
      websiteLink: "https://chatapp.live",
    },
    {
      title: "Second Brain",
      description:
        "A second-brain content manager to organize tweets, YouTube videos, and docs using MERN stack.",
      githubLink: "https://github.com/yourusername/second-brain",
      websiteLink: "https://secondbrain.live",
    },
    {
      title: "Portfolio Website",
      description:
        "Interactive portfolio using React Three Fiber, Tailwind CSS, and Framer Motion.",
      githubLink: "https://github.com/yourusername/portfolio",
      websiteLink: "https://nivas.dev",
    },
    // Add more objects as needed
  ];

  return (
    <div
      id="project-background"
      onClick={handleBackgroundClick}
      className="fixed top-0 left-0 w-screen h-screen bg-[#1B2426] flex items-center justify-center"
    >
      <motion.div layoutId="projects-card" transition={{ duration: 0.5, ease: "easeInOut" }} className=" flex items-center justify-center p-4">
        <motion.div
          className="w-full max-w-[150vh] max-h-[60vh] overflow-x-auto grid grid-flow-col auto-cols-[240px] gap-6 rounded-2xl border- p-6 bg-[#1B2426] scrollbar-thick scrollbar-thumb-[#444] scrollbar-track-[#222]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Subproject
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                websiteLink={project.websiteLink}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
        <div className= "absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p>click anywhere to return to the landing page</p>
      </div>
    </div>
  );
}

