import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import './AppSubheader.css'

const searchOptions = [
  { title: "West Palm Beach, FL" },
  { title: "Boca Raton, FL" },
];

export const AppSubheader = () => {
  return (
    <div className="subHeader">
      <h1>
        The #1 site real estate <br /> professionals trust*
      </h1>
      <nav>
        <a className="navItem" href="">
          Buy
        </a>
        <a className="navItem" href="">
          Rent
        </a>
        <a className="navItem" href="">
          Sell
        </a>
        <a className="navItem" href="">
          Pre-approval
        </a>
        <a className="navItem" href="">
          Just sold
        </a>
        <a className="navItem" href="">
          Home value
        </a>
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
    </div>
  );
};
