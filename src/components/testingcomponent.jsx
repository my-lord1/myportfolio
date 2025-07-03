import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function TestingComponent() {
  const navigate = useNavigate();

  return (
    <motion.div
      layoutId="projects-card"
      onClick={() => navigate("/projects")}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="border-2 rounded-[1em] w-[402px] h-[200px] pt-8 bg-white/10 backdrop-blur-sm cursor-pointer flex items-center justify-center text-black text-3xl font-bold"
    >
      Projects
    </motion.div>
  );
}
