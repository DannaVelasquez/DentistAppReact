import React from "react";
import { useContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { themeState } = useContextGlobal();

  return (
    <footer>
      <p>Powered by</p>
      <img src={window.location.origin + "/images/DH.png"} alt="DH-logo" />
      <img
        src={window.location.origin + "/images/ico-facebook.png"}
        alt=""
        className={themeState.theme ? "footer-icon" : "footer-icon-dark"}
      />
      <img
        src={window.location.origin + "/images/ico-instagram.png"}
        alt=""
        className={themeState.theme ? "footer-icon" : "footer-icon-dark"}
      />
      <img
        src={window.location.origin + "/images/ico-whatsapp.png"}
        alt=""
        className={themeState.theme ? "footer-icon" : "footer-icon-dark"}
      />
    </footer>
  );
};

export default Footer;
