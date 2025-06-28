import Socials from '../components/socials';
import Bio from '../components/bio';
import { TestingComponent } from '../components/testingcomponent';


export  function LandingPage(){
    return(
        <div class = " min-h-screen w-screen bg-linear-to-r from-cyan-500 to-blue-500">
            <div class="flex flex-col p-2">
                    <div class = "flex flex-row" >
                    <div class = " ml-2 mr-2">
                        <Socials/>
                    </div>
                    <div class = " mb-2">
                        <Bio />
                    </div>
                    </div>
                <div class = "ml-2">
                    <TestingComponent/>
                </div>
            </div>
        </div>
    )

}