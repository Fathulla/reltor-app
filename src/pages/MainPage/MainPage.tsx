import React from "react";
import "./MainPage.css";
import { AppCard } from "../../components/AppCard/AppCard";
import { AppNavigation } from "../../components/AppNavigation/AppNavigation";
import { AppSubheader } from "../../components/AppSubheader/AppSubheader";



export const MainPage = () => {
  return (
    <>
      <AppNavigation/>
      <AppSubheader/>
      <section className="homesList">
        <h2>Browse homes in West Palm Beach, FL</h2>
        <div className="cardsContainer">
          <AppCard />
          <AppCard />
          <AppCard />
        </div>
      </section>
    </>
  );
};
