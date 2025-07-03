import collagelogo from '../icons/collagelogo.png';

export function SideComponent1() {
    return (
      <div className="relative w-[350px] h-[472px] bg-white/30 backdrop-blur-sm rounded-[30px] overflow-hidden shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] transition-all duration-1000 ease-in-out flex items-center justify-center">
        <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
          <div>
            <div className="text-black text-md font-bold ">Education</div>
            <div className="flex flex-rows">
            <div className="text-black text-[17px]">Shiv Nadar University 2021-25</div>
            </div>
            <div className="text-black text-[15px]">Electronics and Communication</div>
          </div>
          <div>
            <div className="text-black text-md font-bold">Achievements</div>
          </div>
          <div>
            <div className="text-black text-md font-bold">gmail api</div>
          </div>
        </div>
      </div>
    );
  }