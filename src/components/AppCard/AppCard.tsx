import React from "react";
import { Link } from "react-router-dom";
import { SCCardImg, SCCardInfo, SCCardItem } from "./AppCard.styled";

interface AppCardProps {
  // descriptions:
  baths: number;
  beds: number;
  sqft: number;

  // estimates:
  date: string;
  estimate: number;

  list_price: number;
  listing_id: string;

  // location > address:
  city: string;
  line: string;
  postal_code: string;
  state_code: string;

  permalink: string;

  // primary_photo:
  href: any;

  property_id: string;

  status: string;
}

export const AppCard = ({
  baths,
  beds,
  sqft,
  href,
  city,
  line,
  postal_code,
  state_code,
  status,
  list_price,
  date,
}: AppCardProps) => {
  return (
    <SCCardItem>
      <Link to="/gagarin">
        <SCCardImg>
          <img src={href.href} alt="House Photo" />
          <div className="cardImgTxt">{date}</div>
        </SCCardImg>
        <SCCardInfo>
          <div className="ForWhat">{status}</div>
          <div className="prise">Prise: ${list_price}</div>
          <div className="houseInfo">
            Beds: {beds} <br />
            Baths: {baths} <br />
            Sqft: {sqft}
          </div>
          <div className="houseLocation">
            Location: {city}, {line}, {state_code} {postal_code}
          </div>
        </SCCardInfo>
      </Link>
    </SCCardItem>
  );
};
