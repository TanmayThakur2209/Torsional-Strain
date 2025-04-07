import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <header className="bg-black opacity-90 text-amber-50 font-montserrat ">
      <nav className="flex items-center justify-between">

        <div className="relative inline-flex items-center justify-center m-5 overflow-hidden font-medium tracking-tighter text-white rounded-lg group">
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#110552] rounded-full group-hover:w-100 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full  rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <Link
          to="/" 
          className="text-5xl py-2.5 px-4 rounded-lg z-10  "
        >
          Torsional Strain
        </Link>
        </div>

        <div className="space-x-6">
          <Link
            to="/CalculationPage"
            className="text-xl ml-5 px-5 py-2 rounded-lg transition duration-300 hover:bg-[#110552]"
          >
            Calculation
          </Link>

          <Link
            to="/About"
            className="text-xl px-5 mr-10 py-2 rounded-lg transition duration-300 hover:bg-[#110552]"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavigationBar;



