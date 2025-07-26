import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Subproject } from "../components/subproject1";

// Animation varian
export function Project() {
  const navigate = useNavigate();

  const handleBackgroundClick = (e) => {
    if (e.target.id === "project-background") navigate("/");
  };

  const projects = [
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
        "Real-time chat app with WebSocket, Node.js backend, React frontend, and MongoDB database.",
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
        "Real-time chat app with WebSocket, Node.js backend, React frontend, and MongoDB database.",
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
  ];

  return (
    <div id="project-background" onClick={handleBackgroundClick} className="fixed top-0 left-0 w-screen h-screen bg-[#1B2426] flex items-center justify-center">
      <div className= "flex flex-col">
      <div className="w-full pl-150 pr-150 max-w-[150vh] max-h-[60vh] overflow-x-auto grid grid-flow-col auto-cols-[240px] gap-6 rounded-2xl md:p-6 bg-[#1B2426]">
      {projects.map((project, idx) => (
        <Subproject title={project.title} description={project.description} githubLink={project.githubLink} websiteLink={project.websiteLink}/>
        ))}
      </div>
      <div className="text-center text-black text-bold text-sm">
      <p>Click anywhere to return to the landing page</p>
      </div>
      </div>

    </div>
    
    
  );
}


