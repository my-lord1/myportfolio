export function SideComponent2() {
  const frontends = ["React", "Next.js", "TailwindCSS","Recoil", "Framer Motion", ];
  const backends = ["Node.js", "Express", "Nest.js"];
  const dbandServices = ["MongoDB", "Supabase", "Postgres", "Prisma ORM", "Docker"];

  return (
    <div className="relative w-[350px] h-[472px] bg-white/30 backdrop-blur-sm rounded-[30px] overflow-hidden shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] transition-all duration-1000 ease-in-out p-2 flex flex-col">
      <h1 className="text-black font-bold text-center text-lg mb-2 shrink-0">
        Skills
      </h1>

      <div className="flex-1 overflow-y-auto scroll-smooth pr-1 space-y-4">        
        <div>
          <h3 className="text-black font-semibold mb-2">Frontend:</h3>
          <div className="flex flex-wrap gap-1">
            {frontends.map((tech, i) => (
              <span key={i} className="px-3 py-1 border border-black text-black text-sm rounded-full bg-white/40">
                {tech}
              </span>))}
          </div>
        </div>

        <div>
          <h3 className="text-black font-semibold mb-2">Backend:</h3>
          <div className="flex flex-wrap gap-1">
            {backends.map((tech, i) => (
              <span key={i} className="px-3 py-1 border border-black text-black text-sm rounded-full bg-white/40">
                {tech}
              </span>))}
          </div>
        </div>

        <div>
          <h3 className="text-black font-semibold mb-2">DB & Services:</h3>
          <div className="flex flex-wrap gap-1">
            {dbandServices.map((tech, i) => (
              <span key={i} className="px-3 py-1 border border-black text-black text-sm rounded-full bg-white/40">
                {tech}
              </span>))}
          </div>
        </div>
      </div>
    </div>
  );
}
