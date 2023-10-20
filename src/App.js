import { Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import "./styles/app.scss";
import PreUsedCars from "./screens/PreUsedCars";
import BrandNewCars from "./screens/BrandNewCars";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/pre-used" element={<PreUsedCars />} />
      <Route path="/brand-new" element={<BrandNewCars />} />
    </Routes>
  );
}

export default App;
