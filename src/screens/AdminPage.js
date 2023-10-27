import React from "react";
import AdminCarCardView from "../components/AdminCarCardView";
import { cars } from "../constants/constants";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <button className="add-btn">ADD</button>
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
