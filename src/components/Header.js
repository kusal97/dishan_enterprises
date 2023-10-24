import { Divider } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="itm-list">
        <div
          className="itm"
          onClick={() => {
            navigate("/pre-used");
          }}
        >
          PRE OWNED
        </div>
        <Divider className="divider-vr" type="vertical" />
        <div
          className="itm"
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </div>
        <Divider className="divider-vr" type="vertical" />
        <div className="itm">BRAND NEW</div>
      </div>
      <div className="divider-hr">
        <Divider />
      </div>
    </div>
  );
};

export default Header;
