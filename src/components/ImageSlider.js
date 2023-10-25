import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const ImageSlider = (props) => {
  const images = props.images;
  const [img1Index, setImg1Index] = useState(0);
  const [img2Index, setImg2Index] = useState(1);
  const [img3Index, setImg3Index] = useState(2);
  const [img4Index, setImg4Index] = useState(3);
  const [img5Index, setImg5Index] = useState(4);

  const changeUp = () => {
    setImg1Index(loopIndexUp(img1Index) - 1);
    setImg2Index(loopIndexUp(img2Index) - 1);
    setImg3Index(loopIndexUp(img3Index) - 1);
    setImg4Index(loopIndexUp(img4Index) - 1);
    setImg5Index(loopIndexUp(img5Index) - 1);
  };

  const changeDown = () => {
    setImg1Index(loopIndexDown(img1Index) + 1);
    setImg2Index(loopIndexDown(img2Index) + 1);
    setImg3Index(loopIndexDown(img3Index) + 1);
    setImg4Index(loopIndexDown(img4Index) + 1);
    setImg5Index(loopIndexDown(img5Index) + 1);
  };

  const loopIndexDown = (index) => {
    if (index === 4) {
      return (index = 0);
    }
    return index;
  };

  const loopIndexUp = (index) => {
    if (index === 0) {
      return (index = 4);
    }
    return index;
  };

  return (
    <div>
      <div className="gallery">
        <div
          className="main-img-div"
          onWheel={changeDown}
          onScroll={changeDown}
        >
          <img className="main-img" alt="Main" src={images?.[img3Index]} />
        </div>
        <div className="sub-imgs" onWheel={changeUp}>
          <UpOutlined onClick={changeUp} />
          <img className="sub-img-1" alt="Sub" src={images?.[img1Index]} />
          <img className="sub-img-2" alt="Sub" src={images?.[img2Index]} />
          <img className="sub-img-3" alt="Sub" src={images?.[img3Index]} />
          <img className="sub-img-4" alt="Sub" src={images?.[img4Index]} />
          <img className="sub-img-5" alt="Sub" src={images?.[img5Index]} />
          <DownOutlined onClick={changeDown} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
