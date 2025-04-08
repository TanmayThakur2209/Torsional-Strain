import { useState } from "react";
import AngleofTorsionImg from "../assets/Angle of Torsion.webp"; 

const AngleofTorsion = () => {
  const [Length, setL] = useState<number | null>(null);
  const [Torque, setTorque] = useState<number | null>(null);
  const [PMOI, setPMOI] = useState<number | null>(null);
  const [SM, setSM] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const shearStrain =
    Length !== null &&
    PMOI !== null &&
    SM !== null &&
    SM !== 0 &&
    Torque !== null
      ? ((Torque * Length) / (SM * PMOI)).toFixed(3)
      : null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = value === "" ? null : Number(value);

    if (name === "Length") setL(numValue);
    if (name === "Torque") setTorque(numValue);
    if (name === "SM") setSM(numValue);
    if (name === "PMOI") setPMOI(numValue);
    setShowResult(false); 
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <img
        src={AngleofTorsionImg}
        className="w-1/7 m-5"
        alt="Shear Stress Formula"
      />

      <form
        onSubmit={handleSubmit}
        className="bg-radial from-[#b4bad7] to-[#081d85] p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Shear Strain</h2>

        <input
          type="number"
          name="Length"
          placeholder="Enter Length"
          value={Length ?? ""}
          onChange={handleInputChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <input
          type="number"
          name="Torque"
          placeholder="Enter Torque"
          value={Torque ?? ""}
          onChange={handleInputChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <input
          type="number"
          name="PMOI"
          placeholder="Enter Polar Moment of Inertia"
          value={PMOI ?? ""}
          onChange={handleInputChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="number"
          name="SM"
          placeholder="Enter Shear Modulus"
          value={SM ?? ""}
          onChange={handleInputChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-radial from-[#121bcc] to-[#000000] text-white py-2 rounded hover:scale-105 transition duration-300 "
        >
          Submit
        </button>
      </form>

      {showResult && shearStrain !== null && (
        <p className="mt-4 text-lg text-[#ffffff] font-semibold p-2 rounded-2xl bg-[#070a65]">
          Shear Stain (θ):{" "}
          <span className="text-[#ffffff]">{shearStrain} radians</span>
        </p>
      )}
    </div>
  );
};

export default AngleofTorsion;
