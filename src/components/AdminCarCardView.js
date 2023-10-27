import React from "react";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

const AdminCarCardView = (props) => {
  return (
    <div className="admin-card-component">
      <img className="ad-card-img" src={props.mainImage} alt="Main" />
      <div className="ad-num-plate">{props.number_plate}</div>
      <div className="ad-icns">
        <EditFilled />
        <DeleteFilled />
      </div>
    </div>
  );
};

export default AdminCarCardView;
