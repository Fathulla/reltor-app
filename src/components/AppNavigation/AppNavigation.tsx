import React from "react";
import "./AppNavigation.css";

export const AppNavigation = () => {
  return (
    <header>
      <div className="headerLogo">REALTOR APP</div>
      <nav>
        <a className="navItem" href="">
          Buy
        </a>
        <a className="navItem" href="">
          Sell
        </a>
        <a className="navItem" href="">
          Rent
        </a>
        <a className="navItem" href="">
          Mortgage
        </a>
        <a className="navItem" href="">
          Find Realtors
        </a>
        <a className="navItem" href="">
          My Home
        </a>
        <a className="navItem" href="">
          News & Insights
        </a>
      </nav>
    </header>
  );
};
