import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Subproject } from "../components/subproject1";
import bgImage from '../icons/bg1.png';
import { useState } from "react";

// Soft radial overlays for blending
const TINT_GRADIENTS = [
  "radial-gradient(circle at center, rgba(255,0,0,0.35), transparent)", // soft sky
  "radial-gradient(circle at center, rgba(255, 198, 11, 0.95), transparent)", // soft violet
  "radial-gradient(circle at center, rgb(200, 25, 180), transparent)", // soft emerald
  "radial-gradient(circle at center, rgba(20, 51, 204, 0.35), transparent)", // soft indigo
  "radial-gradient(circle at center, rgba(18, 157, 111, 0.94), transparent)", // soft cyan
];

export function Project() {
  const navigate = useNavigate();
  const [topOverlay, setTopOverlay] = useState(TINT_GRADIENTS[0]);

  const handleBackgroundClick = (e) => {
    if (e.target.id === "project-background") navigate("/");
  };

  return (
    <div
      id="project-background"
      onClick={handleBackgroundClick}
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover bg-center bg-no-repeat min-h-screen w-screen flex items-center justify-center"
    >
      <motion.div
        layoutId="projects-card"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col w-[90%] min-h-[90%] bg-white/10 backdrop-blur-sm rounded-2xl p-0 text-black overflow-y-auto"
      >
        {/* Animated overlay top bar with gradient */}
        <motion.div
          animate={{ backgroundImage: topOverlay }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center h-[80px] rounded-t-2xl text-3xl font-bold text-white border-b border-white/20"
        >
          Projects
        </motion.div>

        {/* Subproject Cards */}
        <div className="p-6 flex flex-wrap justify-center items-center gap-4">
          {[...Array(5)].map((_, idx) => (
            <Subproject
              key={idx}
              onHover={() => setTopOverlay(TINT_GRADIENTS[idx % TINT_GRADIENTS.length])}
            />
            
          ))}
        </div>
      </motion.div>
    </div>
  );
}
