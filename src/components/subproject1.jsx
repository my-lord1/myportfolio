import { Github } from "../icons/github"
import { Website } from "../icons/website"

export function Subproject(){
    
    return (
  <div class="container mb-2">
    <div class="box border rounded-xl border-indigo-600 p-6 ">
      <div className="flex justify-between ">
        <h3 class="start">Subproject 1</h3>
        <div class="flex justify-between">
          <Github/>
          <Website/>
        </div>
      </div>
      <br/>
      <div class="flex justify-start">
        <p>This is a subproject component</p>
      </div>
    </div>
  </div>

    )
}