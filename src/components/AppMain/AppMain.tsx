import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { Link } from "react-router-dom";
import { SCSubHeader } from "./AppMain.styled";

const searchOptions = [
  { title: "West Palm Beach, FL" },
  { title: "Boca Raton, FL" },
];

export const AppMain = () => {
  return (
    <SCSubHeader>
      <AppHeader headerText="The #1 site real estate professionals trust*" type="h1"/>
      <nav>
        <Link to={'#'} className="navItem">
          Buy
        </Link>
        <Link to={'#'} className="navItem">
          Rent
        </Link>  
      </nav>
      <Autocomplete
        className="autocomplete-item"
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={searchOptions.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Address, School, City, Zip or Neighborhood"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </SCSubHeader>
  );
};
