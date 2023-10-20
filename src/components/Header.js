import { Divider } from "antd";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="itm-list">
        <div className="itm">PRE OWNED</div>
        <Divider className="divider-vr" type="vertical" />
        <div className="itm">HOME</div>
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
