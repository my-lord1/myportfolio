import { Subproject } from "../components/subproject1";

export function Project() {
    return (
        
        <div>
            <div class= "flex justify-between">
                <button class="bg-transparent text-blue-700 font-semibold border border-blue-500  rounded mb-3 ">
                    Button
                </button>
                <div class = "flex justify-center box border rounded-xl border-indigo-600 p-2 mb-3 ml-20 w-25 ">
                    <h2> Projects </h2>
                </div>
            </div>

            <div class = "flex flex-col items-center">
            <Subproject/>
            <Subproject/>
            </div>
        </div>
    );
}