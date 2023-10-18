import React from "react";
import "./AppCard.css";
import { Link } from "react-router-dom";

interface AppCardProps {
  home: string; //TODO Замените HomeData на соответствующий тип данных для дома
}

export const AppCard = ({home}: AppCardProps) => {
  return (
    <div className="cardItem">
      <Link to=''>
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
      </Link>
    </div>
  );
};
