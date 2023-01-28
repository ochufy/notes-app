import React from "react";
import reactLogo from "./assets/react-logo.png";
import pbLogo from "./assets/pb-logo.png";
import Tooltip from "@mui/material/Tooltip";

function Footer() {
  return (
    <footer style={{ position: "fixed" }}>
      <p>
        Made by{" "}
        <a
          href="http://github.com/ochufy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#83f15b" }}
        >
          Roshan{" "}
        </a>
        with{" "}
        <Tooltip title="ReactJS">
          <img src={reactLogo} style={{ width: "15px", marginRight: "5px" }} />
        </Tooltip>
        and
        <Tooltip title="Pocketbase">
          <img src={pbLogo} style={{ width: "15px", marginLeft: "5px" }} />
        </Tooltip>
      </p>
    </footer>
  );
}

export default Footer;
