import React from "react";

const CarCardView = () => {
  return (
    <div className="card-component">
      <img
        className="card-img"
        src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/386748067_819048696890026_6207642443868168111_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XSfFDvra1SoAX9a3yp8&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfB7JPm37xLkC_tPY75OTqRtBFKUFtWMhTkCvUChqgbmQw&oe=6538372B"
        alt="Vehicle"
      />
      <div className="card-desc">
        <div className="div-desc">
          <h1 className="card-title">HONDA CIVIC SR</h1>
          <h1 className="card-year">2018/2019</h1>
        </div>
        <hr className="vr-line" dir="vertical" color="white" />
        <div className="card-price">32M</div>
      </div>
    </div>
  );
};

export default CarCardView;
