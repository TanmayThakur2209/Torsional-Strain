import { useState } from "react";
import shearStressImg from "../assets/Shear Stress.webp"; 

const ShearStress = () => {
  const [Torque, setT] = useState<number | null>(null);
  const [PMOI, setPMOI] = useState<number | null>(null);
  const [Distance, setD] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const shearStress =
    Torque !== null &&
    PMOI !== null &&
    PMOI !== 0 &&
    Distance !== null
      ? ((Torque * Distance) / PMOI).toFixed(3)
      : null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = value === "" ? null : Number(value);

    if (name === "Torque") setT(numValue);
    if (name === "PMOI") setPMOI(numValue);
    if (name === "Distance") setD(numValue);
    setShowResult(false); 
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <img
        src={shearStressImg}
        className="w-1/7 m-5"
        alt="Shear Stress Formula"
      />

      <form
        onSubmit={handleSubmit}
        className="bg-radial from-[#b4bad7] to-[#081d85] p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Shear Stress</h2>

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
          name="Distance"
          placeholder="Enter distance from the centre"
          value={Distance ?? ""}
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

      {showResult && shearStress !== null && (
        <p className="mt-4 text-lg text-[#ffffff] font-semibold p-2 rounded-2xl bg-[#070a65]">
          Shear Stress (τ):{" "}
          <span className="text-[#ffffff]">{shearStress} N/m²</span>
        </p>
      )}
    </div>
  );
};

export default ShearStress;
