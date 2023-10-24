import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const images = [
  "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/386748067_819048696890026_6207642443868168111_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MoVo7ikjNrIAX-e8whe&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfDlIbYrgZCmvLQiCXSad4xkunnC5hOhmqcqn2mrtYUNwA&oe=653C2BAB",
  "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/387146989_819048693556693_8581629955450165598_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ks1eeqN3VgYAX_qUMlY&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfDMWznWgaUlXTtzTu6trcpfqTuUHs2A33RFz-KJoaPlMA&oe=653AF70F",
  "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/387195091_819048730223356_3897268999524360948_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1MitdIMG1yEAX8GWeyU&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfAIZ228suD4UnYLLd_tmjrGBeWYx5Fy_MHTHL8_b81bgA&oe=653B2522",
  "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/386780118_819048773556685_5410472243080829086_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ASJHrjuzfYEAX9665sA&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfAm1I-sh816QZVVTWLrB6Dnf27O2MSdXHEbJAXk0mlsVQ&oe=653C7941",
  "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/387231049_819048743556688_4334354684262765639_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kp2wAnweVrkAX-5ZI90&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfAkDKgUFMie66uF_RJx_QoJYvQqmR3GWVsn2fGN4gkmJw&oe=653BD588",
];

const ImageSlider = () => {
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
          <img className="main-img" alt="Main" src={images[img3Index]} />
        </div>
        <div className="sub-imgs" onWheel={changeUp}>
          <UpOutlined onClick={changeUp} />
          <img className="sub-img-1" alt="Sub" src={images[img1Index]} />
          <img className="sub-img-2" alt="Sub" src={images[img2Index]} />
          <img className="sub-img-3" alt="Sub" src={images[img3Index]} />
          <img className="sub-img-4" alt="Sub" src={images[img4Index]} />
          <img className="sub-img-5" alt="Sub" src={images[img5Index]} />
          <DownOutlined onClick={changeDown} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
