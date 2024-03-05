import React from "react";

import "../scss/banner.scss";
import image from "../assets/background-banner.png";

function Banner() {
  return (
    <div className="banner">
      <img src={image} alt=""></img>

      <h2>Chez vous, partout et ailleurs </h2>
    </div>
  );
}

export default Banner;
