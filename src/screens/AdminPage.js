import React from "react";
import AdminCarCardView from "../components/AdminCarCardView";
import { cars } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <button
        className="add-btn"
        onClick={() => {
          navigate("/admin/create-car");
        }}
      >
        ADD
      </button>
      <div className="ad-car-list">
        {cars.map((car, index) => (
          <div key={index}>
            <AdminCarCardView
              mainImage={car.mainImage}
              number_plate={car.number_plate}
            />
            ;
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
