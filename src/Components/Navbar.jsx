import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { themeState, themeDispatch } = useContextGlobal();

  // Toogle the button to indicate dark or light mode using useReducer
  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: "SWITCH_DARK" });
    } else {
      themeDispatch({ type: "SWITCH_LIGHT" });
    }
  };

  return (
    <div className={themeState.theme ? "navbar" : "navbar-dark"}>
      <h3>DH Odonto</h3>
      <div className="navbar-right">
        <Link to={routes.home}>
          <p className={themeState.theme ? "navbar" : "navbar-dark"}>Home</p>
        </Link>
        <Link to={routes.contact}>
          <p className={themeState.theme ? "navbar" : "navbar-dark"}>Contact</p>
        </Link>
        <Link to={routes.favs}>
          <p className={themeState.theme ? "navbar" : "navbar-dark"}>Favs</p>
        </Link>
        <button
          className={themeState.theme ? "themeButton" : "themeButton-dark"}
          onClick={switchTheme}
        >
          {themeState.theme ? "🌙" : "🌞"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
