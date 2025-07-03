import Socials from '../components/socials';
import Bio from '../components/bio';
import { TopComponent } from '../components/TopComponent';
import { TestingComponent } from '../components/testingcomponent';
import { SideComponent1 } from '../components/sidecomponent1';
import { SideComponent2 } from '../components/sidecomponent2';
import bgImage from '../icons/bg1.png';





export function LandingPage() {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-cover bg-center bg-no-repeat min-h-screen w-screen flex items-center justify-center">
      <div className = "flex flex-row gap-2">
        <div>
          <SideComponent1 />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center"> {/* Top row */}
            <TopComponent />
          </div>
          
          
          <div className="flex flex-row gap-2 justify-center"> {/* middle row */}
            <Socials />
            <Bio />
          </div>

          
          <div className="flex justify-center"> {/* Bottom row */}
            <TestingComponent/>
          </div>
        </div>
        <div>
          <SideComponent2/>
        </div>
        
      </div>
  
    </div>
  );
}

