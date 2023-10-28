import React from "react";
import { AppCarousel } from "../../components/AppCarousel/AppCarousel";
import { AppNavigation } from "../../components/AppNavigation/AppNavigation";
import "./AppCardInfo.css";



export interface ICardInfoPage {
  list_price: number;
  schools: number;

  //! description
  year_built: number;
  beds: number;
  baths: number;
  sqft: number;
  text: string;

  //! address
  city: string;
  country: string;
  line: string;
  postal_code: string;
  state: string;
  state_code: string;
  street_name: string;
  street_number: string;
}

export const AppInfoCard = ({
  list_price,
  schools,
  year_built,
  beds,
  baths,
  sqft,
  text,
  city,
  country,
  line,
  postal_code,
  state,
  state_code,
  street_name,
  street_number,
}: ICardInfoPage) => {
  return (
    <div>
      <AppNavigation />
      <div className="card_info_content">
        <AppCarousel />
        <div className="card_info_details">
          <h5>Details</h5>
          <div>
            Cost:$ {list_price} <br /> 
            Year built: {year_built}
          </div>
          <div className="description">
            <div>
              Beds: {beds} <br />
              Baths: {baths} <br />
              Sqft: {sqft} <br />
              Near schools: {schools} <br />
              Address: 
              {city},
              {country},
              {line},
              {state},
              {postal_code},
              {state_code},
              {street_name},
              {street_number}
            </div>
            <div>
              
              <br /><br /> 
            </div>
          </div>
          <div className="about_house">{text}</div>
        </div>
      </div>
    </div>
  );
};