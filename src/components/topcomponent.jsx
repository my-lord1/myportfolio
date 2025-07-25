import { Typewriter } from 'react-simple-typewriter';

export function TopComponent() {
  return (
    <div className="relative w-[407px] h-[50px] bg-[#0D0D0D] rounded-[30px] overflow-hidden shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] transition-all duration-1000 ease-in-out flex items-center justify-center">
      <div className="text-white text-xl font-bold tracking-wide">
        <Typewriter
          words={['Hi, Nivas Here 👋', 'Full Stack Developer 💻', 'Let’s build something cool! 🚀']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={1200}
        />
      </div>
    </div>
  );
}
