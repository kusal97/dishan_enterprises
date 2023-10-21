import React from "react";
import backgroundVideo from "../assets/vedios/car_animation.mp4";
import Header from "../components/Header";
import AppFooter from "../components/AppFooter";

const MainScreen = () => {
  return (
    <div className="home-page">
      <div className="overlay"></div>
      <video className="bg-video" src={backgroundVideo} autoPlay loop muted />
      <Header />
      <div className="welcome-txt">
        <h1>WELCOME</h1>
        <h1>TO</h1>
      </div>
      <AppFooter />
    </div>
  );
};

export default MainScreen;
