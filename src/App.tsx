import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CalculationPage from "./Pages/CalculationPage";
import VantaBackground from "./components/Background";
import LoadingAnimation from "./components/LoadingAnimation";
import NavigationBar from "./components/NavigationBar";
import About from "./Pages/About";
import ShearStress from "./Pages/ShearStress";
import ShearStrain from "./Pages/ShearStrain";
import AngleofTorsion from "./Pages/AngleofTorsion";

function App() {
  return (
    <Router>
      <div className="relative h-screen overflow-hidden">

        <div className="absolute w-full h-full z-0">
          <VantaBackground />
        </div>

        <div className="relative z-10">
          <LoadingAnimation />
        </div>

        <div className="relative z-50">
          <NavigationBar />
        </div>

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/CalculationPage" element={<CalculationPage />} />
            <Route path="/About" element={<About />} />
            <Route path="/ShearStress" element={<ShearStress />} />
            <Route path="/AngleofTorsion" element={<AngleofTorsion />} />
            <Route path="/ShearStrain" element={<ShearStrain/>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
