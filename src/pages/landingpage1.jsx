import Socials from '../components/socials';
import Bio from '../components/bio';
import { TopComponent } from '../components/TopComponent';
import { TestingComponent } from '../components/testingcomponent';
import { SideComponent1 } from '../components/sidecomponent1';
import { SideComponent2 } from '../components/sidecomponent2';

import { LeetCodeCard } from '../components/leetcodecalendar';
import { GithubCalendar } from '../components/gitcalendar';
import { FavoriteSong } from '../components/favoritemusic';


export function LandingPage() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#1B2426] overflow-hidden flex items-center justify-center">
    <div className="flex flex-col gap-2 scale-[0.8] items-center justify-center max-w-[1500px] max-h-[950px]">
      
      <div className="flex flex-row gap-2">
        <SideComponent1 />
        <div className="flex flex-col gap-2">
          <div className="flex justify-center"> 
            <TopComponent />
          </div>
          <div className="flex flex-row gap-2 justify-center"> 
            <Socials />
            <Bio />
          </div>
          <div className="flex justify-center"> 
            <TestingComponent/>
          </div>
        </div>
        <SideComponent2 />
      </div>
      
      <div className= "flex flex-row gap-3 items-start justify-center w-[1120px] h-[350px] rounded-[2rem] mt-1 space-around items-start"> {/* Changed gap-2 to gap-8 */}
      <div className="w-[468px] h-[354px] bg-black p-2  rounded-2xl transition-transform duration-300 hover:scale-[1.02]">
          <LeetCodeCard />
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="bg-[#0D0D0D] p-2 rounded-2xl transition-transform duration-300 hover:scale-[1.02] ">
            <GithubCalendar /> 
          </div>
          <FavoriteSong />
        </div>
        
      </div>
      
    </div>
  </div>

  
  );
}
