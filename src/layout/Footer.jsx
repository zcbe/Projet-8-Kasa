import React from "react";

import "../scss/Footer.scss";
import logo_footer from "../assets/logo-black.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={logo_footer} alt="logo" width="130" />
      </div>
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
