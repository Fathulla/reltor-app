import React from "react";
import "./MainPage.css";
import { AppCard } from "../../components/AppCard/AppCard";
import { AppNavigation } from "../../components/AppNavigation/AppNavigation";
import { AppMain } from "../../components/AppMain/AppMain";
import { AppHeader } from "../../components/AppHeader/AppHeader";

export const MainPage = () => {
  return (
    <>
      <AppNavigation />
      <AppMain />
      <section className="homesList">
        <AppHeader type="h2" headerText="Browse homes in West Palm Beach, FL" />
        <div className="cardsContainer">
          <AppCard />
          <AppCard />
          <AppCard />
        </div>
      </section>
    </>
  );
};
