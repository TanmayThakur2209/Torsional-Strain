import { useState } from "react";
import shearStrainImg from "../assets/Shear Strain.webp"; 

const ShearStrain = () => {
  const [Length, setL] = useState<number | null>(null);
  const [Theta, setTheta] = useState<number | null>(null);
  const [Distance, setD] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const shearStrain =
    Length !== null &&
    Theta !== null &&
    Theta !== 0 &&
    Distance !== null
      ? ((Theta * Distance) / Length).toFixed(3)
      : null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = value === "" ? null : Number(value);

    if (name === "Length") setL(numValue);
    if (name === "Theta") setTheta(numValue);
    if (name === "Distance") setD(numValue);
    setShowResult(false); 
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <img
        src={shearStrainImg}
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
          name="Theta"
          placeholder="Enter Angle of Torsion"
          value={Theta ?? ""}
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

      {showResult && shearStrain !== null && (
        <p className="mt-4 text-lg text-[#ffffff] font-semibold p-2 rounded-2xl bg-[#070a65]">
          Shear Stain (γ):{" "}
          <span className="text-[#ffffff]">{shearStrain}</span>
        </p>
      )}
    </div>
  );
};

export default ShearStrain;
