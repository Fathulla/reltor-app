import React from "react";
import "./AppHeader.css";

type AppHeaderProps = {
  headerText: string;
  headerColor?: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const AppHeader = ({ headerText, headerColor, type }: AppHeaderProps) => {
  const renderHeader = () => {
    switch (type) {
      case "h1":
        return <h1 style={{color: `${headerColor}`}} className="AppHeader">{headerText}</h1>;
      case "h2":
        return <h2 style={{color: `${headerColor}`}} className="AppHeader">{headerText}</h2>;
      case "h3":
        return <h3 style={{color: `${headerColor}`}} className="AppHeader">{headerText}</h3>;
      case "h4":
        return <h4 style={{color: `${headerColor}`}} className="AppHeader">{headerText}</h4>;
      case "h5":
        return <h5 style={{color: `${headerColor}`}} className="AppHeader">{headerText}</h5>;
      case "h6":
        return <h6 style={{color: `${headerColor}`}} className="AppHeader">{headerText}</h6>;
      default:
        return <h1 style={{color: `${headerColor}`}} className="AppHeader">{headerText}</h1>;
    }
  };

  return renderHeader();
};
