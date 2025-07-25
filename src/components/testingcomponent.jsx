import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function TestingComponent() {
  const navigate = useNavigate();

  return (
    <motion.div
      layoutId="projects-card"
      onClick={() => navigate("/projects")}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="rounded-[1em] w-[402px] h-[207px] bg-[#0D0D0D] cursor-pointer flex items-center justify-center text-white text-3xl font-bold transition-transform duration-300 hover:scale-[1.04]"
    >
      Projects
    </motion.div>
  );
}
