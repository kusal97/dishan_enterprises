import React from "react";
import CarCardView from "../components/CarCardView";
import backgroundVideo from "../assets/vedios/car_animation.mp4";

const PreUsedCars = () => {
  return (
    <div className="home-page">
      <div className="overlay"></div>
      <video className="bg-video" src={backgroundVideo} autoPlay loop muted />
      <CarCardView />
    </div>
  );
};

export default PreUsedCars;
