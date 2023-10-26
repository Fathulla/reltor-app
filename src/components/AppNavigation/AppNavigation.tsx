import React from "react";
import "./AppNavigation.css";
import { Link } from "react-router-dom";

export const AppNavigation = () => {
  return (
    <header>
      <Link className="navItem" to={'/main'}><div className="headerLogo">REALTOR APP</div></Link>
      <nav>
        <Link to={'/favorites'} className="navItem">
          Favorites
        </Link>
        <Link to={'/account'} className="navItem">
          Account
        </Link>
      </nav>
    </header>
  );
};
