import React from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { SCSubHeader } from "./AppMain.styled";

export const AppMain = () => {
  return (
    <SCSubHeader>
      <AppHeader
        headerColor="white"
        headerText="The #1 site real estate professionals trust*"
        type="h1"
      />
    </SCSubHeader>
  );
};
