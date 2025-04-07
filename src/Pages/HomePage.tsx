import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
    return (
    <div className="h-screen w-screen">
    <div className="flex-col flex mx-auto mt-5 justify-center items-center rounded-2xl backdrop-blur-xl rounded-6xl w-2/3 bg-[#00000070] text-center p-5 ">
      <div className="text-xl mt-10 font-times text-left text-[#ffffff]">
      Torsional strain is the angular deformation that occurs in a material (like a rod, shaft, or beam) when it's subjected to torque — a twisting force.

In simple terms: When you twist something, it doesn't stay the same. It deforms — that twist is torsional strain. <br/>
Torsional strain is crucial in engineering, mechanics, and design because it tells us:<br/><br/>

1. How much a structure or material can twist before failing<br/>
We don't want bridges, gears, or shafts snapping due to excessive twisting.<br/><br/>

2. How materials behave under torque<br/>
Understanding torsional strain helps in choosing the right material (e.g., steel vs. aluminum).<br/><br/>

3. It's used in real-world systems:
Car axles, propeller shafts, steering rods, turbines — all experience torque.

Engineers calculate torsional strain to ensure they can withstand real-world forces.

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
