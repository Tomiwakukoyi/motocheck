// Navbar.js
import React, { useContext } from "react";
import { AppContext } from "@/src/app/AppContext";
import CommuteIcon from "@mui/icons-material/Commute";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  return (
    <nav
      className={`w-screen bgbl ${
        isDarkMode ? "dark-theme" : ""
      } flex flex-row items-center justify-center`}
    >
      <CommuteIcon fontSize="large" />
      <span>Moto Check</span>

      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <LightModeIcon /> : <ModeNightIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
