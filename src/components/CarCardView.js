import React from "react";

const CarCardView = (props) => {
  return (
    <div className="card-component">
      <img className="card-img" src={props.image} alt="Vehicle" />
      <div className="card-desc">
        <div className="div-desc">
          <h1 className="card-title">{props.title}</h1>
          <h1 className="card-year">{props.year}</h1>
          <h1 className="card-number">{props.number_plate}</h1>
        </div>
        <hr className="vr-line" dir="vertical" color="white" />
        <div className="card-price">{props.price}</div>
      </div>
    </div>
  );
};

export default CarCardView;
