import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  width: "60vw",
  height: "86vh",
  background: "#364d79",
};

export const AppCarousel = () => (
  <Carousel dotPosition="left" autoplay effect="fade">
    <div>
      <img style={contentStyle} src="../../assets/img/card-img6.jpg" alt="" />
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
