import { Typewriter } from 'react-simple-typewriter';

export function TopComponent() {
  return (
    <div className="relative w-[407px] h-[80px] rounded-[30px] mt-5 ml-3 mr-3 md:m-0 md:w-[407px] md:h-[50px] bg-[#0D0D0D] md:rounded-[30px] shadow-[0_7px_29px_0_rgba(100,100,111,0.2)]  flex items-center justify-center">
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
