import React from "react";
import "./AppCard.css";

export const AppCard = () => {
  return (
    <div className="cardItem">
      <a href="">
        <div className="cardImg">
          <div className="cardImgTxt">New - 3 hours ago</div>
        </div>
        <div className="cardInfo">
          <div className="ForWhat">For Sale</div>
          <div className="prise">$556,000</div>
          <div className="houseInfo">2 bed 2 bath 1 300 sqft</div>
          <div className="houseLocation">
            800 E Camino Real Unit 3100 Boca Raton, FL 33432
          </div>
        </div>
      </a>
    </div>
  );
};
