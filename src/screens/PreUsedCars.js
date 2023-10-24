import React from "react";
import CarCardView from "../components/CarCardView";
import Header from "../components/Header";
import { cars } from "../constants/constants";
import AppFooter from "../components/AppFooter";

const PreUsedCars = () => {
  return (
    <div className="pre-used-cars-page">
      <Header />
      <div className="content">
        <div className="car-list">
          {cars.map((carData, index) => (
            <div key={index}>
              <CarCardView
                image={carData.mainImage}
                title={carData.title}
                year={carData.year}
                price={carData.price}
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
