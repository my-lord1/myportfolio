import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function TestingComponent() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/projects")} className="relative w-[380px] md:w-[407px] h-[206px] bg-[#0D0D0D] rounded-[30px] overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02] flex items-center justify-center text-white text-3xl font-bold cursor-pointer">
        Projects
    </div>

  );
}

/*rounded-[1em] w-[]md:w-[402px] h-[207px] bg-[#0D0D0D] cursor-pointer flex items-center justify-center text-white text-3xl font-bold transition-transform duration-300 hover:scale-[1.04]*/