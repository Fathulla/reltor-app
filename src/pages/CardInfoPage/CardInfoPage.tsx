import React from "react";
import { AppCarousel } from "../../components/AppCarousel/AppCarousel";
import { AppNavigation } from "../../components/AppNavigation/AppNavigation";
import './CardInfoPage.css'

const CardInfoPage = () => {
  return (
    <div>
      <AppNavigation />
      <div className="card_info_content">
        <AppCarousel />
        <div className="card_info_details">
            <h5>Details</h5>
            <div>
                Cost: 
                Date: 
            </div>
            <div>
                <div>
                    Beds:  <br />
                    Baths: <br />
                    Sqft: <br />
                    Text:
                    year built
                </div>
                <div>
                    address: 
                    schools: 
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfoPage;
