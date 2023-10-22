import React from "react";
import { LeftOutlined } from "@ant-design/icons";

const CarDetailsPage = () => {
  return (
    <div className="details-page">
      <div className="details-header">
        <LeftOutlined className="back-icn" />
        <div>
          <div className="detail-title">HONDA CIVIC SR</div>
          <div className="detail-year">2018/2019</div>
        </div>
      </div>
      <div className="details-content">
        <div className="details-gallery">gallery</div>
        <div className="details-specification">Specifications</div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
