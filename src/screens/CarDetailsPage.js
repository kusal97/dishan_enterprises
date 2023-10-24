import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import ImageSlider from "../components/ImageSlider";
import AppFooter from "../components/AppFooter";
import { useNavigate } from "react-router-dom";

const specs = [
  "New Shell",
  "Key start / 2-Smart keys",
  "Dual Multifunctions",
  "02nd Owner",
  "Manufacture-2018",
  "LED Head Lights",
  "1000cc / Automatic",
  "15Km/L",
  "ABS, Air Bags",
  "DVD, R/cam",
  "3D Carpets",
  "Winker / Retractable mirrors",
  "Engine & Running Perfect",
];

const CarDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="details-page">
      <div className="details-header">
        <LeftOutlined
          className="back-icn"
          onClick={() => {
            navigate("/pre-used/");
          }}
        />
        <div className="title-year">
          <div className="detail-title">HONDA CIVIC SR</div>
          <div className="detail-year">2018/2019</div>
        </div>
        <div className="header-price">15M</div>
      </div>
      <div className="details-content">
        <div className="details-gallery">
          <ImageSlider />
        </div>
        <div className="details-specification">
          <div className="spec-title">Specifications</div>
          <div className="list-itm-div">
            <ul>
              {specs.map((spec, index) => (
                <li className="list-itm" key={index}>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default CarDetailsPage;
