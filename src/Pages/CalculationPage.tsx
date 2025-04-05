import { Link } from "react-router-dom";
import ShearStressGif from "../assets/Shear Stress.gif";
import angleOfTorsionGif from "../assets/Angle of Torsion.gif";
import shearStrainGif from "../assets/Shear Strain.gif";


function CalculationPage() {
  return (
    <div className="flex flex-wrap justify-center items-center flex-col sm:flex-row">

      <Link
        to="/ShearStress"
        className="w-1/4 max-w-[600px] bg-[#000000] m-5 p-1 text-white rounded-t-xl text-center transition duration-300 hover:scale-110"
      >
        <img
          src={ShearStressGif}
          className="rounded-t-xl"
          alt="Shear Stress"
        />
        Shear Stress
      </Link>

      <Link
        to="/AngleofTorsion"
        className="w-1/4 max-w-[600px] bg-[#000000] text-white rounded-t-xl p-1 text-center m-5 transition duration-300 hover:scale-110"
      >
        <img
          src={angleOfTorsionGif}
          className="rounded-t-xl"
          alt="Angle of Torsion"
        />
        Angle of Torsion
      </Link>

      <Link
        to="/ShearStrain"
        className="w-1/4 max-w-[600px] bg-[#000000] text-white text-center m-5 rounded-t-xl p-1 transition duration-300 hover:scale-110"
      >
        <img
         src={shearStrainGif}
          className="rounded-t-xl"
          alt="Shear Strain"
        />
        Shear Strain
      </Link>
    </div>
  );
}

export default CalculationPage;
