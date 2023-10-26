import React from "react";
import CarCardView from "../components/CarCardView";
import Header from "../components/Header";
import { cars } from "../constants/constants";
import AppFooter from "../components/AppFooter";
import { useNavigate } from "react-router-dom";

const PreUsedCars = () => {
  const navigate = useNavigate();

  return (
    <div className="pre-used-cars-page">
      <Header />
      <div className="content">
        <div className="car-list">
          {cars.map((carData, index) => (
            <div
              key={index}
              onClick={(index) => {
                navigate("/pre-used/" + carData.id);
              }}
            >
              <CarCardView
                image={carData.mainImage}
                title={carData.title}
                year={carData.year}
                price={carData.price}
                number_plate={carData.number_plate}
              />
            </div>
          ))}
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default PreUsedCars;
