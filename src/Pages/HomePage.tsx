import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
    return (
    <div className="h-screen w-screen">
    <div className="flex-col flex mx-auto mt-5 justify-center items-center rounded-2xl backdrop-blur-xl rounded-6xl w-2/3 bg-[#00000070] text-center p-5 ">
      <div className="text-xl font-bold mt-10 font-times text-left text-[#ffffff]">Torsional strain occurs when a rod or shaft is subjected to a torque, causing it to twist or deform. 
      A circular rod is subjected to a torque T loading at one end.  The angular deflection q of the rod is measured by a dual test indicator. <br/> It is proportional to the torque T applied on the rod. Also it is proportional to the length of specimen L, and inverse proportional to the polar area moment of inertia J of the rod. 
      </div>

<div className="relative inline-flex items-center justify-center m-5 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#0c0f6c] rounded-full group-hover:w-56 group-hover:h-56"></span>
    <span className="absolute inset-0 w-full h-full  rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
       <button className="text-white text-3xl z-10 font-bold px-8 py-4 rounded-3xl transition duration-300 hover:text-white" 
       onClick={() => navigate("/CalculationPage")}>
          Calculate
        </button>
        </div>
    </div>
    </div>
    
  );
}

export default HomePage;

{/* <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
    <span class="relative">Button Text</span>
</a> */}