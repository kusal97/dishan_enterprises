import { Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import "./styles/app.scss";
import PreUsedCars from "./screens/PreUsedCars";
import BrandNewCars from "./screens/BrandNewCars";
import CarDetailsPage from "./screens/CarDetailsPage";
import AdminPage from "./screens/AdminPage";
import CreateCar from "./screens/CreateCar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/pre-used" element={<PreUsedCars />} />
      <Route path="/brand-new" element={<BrandNewCars />} />
      <Route path="/pre-used/:id" element={<CarDetailsPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/create-car" element={<CreateCar />} />
    </Routes>
  );
}

export default App;
