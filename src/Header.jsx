import React from "react";
import noteIcon from "./assets/sticky-notes.png";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <header>
      <div style={{ display: "flex" }}>
        <img src={noteIcon} alt="" />
        <h1>NotZ</h1>
        <Typography
          variant="body1"
          color="white"
          sx={{ ml: "auto", alignSelf: "center" }}
        >
          Just add whatever you want...anyone can see it :)
        </Typography>
      </div>
    </header>
  );
}

export default Header;
